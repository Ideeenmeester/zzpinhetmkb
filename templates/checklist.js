// Afvinklijst.
const {md,S,tags,deco}=require('./_shared');
module.exports=(p,f)=>{const s=S(f), li=f==='linkedin', th=p.thema||'blauw';
const vink=sz=>`<span style="flex:none;display:inline-flex;align-items:center;justify-content:center;width:${sz}px;height:${sz}px;border-radius:50%;background:var(--geel);color:var(--navy);font-family:B;font-weight:800;font-size:${sz*.55}px">&#10003;</span>`;
const pts=(p.punten||[]).map(x=>`<div style="display:flex;gap:${li?16:24}px;align-items:center;margin-bottom:${li?10:26}px">${vink(li?30:56)}<span style="font-family:B;font-weight:700;font-size:${li?24:40}px;letter-spacing:-.01em">${md(x)}</span></div>`).join('');
return `<div class="main t-${th}" style="padding:${s.pad}">${deco('cirkel',f,th)}<div class="z">
${tags(p.labels,f)}<h1 style="font-size:${li?42:84}px;margin-bottom:${li?18:50}px;max-width:${li?900:860}px">${md(p.kop)}</h1>
<div>${pts}</div>
${p.tekst?`<p class="sub" style="font-size:${s.sub}px;margin-top:${li?8:30}px">${md(p.tekst)}</p>`:''}
</div></div>`;};
