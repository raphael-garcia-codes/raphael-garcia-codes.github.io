# raphael-garcia-codes.github.io

Site pessoal estático de Raphael Garcia, publicado via GitHub Pages. Contém currículo/portfólio e algumas ferramentas e páginas de referência auxiliares.

## Rodando localmente

Não há build nem dependências — é HTML/CSS/JS estático. Basta servir a pasta com qualquer servidor HTTP simples, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/index.html`.

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Currículo / portfólio principal (Raphael Garcia) |
| `dev-tool-kit.html` | Ferramentas para desenvolvedores |
| `git-learning.html` | Página interativa para aprender Git na prática |
| `helper-commands.html` | Revista de referência rápida de comandos |
| `kit-ia-dev.html` | Dashboard "Kit IA Dev" com prompts de IA para desenvolvimento |
| `sfera.html` | Página institucional da Sfera Interiores |

## Estrutura

- `css/` — folhas de estilo (w3.css, fontes, Font Awesome)
- `js/` — scripts (analytics, dados de prompts, libs como marked.js, tailwind.js, js-yaml.js, lucide.js)
- `image/`, `fonts/`, `webfonts/` — assets estáticos

## Deploy

Publicado automaticamente pelo GitHub Pages a partir da branch `main`.
