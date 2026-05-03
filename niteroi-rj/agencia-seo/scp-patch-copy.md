# SCP Patch — Copy Rewrites
**Arquivo:** `index-v2.html` | **Data:** 2026-05-01

---

## P1-4: FAQ — Respostas Expandidas

### FAQ 1: "A Maturare atende empresas em Niterói?"
**Atual (35 palavras):**
"Sim. A Maturare atende Niterói e toda a Região Metropolitana do Rio de Janeiro de forma remota. O diagnóstico inicial é gratuito e pode ser feito por videochamada."

**Proposta (85 palavras):**
"Sim. A Maturare é especializada no mercado fluminense, com foco em Niterói, São Gonçalo, Maricá e toda a Região Metropolitana. Diferente de agências de São Paulo que aplicam templates genéricos, entendemos as nuances locais: o perfil premium de Icaraí, o volume do Fonseca, a expansão da Região Oceânica. O diagnóstico inicial é gratuito, feito por videochamada, e já inclui uma análise de como sua empresa aparece no Google e nas principais IAs hoje."

---

### FAQ 2: "O que vocês fazem de diferente?"
**Atual (40 palavras):**
"Agências fazem posts e ads. A Maturare cria páginas que fazem sua empresa aparecer no Google e ser recomendada pelas IAs. São dois trabalhos diferentes que ninguém mais faz juntos para negócios locais."

**Proposta (100 palavras):**
"A maioria das agências faz tráfego pago e posts para redes sociais. Quando o investimento para, o resultado para. A Maturare trabalha diferente: criamos a presença orgânica da sua empresa, no Google e nas IAs como ChatGPT, Perplexity e Gemini. Cada página que publicamos é um ativo que continua gerando visitas por meses ou anos, sem custo por clique. Para negócios locais em Niterói, isso significa clientes chegando de forma previsível, sem depender de indicação ou de manter um orçamento de anúncios crescente mês a mês."

---

### FAQ 3: "Não é só fazer texto com ChatGPT?"
**Atual (30 palavras):**
"Texto de IA sem estratégia é lixo que o Google ignora. O que fazemos envolve pesquisa de mercado, estrutura técnica, dados estruturados e monitoramento. O texto é a ponta do iceberg."

**Proposta (90 palavras):**
"Não. Texto gerado por IA sem estratégia é justamente o que contamina os resultados de busca. O Google e as IAs reconhecem padrões de conteúdo raso. O que fazemos envolve pesquisa aprofundada do mercado local de Niterói, mapeamento de intenção de busca por bairro e segmento, arquitetura técnica do site, dados estruturados Schema.org, construção de autoridade com co-citações e monitoramento contínuo de posições. O texto em si é a ponta do iceberg. A estratégia por baixo é o que determina se o Google vai te indexar ou ignorar."

---

### FAQ 5: "Quanto tempo para aparecer?"
**Atual (20 palavras):**
"30 a 90 dias no Google. 3 a 7 semanas na IA. Ads é aluguel, para quando para de pagar. SEO é imóvel, o resultado fica."

**Proposta (95 palavras):**
"Para termos locais de menor concorrência em Niterói, como 'contador em Icaraí' ou 'clínica veterinária Fonseca', os primeiros resultados aparecem entre 30 e 90 dias. Para termos mais competitivos como 'advogado trabalhista Niterói', o horizonte realista é de 3 a 6 meses. Para ser citado pelo ChatGPT e Perplexity, geralmente 3 a 7 semanas após as otimizações de GEO. A diferença fundamental: ads é aluguel, para quando o pagamento para. SEO é construção, o ativo permanece e continua gerando resultado sem custo adicional por clique."

---

### FAQ 6: "Já tentei agência e não funcionou."
**Atual (25 palavras):**
"Você contratou social media ou ads, não SEO de verdade. Post bonito não faz ninguém te achar no Google. O que fazemos é completamente diferente."

**Proposta (95 palavras):**
"Na maioria dos casos, o que foi contratado não era SEO. A maior parte das agências de marketing vende tráfego pago e social media chamados de 'presença digital', mas nenhum desses canais faz sua empresa aparecer organicamente no Google ou nas IAs. SEO de verdade envolve auditoria técnica, pesquisa de palavras-chave com intenção de compra, produção de conteúdo semântico e monitoramento de posições. Se quiser entender o que foi feito antes e por que não funcionou, o diagnóstico gratuito pode responder isso antes de qualquer decisão."

---

## P1-7: qdx-sec — Micro-copy de CARE

Adicionar após o H2 "Descubra em 60 segundos se seu negócio está invisível", antes dos inputs:

```html
<p class="qdx-care-note">Sem compromisso. Sem formulário de vendas. Só um olhar honesto sobre onde você está hoje.</p>
```

CSS sugerido:
```css
.qdx-care-note {
  font-size: 14px;
  color: var(--dim);
  margin: -8px 0 24px;
  font-style: italic;
}
```

---

## P2-5: seo-ctx-sec — Inserções de ritmo curto

Após o parágrafo longo sobre prazo de SEO (linha 8759-8760), inserir:

```html
<p class="seo-ctx-p seo-ctx-p--short"><strong>É construção. Não é milagre.</strong></p>
```

Após o parágrafo sobre comportamento de busca local (linha 8775), inserir:

```html
<p class="seo-ctx-p seo-ctx-p--short">Cada busca é uma oportunidade. A maioria das empresas deixa passa.</p>
```

---

## P1-2: location-sec — H2 geo-semântico

Linha 8426, substituir:
```html
<!-- ANTES -->
<h2 class="sec-h dk" style="font-size:clamp(40px,6.5vw,56px);margin:0;">Onde <em>estamos</em></h2>

<!-- DEPOIS -->
<h2 class="sec-h dk" style="font-size:clamp(40px,6.5vw,56px);margin:0;"><em>Agência de SEO</em> em Niterói, RJ</h2>
```

---

## P1-8: form-sec — H2 com geo-entity

Linha 8351, substituir:
```html
<!-- ANTES -->
<h2>Seu mercado está crescendo. Você está capturando essa demanda de buscas?</h2>

<!-- DEPOIS -->
<h2>Agende um diagnóstico de SEO para sua empresa em Niterói</h2>
```
