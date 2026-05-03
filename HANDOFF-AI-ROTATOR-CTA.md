# Handoff — Seção CTA "Sua marca citada pelo [AI]"

**Origem:** `blog/como-aparecer-no-chatgpt/index.html`
**Inspiração:** Profound.com footer CTA
**Status:** Produção (R2 live)

---

## O que é

Seção de fundo escuro (#0a0a09) com headline em duas linhas:

```
Sua marca citada pelo
[ícone] ChatGPT   ← rotaciona a cada 2.4s com blur-in/blur-out
```

Seguida de descrição curta e dois botões (primário + ghost).

---

## Dependências CSS

As variáveis abaixo precisam existir no `:root` da página de destino. Se não existirem, substitua pelos valores fixos ao lado.

```css
--serif: 'Playfair Display', Georgia, serif   /* ou qualquer serif */
--paper: #f5f4f0                              /* texto claro */
--ink:   #0a0a09                              /* fundo escuro */
--t-fast:   .15s
--t-normal: .3s
--spring: cubic-bezier(.34,1.56,.64,1)
```

---

## Bloco CSS — copiar inteiro

```css
/* === AI ROTATOR CTA === */
.art-footer-cta {
  background: #0a0a09;
  padding: clamp(72px, 10vw, 112px) clamp(20px, 4vw, 64px);
  text-align: center;
  border-top: 1px solid rgba(255,255,255,.07);
  border-bottom: 1px solid rgba(255,255,255,.07);
}
.art-footer-cta-inner { max-width: 700px; margin: 0 auto; }
.art-footer-cta-line1 {
  font-family: var(--serif);
  font-size: clamp(36px, 5.5vw, 64px);
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -.035em;
  color: var(--paper);
  margin-bottom: 0;
}
.ai-rotator-wrap {
  position: relative;
  height: clamp(52px, 8vw, 84px);
  margin: 2px 0 32px;
  overflow: hidden;
}
.ai-rotator-item {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: var(--serif);
  font-size: clamp(36px, 5.5vw, 64px);
  font-weight: 400;
  letter-spacing: -.035em;
  color: var(--paper);
  opacity: 0;
  visibility: hidden;
  filter: blur(20px);
  transition: opacity .45s ease, filter .45s ease, visibility 0s .45s;
  white-space: nowrap;
}
.ai-rotator-item.active {
  opacity: 1;
  visibility: visible;
  filter: blur(0px);
  transition: opacity .45s ease, filter .45s ease, visibility 0s 0s;
}
.ai-rotator-item .ai-logo {
  width: clamp(40px, 5.5vw, 64px);
  height: clamp(40px, 5.5vw, 64px);
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.08);
}
.ai-rotator-item .ai-logo svg { width: 60%; height: 60%; }
.art-footer-cta-desc {
  font-size: 15px;
  color: rgba(245,244,240,.38);
  line-height: 1.7;
  margin: 0 auto 36px;
  max-width: 500px;
}
.art-footer-cta-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-primary {
  background: var(--paper);
  color: var(--ink);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .04em;
  padding: 12px 28px;
  border-radius: 8px;
  transition: opacity .15s, transform .3s cubic-bezier(.34,1.56,.64,1);
}
.cta-primary:hover { opacity: .88; transform: translateY(-1px); }
.cta-ghost {
  background: rgba(255,255,255,.06);
  color: rgba(245,244,240,.6);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .04em;
  padding: 12px 24px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 8px;
  transition: border-color .15s, color .15s;
}
.cta-ghost:hover { border-color: rgba(255,255,255,.25); color: var(--paper); }
```

---

## Bloco HTML — copiar inteiro

Inserir imediatamente **antes do `<footer>`** (ou antes do rodapé da página).

Ajustar os `href` dos botões conforme o site de destino.

```html
<section class="art-footer-cta">
  <div class="art-footer-cta-inner">
    <p class="art-footer-cta-line1">Sua marca citada pelo</p>

    <div class="ai-rotator-wrap" aria-live="polite" aria-atomic="true">

      <div class="ai-rotator-item active">
        <span class="ai-logo">
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,.9)" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
        </span>
        <span>ChatGPT</span>
      </div>

      <div class="ai-rotator-item">
        <span class="ai-logo">
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,.9)" xmlns="http://www.w3.org/2000/svg"><path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/></svg>
        </span>
        <span>Perplexity</span>
      </div>

      <div class="ai-rotator-item">
        <span class="ai-logo">
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,.9)" xmlns="http://www.w3.org/2000/svg"><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>
        </span>
        <span>Claude</span>
      </div>

      <div class="ai-rotator-item">
        <span class="ai-logo">
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,.9)" xmlns="http://www.w3.org/2000/svg"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
        </span>
        <span>Gemini</span>
      </div>

      <div class="ai-rotator-item">
        <span class="ai-logo">
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,.9)" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.849L1.999 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
        </span>
        <span>Grok</span>
      </div>

    </div>

    <p class="art-footer-cta-desc">Analisamos onde sua empresa está sendo citada, ou ignorada, pelas principais IAs e montamos um plano de ação. Sem custo, sem compromisso.</p>

    <div class="art-footer-cta-buttons">
      <a href="/analise-gratuita/" class="cta-primary">Análise Gratuita</a>
      <a href="/metodologia/" class="cta-ghost">Ver Metodologia</a>
    </div>
  </div>
</section>
```

---

## Bloco JS — copiar inteiro

Inserir antes do `</body>` (ou após o HTML da seção, dentro de um `<script>`).

```html
<script>
(function(){
  var items = document.querySelectorAll('.ai-rotator-item');
  if (!items.length) return;
  var cur = 0;
  setInterval(function(){
    items[cur].classList.remove('active');
    cur = (cur + 1) % items.length;
    items[cur].classList.add('active');
  }, 2400);
})();
</script>
```

**Atenção:** se a página já usa `.ai-rotator-item` em outro contexto, trocar o seletor por `.art-footer-cta .ai-rotator-item` no querySelector e no CSS.

---

## Regras de inserção

| Contexto | Onde inserir |
|---|---|
| Página de blog (artigo) | Imediatamente antes do `<footer>` |
| Home / Landing page | Após a seção de serviços ou antes da seção de depoimentos |
| Página institucional | Após a seção "Como funciona" |

**Nunca** inserir dentro de um container com `overflow: hidden` — o `position: absolute` dos `.ai-rotator-item` sai do fluxo mas precisa do wrapper `.ai-rotator-wrap` como contexto de altura.

---

## Customização rápida

- **Texto da headline:** alterar o conteúdo de `.art-footer-cta-line1`
- **Descrição:** alterar `.art-footer-cta-desc`
- **Botões:** alterar `href` e texto dos `.cta-primary` / `.cta-ghost`
- **Cadência do rotador:** alterar `2400` (ms) no `setInterval`
- **Adicionar/remover uma IA:** copiar/remover um bloco `.ai-rotator-item`. O primeiro deve ter `class="ai-rotator-item active"`.
- **SVGs oficiais:** todos extraídos de `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/[nome].svg`
  - openai.svg → ChatGPT
  - perplexity.svg → Perplexity
  - anthropic.svg → Claude
  - googlegemini.svg → Gemini
  - x.svg → Grok
