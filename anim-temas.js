/* Tecnología Medioambiental: una animación por tema */
(function(){var M=window.MANIM;if(!M)return;var U=M.util,C=M.C,nf=U.nf,lerp=U.lerp,ease=U.ease,seg=U.seg,clamp=U.clamp,RG=U.RG,W=640;
var LG=function(x){return Math.log(x)/Math.LN10;};

/* T1 las tres dimensiones de la sostenibilidad */
M.reg('tm-t1',M.base({title:'Desarrollo sostenible: tres dimensiones a la vez',H:540,dur:16,caps:[[5,'El desarrollo sostenible exige atender a la vez a la dimensión ambiental, la social y la económica.'],[10,'Una actividad que solo cumple una o dos de ellas no es sostenible: la intersección es lo que buscan los ODS y la taxonomía europea.'],[99,'La taxonomía añade además el principio de «no causar un perjuicio significativo» a ninguno de los seis objetivos ambientales.']]},
 function(D,t){var u=ease(seg(t,1,8)),cx=W/2,cy=290,d=lerp(140,62,u),R=88,P=[[cx,cy-d*0.75,'Ambiental',C.ok],[cx-d*0.85,cy+d*0.5,'Social',C.f],[cx+d*0.85,cy+d*0.5,'Económica',C.hl]];
  P.forEach(function(p){D.dot(p[0],p[1],R,RG(p[3],.18));D.ring(p[0],p[1],R,p[3],2.2);});
  P.forEach(function(p,i){var ox=(p[0]-cx)*0.55,oy=(p[1]-cy)*0.55;D.text(p[2],p[0]+ox,p[1]+oy+6,{s:17,a:'center',c:p[3],bold:true});});
  var a=ease(seg(t,8,10));if(a>0)D.text('sostenible',cx,cy+8,{s:18,a:'center',c:C.m,bold:true,al:a});}));

/* T2 isoterma de Freundlich */
M.reg('tm-t2',M.curva({title:'Adsorción de metales: isoterma de Freundlich',H:560,dur:18,p:[1,4],ax:{xr:[0,10.5],yr:[0,12],xt:[2,4,6,8,10],yt:[3,6,9,12],xd:0,yd:0,xl:'C_{e} (mg/L)',yl:'q_{e} (mg/g)'},h:300,
 curvas:[{f:function(c,n){return 3*Math.pow(c,1/n);},c:'m'}],
 read:function(n){return ['q_{e} = K_{F}·C_{e}^{1/n}    K_{F} = 3    n = '+nf(n,2),'linealizada: log q_{e} = log K_{F} + (1/n)·log C_{e}'];},
 caps:[[6,'La isoterma de Freundlich relaciona lo que retiene el adsorbente (q<sub>e</sub>, mg de metal por g) con la concentración que queda en el agua (C<sub>e</sub>).'],[12,'Con n = 1 la relación es lineal. Con n > 1 la curva se aplana: los primeros sitios se ocupan con facilidad y los siguientes cuestan más.'],[99,'Tomando logaritmos queda una recta de pendiente 1/n: así se obtienen K<sub>F</sub> y n a partir de los datos del ensayo.']]}));

/* T3 decantador: velocidad de Stokes y carga superficial */
M.reg('tm-t3',M.base({title:'Sedimentación: qué partículas atrapa el decantador',H:560,dur:18,caps:[[6,'Cada partícula avanza con el agua y a la vez cae con su velocidad de Stokes: <i>v<sub>s</sub> = g(ρ<sub>p</sub> − ρ)d²/(18μ)</i>, que crece con el cuadrado del diámetro.'],[12,'Se elimina si llega al fondo antes de alcanzar la salida. La velocidad crítica es la carga superficial <i>v<sub>c</sub> = Q/A</i>.'],[99,'Las partículas gruesas (v<sub>s</sub> > Q/A) se eliminan todas; las finas solo en parte. Por eso se coagula y flocula antes: para hacerlas más grandes.']]},
 function(D,t){var x0=60,x1=540,y0=120,y1=360,u=60,Ps=[[1.6,C.m,'gruesa'],[0.743,C.f,'v_{s} = Q/A'],[0.35,C.hl,'fina']];D.rect(x0,y0,x1-x0,y1-y0,C.ax,RG(C.f,.06),2);
  D.rect(x0,y1-14,x1-x0,14,null,RG(C.hl,.35));D.text('fangos',x0+8,y1-3,{s:12,c:C.mut});D.arrow(20,y0+20,x0-4,y0+20,C.f,2.4);D.arrow(x1+4,y0+20,x1+40,y0+20,C.f,2.4);D.text('entrada',20,y0+8,{s:13,c:C.f});D.text('salida',x1+2,y0+8,{s:13,c:C.f});
  Ps.forEach(function(p,k){for(var j=0;j<4;j++){var tt=(t*1.0+j*2.2+k*0.5)%8.8,x=x0+u*tt,y=y0+12+p[0]*36*tt;var hit=y>=y1-14;if(hit){var tf=(y1-14-y0-12)/(p[0]*36);x=x0+u*tf;y=y1-14;}if(x>x1)continue;D.dot(x,y,3+p[0]*2,p[1],0.9);}
   var tf2=(y1-14-y0-12)/(p[0]*36),xe=Math.min(x1,x0+u*tf2),ye=xe<x1?y1-14:y0+12+p[0]*36*(x1-x0)/u;D.line(x0,y0+12,xe,ye,p[1],1.2,[4,4],0.7);D.text(p[2],x0+12+k*150,y1+26,{s:14,c:p[1]});});
  U.readout(D,['eficiencia de eliminación ≈ v_{s}/(Q/A) si v_{s} < Q/A, y 100 % si no'],440);}));

/* T4 fangos activos: reactor discontinuo con cinética de Monod */
var B4=(function(){var S=200,X=40,dt=0.02,o=[];for(var i=0;i<=600;i++){o.push([S,X]);var mu=0.25*S/(60+S);X+=dt*mu*X;S=Math.max(0,S-dt*mu*X/0.5);}return o;})();
M.reg('tm-t4',M.base({title:'Fangos activos: las bacterias consumen el sustrato',H:560,dur:18,caps:[[6,'En el reactor biológico las bacterias (X) crecen consumiendo la materia orgánica disuelta (S, medida como DBO).'],[12,'Su velocidad de crecimiento sigue la ley de Monod: <i>μ = μ<sub>máx</sub>·S/(K<sub>s</sub> + S)</i>. Al bajar S, el crecimiento se frena.'],[99,'Por cada gramo de sustrato se forman Y gramos de biomasa (rendimiento). El fango sobrante se purga y hay que tratarlo.']]},
 function(D,t){var n=Math.floor(seg(t,1,16)*600),A=U.axes(D,{xr:[0,12],yr:[0,220],xt:[3,6,9,12],yt:[50,100,150,200],xd:0,yd:0,xl:'t (h)',yl:'mg/L'},{x:80,y:96,w:480,h:300,grid:true}),pS=[],pX=[];
  for(var i=0;i<=n;i+=3){pS.push([A.X(i*0.02),A.Y(B4[i][0])]);pX.push([A.X(i*0.02),A.Y(Math.min(220,B4[i][1]))]);}D.path(pS,C.f,2.8);D.path(pX,C.m,2.8);
  var s=B4[n];D.text('S (sustrato)',A.X(0.4),A.Y(200)-8,{s:15,c:C.f});D.text('X (biomasa)',A.X(8),A.Y(Math.min(200,B4[400][1]))-12,{s:15,c:C.m});
  U.readout(D,['t = '+nf(n*0.02,1)+' h    S = '+nf(s[0],0)+' mg/L    X = '+nf(s[1],0)+' mg/L','μ = '+nf(0.25*s[0]/(60+s[0]),3)+' h⁻¹'],468);}));

/* T5 penacho gaussiano */
function sz(x){return 0.06*Math.pow(x,0.92);}function sy(x){return 0.08*Math.pow(x,0.92);}
function Cg(x,H){return 1e8/(Math.PI*5*sy(x)*sz(x))*Math.exp(-H*H/(2*sz(x)*sz(x)));}
M.reg('tm-t5',M.base({title:'Dispersión: el penacho gaussiano',H:600,dur:18,caps:[[6,'El penacho se abre al alejarse de la chimenea: su anchura σ<sub>z</sub> crece con la distancia y depende de la estabilidad de la atmósfera.'],[12,'A nivel del suelo la concentración es nula junto a la chimenea, sube hasta un máximo y luego baja por dilución.'],[99,'Con una altura efectiva H mayor, el máximo es más bajo y se aleja: por eso las chimeneas altas y la sobreelevación del penacho reducen la inmisión.']]},
 function(D,t){var H=lerp(40,110,U.pp(t,18)),x0=80,gy=260,sx=500/3000,sv=0.9;D.line(x0,gy,580,gy,C.ax,2);D.rect(x0-8,gy-H*sv,14,H*sv,C.ax,RG(C.ax,.3),1.4);
  var up=[],dn=[],cl=[];for(var x=0;x<=3000;x+=20){var s2=1.5*sz(x+1)*sv,yc=gy-H*sv;up.push([x0+x*sx,Math.max(70,yc-s2)]);dn.push([x0+x*sx,Math.min(gy,yc+s2)]);cl.push([x0+x*sx,yc]);}
  D.path(up.concat(dn.reverse()),null,0,RG(C.mut,.22));D.path(cl,C.mut,1.2,null,0.6);[1,2,3].forEach(function(k){var x=k*700,yc=gy-H*sv,s3=sz(x)*sv,p=[];for(var j=-25;j<=25;j++){var y=yc+j/10*s3;if(y>gy||y<70)continue;p.push([x0+x*sx-34*Math.exp(-j*j/200),y]);}D.line(x0+x*sx,yc-2.5*s3<70?70:yc-2.5*s3,x0+x*sx,Math.min(gy,yc+2.5*s3),C.ax,1,[3,3]);D.path(p,C.m,1.8);});
  D.text('H = '+nf(H,0)+' m',x0+12,gy-H*sv-6,{s:14,c:C.ax});
  var A=U.axes(D,{xr:[0,3000],yr:[0,2400],xt:[1000,2000,3000],yt:[500,1000,1500,2000],xd:0,yd:0,xl:'x (m)',yl:'C (µg/m³)'},{x:80,y:300,w:480,h:180,grid:true});
  U.plotf(D,A,function(x){return x<30?0:Cg(x,H);},C.m,2.8);var bx=30,bc=0;for(var x2=30;x2<=3000;x2+=10){var c=Cg(x2,H);if(c>bc){bc=c;bx=x2;}}D.dot(A.X(bx),A.Y(bc),6,C.hl);
  U.readout(D,['máximo en el suelo: '+nf(bc,0)+' µg/m³ a '+nf(bx,0)+' m'],540);}));

/* T6 suma de niveles sonoros */
M.reg('tm-t6',M.barras({title:'Medida del ruido: sumar decibelios',H:560,dur:16,p:[1,10],u:function(t,d){return seg(t,1,d-2);},n:10,xs:function(i){return i+0.5;},ax:{xr:[0,11],yr:[0,100],xt:[],yt:[20,40,60,80,100],yd:0,xl:'fuentes',yl:'dB(A)'},h:300,
 val:function(i,p){return i<Math.floor(p)?80:0;},col:function(){return 'f';},
 extra:function(D,A,p){var n=Math.floor(p),L=80+10*LG(n);D.line(A.X(0),A.Y(L),A.X(11),A.Y(L),C.m,2.6);D.text('total '+nf(L,1)+' dB',A.X(10.9),A.Y(L)-8,{s:16,c:C.m,a:'right',bold:true});},
 read:function(p){var n=Math.floor(p);return [n+' máquinas de 80 dB','L_{total} = 10·log(Σ10^{L_{i}/10}) = 80 + 10·log '+n+' = '+nf(80+10*LG(n),1)+' dB'];},
 caps:[[5,'Los decibelios no se suman directamente: hay que sumar las intensidades, <i>L = 10·log Σ 10<sup>L<sub>i</sub>/10</sup></i>.'],[10,'Dos fuentes iguales dan solo 3 dB más que una. Diez fuentes iguales, 10 dB más.'],[99,'Al revés: para bajar 10 dB un ruido hay que dividir su intensidad entre 10. Una fuente 10 dB por debajo de otra apenas cambia el total.']]}));

/* T7 eficiencia de un ciclón */
M.reg('tm-t7',M.curva({title:'Control de partículas: eficiencia de un ciclón',H:560,dur:18,p:[2,12],ax:{xr:[0,40],yr:[0,105],xt:[10,20,30,40],yt:[25,50,75,100],xd:0,yd:0,xl:'d (µm)',yl:'η (%)'},h:300,
 curvas:[{f:function(d,d50){return d<=0?0:100/(1+Math.pow(d50/d,2));},c:'m'}],
 extra:function(D,A,d50){D.line(A.X(0),A.Y(50),A.X(d50),A.Y(50),C.hl,1.2,[4,3]);D.line(A.X(d50),A.Y(0),A.X(d50),A.Y(50),C.hl,1.2,[4,3]);D.dot(A.X(d50),A.Y(50),6,C.hl);},
 read:function(d50){return ['diámetro de corte d_{50} = '+nf(d50,1)+' µm','η(d) = 1/(1 + (d_{50}/d)²)    (Lapple)'];},
 caps:[[6,'Un ciclón separa las partículas por fuerza centrífuga: las grandes se van a la pared y caen, las pequeñas siguen con el gas.'],[12,'El diámetro de corte d<sub>50</sub> es el que se retiene al 50 %. Un ciclón más pequeño y rápido tiene un d<sub>50</sub> menor.'],[99,'Para PM2,5 un ciclón no basta: hacen falta filtros de mangas o precipitadores electrostáticos, con eficiencias por encima del 99 %.']]}));

/* T8 transporte de un contaminante en el suelo */
function cz(z,t,R){var v=1,Dd=0.08,tt=Math.max(t,0.05);return Math.exp(-Math.pow(z-v*tt/R,2)/(4*Dd*tt/R))/Math.sqrt(4*Math.PI*Dd*tt/R)*0.6;}
M.reg('tm-t8',M.base({title:'Contaminación de suelos: avance de un vertido',H:580,dur:18,caps:[[6,'Un vertido puntual se infiltra con el agua (advección) y a la vez se extiende por dispersión: el pulso baja y se ensancha.'],[12,'Si el contaminante se adsorbe a las partículas del suelo avanza más despacio que el agua: el factor de retardo <i>R = 1 + ρ<sub>b</sub>K<sub>d</sub>/θ</i>.'],[99,'Un contaminante muy retenido (R alto) tarda mucho en llegar al acuífero, pero también es más difícil de lavar del suelo.']]},
 function(D,t){var tt=seg(t,0.5,16)*6,A=U.axes(D,{xr:[0,6.5],yr:[0,1.6],xt:[1,2,3,4,5,6],yt:[],xd:0,xl:'profundidad z (m)',yl:'C'},{x:80,y:96,w:480,h:300,grid:true});
  D.line(A.X(5.5),A.Y(0),A.X(5.5),A.Y(1.6),C.f,1.6,[5,4]);D.text('acuífero',A.X(5.55),A.Y(1.5),{s:14,c:C.f});
  U.plotf(D,A,function(z){return cz(z,tt,1);},C.g,2.6);U.plotf(D,A,function(z){return cz(z,tt,3);},C.m,2.8);
  D.text('R = 1 (no se adsorbe)',A.X(Math.min(5,tt)+0.1),A.Y(Math.min(1.5,cz(tt,tt,1)))-6,{s:14,c:C.g});D.text('R = 3',A.X(tt/3+0.15),A.Y(Math.min(1.5,cz(tt/3,tt,3)))-6,{s:14,c:C.m});
  U.readout(D,['t = '+nf(tt,1)+' (unidades de tiempo)','frente del agua a z = '+nf(tt,1)+' m; contaminante retardado a '+nf(tt/3,1)+' m'],478);}));

/* T10 jerarquía de residuos */
M.reg('tm-t10',M.base({title:'Residuos: la jerarquía de gestión',H:560,dur:16,caps:[[5,'La ley establece un orden de prioridad: lo mejor es no generar el residuo y lo último, eliminarlo en vertedero.'],[10,'Entre medias: preparar para la reutilización, reciclar y valorizar (por ejemplo, energéticamente en una incineradora).'],[99,'Saltarse un escalón solo se justifica con un análisis de ciclo de vida que demuestre un mejor resultado ambiental global.']]},
 function(D,t){var L=[['Prevención',C.ok],['Preparación para la reutilización',C.ok],['Reciclado',C.f],['Otra valorización (energética)',C.hl],['Eliminación (vertedero)',C.bad]],cx=W/2;
  L.forEach(function(l,i){var a=ease(seg(t,0.6+i*1.6,1.8+i*1.6));if(a<=0)return;var w=lerp(520,170,i/4)*a,y=96+i*68;D.rect(cx-w/2,y,w,56,l[1],RG(l[1],.2),2);if(a>0.6)D.text(l[0],cx,y+34,{s:i===1?14:16,a:'center',c:l[1],bold:true,al:(a-0.6)/0.4});});
  }));

/* T11 cadena de gestión de residuos peligrosos */
var TS11=[['Productor',90,'identifica (LER), envasa y etiqueta'],['Almacén',230,'almacenamiento temporal con plazo máximo'],['Transporte',370,'documento de identificación y notificación'],['Gestor',520,'tratamiento autorizado; archivo cronológico']];
M.reg('tm-t11',M.base({title:'Residuos peligrosos: la cadena de gestión',H:560,dur:20,caps:[[6,'El productor identifica el residuo con su código LER, lo envasa de forma segura y lo etiqueta con los pictogramas de peligro.'],[12,'Puede almacenarlo temporalmente en su instalación, con un plazo máximo. Para trasladarlo hacen falta documento de identificación y notificación previa.'],[99,'Un gestor autorizado lo trata (físico-químico, valorización o depósito). Todos llevan archivo cronológico: el residuo es trazable de principio a fin.']]},
 function(D,t){var u=seg(t,1,18)*3,k=Math.min(3,Math.floor(u)),f=u-Math.floor(u),y=230,x=lerp(TS11[k][1],TS11[Math.min(3,k+1)][1],k<3?ease(f):0);
  D.line(60,y+40,580,y+40,C.ax,2);TS11.forEach(function(s,i){var on=i===k;D.rect(s[1]-55,y+50,110,44,on?C.m:C.f,RG(on?C.m:C.f,on?.2:.06),on?2.6:1.4);D.text(s[0],s[1],y+78,{s:15,a:'center',c:on?C.m:C.f,bold:on});});
  D.rect(x-18,y-12,36,48,C.hl,RG(C.hl,.35),2.2);D.line(x-18,y,x+18,y,C.hl,1.4);D.line(x-18,y+24,x+18,y+24,C.hl,1.4);D.path([[x,y-34],[x+12,y-20],[x,y-6],[x-12,y-20],[x,y-34]],C.bad,2,RG(C.bad,.15));D.text('!',x,y-14,{s:14,a:'center',c:C.bad,bold:true});
  D.rect(x+26,y-50,30,38,C.ax,RG(C.ax,.06),1.4);for(var i=0;i<4;i++)D.line(x+31,y-42+i*7,x+51,y-42+i*7,C.mut,1);D.text('doc.',x+41,y-56,{s:11,a:'center',c:C.mut});
  U.readout(D,[TS11[k][2]],400);}));


/* T12 matriz de Leopold */
var LA=['Desbroce','Movim. tierras','Tráfico','Explotación'],LF=['Suelo','Agua','Aire','Fauna','Paisaje','Empleo'],
 LM=[[-6,-1,-2,-5,-4,1],[-7,-3,-4,-3,-6,2],[-1,0,-5,-2,-1,1],[-2,-2,-3,-1,-3,6]];
M.reg('tm-t12',M.base({title:'Evaluación de impacto: matriz de Leopold',H:560,dur:18,caps:[[6,'Las columnas son las acciones del proyecto y las filas los factores ambientales afectados. Cada celda valora el impacto.'],[12,'Se puntúa la magnitud de −10 a +10: negativa si perjudica, positiva si beneficia (como el empleo).'],[99,'Las sumas por fila señalan los factores más dañados y las sumas por columna las acciones que más medidas correctoras necesitan.']]},
 function(D,t){var x0=180,y0=110,cw=100,ch=46,n=Math.floor(seg(t,1,14)*24);LA.forEach(function(a,j){D.text(a,x0+j*cw+cw/2,y0-14,{s:14,a:'center',c:C.f,bold:true});});
  LF.forEach(function(f,i){D.text(f,x0-12,y0+i*ch+ch/2+5,{s:15,a:'right',c:C.w});var s=0;LA.forEach(function(a,j){var k=j*6+i,v=LM[j][i];D.rect(x0+j*cw,y0+i*ch,cw,ch,C.grid,null,1);if(k<n){s+=v;var c=v<0?C.bad:(v>0?C.ok:C.mut);D.rect(x0+j*cw+3,y0+i*ch+3,cw-6,ch-6,null,RG(c,.1+Math.abs(v)/14));D.text((v>0?'+':'')+nf(v,0),x0+j*cw+cw/2,y0+i*ch+ch/2+6,{s:17,a:'center',c:c,bold:true});}});
   if(n>=24)D.text('Σ '+(s>0?'+':'')+nf(s,0),x0+4*cw+12,y0+i*ch+ch/2+5,{s:15,c:s<0?C.bad:C.ok,bold:true});});
  if(n>=24)D.text('factor más afectado: suelo (Σ −16)',W/2,y0+6*ch+40,{s:18,a:'center',c:C.m});}));

/* T13 huella de carbono */
M.reg('tm-t13',M.base({title:'Huella de carbono: actividad × factor de emisión',H:580,dur:18,caps:[[6,'Cada fuente se calcula como dato de actividad × factor de emisión. Alcance 1: emisiones directas (gasóleo, 2 000 L × 2,7 kg CO₂e/L).'],[12,'Alcance 2: electricidad comprada (40 000 kWh). Su factor depende del mix: con electricidad de origen renovable certificado baja mucho.'],[99,'Mueve «Prueba tú» para cambiar el porcentaje de electricidad renovable y ver cómo cambia el total. (Factores ilustrativos: se usan los oficiales del año.)']]},
 function(D,t){var r=U.pp(t,18),a1=5.4,a2=8*(1-r),a3=3.2,A=U.axes(D,{xr:[0,3],yr:[0,18],xt:[],yt:[5,10,15],yd:0,xl:'',yl:'t CO₂e'},{x:90,y:96,w:300,h:300,grid:true}),x=A.X(1)-45,y=A.Y(0);
  [[a1,C.hl,'alcance 1'],[a2,C.f,'alcance 2'],[a3,C.mut,'alcance 3']].forEach(function(s){var h=A.Y(0)-A.Y(s[0]);D.rect(x,y-h,90,h,s[1],RG(s[1],.4),1.6);if(h>18)D.text(nf(s[0],1),x+45,y-h/2+6,{s:15,a:'center',c:s[1],bold:true});D.text(s[2],x+100,y-h/2+5,{s:14,c:s[1]});y-=h;});
  D.text('total alcances 1 + 2 = '+nf(a1+a2,1)+' t',420,150,{s:18,c:C.m,bold:true});D.text('con alcance 3 = '+nf(a1+a2+a3,1)+' t',420,180,{s:15,c:C.w});
  D.text('electricidad renovable: '+nf(r*100,0)+' %',420,240,{s:16,c:C.f});D.rect(420,252,180,14,C.grid,null,1);D.rect(420,252,180*r,14,null,RG(C.ok,.7));
  U.readout(D,['alcance 2 = 40 000 kWh × '+nf(0.2*(1-r),3)+' kg/kWh = '+nf(a2,1)+' t'],470);}));

M.reg('tm-t2b',M.curva({title:'Cinética de la DBO: por qué se mide a 5 días',H:560,dur:18,p:[0.1,0.35],ax:{xr:[0,20],yr:[0,330],xt:[5,10,15,20],yt:[100,200,300],xd:0,yd:0,xl:'t (días)',yl:'DBO (mg/L)'},h:300,
 curvas:[{f:function(x,k){return 300*(1-Math.exp(-k*x));},c:'m'}],
 extra:function(D,A,k){D.line(A.X(0),A.Y(300),A.X(20),A.Y(300),C.mut,1,[4,4]);D.text('L₀ (DBO última)',A.X(19.8),A.Y(300)-6,{s:13,c:C.mut,a:'right'});var b5=300*(1-Math.exp(-5*k));D.line(A.X(5),A.Y(0),A.X(5),A.Y(b5),C.hl,1.4,[4,3]);D.dot(A.X(5),A.Y(b5),6,C.hl);},
 read:function(k){return ['k = '+nf(k,2)+' d⁻¹    DBO_{t} = L₀(1 − e^{−kt})','DBO₅ = '+nf(300*(1-Math.exp(-5*k)),0)+' mg/L  ('+nf(100*(1-Math.exp(-5*k)),0)+' % de la DBO última)'];},
 caps:[[6,'La demanda bioquímica de oxígeno crece al ir degradándose la materia orgánica, siguiendo una cinética de primer orden.'],[12,'Medir hasta el final llevaría semanas: por convenio se mide a 5 días y 20 °C. La DBO₅ es una fracción de la DBO última L₀.'],[99,'Esa fracción depende de k: con k = 0,23 d⁻¹ es alrededor del 68 %. La DQO, que oxida químicamente, siempre es mayor.']]}));
})();
