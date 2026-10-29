// Doorgestreepte koppen met uitleg: wat je niet meer hoeft.
const {md,esc,S,tags,deco}=require('./_shared');
module.exports=(p,f)=>{const s=S(f), li=f==='linkedin', th=p.thema||'blauw';
const items=(p.items||[]).map(i=> li
 ? `<div class="col" style="border-left-width:8px;padding-left:24px;flex:1"><h2 style="color:#fff;font-size:30px"><span class="strike">${esc(i.titel)}</span></h2><p class="sub" style="font-size:19px;margin-top:14px">${md(i.tekst)}</p></div>`
 : `<div class="col" style="border-left-width:10px;padding-left:34px;margin-bottom:44px"><h2 style="color:#fff;font-size:52px"><span class="strike">${esc(i.titel)}</span></h2><p class="sub" style="font-size:32px;margin-top:16px">${md(i.tekst)}</p></div>`).join('');
return `<div class="main t-${th}" style="padding:${s.pad}">${li?'':deco('cirkel',f,th)}<div class="z">
${tags(p.labels,f)}
<h1 style="font-size:${li?50:72}px;margin-bottom:${li?40:60}px;max-width:${li?1000:760}px">${md(p.kop)}</h1>
${li?`<div style="display:flex;gap:36px">${items}</div>`:items}
</div></div>`;};
