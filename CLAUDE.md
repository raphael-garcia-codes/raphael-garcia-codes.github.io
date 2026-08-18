# Project Context

Portfólio pessoal estático para apresentar projetos, conteúdo e formas de contato. O foco é uma experiência leve, rápida e simples de manter em HTML, CSS e JavaScript puro.
Não há backend, banco de dados ou fluxo de negócio complexo neste repositório.

# Stack

HTML, CSS e JavaScript puro. Sem framework, sem `package.json` e sem banco de dados.
Deploy alvo: site estático.

# Commands

Não há pipeline de build neste repositório. Use comandos de inspeção e validação manual do site estático.

```text
# Inspect
python -m http.server 8000

# Run dev
python -m http.server 8000

# Test
Abrir o site no navegador e validar navegação, responsividade e links principais.

# Lint + typecheck
N/A para o estado atual do projeto.

# Build
N/A para o estado atual do projeto.
```

# File Structure

```text
index.html
README.md
dev-tool-kit.html
git-learning.html
helper-commands.html
sfera.html
css/
js/
image/
fonts/
webfonts/
.claude/
agent_docs/
```

# Workflow Rules

- Antes de considerar uma mudança pronta, validar no navegador que a página abre e que os links e âncoras principais funcionam.
- Como não existe suíte automatizada neste projeto, registrar qualquer comportamento relevante novo nos arquivos de contexto apropriados.
- Evitar introduzir dependências ou build tooling sem necessidade clara para o site estático.

# Deeper Context (read when relevant)

- Business rules and domain logic: @agent_docs/business-rules.md
- Security practices for this project: @agent_docs/security.md
- Engineering standards and quality philosophy: @agent_docs/engineering-standards.md
- Architecture decisions: @agent_docs/architecture.md
- Productivity tools and workflows: @agent_docs/productivity.md
- Path-scoped conventions (frontend/backend/etc): see `.claude/rules/`

# Keeping This File Current

This is a living system. If you discover a rule that should persist, add it to the right file above instead of expanding this one.

# Response Language

Always respond in Brazilian Portuguese, regardless of the language used in the prompt.
