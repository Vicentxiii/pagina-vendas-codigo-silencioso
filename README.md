# O Código Silencioso: página de vendas

HTML, CSS e JavaScript puros. Sem build e sem dependências (só as fontes do Google).

## Arquivos
- `index.html`: estrutura e textos da página.
- `css/style.css`: todo o visual. As cores ficam nas variáveis do `:root` no topo.
- `js/main.js`: link de compra (`LINK_HOTMART`).
- `images/capa.jpg`: capa do livro.
- `images/depoimento-ozeias.png` e `images/depoimento-leiko.jpeg`: prints usados na seção sobre o Guia.
- `favicon.svg`: ícone da aba.

## Como editar
- **Link de compra:** está em `js/main.js` (`LINK_HOTMART`) e também no `href` dos botões no `index.html`, para funcionar mesmo com JavaScript desativado.
- **Textos, preço, capítulos, FAQ:** `index.html`.
- **Cores:** `css/style.css`, bloco `:root`.
- **Depoimentos:** `index.html`, seção "O que disseram sobre o Guia".

## Antes de divulgar — pendências
- [x] Autorização de Ozeias e Leiko confirmada pelo contratante. Os prints mostram nome e foto de perfil; não mostram telefone.
- [ ] Remover o order bump da Hotmart ou trocá-lo por outro item (Workbook com desconto). O checklist já está dentro do PDF.
- [x] Títulos dos capítulos na página alinhados aos do livro (seção "O que tem dentro").
- [ ] Regenerar a capa do livro e a do checklist sem as frases "99% das pessoas ignoram" e "um mar de pessoas emocionalmente limitadas".
- [ ] Cronometrar uma leitura calma e informar o tempo real para substituir "de leitura rápida" no hero.
- [ ] Confirmar no Insights o número de "15 milhões de visualizações" ou remover a afirmação.
- [x] Identificação no rodapé: Transcent Academy, CNPJ 66.287.542/0001-03, e-mail e link para `privacidade.html` (modelo, revisar com jurídico).
- [ ] Instalar os pixels da Meta e do TikTok na página (IDs não enviados) e conferir a configuração no checkout da Hotmart.
- [ ] Substituir `og:url`, `canonical` e `og:image` no `index.html` pelo endereço real da página (domínio próprio informado, URL exata ainda não enviada).
