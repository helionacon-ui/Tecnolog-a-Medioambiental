
(function(){
const $=id=>document.getElementById(id);
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};
/* tema claro/oscuro */
(function(){
  const root=document.documentElement,b=$('theme');
  const saved=store.get('ma-theme',null); if(saved) root.setAttribute('data-theme',saved);
  if(b) b.addEventListener('click',()=>{
    const cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    const nx=cur==='dark'?'light':'dark'; root.setAttribute('data-theme',nx); store.set('ma-theme',nx);
  });
})();
/* volver arriba */
(function(){
  const t=$('totop'); if(!t) return;
  addEventListener('scroll',()=>{t.classList.toggle('show',scrollY>700);},{passive:true});
})();
/* progreso */
(function(){
  const box=$('checks'); if(!box) return;
  const items=[];
  const names={T1:'T1 Introducción',T2:'T2 Parámetros',T3:'T3 Potabilización',T4:'T4 Depuración',T5:'T5 Dispersión',T6:'T6 Medida',T7:'T7 Control',T8:'T8 Suelos',T10:'T10 Residuos urbanos',T11:'T11 Residuos peligrosos',T12:'T12 Impacto ambiental',T13:'T13 Gestión ambiental'};
  Object.keys(names).forEach(k=>{
    items.push([k+'-a',names[k]+': he leído «Lo esencial» y las tablas']);
    items.push([k+'-b',names[k]+': test con 8 de 10 o más']);
  });
  items.push(['pa','Problemas P1–P10 (agua) sin mirar la solución']);
  items.push(['pb','Problemas P11–P16 (aire) sin mirar la solución']);
  items.push(['fo','Formulario repasado la víspera']);
  let st=store.get('ma-prog',{});
  box.innerHTML=items.map(([k,t])=>`<div class="check"><input type="checkbox" id="c-${k}" data-k="${k}"${st[k]?' checked':''}><label for="c-${k}">${t}</label></div>`).join('');
  const upd=()=>{const n=items.filter(([k])=>st[k]).length;$('pbar').style.width=(100*n/items.length)+'%';$('ptxt').textContent=n+' de '+items.length;};
  box.addEventListener('change',e=>{const k=e.target.dataset.k; if(!k)return; st[k]=e.target.checked; store.set('ma-prog',st); upd();});
  upd();
})();
/* autoevaluación */
(function(){
  const QS=window.__QS; if(!QS) return;
  if($('nq')) $('nq').textContent=QS.length;
  if($('nq2')) $('nq2').textContent=QS.length+' preguntas';
  if(!$('qlist')) return;
  let res=store.get('ma-qres',{});
  const list=$('qlist'),score=$('qscore');
  const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const tc={T1:'c1',T2:'c2',T3:'c3',T4:'c4',T5:'c5',T6:'c6',T7:'c7',T8:'c4',T10:'c3',T11:'c5',T12:'c6',T13:'c2'};
  let shown=0,okNow=0,answered=0;
  const upd=()=>{const dom=Object.values(res).filter(v=>v===1).length;score.textContent=(answered?`Esta tanda: ${okNow}/${answered} · `:'')+`Acertadas alguna vez: ${dom} de ${QS.length}`;};
  function render(idxs){
    shown=idxs.length;okNow=0;answered=0;
    list.innerHTML=idxs.map((qi,n)=>{
      const q=QS[qi];const order=shuffle([0,1,2,3]);
      return `<div class="qz" data-qi="${qi}" style="--tc:var(--${tc[q[0]]})"><p class="qh">${q[0]} · pregunta ${n+1}</p><p class="qt">${esc(q[1])}</p><div class="opts">${order.map(o=>`<button type="button" class="op" data-o="${o}">${esc(q[2][o])}</button>`).join('')}</div><p class="ex">${esc(q[4])}</p></div>`;
    }).join('');
    upd();
  }
  list.addEventListener('click',e=>{
    const b=e.target.closest('button.op'); if(!b) return;
    const card=b.closest('.qz'); if(card.classList.contains('done')) return;
    const qi=+card.dataset.qi,q=QS[qi],pick=+b.dataset.o,good=pick===q[3];
    card.classList.add('done');
    card.querySelectorAll('button.op').forEach(x=>{x.disabled=true; if(+x.dataset.o===q[3]) x.classList.add('ok');});
    if(!good) b.classList.add('no');
    answered++; if(good) okNow++;
    res[qi]=good?1:(res[qi]===1?1:0); store.set('ma-qres',res); upd();
  });
  const pool=()=>{const t=$('qtema').value;return QS.map((q,i)=>i).filter(i=>t==='all'||QS[i][0]===t);};
  $('qgo').addEventListener('click',()=>{
    const p=pool().map(i=>[i,(res[i]===1?1:0)+Math.random()]).sort((a,b)=>a[1]-b[1]).slice(0,10).map(x=>x[0]);
    render(shuffle(p));
  });
  $('qall').addEventListener('click',()=>render(pool()));
  $('qtema').addEventListener('change',()=>{list.innerHTML='';score.textContent='';upd();});
  upd();
  $('qgo').click();
})();
/* en esta página */
(function(){
  const main=document.querySelector('main.page'); if(!main) return;
  const hs=[...main.querySelectorAll('section.sec h3')].filter(h=>h.textContent.trim());
  if(hs.length<3) return;
  const slug=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);
  const used=new Set([...document.querySelectorAll('[id]')].map(e=>e.id));
  const li=hs.map((h,i)=>{
    if(!h.id){let id='s-'+(slug(h.textContent)||i),k=2,b=id;while(used.has(id))id=b+'-'+(k++);used.add(id);h.id=id;}
    h.style.scrollMarginTop='80px';
    const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent.trim();
    const l=document.createElement('li');l.appendChild(a);return l;
  });
  const nav=document.createElement('nav');nav.className='onpage';nav.setAttribute('aria-label','En esta página');
  const p=document.createElement('p');p.textContent='En esta página';
  const ul=document.createElement('ul');li.forEach(x=>ul.appendChild(x));
  nav.append(p,ul);main.insertBefore(nav,main.firstChild);
})();
})();
