/* Conteúdo autoral independente. Questões são exercícios de treino, não prova oficial. */
const MODULES=[
  {
    "title": "Primeiros passos",
    "level": "Fundamentos",
    "subtitle": "Aprenda a ler uma planilha antes de calcular.",
    "lessons": [
      {
        "title": "O que é o Calc",
        "intro": "O LibreOffice Calc é uma planilha eletrônica: organiza informações numa grade e calcula resultados automaticamente. É parecido com uma tabela de caderno que sabe fazer contas.",
        "steps": [
          "Abra o Calc e localize a grade central.",
          "Identifique letras no topo (colunas) e números à esquerda (linhas).",
          "Observe a barra de fórmulas: ela mostra o conteúdo da célula selecionada."
        ],
        "formula": "Célula B3 = coluna B + linha 3.",
        "tip": "Não confunda Calc com Writer: Writer trabalha com páginas e parágrafos; Calc, com células.",
        "question": "A célula D7 fica em qual coluna?",
        "options": [
          "Linha D",
          "Coluna D",
          "Coluna 7",
          "Aba D"
        ],
        "correct": 1,
        "explanation": "A letra D indica a coluna; o número 7 indica a linha."
      },
      {
        "title": "Linhas, colunas e células",
        "intro": "Uma célula é o encontro de uma linha com uma coluna. Cada uma tem endereço único, como B2. O endereço é essencial para escrever fórmulas sem repetir valores.",
        "steps": [
          "Clique em C4 e observe a caixa de nome.",
          "Digite 8 e pressione Enter.",
          "Clique novamente em C4 para conferir o conteúdo."
        ],
        "formula": "A1, B2, F10 são endereços válidos.",
        "tip": "A1 não é um número nem uma operação. É uma referência a uma posição.",
        "question": "Qual referência significa coluna E e linha 12?",
        "options": [
          "12E",
          "E12",
          "E:12",
          "12:E"
        ],
        "correct": 1,
        "explanation": "A ordem é sempre letra da coluna seguida do número da linha."
      },
      {
        "title": "Salvar, abas e arquivos",
        "intro": "Uma pasta de trabalho contém uma ou mais planilhas (abas). O formato padrão aberto é .ods; também existe o .xlsx, comum no Excel.",
        "steps": [
          "Crie uma nova planilha e renomeie a primeira aba para Notas.",
          "Use Arquivo → Salvar como e escolha .ods.",
          "Crie outra aba chamada Despesas."
        ],
        "formula": "notas.ods = arquivo de planilha do LibreOffice.",
        "tip": "O nome da aba não é necessariamente o nome do arquivo.",
        "question": "Qual extensão é o formato nativo do Calc?",
        "options": [
          ".pptx",
          ".odt",
          ".ods",
          ".mp3"
        ],
        "correct": 2,
        "explanation": ".ods é a extensão padrão OpenDocument Spreadsheet."
      }
    ],
    "video": 0
  },
  {
    "title": "Dados e intervalos",
    "level": "Fundamentos",
    "subtitle": "Entenda o que a planilha realmente armazena.",
    "lessons": [
      {
        "title": "Texto, número e data",
        "intro": "Uma célula pode conter texto, número, data ou fórmula. O Calc interpreta formatos para fazer cálculos; dados numéricos guardados como texto podem causar resultados inesperados.",
        "steps": [
          "Em A2 digite Produto; em B2 digite 45.",
          "Em B3 digite 12,50 (configuração brasileira).",
          "Observe o alinhamento automático e teste somar B2 e B3."
        ],
        "formula": "Texto: 'Patrulha' | Número: 45 | Data: 14/10/2026.",
        "tip": "Quando uma soma ignora um valor, verifique se ele foi digitado como texto.",
        "question": "Qual item geralmente pode ser somado diretamente?",
        "options": [
          "'Quarenta'",
          "'R$ vinte'",
          "40",
          "'Sem dados'"
        ],
        "correct": 2,
        "explanation": "40 é um número, os demais exemplos são texto."
      },
      {
        "title": "Intervalos com dois-pontos",
        "intro": "O sinal de dois-pontos indica um intervalo retangular contínuo. B2:B5 inclui B2, B3, B4 e B5. É a base das funções que trabalham com vários dados.",
        "steps": [
          "Digite 2, 3, 4 e 5 nas células B2 até B5.",
          "Clique numa célula vazia e digite =SOMA(B2:B5).",
          "Confira o resultado 14."
        ],
        "formula": "B2:B5 → B2 + B3 + B4 + B5",
        "tip": "B2;B5 seleciona argumentos separados, não o intervalo completo.",
        "question": "Quantas células há em A1:A4?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 2,
        "explanation": "O intervalo inclui as linhas 1, 2, 3 e 4."
      },
      {
        "title": "Seleção, cópia e preenchimento",
        "intro": "A alça de preenchimento replica padrões e fórmulas. Selecionar bem evita formatar ou calcular colunas erradas.",
        "steps": [
          "Digite 1 em A2 e 2 em A3.",
          "Selecione ambas e arraste a alça para continuar a série.",
          "Copie uma célula com Ctrl+C e cole com Ctrl+V."
        ],
        "formula": "A2:A10 → nove células na coluna A.",
        "tip": "Copiar uma fórmula pode alterar suas referências. Estudaremos o motivo no módulo 8.",
        "question": "Em A1:C2 há quantas células?",
        "options": [
          "3",
          "5",
          "6",
          "9"
        ],
        "correct": 2,
        "explanation": "São 3 colunas multiplicadas por 2 linhas = 6 células."
      }
    ],
    "video": 0
  },
  {
    "title": "Fórmulas sem medo",
    "level": "Básico",
    "subtitle": "Operações e ordem de cálculo, com atenção às pegadinhas.",
    "lessons": [
      {
        "title": "Toda fórmula começa com =",
        "intro": "Para o Calc executar um cálculo, inicie com =. Ele também usa referências para buscar valores em outras células. Sem esse sinal, a expressão pode ser tratada como texto.",
        "steps": [
          "Em B2 digite 120 e em C2 digite 30.",
          "Em D2 escreva =B2+C2.",
          "Altere C2 para 40 e veja D2 recalcular para 160."
        ],
        "formula": "=B2+C2",
        "tip": "Nunca comece uma fórmula com SOMA sem o sinal de igual.",
        "question": "Qual opção é uma fórmula válida?",
        "options": [
          "B2+C2",
          "=B2+C2",
          "B2 mais C2",
          "B2=C2"
        ],
        "correct": 1,
        "explanation": "A fórmula começa com =."
      },
      {
        "title": "Os cinco operadores",
        "intro": "Soma +, subtração -, multiplicação *, divisão / e potência ^ são operadores. Use * no lugar de ×, e / no lugar de ÷.",
        "steps": [
          "Calcule =8+3 e =8-3.",
          "Calcule =8*3 e =8/2.",
          "Teste =2^3 para conferir a potência 8."
        ],
        "formula": "=12*5 → 60 | =12/3 → 4",
        "tip": "Não digite x para multiplicar em fórmulas.",
        "question": "Qual operador multiplica dois valores?",
        "options": [
          "x",
          "*",
          "^",
          "%"
        ],
        "correct": 1,
        "explanation": "O asterisco * representa multiplicação."
      },
      {
        "title": "Prioridade e parênteses",
        "intro": "O Calc respeita a ordem matemática das operações: parênteses, potências, multiplicação/divisão, soma/subtração. Esse tema rende erros frequentes em prova.",
        "steps": [
          "Teste =10+6/2; resultado 13.",
          "Compare com =(10+6)/2; resultado 8.",
          "Explique por que são diferentes."
        ],
        "formula": "=10+6/2 → 13 | =(10+6)/2 → 8",
        "tip": "Se a intenção é calcular uma média manual, proteja a soma com parênteses.",
        "question": "Quanto vale =12+8/4?",
        "options": [
          "5",
          "14",
          "20",
          "8"
        ],
        "correct": 1,
        "explanation": "Primeiro 8/4 = 2; depois 12+2 = 14."
      }
    ],
    "video": 1
  },
  {
    "title": "Funções essenciais",
    "level": "Intermediário",
    "subtitle": "Pare de fazer contas longas: use as funções certas.",
    "lessons": [
      {
        "title": "SOMA e MÉDIA",
        "intro": "SOMA adiciona valores de um intervalo. MÉDIA soma e divide pela quantidade de valores numéricos. Ela ignora células vazias e texto no intervalo.",
        "steps": [
          "Preencha B2:B5 com 4, 6, 8 e 10.",
          "Teste =SOMA(B2:B5): resposta 28.",
          "Teste =MÉDIA(B2:B5): resposta 7."
        ],
        "formula": "=SOMA(B2:B5) | =MÉDIA(B2:B5)",
        "tip": "No Calc em português do Brasil, a vírgula decimal é diferente do separador de argumentos (;).",
        "question": "Qual função calcula a média das notas C2:C5?",
        "options": [
          "=SOMA(C2:C5)",
          "=MÉDIA(C2:C5)",
          "=MIN(C2:C5)",
          "=C2+C5"
        ],
        "correct": 1,
        "explanation": "MÉDIA trabalha com todas as notas do intervalo."
      },
      {
        "title": "MÁXIMO e MÍNIMO",
        "intro": "MÁXIMO procura o maior valor. MÍNIMO procura o menor. Questões podem perguntar por maior turma, menor gasto ou nota mais alta.",
        "steps": [
          "Preencha A2:A4 com 15, 21 e 9.",
          "Encontre o maior valor: =MÁXIMO(A2:A4) → 21.",
          "Encontre o menor valor: =MÍNIMO(A2:A4) → 9."
        ],
        "formula": "=MÁXIMO(A2:A4) | =MÍNIMO(A2:A4)",
        "tip": "Não confunda mínimo valor com primeira célula.",
        "question": "Para encontrar a menor quantidade em B2:B20, use:",
        "options": [
          "=MÉDIA(B2:B20)",
          "=MÍNIMO(B2:B20)",
          "=SOMA(B2:B20)",
          "=MÁXIMO(B2:B20)"
        ],
        "correct": 1,
        "explanation": "MÍNIMO identifica o menor número."
      },
      {
        "title": "Função dentro de cálculo",
        "intro": "Uma função pode ser apenas parte da fórmula. Para calcular o custo da menor turma, primeiro encontra-se MÍNIMO e depois multiplica-se pelo preço unitário.",
        "steps": [
          "Considere D3:I3 como participantes por turma.",
          "Em C3 guarde o valor de R$ 20 por participante.",
          "Use a expressão para obter o custo da turma menor."
        ],
        "formula": "=MÍNIMO(D3:I3)*C3",
        "tip": "A multiplicação aparece depois do fechamento do parêntese da função.",
        "question": "Qual fórmula encontra a maior nota de B2:B10 e a multiplica por 2?",
        "options": [
          "=SOMA(B2:B10)*2",
          "=MÁXIMO(B2:B10)*2",
          "=MÍNIMO(B2:B10+2)",
          "=MÉDIA(B2:B10;2)"
        ],
        "correct": 1,
        "explanation": "MÁXIMO primeiro seleciona a maior nota; *2 multiplica o resultado."
      }
    ],
    "video": 0
  },
  {
    "title": "Contagens e critérios",
    "level": "Intermediário",
    "subtitle": "Diferencie contar números, células preenchidas e condições.",
    "lessons": [
      {
        "title": "CONT.NÚM e CONT.VALORES",
        "intro": "CONT.NÚM conta apenas células com números. CONT.VALORES conta células não vazias, inclusive textos. Células vazias ficam fora de ambas.",
        "steps": [
          "Em A1 digite Ana, A2 8, A3 vazio e A4 5.",
          "=CONT.NÚM(A1:A4) retorna 2.",
          "=CONT.VALORES(A1:A4) retorna 3."
        ],
        "formula": "=CONT.NÚM(A1:A4) | =CONT.VALORES(A1:A4)",
        "tip": "Nome de aluno não entra em CONT.NÚM, mas entra em CONT.VALORES.",
        "question": "Com duas células numéricas, uma com texto e uma vazia, CONT.VALORES retorna:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 2,
        "explanation": "Conta todas as três células preenchidas."
      },
      {
        "title": "CONT.SE",
        "intro": "CONT.SE conta apenas as células que satisfazem uma condição. A sintaxe é intervalo, ponto-e-vírgula e critério. Texto e comparações precisam de aspas.",
        "steps": [
          "Em B2:B5 digite 5, 8, 7, 3.",
          "Use =CONT.SE(B2:B5;\">=6\").",
          "Resultado: 2 notas são pelo menos 6."
        ],
        "formula": "=CONT.SE(B2:B5;\">=6\")",
        "tip": "Aspas dentro do critério não são decoração, são sintaxe.",
        "question": "Qual função conta valores maiores que 10 em D2:D20?",
        "options": [
          "=CONT.SE(D2:D20;\">10\")",
          "=SOMA(D2:D20;\">10\")",
          "=CONT.NÚM(D2:D20;\">10\")",
          "=SE(D2:D20;\">10\")"
        ],
        "correct": 0,
        "explanation": "CONT.SE recebe o intervalo e o critério entre aspas."
      },
      {
        "title": "SOMASE e arredondamento",
        "intro": "SOMASE soma apenas valores que atendem a um critério. ARRED arredonda números a um número definido de casas decimais.",
        "steps": [
          "Imagine vendas em B2:B5 com 2, 5, 8 e 10.",
          "=SOMASE(B2:B5;\">5\") retorna 18.",
          "Teste =ARRED(8,456;2) e observe 8,46."
        ],
        "formula": "=SOMASE(B2:B5;\">5\") | =ARRED(8,456;2)",
        "tip": "SOMASE é expansão útil: não confunda com SOMA nem CONT.SE.",
        "question": "Qual fórmula soma valores acima de 5 num intervalo A1:A4?",
        "options": [
          "=CONT.SE(A1:A4;\">5\")",
          "=SOMASE(A1:A4;\">5\")",
          "=MÉDIA(A1:A4)",
          "=MÍNIMO(A1:A4)"
        ],
        "correct": 1,
        "explanation": "SOMASE soma; CONT.SE conta."
      }
    ],
    "video": 1
  },
  {
    "title": "Porcentagem na prática",
    "level": "Intermediário",
    "subtitle": "Descontos, acréscimos, taxas e avaliações.",
    "lessons": [
      {
        "title": "Porcentagem é uma fração",
        "intro": "10% significa 10 em cada 100, equivalente a 0,10. No Calc, o símbolo % pode ser usado na fórmula. Já escrever 10 numa célula não significa automaticamente 10%.",
        "steps": [
          "Em A2 digite 200.",
          "Em B2 digite 10% e confira a formatação.",
          "Teste =A2*B2 e encontre 20."
        ],
        "formula": "=200*10% → 20",
        "tip": "Use 10% ou 0,10, nunca 10 se a intenção for dez por cento.",
        "question": "Quanto é 25% de 80?",
        "options": [
          "10",
          "20",
          "25",
          "40"
        ],
        "correct": 1,
        "explanation": "80 × 0,25 = 20."
      },
      {
        "title": "Desconto e aumento",
        "intro": "Desconto de 15% é multiplicar por (1-15%). Acréscimo de 15% é multiplicar por (1+15%).",
        "steps": [
          "Em A2 digite 120.",
          "Teste =A2*(1-10%) → 108.",
          "Teste =A2*(1+10%) → 132."
        ],
        "formula": "=A2*(1-15%) | =A2*(1+15%)",
        "tip": "Não subtraia simplesmente 15 de um preço ao aplicar 15%.",
        "question": "Um preço de 200 com desconto de 10% vira:",
        "options": [
          "180",
          "190",
          "210",
          "220"
        ],
        "correct": 0,
        "explanation": "10% de 200 são 20; 200-20 = 180."
      },
      {
        "title": "Notas e frequência",
        "intro": "Uma condição da prova pode exigir média mínima e presença mínima. Se uma célula contém 80%, o Calc armazena aproximadamente 0,8.",
        "steps": [
          "Em B2 registre média 7.",
          "Em C2 digite 80%.",
          "Compare C2>=75%; o resultado será VERDADEIRO."
        ],
        "formula": "=SE(C2>=75%;\"Frequência OK\";\"Rever\")",
        "tip": "75% e 75 são valores matematicamente diferentes numa célula.",
        "question": "Qual célula atende à exigência de frequência >=75%?",
        "options": [
          "0,65",
          "70%",
          "0,8%",
          "80%"
        ],
        "correct": 3,
        "explanation": "80% supera 75%; 0,8% não."
      }
    ],
    "video": 1
  },
  {
    "title": "Lógica que decide",
    "level": "Avançado",
    "subtitle": "SE, E e OU: o cérebro das planilhas.",
    "lessons": [
      {
        "title": "SE: duas possibilidades",
        "intro": "SE testa uma condição e devolve um resultado quando é verdadeira e outro quando é falsa. Pense numa regra: se nota for pelo menos 6, aprovado; caso contrário, recuperação.",
        "steps": [
          "Em B2 digite 7.",
          "Escreva =SE(B2>=6;\"Aprovado\";\"Rever\").",
          "Mude B2 para 4 e observe a saída."
        ],
        "formula": "=SE(B2>=6;\"Aprovado\";\"Rever\")",
        "tip": "No exemplo, >= significa maior ou igual, e ; separa argumentos.",
        "question": "Com B2=5, a fórmula =SE(B2>=6;\"Sim\";\"Não\") resulta em:",
        "options": [
          "Sim",
          "Não",
          "5",
          "Erro"
        ],
        "correct": 1,
        "explanation": "5 não é maior ou igual a 6."
      },
      {
        "title": "E e OU",
        "intro": "E exige que todas as condições sejam verdadeiras. OU exige pelo menos uma. Junte-as com SE para decisões com mais de um critério.",
        "steps": [
          "Em B2 digite 7 e em C2 digite 80%.",
          "Teste =E(B2>=6;C2>=75%) → VERDADEIRO.",
          "Teste =OU(B2>=9;C2>=75%) → VERDADEIRO."
        ],
        "formula": "=SE(E(B2>=6;C2>=75%);\"Apto\";\"Não apto\")",
        "tip": "Se há dois requisitos obrigatórios, geralmente E é a função adequada.",
        "question": "Com nota 7 e frequência 60%, SE(E(nota>=6;freq>=75%)) indicaria:",
        "options": [
          "Apto",
          "Não apto",
          "8",
          "Não há como saber"
        ],
        "correct": 1,
        "explanation": "A frequência falhou; E exige que ambas sejam verdadeiras."
      },
      {
        "title": "SE aninhado e comparações",
        "intro": "Quando existem três categorias, um SE pode ficar dentro de outro. É poderoso, mas os parênteses precisam fechar corretamente.",
        "steps": [
          "Imagine B2 com a nota 9.",
          "Teste =SE(B2>=8;\"Ótimo\";SE(B2>=6;\"Bom\";\"Rever\")).",
          "Troque B2 por 7 e depois 4 para ver outras categorias."
        ],
        "formula": "=SE(B2>=8;\"Ótimo\";SE(B2>=6;\"Bom\";\"Rever\"))",
        "tip": "Não use SE aninhado sem precisar. Para a prova, domine primeiro o SE básico.",
        "question": "Se B2=7, a fórmula acima devolve:",
        "options": [
          "Ótimo",
          "Bom",
          "Rever",
          "VERDADEIRO"
        ],
        "correct": 1,
        "explanation": "7 não alcança 8, mas alcança 6."
      }
    ],
    "video": 1
  },
  {
    "title": "O cifrão que salva fórmulas",
    "level": "Avançado",
    "subtitle": "Referências relativas, absolutas e mistas.",
    "lessons": [
      {
        "title": "Referência relativa",
        "intro": "A2 é uma referência relativa. Ao copiar uma fórmula uma linha abaixo, A2 vira A3. Isso permite calcular várias linhas sem reescrever tudo.",
        "steps": [
          "Em B2 digite 10 e C2 digite 3.",
          "Em D2 escreva =B2*C2.",
          "Copie a fórmula para D3: vira =B3*C3."
        ],
        "formula": "=B2*C2 → =B3*C3",
        "tip": "Ao copiar para baixo, a letra costuma ficar, mas o número da linha muda.",
        "question": "Ao copiar =A2+B2 uma linha abaixo, ela vira:",
        "options": [
          "=A2+B2",
          "=A3+B3",
          "=$A$2+$B$2",
          "=B2+C2"
        ],
        "correct": 1,
        "explanation": "Referências relativas acompanham a linha."
      },
      {
        "title": "Referência absoluta",
        "intro": "$A$1 fixa coluna e linha. É útil quando todos os produtos usam uma única taxa de juros ou percentual guardado numa célula fixa.",
        "steps": [
          "Em F1 digite 10%.",
          "Em B2 registre preço 100.",
          "Em C2 use =B2*$F$1 e copie para as outras linhas."
        ],
        "formula": "=B2*$F$1",
        "tip": "Os dois cifrões são necessários para travar coluna e linha.",
        "question": "Qual referência permanece totalmente fixa ao copiar fórmulas?",
        "options": [
          "A1",
          "$A1",
          "A$1",
          "$A$1"
        ],
        "correct": 3,
        "explanation": "$A$1 fixa coluna A e linha 1."
      },
      {
        "title": "Referência mista e F4",
        "intro": "$A1 fixa apenas a coluna. A$1 fixa apenas a linha. O atalho F4 percorre as modalidades conforme a posição do cursor na fórmula.",
        "steps": [
          "Compare A1, $A$1, A$1 e $A1.",
          "Imagine copiar =B2*C$1 para baixo: a linha 1 permanece.",
          "Imagine copiar =$B2*C1 à direita: a coluna B permanece."
        ],
        "formula": "=A1 | =$A$1 | =A$1 | =$A1",
        "tip": "O cifrão fixa o elemento que aparece imediatamente depois dele.",
        "question": "Em B$3, o que permanece fixo?",
        "options": [
          "Coluna B",
          "Linha 3",
          "Coluna e linha",
          "Nada"
        ],
        "correct": 1,
        "explanation": "O cifrão está antes do número 3: fixa apenas a linha."
      }
    ],
    "video": 2
  },
  {
    "title": "Apresentação e gráficos",
    "level": "Avançado",
    "subtitle": "Torne os dados legíveis e identifique visualizações.",
    "lessons": [
      {
        "title": "Formatar células",
        "intro": "Uma planilha correta precisa ser legível. Moeda, porcentagem, casas decimais, alinhamento, borda e quebra de texto mudam a aparência sem necessariamente mudar o valor armazenado.",
        "steps": [
          "Selecione uma célula que contenha 0,25.",
          "Aplique formato de porcentagem: será exibido 25%.",
          "Aplique moeda em uma célula com 1500 e observe R$ 1.500,00."
        ],
        "formula": "Valor armazenado 0,25 → exibição 25%",
        "tip": "Formatação não substitui a matemática: 25 formatado como percentual seria 2500%.",
        "question": "Se a célula contém 0,5 e é formatada como percentual, exibirá:",
        "options": [
          "0,5%",
          "5%",
          "50%",
          "500%"
        ],
        "correct": 2,
        "explanation": "0,5 é metade de 1, isto é, 50%."
      },
      {
        "title": "Formatação condicional",
        "intro": "O Calc pode destacar automaticamente valores que atendem a regras, como notas inferiores a 6 em vermelho, sem alterar a nota real.",
        "steps": [
          "Selecione o intervalo das notas.",
          "Vá em Formatar → Condicional → Condição.",
          "Crie uma regra para valores menores que 6, escolhendo um estilo visual."
        ],
        "formula": "Regra: valor < 6 → destaque",
        "tip": "Não confunda formatação condicional com a função SE: uma muda aparência; a outra devolve um valor.",
        "question": "O que faz a formatação condicional?",
        "options": [
          "Exclui valores baixos",
          "Aplica aparência segundo regras",
          "Transforma texto em número",
          "Cria uma nova planilha"
        ],
        "correct": 1,
        "explanation": "Ela altera visualmente o estilo conforme a condição."
      },
      {
        "title": "Gráficos: qual escolher?",
        "intro": "Gráfico de colunas compara quantidades; linhas mostram evolução temporal; setores representam partes de um todo. O gráfico deve combinar com a pergunta.",
        "steps": [
          "Monte uma tabela com mês e número de atendimentos.",
          "Selecione os dados e use Inserir → Gráfico.",
          "Compare colunas com linha para visualizar evolução."
        ],
        "formula": "Colunas = comparação | Linha = evolução | Setores = proporções",
        "tip": "Um gráfico bonito com escala confusa pode induzir a interpretação errada.",
        "question": "Para mostrar evolução mensal de vendas, qual tipo costuma ser mais adequado?",
        "options": [
          "Linhas",
          "Dispersão 3D aleatória",
          "Pizza com 24 fatias",
          "Organograma"
        ],
        "correct": 0,
        "explanation": "Linhas destacam tendência ao longo do tempo."
      }
    ],
    "video": 3
  },
  {
    "title": "Organização e erros",
    "level": "Avançado",
    "subtitle": "Ordenação, filtros e diagnóstico de fórmulas.",
    "lessons": [
      {
        "title": "Ordenar e filtrar",
        "intro": "Ordenar reorganiza dados; filtrar exibe apenas as linhas que atendem a critérios. Uma seleção parcial antes da ordenação pode separar nomes de suas notas!",
        "steps": [
          "Crie uma tabela com nome, turma e nota.",
          "Selecione toda a tabela e classifique nota em ordem decrescente.",
          "Ative Dados → Autofiltro e filtre apenas uma turma."
        ],
        "formula": "Ordenar ≠ filtrar",
        "tip": "Ao ordenar, selecione a tabela inteira para manter as linhas coerentes.",
        "question": "O autofiltro geralmente:",
        "options": [
          "Apaga linhas",
          "Mostra somente registros que atendem a condições",
          "Recalcula médias automaticamente",
          "Converte dados em gráficos"
        ],
        "correct": 1,
        "explanation": "Ele oculta temporariamente registros fora do filtro."
      },
      {
        "title": "Erros comuns",
        "intro": "Err:509 costuma indicar operador ausente; #DIV/0! indica divisão por zero; #REF! indica referência inválida. Diferencie erro de sintaxe e resultado matemático.",
        "steps": [
          "Experimente uma divisão por zero para reconhecer #DIV/0!.",
          "Confira se intervalos usam : e argumentos usam ;.",
          "Revise parênteses e aspas quando SE não funcionar."
        ],
        "formula": "=10/0 → #DIV/0!",
        "tip": "Não esconda o erro com formatação: primeiro descubra a causa.",
        "question": "Qual situação provoca divisão por zero?",
        "options": [
          "=8/2",
          "=8+0",
          "=8/0",
          "=8*0"
        ],
        "correct": 2,
        "explanation": "O denominador zero não permite divisão."
      },
      {
        "title": "Leitura crítica de planilhas",
        "intro": "A AP2 pode pedir o resultado de uma fórmula, a sequência de passos para criá-la ou uma explicação do comportamento após copiar a fórmula.",
        "steps": [
          "Sublinhe o verbo da pergunta: calcular, contar, comparar ou localizar.",
          "Identifique onde estão os dados e limites.",
          "Escreva a fórmula, depois teste mentalmente com números pequenos."
        ],
        "formula": "Ler → mapear células → escolher função → conferir",
        "tip": "Não chute a função só porque o enunciado fala em total; total de registros pode exigir CONT.VALORES.",
        "question": "Para contar quantos nomes estão preenchidos em A2:A50, a melhor função é:",
        "options": [
          "=MÁXIMO(A2:A50)",
          "=CONT.VALORES(A2:A50)",
          "=SOMA(A2:A50)",
          "=MÉDIA(A2:A50)"
        ],
        "correct": 1,
        "explanation": "CONT.VALORES conta células preenchidas, inclusive texto."
      }
    ],
    "video": 3
  },
  {
    "title": "Casos de prova AP2",
    "level": "Simulado",
    "subtitle": "Raciocínio em situações que misturam fórmulas.",
    "lessons": [
      {
        "title": "Boletim escolar completo",
        "intro": "Para um boletim, a média das avaliações pode ser calculada com MÉDIA; depois, SE e E avaliam simultaneamente nota e presença.",
        "steps": [
          "Considere B2=7, C2=5 e D2=80%.",
          "Calcule a média de B2:C2: resultado 6.",
          "Aplique =SE(E(MÉDIA(B2:C2)>=6;D2>=75%);\"Apto\";\"Rever\")."
        ],
        "formula": "=SE(E(MÉDIA(B2:C2)>=6;D2>=75%);\"Apto\";\"Rever\")",
        "tip": "A questão pode exigir apenas escrever a fórmula, sem acesso ao computador.",
        "question": "Com notas 7 e 5 e presença 80%, a condição acima devolve:",
        "options": [
          "Rever",
          "Apto",
          "75%",
          "11"
        ],
        "correct": 1,
        "explanation": "A média é 6 e a frequência é 80%: ambos os requisitos foram atendidos."
      },
      {
        "title": "Custos e despesas",
        "intro": "Planilhas são úteis para controlar despesas. Multiplicar quantidade pelo preço unitário produz o total; funções resumem grupos de registros.",
        "steps": [
          "B2 contém 3 unidades e C2 preço de 12 reais.",
          "Em D2 calcule =B2*C2 → 36.",
          "Em D10 faça =SOMA(D2:D9) para totalizar a coluna."
        ],
        "formula": "Total da linha: =B2*C2 | Geral: =SOMA(D2:D9)",
        "tip": "O erro mais frequente é somar quantidade com preço em vez de multiplicar.",
        "question": "Se B2=4 e C2=15, =B2*C2 vale:",
        "options": [
          "19",
          "60",
          "11",
          "45"
        ],
        "correct": 1,
        "explanation": "4 unidades a 15 reais = R$ 60."
      },
      {
        "title": "A fórmula copiada",
        "intro": "A questão mostra uma fórmula com um valor fixo: =B2*$F$1. Ao arrastar para baixo, apenas B2 precisa mudar.",
        "steps": [
          "Escreva =B2*$F$1 em C2.",
          "Imagine copiar C2 para C3.",
          "A nova fórmula é =B3*$F$1."
        ],
        "formula": "Em C3: =B3*$F$1",
        "tip": "A referência absoluta trava F1. Não a altere para F2.",
        "question": "Copiar =B2*$F$1 de C2 para C4 produz:",
        "options": [
          "=B4*$F$1",
          "=B2*$F$3",
          "=B4*$F$3",
          "=B2*$F$1"
        ],
        "correct": 0,
        "explanation": "B2 avança duas linhas; F1 permanece fixo."
      }
    ],
    "video": 4
  },
  {
    "title": "Nível hardcore",
    "level": "Desafio",
    "subtitle": "Acima da AP2: raciocine como analista, não como decorador de funções.",
    "lessons": [
      {
        "title": "Critérios combinados",
        "intro": "Não basta escolher a função certa: você precisa entender a lógica por trás das regras. E exige tudo verdadeiro, OU aceita uma alternativa válida.",
        "steps": [
          "Considere uma seleção com nota >=7 OU entrevista >=8.",
          "Use =OU(B2>=7;C2>=8).",
          "Agora exija presença >=75% E uma das notas: =E(D2>=75%;OU(B2>=7;C2>=8))."
        ],
        "formula": "=SE(E(D2>=75%;OU(B2>=7;C2>=8));\"Apto\";\"Rever\")",
        "tip": "Parênteses equilibrados mantêm cada condição em seu lugar.",
        "question": "Se nota=6, entrevista=9 e presença=80%, o exemplo devolve:",
        "options": [
          "Apto",
          "Rever",
          "Erro",
          "80"
        ],
        "correct": 0,
        "explanation": "A presença passa e a entrevista satisfaz a condição OU."
      },
      {
        "title": "Referência mista em uma matriz",
        "intro": "Em tabelas multiplicativas, queremos fixar uma linha e uma coluna diferentes. Com $A2*B$1, a coluna A acompanha as linhas e a linha 1 acompanha as colunas.",
        "steps": [
          "Coloque fatores verticais em A2:A5 e horizontais em B1:E1.",
          "Em B2 use =$A2*B$1.",
          "Copie para a direita e para baixo e veja a matriz preencher."
        ],
        "formula": "=$A2*B$1",
        "tip": "Esse tipo de referência é mais difícil que o absoluto total. Pratique copiando em duas direções.",
        "question": "Ao copiar =$A2*B$1 de B2 para C3, resulta:",
        "options": [
          "=$A3*C$1",
          "=$B3*C$2",
          "=$A2*B$1",
          "=$B2*C$1"
        ],
        "correct": 0,
        "explanation": "A coluna A e a linha 1 ficam fixas; as outras partes se deslocam."
      },
      {
        "title": "Auditoria de resposta",
        "intro": "Uma boa resposta de prova pode ser justificada: mostre a função, o intervalo, os critérios e o resultado previsto. Dominar a explicação evita confundir alternativas quase iguais.",
        "steps": [
          "Encontre o que o enunciado pede: contar, somar, comparar ou classificar.",
          "Escreva fórmula respeitando ;, :, $ e aspas.",
          "Simule com valores extremos: zero, limite exato e valor acima do limite."
        ],
        "formula": "=CONT.SE(B2:B10;\">=6\") ≠ =SOMASE(B2:B10;\">=6\")",
        "tip": "Em critérios, >=6 inclui exatamente 6; >6 não inclui.",
        "question": "Qual critério aceita valor igual a 6?",
        "options": [
          "\">6\"",
          "\"<6\"",
          "\">=6\"",
          "\"<>6\""
        ],
        "correct": 2,
        "explanation": ">=6 representa maior ou igual a 6."
      }
    ],
    "video": 4
  }
];
const VIDEOS=[
  {
    "title": "Calc e a AD2 do CEDERJ 2025.1",
    "creator": "Rubens Guimarães",
    "id": "J0jFEF70r2o",
    "desc": "Aplicação prática em planilha do CEDERJ; referência histórica, não representa a prova de 2026.2."
  },
  {
    "title": "Calc e a AD2 do CEDERJ 2024.2",
    "creator": "Rubens Guimarães",
    "id": "Y8tVHQ3r59k",
    "desc": "Exemplo de elaboração de planilha de edição anterior. Útil para ganhar familiaridade."
  },
  {
    "title": "Formatação condicional no LibreOffice Calc",
    "creator": "Gratis no PC",
    "id": "yAVZQUar7sY",
    "desc": "Tutorial passo a passo com regras, cores, ícones e condições por fórmula."
  },
  {
    "title": "Automatizando planilhas com formatação condicional",
    "creator": "Gratis no PC",
    "id": "nx8OhFOI5h4",
    "desc": "Exemplos de destaque de valores e regras com função SE."
  }
];
const SOURCES=[
  {
    "title": "Guia oficial de Introdução ao Calc",
    "url": "https://books.libreoffice.org/pt-br/GS248/GS24803-GettingStartedWithCalc.html"
  },
  {
    "title": "Fórmulas e funções no Calc",
    "url": "https://books.libreoffice.org/pt-br/CG70/CG7007-FormulasEFun%C3%A7%C3%B5es.html"
  },
  {
    "title": "Referências absolutas e relativas",
    "url": "https://help.libreoffice.org/latest/pt-BR/text/scalc/guide/relativ_absolut_ref.html"
  },
  {
    "title": "Guia de funções do Calc em português",
    "url": "https://documentation.libreoffice.org/assets/Uploads/Documentation/pt-br/OutrosDocs/Guia-de-Introducao-as-Funcoes-do-LibreOffice-Calc.pdf"
  },
  {
    "title": "Revisão da AP2 no CEDERJ",
    "url": "https://graduacao.cederj.edu.br/course/section.php?id=26262"
  },
  {
    "title": "Semana da AP2 no CEDERJ",
    "url": "https://graduacao.cederj.edu.br/course/section.php?id=26263"
  }
];
