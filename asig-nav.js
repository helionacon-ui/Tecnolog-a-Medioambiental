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
  if(cur){try{localStorage.setItem('gieia-last',JSON.stringify({t:cur[1],u:location.href.split('#')[0],p:(document.title||'').split('·')[0].trim(),ts:Date.now()}));}catch(e){}}
  var crumbA=document.querySelector('.crumb a');
  var title=cur?cur[1]:(crumbA?crumbA.textContent.trim():document.title.split('·')[0].trim());
  var home=crumbA&&crumbA.getAttribute('href')?crumbA.getAttribute('href'):'index.html';
  if(cur&&!crumbA) home=cur[2];

  var css=''
  +'.an-bar{position:sticky;top:0;z-index:60;background:var(--bg,#fff);border-bottom:1px solid var(--line,#ddd);font:14px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--fg,#111)}'
  +'.an-in{max-width:1180px;margin:0 auto;padding:7px 12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}'
  +'.an-bar a,.an-bar button{font:inherit;color:inherit}'
  +'.an-hub{display:inline-flex;align-items:center;padding:11px 20px;border-radius:999px;font-size:15.5px;background:#1d3b5c;background:color-mix(in srgb,var(--accent,#0a6) 55%,#000);color:#fff!important;font-weight:800;text-transform:uppercase;letter-spacing:.06em;text-decoration:none;white-space:nowrap;border:1px solid transparent}'
  +'.an-brand{display:inline-block;flex:0 1 auto;margin-right:auto;min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;padding:11px 22px;border-radius:999px;font-size:16px;background:#1d3b5c;background:color-mix(in srgb,var(--accent,#0a6) 55%,#000);color:#fff!important;font-weight:800;text-transform:uppercase;letter-spacing:.06em;text-decoration:none;white-space:nowrap;border:1px solid transparent}'
  +'.an-hub:hover,.an-brand:hover{filter:brightness(1.18)}.an-bar .an-hub,.an-bar .an-brand{color:#fff!important}.hub-bar a{font-size:15.5px!important;padding:11px 20px!important;background:#1d3b5c!important;background:color-mix(in srgb,var(--accent,#0a6) 55%,#000)!important;color:#fff!important;font-weight:800!important;text-transform:uppercase;letter-spacing:.05em;border-color:transparent!important}'
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
  /* ---- Estilo común «guía de control»: titulares condensados, portada con tarjetas por página y color propio de cada asignatura ---- */
  (function(){
    if(window.__asigSkin) return; window.__asigSkin=1;
    var lk=document.createElement('link'); lk.rel='stylesheet'; lk.href='https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;800&family=JetBrains+Mono:wght@400;500&display=swap'; document.head.appendChild(lk);
    var css='@media screen{'
    +':root{--display:"Big Shoulders Display","Arial Narrow",Impact,sans-serif;--f-display:var(--display);--mono:"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace;--f-mono:var(--mono)}'
    +'header.hero h1,.hero h1{font-weight:800!important;text-transform:uppercase;font-size:clamp(46px,7.2vw,84px)!important;line-height:.98!important;letter-spacing:0!important}'
    +'header.hero .sub,.hero .sub{font-family:var(--display);font-size:clamp(22px,2.8vw,30px)!important;letter-spacing:.05em;text-transform:uppercase;font-weight:500}'
    +'h2{font-family:var(--display);font-weight:700;font-size:clamp(32px,4.2vw,44px);line-height:1.08;letter-spacing:.015em;text-transform:uppercase}'
    +'h3{font-family:var(--display);font-weight:600;font-size:28px;line-height:1.15;letter-spacing:.02em}'
    +'.stats b{font-family:var(--display);font-weight:800;font-size:42px;line-height:1.05}'
    +'.an-ic{max-width:1180px;margin:0 auto 36px;padding:0 max(16px,env(safe-area-inset-right,0px))}'
    +'.an-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:0 0 38px}'
    +'.an-step{display:flex;gap:14px;align-items:flex-start;background:var(--surface,#fff);border:1px solid var(--line,#ddd);border-radius:16px;padding:16px 18px;box-shadow:var(--shadow,0 6px 24px rgba(0,0,0,.06));font-size:16.5px;line-height:1.6}'
    +'.an-step i{flex:none;width:38px;height:38px;border-radius:50%;background:var(--accent,#1f4fd1);color:#fff;display:grid;place-items:center;font:800 19px/1 var(--display);font-style:normal}'
    +'.an-step p{margin:0}'
    +'.an-ic h2{font-size:clamp(28px,3.4vw,36px);padding-left:12px;border-left:5px solid var(--accent,#1f4fd1);margin:0 0 18px}'
    +'.an-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px}'
    +'.an-card{position:relative;display:flex;flex-direction:column;gap:8px;background:var(--surface,#fff);border:1px solid var(--line,#ddd);border-radius:16px;padding:20px 20px 16px;box-shadow:var(--shadow,0 6px 24px rgba(0,0,0,.06));overflow:hidden;text-decoration:none;color:var(--fg,#111);transition:transform .15s,border-color .15s}'
    +'.an-card::before{content:"";position:absolute;inset:0 0 auto 0;height:6px;background:var(--k)}'
    +'.an-card:hover{transform:translateY(-2px);border-color:var(--k)}'
    +'.an-card .ac{width:48px;height:48px;border-radius:12px;background:var(--k);color:#fff;display:grid;place-items:center;font:800 20px/1 var(--display);letter-spacing:.02em}'
    +'.an-card .al{font:500 11.5px/1.3 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted,#666)}'
    +'.an-card .at{font-family:var(--display);font-weight:700;font-size:24px;line-height:1.12;text-transform:uppercase;letter-spacing:.015em}'
    +'.an-card .ag{margin-top:auto;padding-top:6px;font:500 13px var(--mono);color:var(--k);letter-spacing:.03em}'
    +'@media (max-width:820px){.an-steps{grid-template-columns:minmax(0,1fr)}}'
    +'@media (prefers-reduced-motion:reduce){.an-card{transition:none}}'
    +'}@media print{.an-ic{display:none!important}}';
    var st=document.createElement('style'); st.id='an-skin'; st.textContent=css; document.head.appendChild(st);

    function cards(){
      var hero=document.querySelector('header.hero,.hero'); if(!hero||document.querySelector('.an-ic')) return;
      var nav=document.querySelector('nav.toc,nav.side,#side'); if(!nav) return;
      var host=nav.closest('.wrap,.shell,.layout'); if(!host||!host.parentNode) return;
      var items=[],seen={},grp='';
      [].forEach.call(nav.querySelectorAll('.grp,h5,a[href]'),function(n){
        if(n.tagName!=='A'){grp=n.textContent.trim(); return;}
        var h=n.getAttribute('href')||''; if(!h||h.indexOf('#')>-1||/^https?:/.test(h)||/^(index\.html)?$/.test(h)) return;
        if(seen[h]) return; seen[h]=1;
        var t=n.textContent.replace(/\s+/g,' ').replace(/^[\s\u2013\u2014\-\u2022\u00b7]+/,'').trim(); if(!t||/^Portada/i.test(t)) return;
        items.push({h:h,t:t,g:grp});
      });
      if(items.length<6) return;
      function col(g){ if(/empezar|consultar/i.test(g)) return 'var(--fg,#18232b)'; if(/practicar|examen/i.test(g)) return 'color-mix(in srgb,var(--accent,#1f4fd1) 62%,#000)'; return 'var(--accent,#1f4fd1)'; }
      var sec=el('section','an-ic');
      var steps=el('div','an-steps');
      [['Elige un tema de la lista o empieza por <b>«desde cero»</b> si partes de cero.'],['Sigue los temas en orden: <b>teoría, simuladores y vídeos</b>. Marca cada tema al terminarlo.'],['Practica con los <b>problemas y exámenes resueltos</b> antes de presentarte.']].forEach(function(s,i){
        steps.appendChild(el('div','an-step','<i>'+(i+1)+'</i><p>'+s[0]+'</p>'));
      });
      sec.appendChild(steps);
      sec.appendChild(el('h2',null,'Las '+items.length+' páginas de la guía'));
      var grid=el('div','an-cards');
      items.forEach(function(it){
        var m=it.t.match(/^(?:T|Tema\s*)(\d+)(?:\s*[\u2013\u2014-]\s*T?(\d+))?\b[\s.:·-]*(.*)$/i), code,title,lab=it.g||'Guía';
        if(m){code='T'+m[1]; title=m[3]||it.t; lab=(it.g?it.g+' · ':'')+(m[2]?'Temas '+m[1]+'–'+m[2]:'Tema '+m[1]);}
        else{title=it.t; var w=title.replace(/\b(de|del|la|las|los|y|e|en|el|a|para|por|con)\b/gi,'').split(/\s+/).filter(Boolean); code=((w[0]||'')[0]||'')+((w[1]||'')[0]||''); code=code.toUpperCase()||'·';}
        var a=el('a','an-card','<span class="ac">'+esc(code)+'</span><span class="al">'+esc(lab)+'</span><span class="at">'+esc(title)+'</span><span class="ag">Abrir →</span>');
        a.href=it.h; a.style.setProperty('--k',col(it.g)); grid.appendChild(a);
      });
      sec.appendChild(grid);
      host.parentNode.insertBefore(sec,host);
    }
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',cards); else cards();
  })();
})();
