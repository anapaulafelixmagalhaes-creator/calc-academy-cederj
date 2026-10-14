'use strict';
const KEY='calc-academy-v1';
let saved=loadSaved();
let selected={},quizChecked={},filterText='',activeFilter='todos';
let exam=null,activeVideo=-1,labIndex=0,labFeedback='';
const MAIN=document.getElementById('main');
function loadSaved(){try{return JSON.parse(localStorage.getItem(KEY))||{done:[],lab:[],font:1,theme:'light'}}catch(e){return {done:[],lab:[],font:1,theme:'light'}}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(saved))}catch(e){}}
function totalLessons(){return MODULES.reduce((n,m)=>n+m.lessons.length,0)}
function flat(){return MODULES.flatMap((m,mi)=>m.lessons.map((l,li)=>({m,mi,l,li,id:mi+'-'+li})))}
function lessonId(mi,li){return mi+'-'+li}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function pct(n,t){return t?Math.round(n/t*100):0}
function btn(label,link,style='btn-outline'){return '<a class="btn '+style+'" href="'+link+'">'+label+'</a>'}

function head(title,subtitle,action=''){return `<div class="pagehead"><div><div class="kicker">CALC ACADEMY / AP2 2026.2</div><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`}

function card(mi){const m=MODULES[mi];const done=m.lessons.filter((l,li)=>saved.done.includes(lessonId(mi,li))).length;return `<article class="module-card"><div class="module-top"><span class="number">${String(mi+1).padStart(2,'0')}</span><span class="tag">${esc(m.level)}</span></div><h3>${esc(m.title)}</h3><p>${esc(m.subtitle)}</p><div class="bottom"><span>${done}/${m.lessons.length} aulas</span><a href="#modulo/${mi}">Explorar módulo →</a></div><div class="mini-progress"><span style="width:${pct(done,m.lessons.length)}%"></span></div></article>`}

function progress(){const t=totalLessons(),n=saved.done.length;document.getElementById('side-count').textContent=n+'/'+t+' aulas';document.getElementById('side-pct').textContent=pct(n,t)+'%';document.getElementById('side-bar').style.width=pct(n,t)+'%'}

function firstIncomplete(){const l=flat().find(x=>!saved.done.includes(x.id));return l?'#aula/'+l.mi+'/'+l.li:'#simulados'}

function pageHome(){
const n=saved.done.length;
MAIN.innerHTML=`<section class="hero"><div><div class="kicker">UMA PLANILHA DE CADA VEZ</div><h1>Aprenda Calc.<br>Domine a prova.</h1><p>Da primeira célula às fórmulas com SE, porcentagens e referências absolutas. Aulas diretas, exemplos reais e exercícios corrigidos. Sem pular etapas.</p><div class="btn-row">${btn(n?'Continuar estudando →':'Começar pela aula 1 →',firstIncomplete(),'btn-primary')}${btn('Ver todos os módulos','#curso','btn-ghost')}</div></div><div class="hero-art" aria-hidden="true"><div class="hero-grid">${'<span></span>'.repeat(16)}</div><div class="hero-number">=</div></div></section>
<div class="stats"><div class="stat"><strong>${MODULES.length}</strong><span>módulos independentes</span></div><div class="stat"><strong>${totalLessons()}</strong><span>aulas com exercícios</span></div><div class="stat"><strong>${pct(n,totalLessons())}%</strong><span>do curso concluído</span></div></div>
<div class="section-title"><div><h2>Seu plano de aprendizagem</h2><p>Você decide o ritmo. O progresso fica salvo neste aparelho.</p></div><a class="text-link" href="#curso">Explorar tudo →</a></div><div class="module-grid">${MODULES.slice(0,6).map((m,i)=>card(i)).join('')}</div>
<div class="notice"><strong>Sobre a AP2 de Introdução à Informática</strong>O material de revisão do CEDERJ abrange o programa inteiro. Este projeto trabalha exclusivamente a parte de LibreOffice Calc, sobretudo os encontros 5 e 6. Não é uma prova oficial e os exemplos são autorais.</div>`;
}

function pageCourse(){
MAIN.innerHTML=head('Trilha completa','12 módulos organizados do primeiro clique à resolução de problemas avançados.')+
`<div class="controlbar"><input class="search" id="course-search" type="search" placeholder="Buscar fórmula, função ou assunto..." aria-label="Buscar aulas" value="${esc(filterText)}"><div class="pillbar"><button class="filter-pill ${activeFilter==='todos'?'selected':''}" data-filter="todos">Todos</button><button class="filter-pill ${activeFilter==='pendentes'?'selected':''}" data-filter="pendentes">Pendentes</button><button class="filter-pill ${activeFilter==='concluidos'?'selected':''}" data-filter="concluidos">Concluídos</button></div></div><div class="module-grid" id="course-cards"></div><div class="notice"><strong>Dica de estudo</strong>Leia, refaça a fórmula na prática e responda à questão. A resposta correta marca a aula como concluída.</div>`;filterModules();
}

function filterModules(){
const target=document.getElementById('course-cards');if(!target)return;
const norm=x=>x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const arr=MODULES.map((m,i)=>({m,i})).filter(({m,i})=>{
const matches=norm(m.title+' '+m.subtitle+' '+m.lessons.map(l=>l.title+' '+l.intro+' '+l.formula).join(' ')).includes(norm(filterText));
const count=m.lessons.filter((l,j)=>saved.done.includes(lessonId(i,j))).length;
return matches && (activeFilter==='todos'||(activeFilter==='concluidos'?count===m.lessons.length:count<m.lessons.length));
});target.innerHTML=arr.length?arr.map(x=>card(x.i)).join(''):'<p class="empty">Nenhum módulo corresponde a essa busca. Tente outra palavra.</p>';
}

function pageModule(mi){
const m=MODULES[mi];if(!m){location.hash='#curso';return}
MAIN.innerHTML=`<a class="back" href="#curso">← Voltar aos módulos</a>${head(esc(m.title),esc(m.subtitle),`<span class="tag">${esc(m.level)}</span>`)}<div class="notice"><strong>Como estudar este módulo</strong>Abra cada aula, leia o exemplo, execute mentalmente a fórmula e responda à questão para registrar a conclusão.</div><div class="section-title"><div><h2>Aulas deste módulo</h2><p>${m.lessons.length} etapas com explicação, prática e correção.</p></div></div><ol class="lesson-index">${m.lessons.map((l,li)=>`<li><a href="#aula/${mi}/${li}"><span><span class="number" style="font-size:.85rem">${String(li+1).padStart(2,'0')}</span>&nbsp;&nbsp;${esc(l.title)}</span><span class="${saved.done.includes(lessonId(mi,li))?'done':'muted'}">${saved.done.includes(lessonId(mi,li))?'✓ Concluída':'Abrir →'}</span></a></li>`).join('')}</ol><div class="section-title"><h2>Vídeo complementar</h2></div><div class="notice">${esc(VIDEOS[m.video%VIDEOS.length].title)} · <a href="https://www.youtube.com/watch?v=${VIDEOS[m.video%VIDEOS.length].id}" target="_blank" rel="noopener noreferrer">Assistir no YouTube ↗</a></div>${btn('Praticar no laboratório','#laboratorio','btn-dark')}`;
}
function pageLesson(mi,li){
const m=MODULES[mi],l=m?.lessons[li];if(!l){location.hash='#curso';return}
const id=lessonId(mi,li),sel=selected[id],checked=quizChecked[id],done=saved.done.includes(id);
const next=li+1<m.lessons.length?'#aula/'+mi+'/'+(li+1):mi+1<MODULES.length?'#modulo/'+(mi+1):'#simulados';
const prev=li>0?'#aula/'+mi+'/'+(li-1):'#modulo/'+mi;
MAIN.innerHTML=`<a class="back" href="#modulo/${mi}">← ${esc(m.title)}</a><div class="lesson-layout"><div class="lesson-main"><article class="reading"><div class="kicker">MÓDULO ${mi+1} / AULA ${li+1} DE ${m.lessons.length}</div><h1>${esc(l.title)}</h1><p class="lead">${esc(l.intro)}</p><h2>Faça junto, passo a passo</h2><ol class="steps">${l.steps.map(s=>'<li>'+esc(s)+'</li>').join('')}</ol><h2>Exemplo que você precisa entender</h2><div class="formula"><code>${esc(l.formula)}</code><button class="copy-btn" data-copy="${encodeURIComponent(l.formula)}">Copiar</button></div><div class="notice"><strong>Atenção à pegadinha</strong>${esc(l.tip)}</div><div class="btn-row">${btn('Treinar fórmulas →','#laboratorio','btn-outline')}${btn('Ver vídeos →','#biblioteca','btn-outline')}</div></article>
<section class="question-card" id="lesson-question"><div class="kicker">CONFIRME O APRENDIZADO</div><h3>${esc(l.question)}</h3><div class="choices" role="group" aria-label="Alternativas">${l.options.map((o,i)=>`<button class="choice ${sel===i?'selected':''}" data-choice="${i}" data-mi="${mi}" data-li="${li}" aria-pressed="${sel===i}"><span class="letter">${String.fromCharCode(65+i)}</span>${esc(o)}</button>`).join('')}</div><button class="btn btn-dark" id="check-lesson" data-mi="${mi}" data-li="${li}" ${sel===undefined?'disabled':''}>Corrigir resposta</button>${checked?`<div class="feedback ${sel===l.correct?'':'bad'}"><strong>${sel===l.correct?'✓ Correto. Aula concluída!':'Ainda não. Revise a explicação.'}</strong>${esc(l.explanation)}</div>`:''}</section>
<div class="lesson-bottom">${btn('← Aula anterior',prev)}${btn(done?'Próxima etapa ✓':'Próxima aula →',next,'btn-dark')}</div></div><aside class="lesson-aside"><div class="eyebrow">NESTE MÓDULO</div>${m.lessons.map((x,i)=>`<a class="${i===li?'current':''}" href="#aula/${mi}/${i}">${saved.done.includes(lessonId(mi,i))?'✓ ':''}${i+1}. ${esc(x.title)}</a>`).join('')}<div class="mini-progress"><span style="width:${pct(m.lessons.filter((x,i)=>saved.done.includes(lessonId(mi,i))).length,m.lessons.length)}%"></span></div><p class="fine" style="margin-top:16px">As respostas e os exemplos são educativos, não retirados da AP2 de 2026.2.</p></aside></div>`;
}

function choose(mi,li,i){
const id=lessonId(mi,li);selected[id]=i;quizChecked[id]=false;
document.querySelectorAll('[data-choice]').forEach(b=>{const on=Number(b.dataset.choice)===i;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))});
const old=document.querySelector('#lesson-question .feedback');if(old)old.remove();
const check=document.getElementById('check-lesson');if(check)check.disabled=false;
}

function checkLesson(mi,li){
const id=lessonId(mi,li),l=MODULES[mi].lessons[li];if(selected[id]===undefined)return;
quizChecked[id]=true;
if(selected[id]===l.correct&&!saved.done.includes(id)){saved.done.push(id);save();progress();toast('Aula concluída. Muito bem.')}
pageLesson(mi,li);
const card=document.getElementById('lesson-question');if(card)card.scrollIntoView({block:'nearest',behavior:'smooth'});
}
const LABS=[
  {
    "title": "Multiplicação de custo",
    "goal": "Na célula D2, calcule o valor de 3 itens de R$ 20. O número de itens está em B2 e o preço unitário em C2.",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Item",
        "Quantidade",
        "Preço",
        "Total"
      ],
      [
        "Canetas",
        "3",
        "20",
        "?"
      ],
      [
        "Papel",
        "5",
        "10",
        ""
      ],
      [
        "Caderno",
        "2",
        "25",
        ""
      ]
    ],
    "solution": [
      "=B2*C2"
    ],
    "answer": "60",
    "why": "Multiplica a quantidade B2 (3) pelo preço unitário C2 (20). O asterisco significa multiplicação."
  },
  {
    "title": "Soma de um intervalo",
    "goal": "Escreva uma fórmula em B5 para somar os valores B2, B3 e B4.",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Dia",
        "Gastos",
        "",
        ""
      ],
      [
        "Segunda",
        "4",
        "",
        ""
      ],
      [
        "Terça",
        "6",
        "",
        ""
      ],
      [
        "Quarta",
        "10",
        "",
        ""
      ],
      [
        "Total",
        "?",
        "",
        ""
      ]
    ],
    "solution": [
      "=SOMA(B2:B4)",
      "=B2+B3+B4"
    ],
    "answer": "20",
    "why": "B2:B4 inclui todos os valores de B2 até B4. A soma é 4+6+10=20."
  },
  {
    "title": "Média de notas",
    "goal": "As notas estão de C2 até C4. Calcule a média na célula C5.",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Aluno",
        "",
        "Nota",
        ""
      ],
      [
        "Ana",
        "",
        "6",
        ""
      ],
      [
        "Pedro",
        "",
        "7",
        ""
      ],
      [
        "Luiza",
        "",
        "8",
        ""
      ],
      [
        "Média",
        "",
        "?",
        ""
      ]
    ],
    "solution": [
      "=MÉDIA(C2:C4)",
      "=(C2+C3+C4)/3"
    ],
    "answer": "7",
    "why": "As notas 6, 7 e 8 somam 21; dividindo por 3 dá média 7."
  },
  {
    "title": "Menor quantidade",
    "goal": "Qual função em D5 retorna o menor valor do intervalo D2:D4?",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Turma",
        "",
        "",
        "Alunos"
      ],
      [
        "A",
        "",
        "",
        "28"
      ],
      [
        "B",
        "",
        "",
        "19"
      ],
      [
        "C",
        "",
        "",
        "35"
      ],
      [
        "Menor",
        "",
        "",
        "?"
      ]
    ],
    "solution": [
      "=MÍNIMO(D2:D4)"
    ],
    "answer": "19",
    "why": "MÍNIMO procura o menor número do intervalo; neste caso, 19."
  },
  {
    "title": "Condição com SE",
    "goal": "Em C2, retorne 'Aprovado' quando B2 for pelo menos 6; caso contrário, 'Rever'.",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Aluno",
        "Nota",
        "Status",
        ""
      ],
      [
        "Ana",
        "7",
        "?",
        ""
      ],
      [
        "João",
        "4",
        "",
        ""
      ],
      [
        "Rita",
        "8",
        "",
        ""
      ]
    ],
    "solution": [
      "=SE(B2>=6;\"Aprovado\";\"Rever\")"
    ],
    "answer": "Aprovado",
    "why": "B2=7 satisfaz >=6. A função SE retorna o texto do segundo argumento."
  },
  {
    "title": "Copiar com taxa fixa",
    "goal": "Em C3, depois de copiar C2 (=B2*$H$1) uma linha abaixo, como ficará a fórmula?",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Produto",
        "Preço",
        "Imposto",
        ""
      ],
      [
        "A",
        "100",
        "=B2*$H$1",
        ""
      ],
      [
        "B",
        "60",
        "?",
        ""
      ],
      [
        "C",
        "40",
        "",
        ""
      ]
    ],
    "solution": [
      "=B3*$H$1"
    ],
    "answer": "=B3*$H$1",
    "why": "B2 passa para B3 porque é relativo. $H$1 permanece imutável porque é absoluto."
  },
  {
    "title": "Contar pelo critério",
    "goal": "Quantas notas do intervalo B2:B5 são maiores ou iguais a 6? Escreva a fórmula.",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Aluno",
        "Nota",
        "",
        ""
      ],
      [
        "Ana",
        "5",
        "",
        ""
      ],
      [
        "João",
        "7",
        "",
        ""
      ],
      [
        "Lia",
        "8",
        "",
        ""
      ],
      [
        "Rita",
        "3",
        "",
        ""
      ]
    ],
    "solution": [
      "=CONT.SE(B2:B5;\">=6\")"
    ],
    "answer": "2",
    "why": "A condição >=6 aceita 7 e 8. A função CONT.SE conta dois resultados."
  },
  {
    "title": "Duas exigências simultâneas",
    "goal": "Em D2, mostre 'Apto' quando nota B2 >=6 E frequência C2 >=75%; caso contrário, 'Rever'.",
    "cols": [
      "A",
      "B",
      "C",
      "D"
    ],
    "rows": [
      [
        "Aluno",
        "Nota",
        "Frequência",
        "Status"
      ],
      [
        "Ana",
        "7",
        "80%",
        "?"
      ],
      [
        "João",
        "8",
        "60%",
        ""
      ],
      [
        "Lia",
        "5",
        "90%",
        ""
      ]
    ],
    "solution": [
      "=SE(E(B2>=6;C2>=75%);\"Apto\";\"Rever\")"
    ],
    "answer": "Apto",
    "why": "E exige as duas condições verdadeiras. Ana tem nota 7 e frequência 80%, portanto é apta."
  }
];
function formulaNorm(f){return String(f).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/\s+/g,'').replace(/[“”]/g,'"')}

function sheetOf(t){return `<div class="sheetwrap"><table class="sheet"><thead><tr><th></th>${t.cols.map(c=>'<th>'+esc(c)+'</th>').join('')}</tr></thead><tbody>${t.rows.map((r,i)=>'<tr><td class="rownumber">'+(i+1)+'</td>'+r.map((v,j)=>'<td class="'+(v==='?'?'cell-selected':'')+'">'+esc(v)+'</td>').join('')+'</tr>').join('')}</tbody></table></div>`}

function pageLab(){
const t=LABS[labIndex];MAIN.innerHTML=head('Laboratório de fórmulas','Uma planilha simulada para raciocinar e escrever as fórmulas. A correção reconhece as respostas cadastradas.')+
`<div class="notice"><strong>Como funciona</strong>Este laboratório é um corretor de oito desafios guiados, não um motor completo do LibreOffice. Use a sintaxe do Calc brasileiro: sinal =, intervalos com : e argumentos com ;.</div><section class="lab-card"><div class="inline-actions"><span class="tag">DESAFIO ${labIndex+1} DE ${LABS.length}</span><span class="tag">${saved.lab?.includes(labIndex)?'✓ Já resolvido':'Prática guiada'}</span></div><h2 class="chapter-head">${esc(t.title)}</h2><p>${esc(t.goal)}</p>${sheetOf(t)}<label class="input-label" for="lab-input">Digite sua fórmula</label><input class="field" id="lab-input" type="text" spellcheck="false" autocomplete="off" autocapitalize="off" placeholder="=..."><div class="formula-help">Para saber a solução, tente resolver e use “Revelar explicação”.</div><div class="btn-row" style="margin-top:14px"><button class="btn btn-dark" id="lab-check">Verificar fórmula</button><button class="btn btn-outline" id="lab-reveal">Revelar explicação</button></div><div id="lab-feedback">${labFeedback}</div></section><div class="lesson-bottom"><button class="btn btn-outline" id="lab-prev" ${labIndex===0?'disabled':''}>← Anterior</button><span class="fine">Resolvidos: ${saved.lab?.length||0}/${LABS.length}</span><button class="btn btn-dark" id="lab-next" ${labIndex===LABS.length-1?'disabled':''}>Próximo desafio →</button></div>`;
}

function checkLab(reveal=false){
const t=LABS[labIndex],input=document.getElementById('lab-input');const answer=formulaNorm(input.value);
const ok=t.solution.some(x=>formulaNorm(x)===answer);
if(ok&&!saved.lab.includes(labIndex)){saved.lab.push(labIndex);save()}
labFeedback=`<div class="feedback ${ok||reveal?'':'bad'}"><strong>${ok?'✓ Fórmula correta. Resultado: '+esc(t.answer):reveal?'Solução comentada':'Não corresponde à solução esperada.'}</strong>${ok||reveal?`<p>${esc(t.why)}</p><code class="inline-code">${esc(t.solution[0])}</code>`:'Revise o intervalo, os separadores, os cifrões e as aspas. Você pode tentar novamente.'}</div>`;
pageLab();if(!reveal)document.getElementById('lab-input').value=input.value;
}
function examStore(){try{localStorage.setItem('calc-academy-exam-v1',JSON.stringify(exam))}catch(e){}}

function examLoad(){try{return JSON.parse(localStorage.getItem('calc-academy-exam-v1'))}catch(e){return null}}

function pageSimulados(){
const last=saved.lastScore;
MAIN.innerHTML=head('Simulados AP2','Questões autorais de leitura de planilhas, fórmulas e raciocínio. Correção completa ao final.')+
`<div class="stats"><div class="stat"><strong>12</strong><span>questões / treino rápido</span></div><div class="stat"><strong>20</strong><span>questões / prova dirigida</span></div><div class="stat"><strong>36</strong><span>questões / revisão geral</span></div></div>
<div class="section-title"><div><h2>Escolha o seu desafio</h2><p>A avaliação sorteia questões entre os 12 módulos. Um treino equivocado pode ser refeito com outra ordem.</p></div></div>
<div class="module-grid">${[12,20,36].map((n,i)=>`<section class="module-card"><div class="module-top"><span class="number">0${i+1}</span><span class="tag">${['AQUECIMENTO','AP2 INTENSIVO','HARDCORE'][i]}</span></div><h3>${n} questões</h3><p>${['Treino breve para fixar conceitos e reconhecer fórmulas.','Simulação equilibrada das habilidades centrais do Calc.','Revisão completa de todos os conteúdos desta trilha.'][i]}</p><div class="bottom"><span>Correção detalhada</span><button class="btn btn-dark" data-start-exam="${n}">Iniciar →</button></div></section>`).join('')}</div>
${exam&&!exam.finished?`<div class="notice"><strong>Há um simulado em andamento</strong>Você pode voltar a ele sem perder suas respostas. ${btn('Retomar simulado','#prova','btn-dark')}</div>`:''}${last?`<div class="notice"><strong>Última nota: ${last.correct}/${last.total} (${pct(last.correct,last.total)}%)</strong>As questões e justificativas podem ser revisadas ao terminar uma nova prova.</div>`:''}<div class="notice"><strong>Importante</strong>Não há confirmação de que a prova oficial terá estas quantidades ou este formato de questões. Nosso simulado é uma ferramenta de estudo, não previsão de enunciados.</div>`;
}

function startExam(n){const all=flat().map(x=>x.id);for(let i=all.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[all[i],all[j]]=[all[j],all[i]]}exam={ids:all.slice(0,n),answers:{},index:0,started:Date.now(),finished:false};examStore();location.hash='#prova';if(location.hash==='#prova')pageExam()}

function pageExam(){
if(!exam){location.hash='#simulados';return}
if(exam.finished){pageResult();return}
const id=exam.ids[exam.index],q=flat().find(x=>x.id===id),a=exam.answers[id],count=Object.keys(exam.answers).length;
MAIN.innerHTML=`<a href="#simulados" class="back">← Simulados</a><section class="sim-card"><div class="inline-actions"><div><div class="kicker">SIMULADO EM ANDAMENTO</div><h2>Questão ${exam.index+1} de ${exam.ids.length}</h2></div><div class="timing">${count}/${exam.ids.length} respondidas</div></div><div class="progress-track" style="margin:20px 0"><div class="progress-fill" style="width:${pct(count,exam.ids.length)}%"></div></div><div class="sim-meta"><span>Módulo ${q.mi+1}: ${esc(q.m.title)}</span><span>AP2 Calc · Prática</span></div><h3 style="font-size:1.45rem;line-height:1.5;margin:17px 0">${esc(q.l.question)}</h3><div class="choices">${q.l.options.map((o,i)=>`<button class="choice ${a===i?'selected':''}" data-exam-answer="${i}" aria-pressed="${a===i}"><span class="letter">${String.fromCharCode(65+i)}</span>${esc(o)}</button>`).join('')}</div><div class="lesson-bottom"><button class="btn btn-outline" id="exam-prev" ${exam.index===0?'disabled':''}>← Anterior</button>${exam.index===exam.ids.length-1?`<button class="btn btn-dark" id="exam-finish">Finalizar e corrigir →</button>`:`<button class="btn btn-dark" id="exam-next">Próxima →</button>`}</div><p class="fine" style="margin:16px 0 0">As respostas são salvas neste navegador. Volte às questões anteriores quando quiser.</p></section>`;
}

function examAnswer(i){if(!exam)return;const id=exam.ids[exam.index];exam.answers[id]=i;examStore();document.querySelectorAll('[data-exam-answer]').forEach(b=>{const on=Number(b.dataset.examAnswer)===i;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))});const c=Object.keys(exam.answers).length;document.querySelector('.timing').textContent=c+'/'+exam.ids.length+' respondidas';document.querySelector('.sim-card .progress-fill').style.width=pct(c,exam.ids.length)+'%'}

function examMove(dir){exam.index=Math.max(0,Math.min(exam.ids.length-1,exam.index+dir));examStore();pageExam();window.scrollTo({top:0,behavior:'instant'})}

function examFinish(){
if(!exam)return;exam.finished=true;exam.finishedAt=Date.now();let correct=0;for(const id of exam.ids){const q=flat().find(x=>x.id===id);if(exam.answers[id]===q.l.correct)correct++}saved.lastScore={correct,total:exam.ids.length,at:Date.now()};save();examStore();location.hash='#resultado';pageResult()}

function pageResult(){
if(!exam||!exam.finished){location.hash='#simulados';return}const items=exam.ids.map((id,i)=>{const q=flat().find(x=>x.id===id);return {...q,index:i,answer:exam.answers[id],ok:exam.answers[id]===q.l.correct}});const correct=items.filter(x=>x.ok).length,percent=pct(correct,items.length);
MAIN.innerHTML=head('Resultado do simulado','Sua nota é um diagnóstico de estudo, não uma previsão oficial de aprovação.')+
`<div class="sim-card"><div class="kicker">SEU DESEMPENHO</div><div class="score">${percent}%</div><h2>${correct} acertos de ${items.length} questões</h2><p class="muted">${percent>=85?'Bom domínio dos conceitos. Revise os erros para consolidar.':percent>=60?'Você está avançando. Refaça principalmente os módulos das questões erradas.':'Recomece pelos fundamentos e pelas aulas associadas às suas dificuldades.'}</p><div class="btn-row">${btn('Novo simulado','#simulados','btn-dark')}${btn('Revisar todas as aulas','#curso','btn-outline')}</div></div><div class="section-title"><div><h2>Correção comentada</h2><p>Abra cada questão para entender o acerto ou erro.</p></div></div><div class="result-review">${items.map(x=>`<details ${x.ok?'':'open'}><summary>${x.ok?'✓':'✕'} Questão ${x.index+1} · ${esc(x.l.title)}</summary><p><strong>${esc(x.l.question)}</strong></p><p>Sua resposta: ${x.answer===undefined?'Não respondeu':esc(x.l.options[x.answer])}</p><p>Resposta correta: <strong>${esc(x.l.options[x.l.correct])}</strong></p><p>${esc(x.l.explanation)}</p><a class="text-link" href="#aula/${x.mi}/${x.li}">Revisar a aula →</a></details>`).join('')}</div>`;
}
function pageLibrary(){
MAIN.innerHTML=head('Biblioteca de vídeos','Aulas externas verificadas pelo título e descrição, complementares ao curso.')+
`<div class="notice"><strong>Como usar</strong>Leia a aula, pratique e depois assista ao vídeo relacionado. Os vídeos antigos do CEDERJ mostram atividades de outras edições.</div><div class="video-grid">${VIDEOS.map((v,i)=>`<article class="video-card"><div class="video-thumb" id="video-box-${i}">${activeVideo===i?`<iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1" title="${esc(v.title)}" allow="autoplay;encrypted-media;picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`:`<button class="play" data-play-video="${i}" aria-label="Reproduzir ${esc(v.title)}">▶</button>`}</div><div class="video-card-body"><div class="creator">${esc(v.creator)} · YOUTUBE</div><h3>${esc(v.title)}</h3><p>${esc(v.desc)}</p><a class="text-link" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer">Abrir no YouTube ↗</a></div></article>`).join('')}</div><div class="notice"><strong>Conexão de internet</strong>O reprodutor depende de acesso ao YouTube. As aulas escritas, questões e simulados não dependem desses vídeos.</div>`;
}

function pageSources(){
MAIN.innerHTML=head('Fontes e critérios','Materiais oficiais e referências transparentes para conferir os conceitos.')+
`<div class="notice"><strong>Rigor pedagógico</strong>O plano anterior da disciplina inclui Calc nos encontros 5 e 6. Questões e exemplos são autorais. Não temos acesso antecipado à AP2.</div><div class="section-title"><div><h2>Leituras recomendadas</h2><p>O material do LibreOffice é a referência principal de sintaxe e funcionamento.</p></div></div><div class="resource-list">${SOURCES.map(s=>`<a class="resource" href="${s.url}" target="_blank" rel="noopener noreferrer"><span>${esc(s.title)}</span><span>↗</span></a>`).join('')}</div><div class="section-title"><h2>Mapa para a prova</h2></div><section class="reading"><p>Nos materiais analisados do CEDERJ 2026.2, o encontro 5 apresenta Calc e exercícios de planilha; o encontro 6 contempla funções, lógica, referências absolutas e relativas e formatação condicional.</p><p>A disciplina tem outros assuntos que este curso independente deliberadamente não aborda. Os últimos tópicos são aprofundamento, não garantia de cobrança.</p></section>`;
}

function toast(msg){const e=document.getElementById('toast');e.textContent=msg;e.classList.add('visible');clearTimeout(window._toastTimer);window._toastTimer=setTimeout(()=>e.classList.remove('visible'),2500)}

function closeMenu(){const s=document.getElementById('sidebar');s.classList.remove('open');const overlay=document.getElementById('overlay');if(overlay)overlay.classList.remove('open');document.getElementById('menu-toggle').setAttribute('aria-expanded','false')}
function render(){
const path=decodeURIComponent((location.hash||'#inicio').substring(1)),parts=path.split('/'),p=parts[0];
document.querySelectorAll('[data-page]').forEach(a=>a.classList.toggle('active',a.dataset.page===({'modulo':'curso','aula':'curso','prova':'simulados','resultado':'simulados'}[p]||p)));
const mi=Number(parts[1]),li=Number(parts[2]);
switch(p){case 'inicio':pageHome();break;case 'curso':pageCourse();break;case 'modulo':pageModule(mi);break;case 'aula':pageLesson(mi,li);break;case 'laboratorio':pageLab();break;case 'simulados':pageSimulados();break;case 'prova':pageExam();break;case 'resultado':pageResult();break;case 'biblioteca':pageLibrary();break;case 'fontes':pageSources();break;default:location.hash='#inicio';return}
progress();closeMenu();window.scrollTo(0,0);
}

function init(){
saved.done=Array.isArray(saved.done)?saved.done.filter(x=>flat().some(y=>y.id===x)):[];
saved.lab=Array.isArray(saved.lab)?saved.lab:[];
saved.font=Number.isFinite(saved.font)?Math.min(1.28,Math.max(.9,saved.font)):1;
document.documentElement.style.setProperty('--font-scale',saved.font);
document.documentElement.dataset.theme=saved.theme==='dark'?'dark':'light';
exam=examLoad();
const overlay=document.createElement('div');overlay.className='offscreen';overlay.id='overlay';overlay.setAttribute('aria-hidden','true');document.body.appendChild(overlay);
document.getElementById('menu-toggle').addEventListener('click',()=>{const s=document.getElementById('sidebar'),open=!s.classList.contains('open');s.classList.toggle('open',open);overlay.classList.toggle('open',open);document.getElementById('menu-toggle').setAttribute('aria-expanded',String(open))});
overlay.addEventListener('click',closeMenu);
document.getElementById('theme-toggle').addEventListener('click',()=>{saved.theme=saved.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=saved.theme;save()});
document.getElementById('font-increase').addEventListener('click',()=>{saved.font=Math.min(1.28,Math.round((saved.font+.08)*100)/100);document.documentElement.style.setProperty('--font-scale',saved.font);save()});
document.getElementById('font-decrease').addEventListener('click',()=>{saved.font=Math.max(.9,Math.round((saved.font-.08)*100)/100);document.documentElement.style.setProperty('--font-scale',saved.font);save()});
window.addEventListener('hashchange',render);
document.addEventListener('input',e=>{if(e.target.id==='course-search'){filterText=e.target.value;filterModules()}});
document.addEventListener('click',async e=>{
const el=e.target.closest('button');if(!el)return;
if(el.dataset.filter){activeFilter=el.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('selected',b.dataset.filter===activeFilter));filterModules()}
if(el.dataset.choice!==undefined)choose(Number(el.dataset.mi),Number(el.dataset.li),Number(el.dataset.choice));
if(el.id==='check-lesson')checkLesson(Number(el.dataset.mi),Number(el.dataset.li));
if(el.dataset.copy){const val=decodeURIComponent(el.dataset.copy);try{await navigator.clipboard.writeText(val);toast('Fórmula copiada')}catch(err){toast('Selecione e copie a fórmula manualmente')}}
if(el.id==='lab-check')checkLab(false);
if(el.id==='lab-reveal')checkLab(true);
if(el.id==='lab-next'&&labIndex<LABS.length-1){labIndex++;labFeedback='';pageLab()}
if(el.id==='lab-prev'&&labIndex>0){labIndex--;labFeedback='';pageLab()}
if(el.dataset.startExam){startExam(Number(el.dataset.startExam))}
if(el.dataset.examAnswer!==undefined)examAnswer(Number(el.dataset.examAnswer));
if(el.id==='exam-prev')examMove(-1);
if(el.id==='exam-next')examMove(1);
if(el.id==='exam-finish')examFinish();
if(el.dataset.playVideo!==undefined){activeVideo=Number(el.dataset.playVideo);pageLibrary()}
});
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
render();
}
init();
