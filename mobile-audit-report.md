# Mobile Audit — index.html (Maturare)
**Data:** 2026-04-30 | **Score:** 58/100 — Crítico

---

## Score por Área

| Área | Score | Status |
|------|-------|--------|
| Viewport | 10/10 | OK |
| Header/Nav | 12/15 | OK (hamburger presente, touch target OK) |
| Layout | 10/20 | Grids sem breakpoint, sec-pad enorme |
| Touch Targets | 9/15 | cs-arr 34px, machine-close pequeno |
| Tipografia | 7/15 | Font-sizes 10-11px fixos em elementos visíveis |
| Efeitos/Touch | 6/10 | :hover sem @media (hover: hover) em svc4/cmp2 |
| Performance | 9/10 | prefers-reduced-motion OK, will-change OK |
| Footer | 3/5 | foot-top não colapsa para 1fr em 480px |
| **TOTAL** | **58/100** | |

---

## P0 — Críticos (4 problemas)

- **[CSS]** Regra incompleta em linha ~2737: `.hero, .why, .sim, .client-strip, .results, .svc-list,` termina com vírgula sem bloco de propriedades — CSS inválido que pode quebrar parsagem das regras seguintes no @media 960px.
  - Solução: Remover essa linha do bloco `@media (max-width: 960px)`.

- **[Layout]** `--sec-pad: clamp(100px, 12vw, 160px)` — mínimo de 100px é excessivo em 375px, resulta em padding de seção de 100px top+bottom = 200px "desperdiçados" por seção. Em 480px reduz para `clamp(64px, 10vw, 100px)` (via override em 960px) mas ainda 64px+64px=128px por seção.
  - Solução: Adicionar override mais agressivo em 480px: `--sec-pad: clamp(48px, 10vw, 64px)`.

- **[Layout]** `.clients-grid` usa `repeat(5, 1fr)` (5 colunas) e só colapsa para `repeat(2, 1fr)` em 768px, sem reduzir para 1fr em 480px — logos ficam minúsculas em telas pequenas.
  - Solução: `@media (max-width: 480px) { .clients-grid { grid-template-columns: repeat(3, 1fr); } }`

- **[Layout]** `.foot-top` colapsa para `1fr 1fr` em 960px mas não para coluna única em 480px — 4 colunas comprimidas em 2 com textos apertados.
  - Solução: `@media (max-width: 480px) { .foot-top { grid-template-columns: 1fr; gap: 32px; } }`

---

## P1 — Altos (7 problemas)

- **[Touch]** `.cs-arr` (setas do carousel de depoimentos): `width: 34px; height: 34px` — abaixo do mínimo de 44px.
  - Solução: `@media (max-width: 960px) { .cs-arr { width: 44px; height: 44px; } }`

- **[Touch]** `.machine-modal-close` padding `6px 16px` resulta em height ~30px — abaixo de 44px. Modal cobre tela inteira em mobile e o botão de fechar é pequeno.
  - Solução: `@media (max-width: 960px) { .machine-modal-close { padding: 12px 20px; } }`

- **[Tipografia]** `font-size: 10px` em `.svc4-icon`, `.met-vis-title`, labels de nav kicker, `.hero-kicker` em 960px override — ilegível em mobile.
  - Solução: Usar no mínimo 12px para qualquer texto visível. Patch define min `12px` para esses seletores.

- **[Tipografia]** `font-size: 11px` em múltiplos elementos visíveis: `.hm-btn`, `.hero-kicker`, `.met-step-badge`, `.met-step-badge-label`, `.bb-mobile-top`, `.bb-mobile-stars` — abaixo do mínimo recomendado de 12px.
  - Solução: Override `12px` mínimo nos seletores em mobile.

- **[Hover]** `.svc4-grid:hover .svc4-card { opacity: 0.4 }` — em touch, o hover "gruda" e deixa cards opacos permanentemente. Existe `@media (hover: none)` que corrige, mas a abordagem certa é `@media (hover: hover)`.
  - Solução: Mover as regras hover de `.svc4-grid` para dentro de `@media (hover: hover)`.

- **[Hover]** `.cmp2-tl-cols:has(.cmp2-tl-col:hover)` opacity dimming — mesmo problema em touch.
  - Solução: Envolver em `@media (hover: hover)`.

- **[Layout]** Hero padding-top `100px` (após override 960px) sem redução adicional em 480px. Em 375px a nav tem ~56-60px, então o conteúdo começa a 100px — desperdiça ~40px do topo.
  - Solução: `@media (max-width: 480px) { .hero-inner { padding-top: 80px; padding-bottom: 60px; } }`

---

## P2 — Melhorias (5 problemas)

- **[Tipografia]** `.sec-label` e similares com `letter-spacing: .18em` em uppercase em mobile — reduzir para `.1em` melhora legibilidade em telas pequenas.
- **[Layout]** `.machine-modal-inner` padding `48px 32px` em mobile — reduzir horizontal para `24px` em 480px.
- **[Layout]** `.cmp2-card` `min-height: 480px` não tem override mobile — pode forçar cards muito altos em 320px.
- **[Touch]** `.flinks a` (links do footer) — padding implícito de 0, touch target depende só do font-size 14px (~20px height). Adicionar `padding: 6px 0` para ampliar área de toque.
- **[Layout]** `.sim-grid` (seção Perplexity): em 960px colapsa para 1fr mas `.sim-ui` fica com largura 100% sem `max-width`. Em 320px o mock de browser pode causar overflow horizontal se tiver elementos internos com width fixo.

---

## Como aplicar o patch

Adicione antes do `</style>` no HTML (ou como arquivo externo):
```html
<link rel="stylesheet" href="mobile-patch.css">
```
