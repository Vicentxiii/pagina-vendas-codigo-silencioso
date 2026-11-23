# O Código Silencioso: página de vendas

HTML, CSS e JavaScript puros. Sem build e sem dependências (só as fontes do Google). A Vercel Web Analytics é ativada por um `<script>` no `<head>` das páginas — não requer `npm i @vercel/analytics` nem `package.json`.

## Arquivos
- `index.html`: estrutura e textos da página, com seções editoriais numeradas.
- `css/style.css`: sistema visual completo — paleta, tipografia, atmosfera cinematográfica, layout responsivo e estados de animação.
- `js/main.js`: motor de interações (reveals, sequência de reconhecimento, parallax, cursor, acordeões, progresso de leitura, menu e CTA fixo) e link de compra.
- `images/capa.jpg`: capa do livro (hero e vitrine).
- `images/Livro na mao.png`: foto do livro na mão usada na seção "10 — A oferta".
- `images/Para of undo da sessão 01 - reconhecimento .webp`: colagem dourada usada como fundo (10% de opacidade, canto inferior direito) da seção "01 — O reconhecimento".
- `images/Foto da sessao sobre os autores.png`: retratos usados como fundo (10% de opacidade) da seção "09 — Os autores".
- `images/depoimento-ozeias.png` e `images/depoimento-leiko.jpeg`: prints usados na seção sobre o Guia.
- `favicon.svg`: ícone da aba.
- `privacidade.html`: política de privacidade no mesmo sistema visual.

## Visual / direção de arte
- Preto profundo (`#080808`), grafite, ouro antigo (`#c9a24d`), champagne (`#e6cb8a`) e marfim.
- Tipografia editorial: Cormorant Garamond para títulos e Montserrat para textos de interface.
- Grão de filme e vinheta gerados por CSS/SVG, sem imagens extras.
- Hero cinematográfico com a máscara dourada da capa original, parallax de mouse e entrada animada.
- Sequência de reconhecimento com rolagem fixa no desktop; versão editorial contínua no mobile.
- Vitrine do livro com leve inclinação 3D e iluminação lateral.
- Todas as animações respeitam `prefers-reduced-motion`.

## Como editar
- **Link de compra:** está em `js/main.js` (`LINK_HOTMART`) e também no `href` dos botões no `index.html`, para funcionar mesmo com JavaScript desativado.
- **Textos, preço, capítulos, FAQ:** `index.html`.
- **Cores e espaçamentos:** `css/style.css`, bloco `:root`.
- **Depoimentos:** `index.html`, seção "O que disseram sobre o Guia". Os prints são sobre o Guia gratuito, não avaliações do livro.

## Visualizar localmente
Na pasta do projeto:

```
python -m http.server 8765
```

Depois acesse `http://127.0.0.1:8765`.

## Antes de divulgar — pendências
- [x] Autorização de Ozeias e Leiko confirmada pelo contratante. Os prints mostram nome e foto de perfil; não mostram telefone.
- [ ] Remover o order bump da Hotmart ou trocá-lo por outro item (Workbook com desconto). O checklist já está dentro do PDF.
- [x] Títulos dos capítulos na página alinhados aos do livro (seção "O que tem dentro").
- [ ] Regenerar a capa do livro e a do checklist sem as frases "99% das pessoas ignoram" e "um mar de pessoas emocionalmente limitadas".
- [ ] Cronometrar uma leitura calma e informar o tempo real para substituir "de leitura rápida" no texto narrativo.
- [ ] Confirmar no Insights o número de "15 milhões de visualizações" ou remover a afirmação.
- [x] Identificação no rodapé: Transcent Academy, CNPJ 66.287.542/0001-03, e-mail e link para `privacidade.html` (modelo, revisar com jurídico).
- [ ] Instalar os pixels da Meta e do TikTok na página (IDs não enviados) e conferir a configuração no checkout da Hotmart.
- [ ] Substituir `og:url`, `canonical` e `og:image` no `index.html` pelo endereço real da página (domínio próprio informado, URL exata ainda não enviada).
