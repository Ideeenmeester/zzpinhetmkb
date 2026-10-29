// Grote uitspraak met labels, korte toelichting en optionele knop.
const {md,esc,S,tags,deco}=require('./_shared');
module.exports=(p,f)=>{const s=S(f), li=f==='linkedin', th=p.thema||'blauw';
return `<div class="main t-${th}" style="padding:${s.pad}">${deco(p.vorm||'ring',f,th)}
<div class="z" style="${li?'max-width:780px':''}">
${tags(p.labels,f)}
${p.kicker?`<div class="kick" style="font-size:${s.kick}px;margin-bottom:${li?16:26}px">${md(p.kicker)}</div>`:''}
<h1 style="font-size:${p.kopgrootte?.[f]||s.kop}px">${md(p.kop)}</h1>
${p.tekst?`<p class="sub" style="font-size:${s.sub}px;margin-top:${li?20:40}px;max-width:${li?660:860}px">${md(p.tekst)}</p>`:''}
${p.knop&&!li?`<div style="margin-top:52px"><span class="pill" style="font-size:${s.pill}px;padding:${s.pillPad}">${esc(p.knop)}</span></div>`:''}
</div></div>`;};
