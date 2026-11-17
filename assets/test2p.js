(function(){
'use strict';
var D=window.__T2P||[],root=document.getElementById('t2p');
if(!root||!D.length)return;
var IMG=window.__T2P_IMG||{};
var EX={A:'Parcial 10-dic-2025',B:'Global 12-ene-2026',C:'Parcial 17-ene-2024',D:'Banco antiguo'};
var mode='gen',sel={},order='tem',cur=[],done={},ok=0;
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function times(q){return q.ap.length+(q.bn||0)}
function tip(q){var a=q.ap.map(function(k){return EX[k]});if(q.bn)a.push(EX.D+(q.bn>1?' ×'+q.bn:''));return 'Sale en: '+a.join(' · ')}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function pool(){
 if(mode==='cuest')return D.filter(function(q){return q.t===8||q.t===10||q.t===11});
 var ts=Object.keys(sel).filter(function(k){return sel[k]});
 return D.filter(function(q){return !ts.length||sel[q.t]});
}
function build(){
 var p=pool();
 if(mode==='cuest')cur=shuffle(p);
 else if(order==='rep')cur=p.slice().sort(function(a,b){return times(b)-times(a)||a.n-b.n});
 else if(order==='alea')cur=shuffle(p);
 else cur=p.slice().sort(function(a,b){return a.n-b.n});
 done={};ok=0;render();
}
function render(){
 root.textContent='';
 var tabs=el('div','t2-tabs');tabs.setAttribute('role','tablist');
 [['gen','Test general'],['cuest','Cuestionario Temas 8, 10 y 11']].forEach(function(t){
  var b=el('button','t2-tab'+(mode===t[0]?' on':''),t[1]);b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-selected',mode===t[0]);
  b.onclick=function(){mode=t[0];build()};tabs.appendChild(b)});
 root.appendChild(tabs);
 var bar=el('div','t2-bar');
 if(mode==='gen'){
  var ch=el('div','t2-chips');ch.setAttribute('role','group');ch.setAttribute('aria-label','Filtrar por tema');
  var all=el('button','t2-chip'+(!Object.keys(sel).some(function(k){return sel[k]})?' on':''),'Todos los temas');all.type='button';
  all.onclick=function(){sel={};build()};ch.appendChild(all);
  [8,10,11,12,13].forEach(function(t){var b=el('button','t2-chip'+(sel[t]?' on':''),'Tema '+t);b.type='button';b.setAttribute('aria-pressed',!!sel[t]);
   b.onclick=function(){sel[t]=!sel[t];build()};ch.appendChild(b)});
  bar.appendChild(ch);
  var row=el('div','t2-row');
  var lb=el('label','t2-lab','Orden ');var s=el('select');
  [['tem','Por temario'],['rep','Más repetidas primero'],['alea','Aleatorio']].forEach(function(o){var op=el('option',null,o[1]);op.value=o[0];if(o[0]===order)op.selected=true;s.appendChild(op)});
  s.onchange=function(){order=s.value;build()};lb.appendChild(s);row.appendChild(lb);
  var rs=el('button','t2-btn','Reiniciar');rs.type='button';rs.onclick=build;row.appendChild(rs);bar.appendChild(row);
 }else{
  bar.appendChild(el('p','t2-note','Solo preguntas de los temas 8, 10 y 11, en orden aleatorio. Al contestarlas todas verás la nota final sobre 10.'));
  var r2=el('div','t2-row');var rs2=el('button','t2-btn','Reiniciar');rs2.type='button';rs2.onclick=build;r2.appendChild(rs2);bar.appendChild(r2);
 }
 root.appendChild(bar);
 var n=cur.length,d=Object.keys(done).length;
 var st=el('div','t2-stat');st.setAttribute('aria-live','polite');
 st.appendChild(el('span',null,'Contestadas '+d+'/'+n+' · Aciertos '+ok));
 var pr=el('div','t2-prog');var f=el('i');f.style.width=(n?100*d/n:0)+'%';pr.appendChild(f);st.appendChild(pr);root.appendChild(st);
 var box=el('div','t2-list');
 cur.forEach(function(q,i){box.appendChild(card(q,i))});
 if(!n)box.appendChild(el('p','t2-note','No hay preguntas con este filtro.'));
 root.appendChild(box);
 var fin=el('div','t2-final');fin.id='t2-final';fin.hidden=true;root.appendChild(fin);
 updFinal();
}
function card(q,i){
 var c=el('article','t2-q');c.id='t2q'+q.n;c.dataset.n=q.n;
 var h=el('div','t2-head');
 h.appendChild(el('span','t2-num','Pregunta '+(i+1)));
 h.appendChild(el('span','t2-b t2-t'+q.t,'Tema '+q.t));
 var ap=el('span','t2-b t2-ap','Aparece '+times(q)+(times(q)===1?' vez':' veces'));ap.title=tip(q);ap.tabIndex=0;h.appendChild(ap);
 if(!q.lit){var rc=el('span','t2-b t2-rc','Redacción orientativa');rc.title='El enunciado se ha redactado a partir de la respuesta decidida; compáralo con tu examen.';h.appendChild(rc)}
 c.appendChild(h);
 var s=el('p','t2-s');q.s.split('\n').forEach(function(l,k){if(k)s.appendChild(document.createElement('br'));s.appendChild(document.createTextNode(l))});c.appendChild(s);
 if(q.fig&&IMG[q.fig]){var fg=el('figure','t2-fig');var im=new Image();im.src=IMG[q.fig];im.alt='Figura de la pregunta';im.loading='lazy';fg.appendChild(im);c.appendChild(fg)}
 var ops=el('div','t2-ops');
 q.o.forEach(function(t,k){
  var b=el('button','t2-op');b.type='button';b.dataset.k=k;
  b.appendChild(el('b',null,'ABCD'.charAt(k)+')'));b.appendChild(document.createTextNode(' '+t));
  b.onclick=function(){answer(q,c,k)};ops.appendChild(b)});
 c.appendChild(ops);return c;
}
function answer(q,c,k){
 if(done[q.n]!=null)return;done[q.n]=k;var good=k===q.a;if(good)ok++;
 var bs=c.querySelectorAll('.t2-op');
 for(var i=0;i<bs.length;i++){bs[i].disabled=true;if(i===q.a)bs[i].classList.add('ok');else if(i===k)bs[i].classList.add('ko')}
 var e=el('div','t2-ex '+(good?'good':'bad'));
 e.appendChild(el('p','t2-v',good?'Correcto.':'Incorrecto: la respuesta es la '+'ABCD'.charAt(q.a)+').'));
 e.appendChild(el('p',null,q.ex));
 e.appendChild(el('p','t2-ref','📖 Tema '+q.t+' · pág. '+q.ref));
 if(q.w)e.appendChild(el('p','t2-w','⚠ '+q.w));
 c.appendChild(e);
 var d=Object.keys(done).length,n=cur.length;
 var st=root.querySelector('.t2-stat span');st.textContent='Contestadas '+d+'/'+n+' · Aciertos '+ok;
 root.querySelector('.t2-prog i').style.width=(100*d/n)+'%';
 updFinal();
}
function updFinal(){
 var f=document.getElementById('t2-final');if(!f)return;
 var n=cur.length,d=Object.keys(done).length;
 if(mode==='cuest'&&n&&d===n){
  var nota=Math.round(ok/n*100)/10;
  f.textContent='';f.hidden=false;
  f.appendChild(el('h3',null,'Nota final: '+String(nota).replace('.',',')+' / 10'));
  f.appendChild(el('p',null,ok+' aciertos de '+n+' preguntas.'));
  f.scrollIntoView({behavior:'smooth',block:'center'});
 }else f.hidden=true;
}
build();
})();
