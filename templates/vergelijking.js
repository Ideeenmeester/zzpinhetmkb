// Witte kaart met vergelijkingstabel; de laatste kolom wordt uitgelicht.
const {md,esc,S,tags}=require('./_shared');
module.exports=(p,f)=>{const s=S(f), li=f==='linkedin', k=p.kolommen||['',''], r=p.rijen||[];
const fs=li?{h:16,wat:22,c:20,pad:'14px 20px'}:{h:24,wat:32,c:30,pad:'26px 26px'};
const head=`<tr><th style="text-align:left;padding:${fs.pad};font-size:${fs.h}px;color:#5a6478;font-weight:600">${esc(p.watkop||'Wat')}</th><th style="text-align:left;padding:${fs.pad};font-size:${fs.h}px;color:#5a6478;font-weight:600">${esc(k[0])}</th><th style="text-align:left;padding:${fs.pad};font-size:${fs.h}px;color:var(--blauw);font-weight:600;background:var(--lichtblauw);border-radius:14px 14px 0 0">${esc(k[1])}</th></tr>`;
const body=r.map((x,i)=>`<tr style="${i<r.length-1?'border-bottom:2px solid #d5dbe6':''}"><td style="padding:${fs.pad};font-family:B;font-weight:700;font-size:${fs.wat}px;color:var(--navy);vertical-align:top;width:${li?'24%':'26%'}">${md(x.wat)}</td><td style="padding:${fs.pad};font-size:${fs.c}px;color:#4a5466;line-height:1.38;vertical-align:top">${md(x.a)}</td><td style="padding:${fs.pad};font-size:${fs.c}px;color:var(--navy);font-weight:600;line-height:1.38;vertical-align:top;background:var(--lichtblauw)">${md(x.b)}</td></tr>`).join('');
return `<div class="main t-${p.thema||'blauw'}" style="padding:${li?'0 56px':'0 60px'}">${tags(p.labels,f)}
${p.kicker?`<div class="kick" style="font-size:${s.kick}px;margin-bottom:${li?10:18}px">${md(p.kicker)}</div>`:''}<h1 style="font-size:${li?48:76}px;margin-bottom:${li?22:44}px">${md(p.kop)}</h1>
<div style="background:#fff;border-radius:${li?24:36}px;padding:${li?'16px 22px':'30px 30px'}"><table style="width:100%;border-collapse:collapse">${head}${body}</table></div></div>`;};
