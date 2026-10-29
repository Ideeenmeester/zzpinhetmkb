// Tijdlijn met data, zoals op de site. Zet actief: true bij de stap die je wilt uitlichten.
const {md,esc,S,tags}=require('./_shared');
module.exports=(p,f)=>{const s=S(f), li=f==='linkedin', st=p.stappen||[];
if(li){
 const cols=st.map(x=>`<div style="flex:1;position:relative;padding:44px 18px 26px;border-radius:0 0 22px 22px;${x.actief?'background:var(--geel);color:var(--navy)':''}">
 <div style="position:absolute;top:-11px;left:18px;width:22px;height:22px;border-radius:50%;border:4px solid var(--geel);background:${x.actief?'var(--navy)':'var(--navy)'}"></div>
 <div style="font-family:B;font-weight:800;font-size:46px;letter-spacing:-.04em;line-height:1;color:${x.actief?'var(--navy)':'var(--geel)'}">${esc(x.datum)}</div>
 <div style="font-family:B;font-weight:700;font-size:20px;margin-top:4px;opacity:.85">${esc(x.jaar)}</div>
 <h2 style="font-size:26px;margin-top:14px">${md(x.titel)}</h2>
 ${x.tekst?`<p style="font-size:15px;line-height:1.38;margin-top:8px;opacity:.9">${md(x.tekst)}</p>`:''}</div>`).join('');
 return `<div class="main t-navy" style="padding:0 56px;justify-content:flex-start;padding-top:56px">${tags(p.labels,f)}
 <h1 style="font-size:50px;margin-bottom:40px">${md(p.kop)}</h1>
 <div style="display:flex;border-top:4px solid rgba(255,255,255,.3)">${cols}</div></div>`;}
const rows=st.map(x=>`<div style="position:relative;padding:34px 30px 34px 70px;border-radius:24px;margin-bottom:10px;${x.actief?'background:var(--geel);color:var(--navy)':''}">
 <div style="position:absolute;left:18px;z-index:2;top:56px;width:28px;height:28px;border-radius:50%;border:5px solid var(--geel);background:var(--navy)"></div>
 <div style="display:flex;align-items:baseline;gap:18px"><span style="font-family:B;font-weight:800;font-size:76px;letter-spacing:-.04em;line-height:1;color:${x.actief?'var(--navy)':'var(--geel)'}">${esc(x.datum)}</span><span style="font-family:B;font-weight:700;font-size:34px;opacity:.85">${esc(x.jaar)}</span></div>
 <h2 style="font-size:48px;margin-top:10px">${md(x.titel)}</h2>
 ${x.tekst?`<p style="font-size:25px;line-height:1.38;margin-top:6px;opacity:.9">${md(x.tekst)}</p>`:''}</div>`).join('');
return `<div class="main t-navy" style="padding:0 70px">
<div class="z">${tags(p.labels,f)}<h1 style="font-size:84px;margin-bottom:48px">${md(p.kop)}</h1><div style="position:relative"><div style="position:absolute;left:30px;top:40px;bottom:40px;width:4px;background:rgba(255,255,255,.3)"></div>${rows}</div></div></div>`;};
