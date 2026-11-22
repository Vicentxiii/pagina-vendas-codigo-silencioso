# O Código Silencioso: página de vendas

HTML, CSS e JavaScript puros. Sem build e sem dependências (só as fontes do Google).

## Arquivos
- `index.html`: estrutura e textos da página.
- `css/style.css`: todo o visual. As cores ficam nas variáveis do `:root` no topo.
- `js/main.js`: comportamento. No topo está o link de compra (`LINK_HOTMART`).
- `images/capa.jpg`: capa do livro. Para trocar, substitua o arquivo mantendo o nome.

## Como editar
- **Link de compra:** `js/main.js`, constante `LINK_HOTMART`. Vale para todos os botões.
- **Textos, preço, capítulos, FAQ:** `index.html`.
- **Cores:** `css/style.css`, bloco `:root` (`--gold`, `--black`, `--ivory`...).
- **Depoimentos:** `index.html`, seção "O que leitores já disseram".

## Como ver no VS Code
1. Abra a pasta no VS Code (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

## Pendências [CONFIRMAR]
- Número de "15 milhões de visualizações" (conferir no Insights).
- Permissão dos dois depoimentos (Ozeias e Leiko).
- Link `tinyurl.com/codigo-silecioso` (confirmar a grafia).
- Checklist bônus: confirmar que está no e-book entregue.
- Pixels da Meta e do TikTok (ainda não instalados).
- Ao publicar, se quiser pré-visualização em redes sociais, adicionar `og:image` com URL absoluta (https://...).
