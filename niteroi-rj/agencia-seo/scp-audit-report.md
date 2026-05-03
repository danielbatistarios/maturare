# SCP Audit Report — Maturare Niterói
**Arquivo:** `index-v2.html` | **Data:** 2026-05-01 | **Score:** 7.73/10 | **Status:** CONDICIONAL

---

## SCP Score Final

| Dimensão | Score | Peso | Contribuição |
|---|---|---|---|
| SEO / Semântica | 8.08 | 25% | 2.020 |
| Semantic Conversion | 7.08 | 20% | 1.416 |
| CRO | 7.89 | 25% | 1.972 |
| Copy / Persuasão | 7.60 | 20% | 1.520 |
| Mobile | 8.00 | 10% | 0.800 |
| **TOTAL** | **7.73** | 100% | — |

**STATUS: CONDICIONAL** (7.5-8.4). Publicável agora. Certificado SCP requer ≥8.5 — aplicar P1s abaixo.

**P0 blockers: 0** — Nenhum bloqueador de publicação.

---

## Matriz Seção × Sistema

| Seção | SEO | SemConv | CRO | Copy | Mobile |
|---|---|---|---|---|---|
| Hero | 9.0 | 7.5 | 8.5 | 8.5 | 8.0 |
| Client Strip | 7.5 | 7.0 | 7.0 | 7.0 | 8.0 |
| svc-ctx-sec | 8.5 | 6.5 | 7.5 | 8.0 | 7.5 |
| si-sec | 7.0 | 6.0 | 7.0 | 7.0 | 7.0 |
| qdx-sec | 8.0 | 7.0 | 8.0 | 7.5 | 7.5 |
| vrc-sec | 7.5 | 6.5 | 7.5 | 7.0 | 7.5 |
| daniel-sec | 8.0 | 7.5 | 8.0 | 7.5 | 8.0 |
| cmp2-timeline | 8.5 | 8.0 | 7.5 | 8.0 | 8.0 |
| cmp2-comparison | 8.5 | 7.5 | 8.5 | 8.0 | 8.0 |
| form-sec | 7.5 | 6.5 | 8.0 | 7.0 | 7.5 |
| location-sec | 6.5 | 5.5 | 7.0 | 6.5 | 7.5 |
| bairros-sec | 9.0 | 8.5 | 7.0 | 7.5 | 7.5 |
| svc4-sec | 8.5 | 7.0 | 6.5 | 7.0 | 7.5 |
| seo-ctx-sec | 8.5 | 7.0 | 6.0 | 7.0 | 7.5 |
| faq-sec | 8.5 | 7.5 | 8.5 | 8.5 | 8.0 |
| art-cta-sec | 7.5 | 7.0 | 7.5 | 7.5 | 7.5 |

---

## P0 — Bloqueadores de Publicação

Nenhum. A página pode ser publicada na versão atual.

---

## P1 — Melhorias Obrigatórias para Certificação SCP

| ID | Dimensão | Seção | Impacto estimado |
|---|---|---|---|
| P1-1 | SEO | vrc-sec + svc4-sec | +0.3 SEO |
| P1-2 | SEO + SemConv | location-sec | +0.4 SEO, +0.2 SemConv |
| P1-3 | SemConv | seo-ctx-sec + bairros-sec | +0.6 SemConv |
| P1-4 | SemConv + Copy | faq-sec | +0.4 SemConv, +0.2 Copy |
| P1-5 | CRO | client-strip | +0.2 CRO |
| P1-6 | CRO | art-cta-sec | +0.1 CRO |
| P1-7 | Copy | svc-ctx-sec + qdx-sec | +0.3 Copy |
| P1-8 | SEO | form-sec | +0.1 SEO |

### P1-1: Headings com display:none (linha 8040, 8614)
Dois H2 ocultos por CSS criam flag de cloaking.
- Linha 8040: remover `style="display:none;"` ou deletar o elemento
- Linha 8614: idem

### P1-2: H2 "Onde estamos" → geo-semântico (linha 8426)
```
ANTES: <h2 class="sec-h dk">Onde <em>estamos</em></h2>
DEPOIS: <h2 class="sec-h dk">Agência de SEO em Niterói, RJ</h2>
```

### P1-3: data-chunk em blocos citáveis (seo-ctx-sec)
Adicionar em cada bloco temático da seo-ctx-sec:
```html
<div data-chunk="seo-local-niteroi" data-topic="agencia-seo-niteroi">
  <!-- parágrafo -->
</div>
```

### P1-4: Respostas FAQ expandidas (faq-sec, linhas 8820-8847)
Respostas atuais: 30-60 palavras. Meta: 80-120 palavras com estrutura fato+contexto+implicação.
Ver scp-patch-copy.md para versões reescritas.

### P1-5: Cargos nos depoimentos (client-strip, linhas ~7550-7620)
```
Felipe → "Sócio-fundador, PHD Playground"
Matheus → "Diretor Comercial, Keysfan"
Bruno → "Proprietário, Ambiental Wash"
```

### P1-6: Link #metodologia morto (art-cta-sec, linha 8904)
```
ANTES: href="#metodologia"
DEPOIS: href="#metodologia" → criar <section id="metodologia"> ou redirecionar para cmp2 timeline
```
Solução mais simples: adicionar `id="metodologia"` na cmp2-sec timeline (linha 8225).

### P1-7: Quebrar sequência FEAR (svc-ctx-sec ou qdx-sec)
No qdx-sec, após o H2, adicionar lead de CARE antes do CTA:
```
ATUAL: H2 + inputs diagnóstico
PROPOSTA: H2 + "Sem compromisso. Sem formulário de vendas. Só um olhar honesto sobre onde você está." + inputs
```

### P1-8: H2 form-sec com geo-entity (linha 8351)
```
ANTES: <h2>Seu mercado está crescendo. Você está capturando essa demanda de buscas?</h2>
DEPOIS: <h2>Agende um diagnóstico de SEO para sua empresa em Niterói</h2>
```

---

## P2 — Otimizações Incrementais (post-publish)

- P2-1: CNPJ na location-sec
- P2-2: Escassez de capacidade no form-sec ("até 3 novas empresas por mês")
- P2-3: FAQ — adicionar resposta de "quando SEO não funciona" (Radical Transparency ponto 4)
- P2-4: Reordenar seo-ctx-sec para antes da cmp2-comparison (leads frios precisam de educação antes de comparação)
- P2-5: Variação de ritmo nos parágrafos longos de seo-ctx-sec (Roy Peter Clark)

---

## Score Projetado Pós-P1

```
SEO:       8.08 → 8.50 (+0.42)
SemConv:   7.08 → 7.90 (+0.82)
CRO:       7.89 → 8.10 (+0.21)
Copy:      7.60 → 8.00 (+0.40)
Mobile:    8.00 → 8.00 (sem mudança)

SCP pós-P1 = (8.50×0.25) + (7.90×0.20) + (8.10×0.25) + (8.00×0.20) + (8.00×0.10)
           = 2.125 + 1.580 + 2.025 + 1.600 + 0.800
           = 8.13 / 10  → ainda CONDICIONAL, mas perto do limiar
```

Para CERTIFICADO SCP (≥8.5), aplicar também P2-1, P2-3 e P2-5.
