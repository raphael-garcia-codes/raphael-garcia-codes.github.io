window.PROMPTS_IA = [
  {
    "item": "01. Arquiteto de sistema para projeto novo",
    "category": "Arquitetura & Planejamento",
    "project": "Genérico,Projeto novo",
    "when": "Antes de escrever a primeira linha de código de um projeto novo, para validar a arquitetura.",
    "prompt": "**Papel:** Atue como arquiteto de software sênior com experiência em sistemas de produção em escala.\n\n**Contexto:** Vou construir [descrição do projeto/produto]. Requisitos principais: [liste 3-5 requisitos funcionais e não-funcionais, ex: volume esperado de usuários, latência, orçamento]. Stack que pretendo usar (se já decidido): [stack ou \"em aberto\"].\n\n**Tarefa:** Proponha a arquitetura mais adequada. Para cada decisão (banco de dados, backend, frontend, infraestrutura), explique o trade-off contra pelo menos uma alternativa razoável — não apenas a recomendação.\n\n**Restrições:** Não sugira tecnologias só porque são populares; justifique cada escolha pelos requisitos que passei. Se algum requisito estiver ambíguo ou contraditório, aponte antes de continuar.\n\n**Formato de saída:** Lista de decisões arquiteturais numeradas, cada uma com: Decisão / Alternativa considerada / Por que essa e não a outra / Risco a monitorar."
  },
  {
    "item": "02. Plano de feature antes de codar",
    "category": "Arquitetura & Planejamento",
    "project": "Equipe / monorepo,Genérico,Projeto novo",
    "when": "Antes de implementar uma feature média/grande, para ter um plano validado antes de escrever código.",
    "prompt": "**Papel:** Atue como tech lead responsável por planejamento técnico.\n\n**Contexto:** Preciso implementar: [descreva a feature]. Projeto atual usa: [stack/linguagem]. Pontos do sistema que provavelmente serão tocados: [liste arquivos/módulos, se souber].\n\n**Tarefa:** Quebre a feature em passos implementáveis, na ordem em que devem ser feitos. Para cada passo, diga o que pode dar errado e como validar que funcionou antes de seguir para o próximo.\n\n**Restrições:** Não pule para o código ainda — quero só o plano. Se a feature tiver ambiguidade de escopo, liste as perguntas que eu preciso responder antes de começar.\n\n**Formato de saída:** Lista numerada de passos, com um checklist de validação por passo."
  },
  {
    "item": "03. Detecção de acoplamento oculto e riscos de escala",
    "category": "Arquitetura & Planejamento",
    "project": "Código legado",
    "when": "Quando um sistema existente \"parece certo mas cheira errado\" e você suspeita de dívida técnica escondida.",
    "prompt": "**Papel:** Atue como arquiteto principal fazendo uma auditoria de arquitetura.\n\n**Contexto:** Aqui está a descrição/estrutura do sistema: [cole descrição, diagrama em texto, ou estrutura de pastas].\n\n**Tarefa:** Identifique acoplamento oculto entre módulos que deveriam ser independentes, pontos únicos de falha, e onde esse design vai doer daqui a 12-18 meses se o sistema crescer.\n\n**Restrições:** Não sugira reescrever tudo — quero riscos priorizados por impacto, não uma lista genérica de \"boas práticas\".\n\n**Formato de saída:** Tabela com Risco / Onde está / Impacto se ignorado / Esforço estimado da correção."
  },
  {
    "item": "04. Design de API REST (contratos, erros, paginação)",
    "category": "Arquitetura & Planejamento",
    "project": "API",
    "when": "Ao desenhar endpoints novos ou revisar uma API existente antes de ela virar contrato público.",
    "prompt": "**Papel:** Atue como engenheiro especialista em design de APIs REST.\n\n**Contexto:** Preciso projetar/revisar os seguintes endpoints: [descreva recursos e operações]. Consumidores da API: [interno / público / parceiros].\n\n**Tarefa:** Proponha o design dos endpoints (rotas, métodos, payloads), o formato de erro padronizado seguindo RFC 9457 (application/problem+json), e a estratégia de paginação (cursor-based para datasets grandes, offset para pequenos).\n\n**Restrições:** Justifique verbos HTTP e status codes escolhidos. Aponte qualquer inconsistência com REST se eu já tiver endpoints prontos.\n\n**Formato de saída:** Especificação por endpoint (rota, método, request, response, erros possíveis) + seção separada com o padrão de erro e paginação escolhidos."
  },
  {
    "item": "05. Code review completo",
    "category": "Revisão de Código",
    "project": "Genérico",
    "when": "Antes de abrir um PR ou finalizar uma tarefa, para pegar bugs, performance e segurança de uma vez.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior especialista em [linguagem].\n\n**Contexto:** Código: [cole o trecho]. Contexto do projeto: [o que esse código faz, se relevante].\n\n**Tarefa:** Revise o código quanto a bugs reais, problemas de performance e vulnerabilidades de segurança.\n\n**Restrições:** Aponte só problemas reais, não preferências de estilo. Para cada problema, dê a correção exata em código, não só a descrição.\n\n**Formato de saída:** Para cada issue — Severidade (crítico/aviso/info) / Linha / Problema / Correção em código."
  },
  {
    "item": "06. Revisão focada em performance",
    "category": "Revisão de Código",
    "project": "Genérico",
    "when": "Quando o código funciona mas você suspeita que pode ficar lento em produção ou com mais dados.",
    "prompt": "**Papel:** Atue como engenheiro de performance.\n\n**Contexto:** Código: [cole o trecho]. Volume de dados/requisições esperado: [se souber].\n\n**Tarefa:** Identifique gargalos reais de performance (complexidade algorítmica, queries N+1, alocações desnecessárias, bloqueios). Para cada um, explique como medir o impacto antes e depois da correção.\n\n**Restrições:** Não otimize prematuramente pontos que não importam na escala informada.\n\n**Formato de saída:** Gargalo / Por que é um problema nessa escala / Correção sugerida / Como medir o ganho."
  },
  {
    "item": "07. Revisão de Pull Request antes de abrir",
    "category": "Revisão de Código",
    "project": "Equipe / monorepo",
    "when": "Antes de abrir um PR, para simular a revisão de um revisor sênior e chegar com menos comentários.",
    "prompt": "**Papel:** Atue como revisor sênior rigoroso, mas justo.\n\n**Contexto:** Diff/mudanças: [cole o diff ou descreva as mudanças]. O que o PR deveria resolver: [descreva o objetivo original].\n\n**Tarefa:** Avalie se o diff resolve exatamente o que foi proposto, sem escopo extra não relacionado. Aponte falta de testes, edge cases não tratados, e qualquer mudança que pareça maior do que o necessário para o objetivo (sinal de alerta de escopo).\n\n**Restrições:** Seja direto sobre o que bloquearia a aprovação vs. o que é só sugestão.\n\n**Formato de saída:** Bloqueadores / Sugestões / Perguntas para o autor."
  },
  {
    "item": "08. Segunda opinião sobre solução já pronta",
    "category": "Revisão de Código",
    "project": "Genérico",
    "when": "Quando você já resolveu o problema mas quer validar se é a melhor abordagem antes de commitar.",
    "prompt": "**Papel:** Atue como engenheiro sênior cético, procurando furos.\n\n**Contexto:** Problema original: [descreva]. Solução que implementei: [cole o código ou a abordagem].\n\n**Tarefa:** Quais suposições estou fazendo aqui que podem ser falsas em produção? Existe uma abordagem mais simples que eu não considerei?\n\n**Restrições:** Não elogie por educação — se a solução está boa, diga isso e explique por quê; se não está, seja específico sobre o motivo.\n\n**Formato de saída:** Resposta direta (sim, é uma boa abordagem / não, considere X) seguida da justificativa."
  },
  {
    "item": "09. Diagnóstico de bug com stack trace",
    "category": "Debug",
    "project": "Genérico",
    "when": "Quando você tem um erro/stack trace mas não sabe por onde começar.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior especialista em debugging.\n\n**Contexto:** Erro/stack trace: [cole]. Código relevante: [cole a função/arquivo onde o erro ocorre]. O que eu esperava que acontecesse: [descreva].\n\n**Tarefa:** Explique a causa raiz do erro, não só onde ele aparece. Se a causa raiz não estiver clara com o que eu passei, diga exatamente qual informação adicional você precisa antes de arriscar um diagnóstico.\n\n**Restrições:** Não invente comportamento do sistema que eu não descrevi.\n\n**Formato de saída:** Causa provável / Evidência que aponta pra isso / Correção / Como confirmar que era isso mesmo."
  },
  {
    "item": "10. Bug intermitente e difícil de reproduzir",
    "category": "Debug",
    "project": "Genérico",
    "when": "Bug que só acontece às vezes, sob condições que você não consegue identificar.",
    "prompt": "**Papel:** Atue como especialista em debugging de condições de corrida e bugs não-determinísticos.\n\n**Contexto:** Comportamento observado: [descreva]. Frequência: [ex: 1 em cada 20 execuções]. Código envolvido: [cole].\n\n**Tarefa:** Liste as hipóteses mais prováveis para esse tipo de intermitência (race condition, dependência de timing, estado compartilhado, cache, dados externos), ordenadas por probabilidade dado o código que colei.\n\n**Restrições:** Para cada hipótese, diga como eu testaria especificamente essa hipótese — não um checklist genérico de debugging.\n\n**Formato de saída:** Hipótese / Por que é provável aqui / Teste específico para confirmar ou descartar."
  },
  {
    "item": "11. Debug guiado por hipóteses (método científico)",
    "category": "Debug",
    "project": "Genérico",
    "when": "Bugs complexos onde tentativa e erro já não está funcionando.",
    "prompt": "**Papel:** Atue como engenheiro sênior aplicando debugging estruturado.\n\n**Contexto:** Sintoma: [descreva o que está errado]. O que já tentei: [liste, para não repetir].\n\n**Tarefa:** Pense passo a passo antes de responder. Primeiro, gere de 2 a 4 hipóteses distintas para a causa. Depois, para cada uma, defina um teste que a confirmaria ou descartaria sem ambiguidade.\n\n**Restrições:** Não repita nenhuma das tentativas que eu já descrevi. Se não tiver confiança suficiente numa hipótese, diga isso explicitamente em vez de apresentá-la como certeza.\n\n**Formato de saída:** Primeiro o raciocínio (pode ser resumido), depois uma tabela final: Hipótese / Teste / O que cada resultado significaria."
  },
  {
    "item": "12. Debug de comportamento inesperado em produção",
    "category": "Debug",
    "project": "Dados sensíveis,Equipe / monorepo",
    "when": "Algo quebrou em produção e você precisa investigar rápido sem expor dados sensíveis no chat.",
    "prompt": "**Papel:** Atue como engenheiro de plantão (on-call) experiente.\n\n**Contexto:** Sintoma em produção: [descreva, sem incluir dados de usuários reais — anonimize antes de colar]. Logs relevantes (anonimizados): [cole]. Mudanças recentes no sistema: [liste deploys/alterações recentes].\n\n**Tarefa:** Priorize hipóteses considerando o que mudou recentemente primeiro. Diga qual é a ação mais segura agora (mitigar) versus o que pode esperar para depois (causa raiz).\n\n**Restrições:** Nunca cole dados reais de usuários, tokens ou credenciais aqui — sempre anonimize antes.\n\n**Formato de saída:** Ação imediata recomendada / Hipóteses de causa raiz em ordem de prioridade / O que investigar depois que o incidente for contido."
  },
  {
    "item": "13. Refatoração seguindo padrões de projeto",
    "category": "Refatoração",
    "project": "Código legado,Genérico",
    "when": "Código funcional mas difícil de manter, e você quer aplicar um padrão de projeto adequado.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior especialista em design patterns.\n\n**Contexto:** Código: [cole]. Motivo da refatoração: [ex: difícil de testar, muita duplicação, difícil de estender].\n\n**Tarefa:** Sugira o padrão de projeto (ou a ausência de um, se não for necessário) mais adequado para o problema descrito, e reescreva o código aplicando-o.\n\n**Restrições:** Guardrail de escopo — se o diff da refatoração ficar muito maior do que o necessário para resolver o problema descrito, isso é sinal de alerta; pare e explique por quê antes de continuar.\n\n**Formato de saída:** Padrão escolhido e por quê / Código refatorado / O que ficou explicitamente fora do escopo."
  },
  {
    "item": "14. Simplificação de lógica complexa",
    "category": "Refatoração",
    "project": "Código legado,Genérico",
    "when": "Uma função ou trecho é difícil de seguir mentalmente, mesmo funcionando corretamente.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior focado em legibilidade.\n\n**Contexto:** Código: [cole a lógica complexa].\n\n**Tarefa:** Explique por que essa lógica é difícil de acompanhar (aninhamento excessivo, muitas responsabilidades numa função, nomes pouco claros, etc). Depois, reescreva dividindo em funções menores com nomes que expliquem a intenção.\n\n**Restrições:** O comportamento não pode mudar — só a estrutura. Se não tiver certeza se uma mudança preserva o comportamento original, aponte isso explicitamente.\n\n**Formato de saída:** Diagnóstico do problema / Código simplificado / Lista do que preservei intencionalmente igual."
  },
  {
    "item": "15. Modernização de código legado",
    "category": "Refatoração",
    "project": "Código legado",
    "when": "Código antigo usando padrões/sintaxe desatualizados que precisa ser atualizado com segurança.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior especialista em migração de código legado.\n\n**Contexto:** Código: [cole]. Versão/padrão atual: [ex: callbacks, ES5, Python 2]. Versão/padrão alvo: [ex: async/await, ES2023, Python 3.12].\n\n**Tarefa:** Modernize o código para os padrões atuais da linguagem, mantendo o comportamento idêntico. Pesquise antes de afirmar qual é a prática atual recomendada — não assuma que o que você sabe de memória ainda é o padrão vigente.\n\n**Restrições:** Aponte qualquer mudança de comportamento sutil que a modernização possa introduzir (ex: ordem de execução, tratamento de erro).\n\n**Formato de saída:** Código modernizado / Lista de mudanças de comportamento a testar antes de confiar na migração."
  },
  {
    "item": "16. Auditoria de segurança geral (OWASP)",
    "category": "Segurança",
    "project": "API,Genérico",
    "when": "Antes de subir código para produção, para uma primeira triagem de segurança.",
    "prompt": "**Papel:** Atue como especialista em segurança de aplicações (AppSec).\n\n**Contexto:** Código: [cole]. Tipo de aplicação: [web, API, mobile...].\n\n**Tarefa:** Revise sob a ótica das vulnerabilidades mais comuns do OWASP (injection, XSS, exposição de dados sensíveis, falta de validação de entrada, controle de acesso quebrado). Para cada uma encontrada, avalie a severidade real no contexto do meu código, não genericamente.\n\n**Restrições:** Isso não substitui um pentest profissional — deixe isso claro na resposta se encontrar algo crítico. Não invente vulnerabilidades só para preencher a lista.\n\n**Formato de saída:** Vulnerabilidade / Severidade / Onde está / Correção em código."
  },
  {
    "item": "17. Revisão de dados sensíveis e privacidade",
    "category": "Segurança",
    "project": "Dados sensíveis",
    "when": "Código que lida com dados pessoais de usuários (nome, e-mail, CPF, localização, etc).",
    "prompt": "**Papel:** Atue como especialista em privacidade e proteção de dados (LGPD).\n\n**Contexto:** Código/fluxo que lida com dados: [descreva ou cole, sem incluir dados reais de usuários].\n\n**Tarefa:** Identifique onde dados pessoais são coletados, armazenados, logados ou transmitidos sem proteção adequada (ex: log de dados sensíveis em texto puro, ausência de criptografia em trânsito/repouso, retenção sem prazo definido).\n\n**Restrições:** Não me passe conselho jurídico definitivo — sinalize os pontos técnicos de risco e recomende validação com jurídico quando o caso for ambíguo.\n\n**Formato de saída:** Ponto de risco / Por que fere boas práticas de privacidade / Correção técnica sugerida."
  },
  {
    "item": "18. Checklist antes de deploy",
    "category": "Segurança",
    "project": "API,Equipe / monorepo",
    "when": "Antes de subir uma mudança para produção, para uma checagem final estruturada.",
    "prompt": "**Papel:** Atue como engenheiro responsável por releases seguros.\n\n**Contexto:** Mudança que vou fazer deploy: [descreva]. Tem migração de banco? [sim/não]. Tem feature flag? [sim/não].\n\n**Tarefa:** Monte um checklist de verificação pré-deploy específico para essa mudança (não um checklist genérico), incluindo o que checar em CI, o gatilho de rollback, e o que monitorar nas primeiras horas depois do deploy.\n\n**Restrições:** Priorize os itens que são realmente relevantes para essa mudança específica, não uma lista padrão de 40 itens.\n\n**Formato de saída:** Checklist pré-deploy / Gatilho de rollback / O que monitorar pós-deploy."
  },
  {
    "item": "19. Geração de testes unitários",
    "category": "Testes",
    "project": "Genérico",
    "when": "Escrever testes para uma função ou módulo que ainda não tem cobertura.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior especialista em testes automatizados.\n\n**Contexto:** Código a testar: [cole]. Framework de testes usado no projeto: [ex: Jest, pytest, JUnit].\n\n**Tarefa:** Escreva testes unitários cobrindo o caminho feliz, edge cases relevantes e cenários de erro. Use valores determinísticos (não aleatórios, não dependentes de data/hora atual) para evitar testes instáveis (flaky).\n\n**Restrições:** Não gere um número artificial de testes só para parecer completo (test explosion) — cada teste deve cobrir um cenário que realmente importa.\n\n**Formato de saída:** Código dos testes, com um comentário curto acima de cada um explicando o que ele valida."
  },
  {
    "item": "20. Plano de testes para feature nova",
    "category": "Testes",
    "project": "Equipe / monorepo,Projeto novo",
    "when": "Antes de implementar uma feature, para definir a estratégia de teste junto com o design.",
    "prompt": "**Papel:** Atue como QA engineer sênior.\n\n**Contexto:** Feature: [descreva]. Critérios de aceite conhecidos: [liste, se já existirem].\n\n**Tarefa:** Proponha o plano de testes: o que testar em nível unitário, o que só faz sentido testar em integração, e quais cenários de erro/edge case não podem faltar.\n\n**Restrições:** Não confunda \"testar tudo\" com \"testar o que importa\" — priorize pelos cenários que causariam mais dano se falhassem silenciosamente.\n\n**Formato de saída:** Tabela com Cenário / Nível de teste (unitário/integração) / Prioridade / Por quê."
  },
  {
    "item": "21. Casos de borda que faltam",
    "category": "Testes",
    "project": "Genérico",
    "when": "Código já testado, mas você suspeita que casos de borda importantes não foram cobertos.",
    "prompt": "**Papel:** Atue como QA engineer adversarial, tentando quebrar o código.\n\n**Contexto:** Código: [cole]. Testes que já existem: [cole ou resuma].\n\n**Tarefa:** Liste inputs e condições que provavelmente vão quebrar esse código e que não estão cobertos pelos testes existentes (valores nulos, vazios, limites numéricos, concorrência, encoding, timezone, etc).\n\n**Restrições:** Foque em cenários plausíveis no contexto real do código, não em casos exóticos que nunca vão acontecer.\n\n**Formato de saída:** Caso de borda / Por que provavelmente quebra / Teste sugerido para cobri-lo."
  },
  {
    "item": "22. Documentar função ou módulo",
    "category": "Documentação",
    "project": "Equipe / monorepo,Genérico",
    "when": "Código funcionando mas sem documentação, antes de outra pessoa precisar entendê-lo.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior escrevendo documentação técnica.\n\n**Contexto:** Código: [cole].\n\n**Tarefa:** Escreva a documentação (docstring/comentários) explicando o contrato da função — pré-condições, o que ela garante como resultado, e efeitos colaterais — e não a mecânica passo a passo do que o código já mostra por si só.\n\n**Restrições:** Não descreva linha por linha o que o código faz; isso já está no código. Documente o \"porquê\" e o \"contrato\", não o \"como\".\n\n**Formato de saída:** Documentação pronta para colar no código, no padrão da linguagem usada (JSDoc, docstring Python, etc)."
  },
  {
    "item": "23. Escrever descrição de Pull Request",
    "category": "Documentação",
    "project": "Equipe / monorepo",
    "when": "Na hora de abrir um PR e explicar a mudança para os revisores.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior escrevendo uma descrição de PR clara para revisores ocupados.\n\n**Contexto:** Mudanças feitas: [descreva ou cole o diff]. Motivo da mudança: [descreva o problema original].\n\n**Tarefa:** Escreva a descrição do PR: o que mudou, por que mudou, e como testar/validar. Mantenha entre 200 e 400 palavras — PRs maiores que isso geralmente escondem informação relevante em texto irrelevante.\n\n**Restrições:** Não liste arquivos alterados um por um se o diff for grande — resuma por intenção da mudança.\n\n**Formato de saída:** Título do PR / Seção \"O que mudou\" / Seção \"Por que\" / Seção \"Como testar\"."
  },
  {
    "item": "24. README para projeto novo",
    "category": "Documentação",
    "project": "Projeto novo",
    "when": "Ao começar um projeto novo, para deixar o onboarding claro desde o primeiro commit.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior escrevendo documentação de projeto.\n\n**Contexto:** Projeto: [descreva o que faz]. Stack: [liste]. Como rodar localmente: [descreva os passos, se já souber].\n\n**Tarefa:** Escreva um README com: descrição do projeto, como rodar localmente, estrutura de pastas principal, e como contribuir.\n\n**Restrições:** Não invente comandos ou dependências que eu não mencionei — se faltar informação, marque com [PREENCHER] em vez de adivinhar.\n\n**Formato de saída:** README completo em Markdown, pronto para colar no repositório."
  },
  {
    "item": "25. Revisão de acessibilidade (WCAG)",
    "category": "Frontend & UX",
    "project": "Genérico,Projeto novo",
    "when": "Antes de considerar uma tela ou componente pronto, para checar acessibilidade real.",
    "prompt": "**Papel:** Atue como especialista em acessibilidade web (WCAG 2.1 AA).\n\n**Contexto:** Código do componente/tela: [cole o HTML/JSX].\n\n**Tarefa:** Revise contra critérios concretos: contraste de cor mínimo de 4.5:1 para texto normal e 3:1 para texto grande/elementos gráficos, área de toque mínima de 44x44px em elementos interativos, e garanta que nenhum estado (erro, seleção, obrigatório) seja indicado só por cor.\n\n**Restrições:** Aponte só os critérios que meu código realmente viola — não uma lista genérica de WCAG.\n\n**Formato de saída:** Critério violado / Onde está / Correção específica (valor de contraste, tamanho, ou elemento adicional necessário)."
  },
  {
    "item": "26. Componente reutilizável",
    "category": "Frontend & UX",
    "project": "Equipe / monorepo,Projeto novo",
    "when": "Criar um componente de UI que será reutilizado em várias telas.",
    "prompt": "**Papel:** Atue como desenvolvedor frontend sênior especialista em [React/Vue/etc — informe o framework].\n\n**Contexto:** Componente que preciso: [descreva a funcionalidade]. Onde será usado: [liste os contextos/telas].\n\n**Tarefa:** Gere um componente reutilizável com tipagem (TypeScript, se aplicável), props bem definidas, e acessibilidade básica já embutida (labels, foco, navegação por teclado).\n\n**Restrições:** Não hardcode valores que deveriam ser props. Se o componente tiver mais de uma responsabilidade clara, sugira dividir em dois.\n\n**Formato de saída:** Código do componente + lista das props com tipo e descrição."
  },
  {
    "item": "27. Crítica de design (evitar \"AI slop\")",
    "category": "Frontend & UX",
    "project": "Genérico,Projeto novo",
    "when": "Quando uma tela gerada com ajuda de IA parece genérica demais e você quer torná-la distintiva.",
    "prompt": "**Papel:** Atue como designer de produto sênior com olho crítico para design genérico.\n\n**Contexto:** Descrição ou código da tela: [descreva ou cole].\n\n**Tarefa:** Aponte especificamente o que faz essa tela parecer um template genérico de IA (paleta previsível, espaçamento padrão, tipografia sem personalidade, ícones clichês) e sugira decisões de design mais intencionais e específicas do produto.\n\n**Restrições:** Sugestões devem ser aplicáveis com o stack que já uso — não proponha reescrever tudo do zero.\n\n**Formato de saída:** O que está genérico / Por que soa genérico / Alternativa mais intencional."
  },
  {
    "item": "28. Entender código legado sem documentação",
    "category": "Aprendizado & Onboarding",
    "project": "Código legado",
    "when": "Você herdou um código sem nenhuma documentação e precisa entendê-lo antes de mexer.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior fazendo arqueologia de código.\n\n**Contexto:** Código: [cole].\n\n**Tarefa:** Explique o que esse código faz, quais são as entradas e saídas esperadas, e quais partes têm complexidade ou casos de borda que merecem atenção antes de qualquer alteração.\n\n**Restrições:** Se alguma parte do comportamento não puder ser deduzida com certeza só pelo código (depende de dados externos, configuração, etc), diga isso explicitamente em vez de assumir.\n\n**Formato de saída:** Resumo funcional / Entradas e saídas / Pontos de atenção antes de alterar."
  },
  {
    "item": "29. Onboarding em projeto desconhecido",
    "category": "Aprendizado & Onboarding",
    "project": "Código legado,Equipe / monorepo",
    "when": "Primeiro contato com uma base de código grande, para construir um mapa mental rápido.",
    "prompt": "**Papel:** Atue como desenvolvedor sênior ajudando um colega novo no time a se situar.\n\n**Contexto:** Estrutura de pastas do projeto: [cole o resultado de um comando tipo `tree` ou liste as pastas principais]. Stack: [liste].\n\n**Tarefa:** Explique a arquitetura geral inferida pela estrutura de pastas: onde provavelmente fica a lógica de negócio, onde fica a camada de dados, onde estão as rotas/entradas do sistema, e por onde eu deveria começar a explorar para entender o fluxo principal.\n\n**Restrições:** Deixe claro quando você está inferindo pela convenção de nomes versus quando tem certeza — estrutura de pastas nem sempre reflete a realidade do código.\n\n**Formato de saída:** Mapa da arquitetura por camada / Por onde começar a explorar / Perguntas para fazer ao time."
  },
  {
    "item": "30. Explicar decisão arquitetural para não-técnicos",
    "category": "Aprendizado & Onboarding",
    "project": "Equipe / monorepo,Genérico",
    "when": "Precisa justificar uma decisão técnica para um PM, cliente ou stakeholder não-técnico.",
    "prompt": "**Papel:** Atue como tech lead explicando uma decisão técnica para alguém sem background técnico.\n\n**Contexto:** Decisão técnica: [descreva, ex: \"escolhemos usar fila assíncrona em vez de processamento síncrono\"]. Público: [PM / cliente / diretoria].\n\n**Tarefa:** Explique a decisão em termos de impacto no negócio (custo, velocidade, confiabilidade) usando uma analogia do dia a dia, sem jargão técnico desnecessário.\n\n**Restrições:** Não simplifique a ponto de a explicação ficar tecnicamente incorreta — simplifique a linguagem, não a verdade.\n\n**Formato de saída:** Explicação em 2-3 parágrafos curtos + uma frase-resumo que poderia ser dita numa reunião."
  }
];
