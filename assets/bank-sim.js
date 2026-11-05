(function(){
  const BK=window.__BK||[],NW=window.__NW||[],QS=window.__QS||[];
  const $=id=>document.getElementById(id);
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};
  const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const KEEP=/\b(todas|ninguna|las dem[aá]s|las dos|ambas|ambos|a y [bcd]|b y [cd]|c y d|anteriores)\b/i;
  const keepOrder=o=>o.some(x=>KEEP.test(x));
  const COL={T1:'c1',T2:'c2',T3:'c3',T4:'c4',T5:'c5',T6:'c6',T7:'c7','2P':'c8'};
  const sty=t=>`--tc:var(--${COL[t]||'c0'});--tcs:var(--${COL[t]||'c0'}s)`;
  const LET='abcd';
  const withAns=BK.filter(q=>q.a>=0);
  const totalAp=BK.reduce((s,q)=>s+q.n,0);
  if($('bk-ap')) $('bk-ap').textContent=totalAp.toLocaleString('es-ES');
  if($('bk-un')) $('bk-un').textContent=BK.length;
  if($('bk-n')) $('bk-n').textContent=BK.length+' preguntas distintas';

  /* ---------- Banco ---------- */
  const list=$('bk-list'),more=$('bk-more'),cnt=$('bk-count');
  let cur=[],shown=0;const STEP=40;
  function itemHTML(q){
    const hot=q.n>=5?' hot':'';
    const opts=q.o.map((o,i)=>`<li${i===q.a?' class="ok"':''}>${LET[i]}) ${esc(o)}${i===q.a?' ✓':''}</li>`).join('');
    let meta=q.a>=0?`<b>Respuesta correcta:</b> ${LET[q.a]}) ${esc(q.o[q.a])}. `:'<b>Sin respuesta marcada en el original.</b> ';
    meta+=`Aparece <b>${q.n}</b> ${q.n===1?'vez':'veces'} en el banco`;
    if(q.a>=0&&q.v<1) meta+=`; las marcas coinciden en el ${Math.round(q.v*100)} % de las copias`;
    meta+='.'+(q.dd?' <i>Respuesta deducida a partir del temario: no estaba marcada en el original.</i>':'');
    const where=`<p class="meta"><b>Dónde mirar:</b> ${esc(q.loc)} <i>(ubicación ${q.cf})</i>.</p>`;
    const why=(q.w?`<p class="why"><b>Por qué:</b> ${esc(q.w)}</p>`:'')+(q.ex?`<p class="why"><b>En el temario:</b> «${esc(q.ex)}»</p>`:'');
    return `<details class="bk-i" style="${sty(q.tm)}"><summary><span class="rep${hot}">×${q.n}</span><span>${esc(q.s)}</span></summary><div class="bkb"><ol>${opts}</ol><p class="meta">${meta}</p>${where}${why}</div></details>`;
  }
  function filtered(){
    const t=$('bk-tema').value,f=$('bk-fil').value,s=norm($('bk-q').value.trim());
    return BK.filter(q=>(t==='all'||q.tm===t)&&(f==='all'||(f==='ans'&&q.a>=0)||(f==='rep'&&q.n>=3&&q.a>=0)||(f==='sin'&&q.a<0))&&(!s||norm(q.s+' '+q.o.join(' ')).includes(s)));
  }
  function build(){
    cur=filtered();shown=0;list.innerHTML='';cnt.textContent=cur.length+' preguntas';next();
  }
  function next(){
    const part=cur.slice(shown,shown+STEP);shown+=part.length;
    list.insertAdjacentHTML('beforeend',part.map(itemHTML).join(''));
    more.hidden=shown>=cur.length;
  }
  if(list){
    more.addEventListener('click',next);
    ['bk-tema','bk-fil'].forEach(id=>$(id).addEventListener('change',build));
    $('bk-q').addEventListener('input',build);
    build();
  }

  /* ---------- Simulador ---------- */
  if($('sim-go')){
  const box=$('sim-box'),hist=$('sim-hist'),tm=$('sim-time');
  let ex=null,timer=null;
  const fmt=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
  function prep(it,keep){
    const idx=it.o.map((_,i)=>i);
    const ord=keep?idx:shuffle(idx);
    return {t:it.t,s:it.s,o:ord.map(i=>it.o[i]),a:ord.indexOf(it.a),ex:it.ex,sel:-1};
  }
  const oldItems=t=>withAns.filter(q=>t==='all'||q.tm===t).map(q=>({w:q.n,keep:keepOrder(q.o),it:{t:q.tm,s:q.s,o:q.o,a:q.a,
    ex:'Respuesta: '+LET[q.a]+') '+q.o[q.a]+'. Aparece '+q.n+(q.n===1?' vez':' veces')+' en el banco. Mira: '+q.loc+' (ubicación '+q.cf+').'+(q.w?' Por qué: '+q.w:'')+(q.dd?' (Respuesta deducida: no estaba marcada en el original.)':'')+(q.ex?' Temario: «'+q.ex+'»':'')}}));
  const newItems=t=>NW.filter(q=>t==='all'||q.tm===t).map(q=>({w:1,keep:false,it:{t:q.tm,s:q.s,o:q.o,a:0,ex:q.ex}}))
    .concat(QS.filter(q=>t==='all'||q[0]===t).map(q=>({w:1,keep:keepOrder(q[2]),it:{t:q[0],s:q[1],o:q[2],a:q[3],ex:q[4]}})));
  function pick(arr,n){ // muestreo ponderado sin reemplazo
    return arr.map(x=>({x,k:Math.pow(Math.random(),1/x.w)})).sort((a,b)=>b.k-a.k).slice(0,n).map(o=>o.x);
  }
  function startExam(){
    clearInterval(timer);
    const t=$('sim-tema').value,m=$('sim-modo').value,N=50;
    const O=oldItems(t),W=newItems(t);let a=[];
    if(m==='old') a=pick(O,N); else if(m==='new') a=pick(W,N);
    else{const o=pick(O,30),w=pick(W,20);a=o.concat(w);
      if(a.length<N){const used=new Set(a);a=a.concat(pick(O.concat(W).filter(x=>!used.has(x)),N-a.length));}}
    if(a.length<N&&m!=='old'&&m!=='new'){}
    ex={items:shuffle(a).map(x=>prep(x.it,x.keep)),t0:Date.now(),done:false};
    renderExam();
    timer=setInterval(tick,1000);tick();
    box.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function tick(){if(!ex||ex.done)return;tm.textContent='Tiempo: '+fmt(Math.floor((Date.now()-ex.t0)/1000));}
  function answered(){return ex.items.filter(q=>q.sel>=0).length;}
  function renderExam(){
    const n=ex.items.length;
    box.innerHTML=`<div class="sim-bar"><span id="sim-prog" aria-live="polite">Contestadas: 0/${n}</span><button id="sim-end" type="button">Entregar examen</button></div>`+
    ex.items.map((q,i)=>`<div class="sim-q" data-i="${i}" style="${sty(q.t)}"><p class="qh">${q.t==='2P'?'2.º parcial':q.t} · pregunta ${i+1}</p><p class="qt">${esc(q.s)}</p><div class="opts">${q.o.map((o,j)=>`<button type="button" class="op" data-j="${j}">${LET[j]}) ${esc(o)}</button>`).join('')}</div></div>`).join('')+
    `<div class="qbar"><button class="pri" id="sim-end2" type="button">Entregar examen</button></div>`;
  }
  box.addEventListener('click',e=>{
    if(!ex)return;
    const b=e.target.closest('button');if(!b)return;
    if(b.id==='sim-end'||b.id==='sim-end2'){finish();return;}
    if(ex.done||!b.classList.contains('op'))return;
    const card=b.closest('.sim-q'),i=+card.dataset.i,j=+b.dataset.j,q=ex.items[i];
    q.sel=q.sel===j?-1:j;
    card.querySelectorAll('button.op').forEach(x=>x.classList.toggle('sel',+x.dataset.j===q.sel));
    $('sim-prog').textContent='Contestadas: '+answered()+'/'+ex.items.length;
  });
  function finish(){
    if(ex.done)return;ex.done=true;clearInterval(timer);
    const n=ex.items.length;let A=0,F=0,B=0;
    ex.items.forEach(q=>{if(q.sel<0)B++;else if(q.sel===q.a)A++;else F++;});
    const net=Math.max(0,A-F/3),nota=Math.round(net/n*100)/10;
    const secs=Math.floor((Date.now()-ex.t0)/1000);
    tm.textContent='Tiempo: '+fmt(secs);
    box.querySelectorAll('.sim-q').forEach(card=>{
      const q=ex.items[+card.dataset.i];
      card.querySelectorAll('button.op').forEach(x=>{const j=+x.dataset.j;x.disabled=true;x.classList.remove('sel');
        if(j===q.a)x.classList.add('ok');else if(j===q.sel)x.classList.add('no');});
      if(q.ex)card.insertAdjacentHTML('beforeend',`<p class="ex">${esc(q.ex)}</p>`);
      if(q.sel<0)card.insertAdjacentHTML('afterbegin','<p class="meta" style="margin:0 0 6px"><i>En blanco</i></p>');
    });
    const res=`<div class="sim-res" style="--tc:var(--c1);--tcs:var(--c1s)"><p class="big">${nota.toFixed(1).replace('.',',')} <small style="font-size:18px">/ 10</small></p><table><tr><td>Aciertos</td><td><b>${A}</b></td></tr><tr><td>Fallos</td><td><b>${F}</b> (restan ${(F/3).toFixed(2).replace('.',',')})</td></tr><tr><td>En blanco</td><td><b>${B}</b></td></tr><tr><td>Puntos netos</td><td><b>${(A-F/3).toFixed(2).replace('.',',')}</b> de ${n}${A-F/3<0?' (se cuenta 0)':''}</td></tr><tr><td>Tiempo</td><td><b>${fmt(secs)}</b></td></tr></table><p class="meta" style="margin:10px 0 0">Aprobado a partir de 5,0. Con la penalización, dejar en blanco una dudosa compensa si no puedes descartar al menos una opción.</p></div>`;
    box.insertAdjacentHTML('afterbegin',res);
    const h=store.get('ma-sim',[]);h.unshift({d:new Date().toISOString().slice(0,10),a:A,f:F,b:B,n:nota,s:secs});store.set('ma-sim',h.slice(0,10));
    renderHist();
    box.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function renderHist(){
    const h=store.get('ma-sim',[]);
    hist.innerHTML=h.length?`<div class="sim-h"><b>Tus últimos simulacros</b><table><tr><th>Fecha</th><th>Nota</th><th>Aciertos</th><th>Fallos</th><th>Blanco</th></tr>${h.map(r=>`<tr><td>${esc(r.d)}</td><td>${r.n.toFixed(1).replace('.',',')}</td><td>${r.a}</td><td>${r.f}</td><td>${r.b}</td></tr>`).join('')}</table></div>`:'';
  }
  $('sim-go').addEventListener('click',startExam);
  renderHist();
  box.innerHTML='<p class="muted">Pulsa «Empezar examen». Se barajan las opciones y sale una selección distinta cada vez; las preguntas que más se repiten en los años anteriores tienen más probabilidad de salir.</p>';
  }
})();
