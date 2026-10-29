// Eén groot getal met toelichting.
const {md,esc,S,tags,deco}=require('./_shared');
module.exports=(p,f)=>{const s=S(f), li=f==='linkedin', th=p.thema||'navy';
return `<div class="main t-${th}" style="padding:${s.pad}">${deco(p.vorm||'cirkel',f,th)}<div class="z">
${tags(p.labels,f)}
${p.kicker?`<div class="kick" style="font-size:${s.kick}px;margin-bottom:${li?8:16}px">${md(p.kicker)}</div>`:''}
<div style="font-family:B;font-weight:800;letter-spacing:-0.05em;line-height:.9;color:${th==='geel'?'var(--blauw)':'var(--geel)'};font-size:${Math.round((li?150:230)*Math.min(1,(li?9:6.5)/String(p.getal).length))}px">${esc(p.getal)}</div>
<h1 style="font-size:${li?50:76}px;margin-top:${li?14:30}px;max-width:${li?820:900}px">${md(p.kop)}</h1>
${p.tekst?`<p class="sub" style="font-size:${s.sub}px;margin-top:${li?16:36}px;max-width:${li?700:860}px">${md(p.tekst)}</p>`:''}
</div></div>`;};
