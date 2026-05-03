/**
 * upload.mjs — Maturare artigos → Cloudflare R2
 *
 * Usage:
 *   node upload.mjs                         → upload de todos artigos/
 *   node upload.mjs --dry-run               → simula sem enviar
 *   node upload.mjs artigos/[slug]/         → upload de um artigo específico
 *   node upload.mjs artigos/[slug]/ --dry-run
 */

import { AwsClient } from 'aws4fetch';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

// ─── CREDENCIAIS ─────────────────────────────────────────────────────────────
const ACCOUNT_ID = '842561b03363b0ab3a35556ff728f9fe';
const ACCESS_KEY = '9b8005782e2f6ebd197768fabe1e07c2';
const SECRET_KEY = '05bafb847199adb9b99d6e3631541995be399d7e621a5132512837ed45832093';
const ENDPOINT   = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`;
const BUCKET     = 'pages';

// ─── PREFIX R2 ───────────────────────────────────────────────────────────────
// Todos os artigos ficam em maturare/blog/[slug]/
const R2_PREFIX  = 'maturare/blog';

// ─── LOCAL BASE ──────────────────────────────────────────────────────────────
const LOCAL_BASE = '/Users/jrios/maturare-seo';

// ─── MIME TYPES ──────────────────────────────────────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.woff2':'font/woff2',
};

function getMime(file) {
  return MIME[extname(file).toLowerCase()] || 'application/octet-stream';
}

// ─── WALK DIRECTORY ──────────────────────────────────────────────────────────
function walkDir(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkDir(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

// ─── UPLOAD ──────────────────────────────────────────────────────────────────
async function uploadFile(client, localPath, r2Key, dryRun) {
  const url = `${ENDPOINT}/${BUCKET}/${r2Key}`;
  if (dryRun) return { r2Key, url, status: 'DRY-RUN' };

  const content = readFileSync(localPath);
  const res = await client.fetch(url, {
    method: 'PUT',
    body: content,
    headers: {
      'Content-Type': getMime(localPath),
      'Content-Length': String(content.length),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body}`);
  }

  return { r2Key, url, status: 'OK' };
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  const args    = process.argv.slice(2);
  const dryRun  = args.includes('--dry-run');
  const target  = args.find(a => !a.startsWith('--'));

  const uploadRoot = target
    ? join(LOCAL_BASE, target)
    : join(LOCAL_BASE, 'artigos');

  if (!existsSync(uploadRoot)) {
    console.error(`Diretório não encontrado: ${uploadRoot}`);
    process.exit(1);
  }

  const client = new AwsClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
    service: 's3',
    region: 'auto',
  });

  if (dryRun) console.log('🔍 DRY-RUN — nenhum arquivo será enviado\n');

  const files = walkDir(uploadRoot);
  const results = [];

  for (const localPath of files) {
    // relative path from LOCAL_BASE/artigos/ → slug/file
    const rel = relative(join(LOCAL_BASE, 'artigos'), localPath);
    const r2Key = `${R2_PREFIX}/${rel}`;

    process.stdout.write(`⬆️  ${rel} → ${r2Key} ... `);

    try {
      const result = await uploadFile(client, localPath, r2Key, dryRun);
      results.push(result);
      console.log(dryRun ? `[${result.url}]` : '✓');
    } catch (err) {
      results.push({ r2Key, url: '-', status: `ERRO: ${err.message}` });
      console.error(`✗ ${err.message}`);
    }
  }

  const ok      = results.filter(r => r.status === 'OK' || r.status === 'DRY-RUN').length;
  const errors  = results.filter(r => r.status.startsWith('ERRO')).length;

  console.log(`\n─────────────────────────────────────────────`);
  console.log(`✅ Enviados: ${ok}   ✗ Erros: ${errors}`);
  console.log('\n📋 URLs R2:');
  results
    .filter(r => r.status === 'OK' || r.status === 'DRY-RUN')
    .forEach(r => {
      const pub = `https://pub-bd2efcc812524f54a8c492f90052f3bd.r2.dev/${r.r2Key}`;
      console.log(`  ✓ ${pub}`);
    });
}

main().catch(err => {
  console.error('\nErro fatal:', err);
  process.exit(1);
});
