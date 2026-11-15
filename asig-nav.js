/* Barra superior común de las guías GIEyA: portada de la asignatura, salto a otras asignaturas y lista de temas. */
(function(){
  if(window.__asigNav) return; window.__asigNav=1;
  var HUB='https://helionacon-ui.github.io/GIEIA-UPCT/';
  var LIST=[[1, "Matemáticas I", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-i/"], [1, "Matemáticas II", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-ii/"], [1, "Física I", "https://helionacon-ui.github.io/GIEIA-UPCT/fisica-i/"], [1, "Física II", "https://helionacon-ui.github.io/GIEIA-UPCT/fisica-ii/"], [1, "Química general", "https://helionacon-ui.github.io/GIEIA-UPCT/quimica-general/"], [1, "Informática aplicada", "https://helionacon-ui.github.io/Inform-tica-Aplicada/"], [1, "Expresión gráfica", "https://helionacon-ui.github.io/Expresi-n-gr-fica/"], [1, "Estadística aplicada", "https://helionacon-ui.github.io/GIEIA-UPCT/estadistica-aplicada/"], [1, "Ciencia e ingeniería de materiales", "https://helionacon-ui.github.io/Ciencia-e-ingenier-a-de-materiales/"], [1, "Análisis de circuitos", "https://helionacon-ui.github.io/GIEIA-UPCT/analisis-de-circuitos/"], [2, "Matemáticas III", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-iii/"], [2, "Fundamentos de electrónica industrial", "https://helionacon-ui.github.io/GIEIA-UPCT/electronica-industrial/"], [2, "Mecánica de máquinas", "https://helionacon-ui.github.io/GIEIA-UPCT/mecanica-de-maquinas/"], [2, "Termodinámica aplicada", "https://helionacon-ui.github.io/GIEIA-UPCT/termodinamica-aplicada/"], [2, "Resistencia de materiales", "https://helionacon-ui.github.io/GIEIA-UPCT/resistencia-de-materiales/"], [2, "Inglés técnico", "https://helionacon-ui.github.io/GIEIA-UPCT/ingles-tecnico/"], [2, "Mecánica de fluidos", "https://helionacon-ui.github.io/GIEIA-UPCT/mecanica-de-fluidos/"], [2, "Electrotecnia", "https://helionacon-ui.github.io/GIEIA-UPCT/electrotecnia/"], [2, "Diseño y simulación electrónica", "https://helionacon-ui.github.io/GIEIA-UPCT/dise-o-y-simulacion-electronica/"], [2, "Transmisión del calor", "https://helionacon-ui.github.io/GIEIA-UPCT/transmision-del-calor/"], [2, "Regulación automática", "https://helionacon-ui.github.io/GIEIA-UPCT/regulacion-automatica/"], [2, "Organización y gestión de empresas", "https://helionacon-ui.github.io/GIEIA-UPCT/organizacion-gestion-empresas/"], [3, "Control por computador", "https://helionacon-ui.github.io/Control-por-computador-GIEIA/"], [3, "Tecnología medioambiental", "https://helionacon-ui.github.io/Tecnolog-a-Medioambiental/"], [3, "Electrónica digital", "https://helionacon-ui.github.io/Electr-nica-digital/"], [3, "Modelado y simulación de sistemas", "https://helionacon-ui.github.io/Modelado-y-Simulaci-n-de-Sistemas/"], [3, "Electrónica analógica", "https://helionacon-ui.github.io/GIEIA-UPCT/electronica-analogica/"], [3, "Sistemas basados en microprocesador", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-microprocesador/"], [3, "Programación de sistemas en tiempo real", "https://helionacon-ui.github.io/GIEIA-UPCT/programacion-tiempo-real/"], [3, "Sistemas robotizados", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-robotizados/"], [3, "Automatización industrial", "https://helionacon-ui.github.io/GIEIA-UPCT/automatizacion-industrial/"], [3, "Ingeniería de control", "https://helionacon-ui.github.io/Ingenieria-de-control/"], [3, "Ingeniería de los sistemas de producción", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-produccion/"]];
  var PROG={"mates1-progreso": ["Matemáticas I", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-i/", 13], "matematicas2-progreso": ["Matemáticas II", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-ii/", 5], "fisica1-progreso": ["Física I", "https://helionacon-ui.github.io/GIEIA-UPCT/fisica-i/", 11], "fisica2-progreso": ["Física II", "https://helionacon-ui.github.io/GIEIA-UPCT/fisica-ii/", 9], "quimica-progreso": ["Química general", "https://helionacon-ui.github.io/GIEIA-UPCT/quimica-general/", 11], "informatica-progreso": ["Informática aplicada", "https://helionacon-ui.github.io/Inform-tica-Aplicada/", 9], "eg-progreso": ["Expresión gráfica", "https://helionacon-ui.github.io/Expresi-n-gr-fica/", 14], "estadistica-progreso": ["Estadística aplicada", "https://helionacon-ui.github.io/GIEIA-UPCT/estadistica-aplicada/", 8], "materiales-progreso": ["Ciencia e ingeniería de materiales", "https://helionacon-ui.github.io/Ciencia-e-ingenier-a-de-materiales/", 16], "circuitos-progreso": ["Análisis de circuitos", "https://helionacon-ui.github.io/GIEIA-UPCT/analisis-de-circuitos/", 10], "matematicas3-progreso": ["Matemáticas III", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-iii/", 6], "fei-progreso": ["Fundamentos de electrónica industrial", "https://helionacon-ui.github.io/GIEIA-UPCT/electronica-industrial/", 5], "mecmaq-progreso": ["Mecánica de máquinas", "https://helionacon-ui.github.io/GIEIA-UPCT/mecanica-de-maquinas/", 8], "resmat-progreso": ["Resistencia de materiales", "https://helionacon-ui.github.io/GIEIA-UPCT/resistencia-de-materiales/", 10], "ingles-tecnico-progreso": ["Inglés técnico", "https://helionacon-ui.github.io/GIEIA-UPCT/ingles-tecnico/", 10], "fluidos-progreso": ["Mecánica de fluidos", "https://helionacon-ui.github.io/GIEIA-UPCT/mecanica-de-fluidos/", 10], "electrotecnia-progreso": ["Electrotecnia", "https://helionacon-ui.github.io/GIEIA-UPCT/electrotecnia/", 8], "dse-progreso": ["Diseño y simulación electrónica", "https://helionacon-ui.github.io/GIEIA-UPCT/dise-o-y-simulacion-electronica/", 10], "transmision-calor-progreso": ["Transmisión del calor", "https://helionacon-ui.github.io/GIEIA-UPCT/transmision-del-calor/", 11], "regulacion-automatica-progreso": ["Regulación automática", "https://helionacon-ui.github.io/GIEIA-UPCT/regulacion-automatica/", 9], "oge-progreso": ["Organización y gestión de empresas", "https://helionacon-ui.github.io/GIEIA-UPCT/organizacion-gestion-empresas/", 8], "analogica-progreso": ["Electrónica analógica", "https://helionacon-ui.github.io/GIEIA-UPCT/electronica-analogica/", 8], "micro-progreso": ["Sistemas basados en microprocesador", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-microprocesador/", 9], "pstr-progreso": ["Programación de sistemas en tiempo real", "https://helionacon-ui.github.io/GIEIA-UPCT/programacion-tiempo-real/", 10], "robotizados-progreso": ["Sistemas robotizados", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-robotizados/", 10], "automatizacion-progreso": ["Automatización industrial", "https://helionacon-ui.github.io/GIEIA-UPCT/automatizacion-industrial/", 10], "produccion-progreso": ["Ingeniería de los sistemas de producción", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-produccion/", 10]};

  var REL=[
    ['Matemáticas I','Matemáticas II','Matemáticas III','Estadística aplicada'],
    ['Física I','Física II','Mecánica de fluidos','Termodinámica aplicada'],
    ['Mecánica de fluidos','Termodinámica aplicada','Transmisión del calor'],
    ['Resistencia de materiales','Mecánica de máquinas','Ciencia e ingeniería de materiales'],
    ['Análisis de circuitos','Electrotecnia','Electrónica analógica','Electrónica digital','Fundamentos de electrónica industrial','Diseño y simulación electrónica'],
    ['Regulación automática','Ingeniería de control','Control por computador','Modelado y simulación de sistemas','Matemáticas III'],
    ['Sistemas basados en microprocesador','Programación de sistemas en tiempo real','Automatización industrial','Sistemas robotizados','Electrónica digital'],
    ['Organización y gestión de empresas','Ingeniería de los sistemas de producción','Expresión gráfica'],
    ['Informática aplicada','Programación de sistemas en tiempo real','Modelado y simulación de sistemas']
  ];
  var CUR={1:'Primer curso',2:'Segundo curso',3:'Tercer curso',4:'Cuarto curso'};

  function norm(u){return u.replace(/^https?:\/\//,'').replace(/index\.html$/,'').replace(/\/+$/,'').toLowerCase();}
  var here=norm(location.href.split('#')[0].split('?')[0]);
  var cur=null;
  for(var i=0;i<LIST.length;i++){var b=norm(LIST[i][2]); if(here===b||here.indexOf(b+'/')===0){cur=LIST[i];break;}}
  var crumbA=document.querySelector('.crumb a');
  var title=cur?cur[1]:(crumbA?crumbA.textContent.trim():document.title.split('·')[0].trim());
  var home=crumbA&&crumbA.getAttribute('href')?crumbA.getAttribute('href'):'index.html';
  if(cur&&!crumbA) home=cur[2];

  var css=''
  +'.an-bar{position:sticky;top:0;z-index:60;background:var(--bg,#fff);border-bottom:1px solid var(--line,#ddd);font:14px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--fg,#111)}'
  +'.an-in{max-width:1180px;margin:0 auto;padding:7px 12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}'
  +'.an-bar a,.an-bar button{font:inherit;color:inherit}'
  +'.an-hub{display:inline-flex;align-items:center;padding:7px 10px;border-radius:999px;border:1px solid var(--line,#ddd);background:var(--surface,#fff);text-decoration:none;font-weight:600;font-size:13px;white-space:nowrap}'
  +'.an-brand{font-weight:800;text-decoration:none;font-size:15px;flex:1 1 140px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:6px 4px}'
  +'.an-brand:hover{color:var(--accent,#0a6)}'
  +'.an-btn{cursor:pointer;padding:7px 12px;border-radius:999px;border:1px solid var(--line,#ddd);background:var(--surface,#fff);font-weight:600;font-size:13px;white-space:nowrap}'
  +'.an-btn[aria-expanded="true"]{border-color:var(--accent,#0a6);color:var(--accent,#0a6)}'
  +'.an-btn:focus-visible,.an-hub:focus-visible,.an-brand:focus-visible,.an-pn a:focus-visible{outline:3px solid var(--accent,#0a6);outline-offset:2px}'
  +'.an-pn{border-top:1px solid var(--line,#ddd);background:var(--bg,#fff);max-height:min(70vh,560px);overflow:auto;box-shadow:0 12px 24px rgba(0,0,0,.12)}'
  +'.an-pn[hidden]{display:none}'
  +'.an-pi{max-width:1180px;margin:0 auto;padding:10px 12px 14px;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:2px 14px}'
  +'.an-g{grid-column:1/-1;font:700 11px/1 ui-monospace,Consolas,monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--accent,#0a6);margin:12px 0 4px}'
  +'.an-pn a{display:block;padding:7px 10px;border-radius:8px;text-decoration:none;color:var(--fg,#111);font-size:14px}'
  +'.an-pn a:hover{background:var(--surface,#f3f3f3)}'
  +'.an-pn a[aria-current]{background:var(--surface,#f3f3f3);font-weight:700;color:var(--accent,#0a6)}'
  +'.an-s{grid-column:1/-1;width:100%;box-sizing:border-box;padding:9px 12px;border-radius:10px;border:1px solid var(--line,#ddd);background:var(--surface,#fff);color:var(--fg,#111);font:inherit}'
  +'.an-bar~.wrap .toc{top:56px!important;max-height:calc(100vh - 60px)}'
  +'@media (max-width:860px){.an-bar~.wrap .toc{top:50px!important;max-height:none}.an-bar .an-hub span{display:none}}'

  +'.an-pr{display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:8px;text-decoration:none;color:var(--fg,#111);font-size:14px}'
  +'.an-pr:hover{background:var(--surface,#f3f3f3)}'
  +'.an-pr b{flex:1 1 auto;min-width:0;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
  +'.an-pb{flex:0 0 90px;height:7px;border-radius:99px;background:var(--line,#ddd);overflow:hidden}'
  +'.an-pb i{display:block;height:100%;background:var(--accent,#0a6)}'
  +'.an-pr span{flex:0 0 64px;text-align:right;font-variant-numeric:tabular-nums;color:var(--muted,#666);font-size:13px}'
  +'.an-tot{grid-column:1/-1;font-weight:700;padding:4px 10px 8px}'
  +'.an-reset{grid-column:1/-1;justify-self:start;margin:8px 10px 0;font:inherit;font-size:13px;padding:6px 12px;border-radius:999px;border:1px solid var(--line,#ddd);background:var(--surface,#fff);color:var(--fg,#111);cursor:pointer}'
  +'@media print{.an-bar,.totop,.toc,.hub-bar,.pager,#totop{display:none!important}.wrap{display:block!important}body{background:#fff!important;color:#000!important}a{color:#000!important;text-decoration:none!important}section,figure,table,pre,.sol,.ejer,details{break-inside:avoid}h2,h3{break-after:avoid}details>*{display:block!important}}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  function el(t,c,h){var e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e;}
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}

  var bar=el('div','an-bar'); bar.setAttribute('role','navigation'); bar.setAttribute('aria-label','Navegación entre asignaturas');
  var inn=el('div','an-in');
  var hub=el('a','an-hub','← <span>&nbsp;Todas las guías</span>'); hub.href=HUB; hub.title='Todas las guías GIEyA';
  var brand=el('a','an-brand'); brand.href=home; brand.textContent=title; brand.title='Portada de '+title;
  var bA=el('button','an-btn','Asignaturas ▾'); bA.type='button'; bA.setAttribute('aria-expanded','false');
  var bP=el('button','an-btn','Progreso'); bP.type='button'; bP.setAttribute('aria-expanded','false');
  var bI=el('button','an-btn','🖨 PDF'); bI.type='button'; bI.title='Imprimir esta página o guardarla como PDF';
  var toc=document.querySelector('nav.toc');
  var bT=null; if(toc){bT=el('button','an-btn','Temas ▾'); bT.type='button'; bT.setAttribute('aria-expanded','false');}
  inn.appendChild(hub); inn.appendChild(brand); inn.appendChild(bA); if(bT) inn.appendChild(bT); inn.appendChild(bP); inn.appendChild(bI);
  bar.appendChild(inn);

  var pA=el('div','an-pn'); pA.hidden=true; var pAi=el('div','an-pi');
  var inp=el('input','an-s'); inp.type='search'; inp.placeholder='Buscar asignatura…'; inp.setAttribute('aria-label','Buscar asignatura'); inp.autocomplete='off';
  pAi.appendChild(inp);
  if(cur){
    var relT={}; REL.forEach(function(g){ if(g.indexOf(cur[1])>-1) g.forEach(function(t){ if(t!==cur[1]) relT[t]=1; }); });
    var relN=Object.keys(relT);
    if(relN.length){
      pAi.appendChild(el('div','an-g','Relacionadas con '+esc(cur[1])));
      relN.forEach(function(t){ LIST.forEach(function(a){ if(a[1]===t){ var l=el('a',null,'↗ '+esc(t)); l.href=a[2]; pAi.appendChild(l);} }); });
      pAi.appendChild(el('div','an-g','Todas las asignaturas'));
    }
  }
  var last=0, rows=[];
  LIST.forEach(function(a){
    if(a[0]!==last){last=a[0]; var g=el('div','an-g',esc(CUR[a[0]]||('Curso '+a[0]))); g.setAttribute('data-c',a[0]); pAi.appendChild(g);}
    var l=el('a',null,esc(a[1])); l.href=a[2]; if(cur&&cur===a) l.setAttribute('aria-current','page');
    l.setAttribute('data-t',a[1].toLowerCase()); l.setAttribute('data-c',a[0]); pAi.appendChild(l); rows.push(l);
  });
  inp.addEventListener('input',function(){
    var q=inp.value.trim().toLowerCase(), vis={};
    rows.forEach(function(r){var ok=!q||r.getAttribute('data-t').indexOf(q)>-1; r.hidden=!ok; if(ok)vis[r.getAttribute('data-c')]=1;});
    [].forEach.call(pAi.querySelectorAll('.an-g'),function(g){if(g.getAttribute('data-c')===null) return; g.hidden=!vis[g.getAttribute('data-c')];});
  });
  pA.appendChild(pAi);

  var pT=null;
  if(toc){
    pT=el('div','an-pn'); pT.hidden=true; var pTi=el('div','an-pi');
    var h=el('a',null,'🏠 Portada de '+esc(title)); h.href=home; h.style.fontWeight='700'; h.style.gridColumn='1/-1'; pTi.appendChild(h);
    [].forEach.call(toc.children,function(n){
      if(n.tagName==='A'){
        if(n.getAttribute('href')===home||n.getAttribute('href')==='index.html'&&/^Portada/i.test(n.textContent.trim())) return;
        var c=el('a',null,esc(n.textContent.trim())); c.href=n.getAttribute('href');
        if(n.classList.contains('on')||n.classList.contains('cur')||n.getAttribute('aria-current')) c.setAttribute('aria-current','page');
        pTi.appendChild(c);
      }else if(n.classList&&n.classList.contains('grp')){pTi.appendChild(el('div','an-g',esc(n.textContent.trim())));}
    });
    pT.appendChild(pTi);
  }

  var pP=el('div','an-pn'); pP.hidden=true; var pPi=el('div','an-pi');
  function buildProg(){
    pPi.innerHTML=''; var done=0,total=0,rowsP=[];
    Object.keys(PROG).forEach(function(k){
      var info=PROG[k], saved={}; try{saved=JSON.parse(localStorage.getItem(k)||'{}');}catch(e){}
      var n=0; for(var id in saved){ if(saved[id]===true) n++; }
      if(n>info[2]) n=info[2];
      done+=n; total+=info[2]; rowsP.push([info,n]);
    });
    var pct=total?Math.round(100*done/total):0;
    pPi.appendChild(el('div','an-tot','Temas marcados en todas las guías: '+done+' de '+total+' ('+pct+' %)'));
    rowsP.forEach(function(r){
      var a=el('a','an-pr'); a.href=r[0][1]; var p=r[0][2]?Math.round(100*r[1]/r[0][2]):0;
      a.innerHTML='<b>'+esc(r[0][0])+'</b><span class="an-pb"><i style="width:'+p+'%"></i></span><span>'+r[1]+'/'+r[0][2]+'</span>';
      pPi.appendChild(a);
    });
    var rs=el('button','an-reset','Borrar todo mi progreso'); rs.type='button';
    rs.addEventListener('click',function(){
      if(!confirm('¿Borrar las marcas de todas las guías en este navegador?')) return;
      Object.keys(PROG).forEach(function(k){try{localStorage.removeItem(k);}catch(e){}});
      buildProg();
    });
    pPi.appendChild(rs);
  }
  pP.appendChild(pPi);
  bI.addEventListener('click',function(){closeAll(); window.print();});
  window.addEventListener('beforeprint',function(){[].forEach.call(document.querySelectorAll('details'),function(d){if(!d.open){d.setAttribute('data-an-open','1');d.open=true;}});});
  window.addEventListener('afterprint',function(){[].forEach.call(document.querySelectorAll('details[data-an-open]'),function(d){d.open=false;d.removeAttribute('data-an-open');});});

  var panels=[[bA,pA],[bT,pT],[bP,pP]].filter(function(x){return x[0]&&x[1];});
  function closeAll(except){panels.forEach(function(p){if(p[1]!==except){p[1].hidden=true;p[0].setAttribute('aria-expanded','false');}});}
  panels.forEach(function(p){
    p[0].addEventListener('click',function(e){
      e.stopPropagation(); var open=p[1].hidden; closeAll(p[1]);
      p[1].hidden=!open; p[0].setAttribute('aria-expanded',open?'true':'false');
      if(open&&p[1]===pA){setTimeout(function(){inp.focus();},30);}
      if(open&&p[1]===pP){buildProg();}
    });
    p[1].addEventListener('click',function(e){if(e.target.tagName==='A')closeAll();});
  });
  document.addEventListener('click',function(e){if(!bar.contains(e.target))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();}});

  bar.appendChild(pA); if(pT) bar.appendChild(pT); bar.appendChild(pP);

  function mount(){
    document.body.insertBefore(bar,document.body.firstChild);
    var hb=document.querySelector('.hub-bar>a'); if(hb) hb.style.display='none';
  }
  if(document.body) mount(); else document.addEventListener('DOMContentLoaded',mount);
})();
