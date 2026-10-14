# Calc Academy | CEDERJ 2026.2

Curso de LibreOffice Calc com interface responsiva, módulos separados e recursos interativos, criado como **projeto independente** da plataforma AP2 Master.

## O que inclui

- **12 módulos, 36 aulas** sequenciadas do zero ao raciocínio avançado.
- **36 questões objetivas com correção explicada** (uma por aula).
- **Laboratório de 8 tarefas**, com fórmulas reais em tabelas didáticas e avaliação de respostas-modelo.
- Simulados de **12, 20 ou 36 questões**, apresentação sequencial, pontuação e gabarito explicado.
- Biblioteca com **8 vídeos do YouTube** selecionados por tópico (abertos externamente e em reprodutor sob demanda).
- Busca de módulos; tamanho de letras ajustável; tema escuro; menu para celular.
- Progresso salvo no **localStorage** do navegador (sem conta e sem coleta no servidor).
- PWA com ícones e cache dos arquivos internos para funcionar sem rede após o primeiro acesso. Vídeos e fontes externas exigem internet.

## Como executar

Abra `index.html` no navegador. Para testar o PWA ou o service worker localmente, sirva a pasta por HTTP:
```sh
python -m http.server 8000
```
Depois abra `http://localhost:8000`.

## Publicar no GitHub Pages (repositório próprio)

1. Faça login em sua conta no GitHub.
2. Crie um repositório **novo** chamado `calc-academy-cederj`, separado de `ap2-master-cederj-2026-2`.
3. Envie estes arquivos à raiz da nova pasta do repositório.
4. Em **Settings → Pages**, selecione a ramificação `main` e diretório `/ (root)`.
5. Aguarde a implantação e acesse o endereço HTTPS exibido pelo GitHub Pages.

Não configure este curso dentro de um subdiretório do repositório AP2 Master. O objetivo é manter código, publicação e evolução totalmente separados.

## Fontes para revisão

- Guia de introdução ao Calc: https://books.libreoffice.org/pt-br/GS248/GS24803-GettingStartedWithCalc.html
- Funções e fórmulas: https://books.libreoffice.org/pt-br/CG70/CG7007-FormulasEFunc%C3%B5es.html
- Referências relativas/absolutas: https://help.libreoffice.org/latest/pt-BR/text/scalc/guide/relativ_absolut_ref.html
- CEDERJ, revisão AP2: https://graduacao.cederj.edu.br/course/section.php?id=26262

## Notas pedagógicas

A AP2 de Introdução à Informática do CEDERJ 2026.2 inclui também outras áreas, além do Calc. Este projeto cobre intencionalmente **apenas** a parte de planilhas, com foco nos encontros 5 e 6. Questões e exemplos foram produzidos para treino; **não** são questões oficiais, não antecipam a prova e não garantem formato, pesos ou número de itens.

O laboratório **não implementa um motor de planilhas completo**; valida respostas específicas de oito desafios. Questões de múltipla escolha não substituem a prática no aplicativo LibreOffice.

Vídeos são de terceiros e pertencem aos respectivos autores; não houve cópia ou redistribuição dos arquivos de vídeo.

## Estrutura

```
index.html             Navegação e estrutura semântica
style.css              Identidade visual, responsividade e acessibilidade
data.js                12 módulos, 36 aulas, exercícios e referências
videos-extra.js        4 vídeos complementares e associação aos módulos
app.js                 Aplicação, laboratório, simulados e armazenamento local
manifest.webmanifest   Instalação como aplicativo
service-worker.js      Cache offline de arquivos próprios
icon.svg               Ícone vetorial
icon-192.png           Ícone do aplicativo
icon-512.png           Ícone do aplicativo
```

## Privacidade e operação

O site não exige login. Respostas e progresso ficam armazenados **somente no dispositivo/navegador** usado, e não são sincronizados entre telefone e computador. Limpar os dados do site apaga esse progresso. Links externos abrem serviços de terceiros.

Projeto educacional independente. Não possui vínculo editorial ou institucional com CEDERJ/UFF ou The Document Foundation.
