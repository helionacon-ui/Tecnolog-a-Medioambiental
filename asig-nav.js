/* Barra superior común de las guías GIEyA: portada de la asignatura, salto a otras asignaturas y lista de temas. */
(function(){
  if(window.__asigNav) return; window.__asigNav=1;
  var HUB='https://helionacon-ui.github.io/GIEIA-UPCT/';
  var LIST=[[1, "Matemáticas I", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-i/"], [1, "Matemáticas II", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-ii/"], [1, "Física I", "https://helionacon-ui.github.io/GIEIA-UPCT/fisica-i/"], [1, "Física II", "https://helionacon-ui.github.io/GIEIA-UPCT/fisica-ii/"], [1, "Química general", "https://helionacon-ui.github.io/GIEIA-UPCT/quimica-general/"], [1, "Informática aplicada", "https://helionacon-ui.github.io/Inform-tica-Aplicada/"], [1, "Expresión gráfica", "https://helionacon-ui.github.io/Expresi-n-gr-fica/"], [1, "Estadística aplicada", "https://helionacon-ui.github.io/GIEIA-UPCT/estadistica-aplicada/"], [1, "Ciencia e ingeniería de materiales", "https://helionacon-ui.github.io/Ciencia-e-ingenier-a-de-materiales/"], [1, "Análisis de circuitos", "https://helionacon-ui.github.io/GIEIA-UPCT/analisis-de-circuitos/"], [2, "Matemáticas III", "https://helionacon-ui.github.io/GIEIA-UPCT/matematicas-iii/"], [2, "Fundamentos de electrónica industrial", "https://helionacon-ui.github.io/GIEIA-UPCT/electronica-industrial/"], [2, "Mecánica de máquinas", "https://helionacon-ui.github.io/GIEIA-UPCT/mecanica-de-maquinas/"], [2, "Termodinámica aplicada", "https://helionacon-ui.github.io/GIEIA-UPCT/termodinamica-aplicada/"], [2, "Resistencia de materiales", "https://helionacon-ui.github.io/GIEIA-UPCT/resistencia-de-materiales/"], [2, "Inglés técnico", "https://helionacon-ui.github.io/GIEIA-UPCT/ingles-tecnico/"], [2, "Mecánica de fluidos", "https://helionacon-ui.github.io/GIEIA-UPCT/mecanica-de-fluidos/"], [2, "Electrotecnia", "https://helionacon-ui.github.io/GIEIA-UPCT/electrotecnia/"], [2, "Diseño y simulación electrónica", "https://helionacon-ui.github.io/GIEIA-UPCT/dise-o-y-simulacion-electronica/"], [2, "Transmisión del calor", "https://helionacon-ui.github.io/GIEIA-UPCT/transmision-del-calor/"], [2, "Regulación automática", "https://helionacon-ui.github.io/GIEIA-UPCT/regulacion-automatica/"], [2, "Organización y gestión de empresas", "https://helionacon-ui.github.io/GIEIA-UPCT/organizacion-gestion-empresas/"], [3, "Control por computador", "https://helionacon-ui.github.io/Control-por-computador-GIEIA/"], [3, "Tecnología medioambiental", "https://helionacon-ui.github.io/Tecnolog-a-Medioambiental/"], [3, "Electrónica digital", "https://helionacon-ui.github.io/Electr-nica-digital/"], [3, "Modelado y simulación de sistemas", "https://helionacon-ui.github.io/Modelado-y-Simulaci-n-de-Sistemas/"], [3, "Electrónica analógica", "https://helionacon-ui.github.io/GIEIA-UPCT/electronica-analogica/"], [3, "Sistemas basados en microprocesador", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-microprocesador/"], [3, "Programación de sistemas en tiempo real", "https://helionacon-ui.github.io/GIEIA-UPCT/programacion-tiempo-real/"], [3, "Sistemas robotizados", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-robotizados/"], [3, "Automatización industrial", "https://helionacon-ui.github.io/GIEIA-UPCT/automatizacion-industrial/"], [3, "Ingeniería de control", "https://helionacon-ui.github.io/Ingenieria-de-control/"], [3, "Ingeniería de los sistemas de producción", "https://helionacon-ui.github.io/GIEIA-UPCT/sistemas-produccion/"]];
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
  +'@media print{.an-bar{display:none}}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  function el(t,c,h){var e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e;}
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}

  var bar=el('div','an-bar'); bar.setAttribute('role','navigation'); bar.setAttribute('aria-label','Navegación entre asignaturas');
  var inn=el('div','an-in');
  var hub=el('a','an-hub','← <span>&nbsp;Todas las guías</span>'); hub.href=HUB; hub.title='Todas las guías GIEyA';
  var brand=el('a','an-brand'); brand.href=home; brand.textContent=title; brand.title='Portada de '+title;
  var bA=el('button','an-btn','Asignaturas ▾'); bA.type='button'; bA.setAttribute('aria-expanded','false');
  var toc=document.querySelector('nav.toc');
  var bT=null; if(toc){bT=el('button','an-btn','Temas ▾'); bT.type='button'; bT.setAttribute('aria-expanded','false');}
  inn.appendChild(hub); inn.appendChild(brand); inn.appendChild(bA); if(bT) inn.appendChild(bT);
  bar.appendChild(inn);

  var pA=el('div','an-pn'); pA.hidden=true; var pAi=el('div','an-pi');
  var inp=el('input','an-s'); inp.type='search'; inp.placeholder='Buscar asignatura…'; inp.setAttribute('aria-label','Buscar asignatura'); inp.autocomplete='off';
  pAi.appendChild(inp);
  var last=0, rows=[];
  LIST.forEach(function(a){
    if(a[0]!==last){last=a[0]; var g=el('div','an-g',esc(CUR[a[0]]||('Curso '+a[0]))); g.setAttribute('data-c',a[0]); pAi.appendChild(g);}
    var l=el('a',null,esc(a[1])); l.href=a[2]; if(cur&&cur===a) l.setAttribute('aria-current','page');
    l.setAttribute('data-t',a[1].toLowerCase()); l.setAttribute('data-c',a[0]); pAi.appendChild(l); rows.push(l);
  });
  inp.addEventListener('input',function(){
    var q=inp.value.trim().toLowerCase(), vis={};
    rows.forEach(function(r){var ok=!q||r.getAttribute('data-t').indexOf(q)>-1; r.hidden=!ok; if(ok)vis[r.getAttribute('data-c')]=1;});
    [].forEach.call(pAi.querySelectorAll('.an-g'),function(g){g.hidden=!vis[g.getAttribute('data-c')];});
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

  var panels=[[bA,pA],[bT,pT]].filter(function(x){return x[0]&&x[1];});
  function closeAll(except){panels.forEach(function(p){if(p[1]!==except){p[1].hidden=true;p[0].setAttribute('aria-expanded','false');}});}
  panels.forEach(function(p){
    p[0].addEventListener('click',function(e){
      e.stopPropagation(); var open=p[1].hidden; closeAll(p[1]);
      p[1].hidden=!open; p[0].setAttribute('aria-expanded',open?'true':'false');
      if(open&&p[1]===pA){setTimeout(function(){inp.focus();},30);}
    });
    p[1].addEventListener('click',function(e){if(e.target.tagName==='A')closeAll();});
  });
  document.addEventListener('click',function(e){if(!bar.contains(e.target))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();}});

  bar.appendChild(pA); if(pT) bar.appendChild(pT);

  function mount(){
    document.body.insertBefore(bar,document.body.firstChild);
    var hb=document.querySelector('.hub-bar>a'); if(hb) hb.style.display='none';
  }
  if(document.body) mount(); else document.addEventListener('DOMContentLoaded',mount);
})();
