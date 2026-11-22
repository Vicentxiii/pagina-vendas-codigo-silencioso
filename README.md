# O Código Silencioso: página de vendas

HTML, CSS e JavaScript puros. Sem build e sem dependências (só as fontes do Google).

## Arquivos
- `index.html`: estrutura e textos da página.
- `css/style.css`: todo o visual. As cores ficam nas variáveis do `:root` no topo.
- `js/main.js`: comportamento. No topo está o link de compra (`LINK_HOTMART`).
- `images/capa.jpg`: capa do livro. Para trocar, substitua o arquivo mantendo o nome.
- `images/depoimento-ozeias.png` e `images/depoimento-leiko.jpeg`: prints autorizados dos depoimentos.
- `favicon.svg`: ícone da aba.

## Como editar
- **Link de compra:** `js/main.js`, constante `LINK_HOTMART`. Vale para todos os botões.
- **Textos, preço, capítulos, FAQ:** `index.html`.
- **Cores:** `css/style.css`, bloco `:root` (`--gold`, `--black`, `--ivory`...).
- **Depoimentos:** `index.html`, seção "O que leitores já disseram".

## Como ver no VS Code
1. Abra a pasta no VS Code (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

## Confirmado
- Checklist bônus está incluído no e-book entregue.
- Prints dos depoimentos (Ozeias e Leiko) autorizados para uso na página.

## Pendências [CONFIRMAR]
- Número de "15 milhões de visualizações" (conferir no Insights).
- Link `tinyurl.com/codigo-silecioso` (confirmar a grafia).
- Pixels da Meta e do TikTok (ainda não instalados).
- Ao publicar em domínio próprio: atualizar `og:url`, `canonical` e `og:image` no `index.html`.
