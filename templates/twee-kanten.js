// Twee overlappende vlakken (organisatie en zzp'er) met 'Rechtstreeks' in het midden.
const {md,esc}=require('./_shared');
module.exports=(p,f)=>{const li=f==='linkedin', L=p.links||{}, Rr=p.rechts||{};
const blok=(x,c,sz)=>`<h1 style="font-size:${sz.k}px">${md(x.titel)}</h1><p class="sub" style="font-size:${sz.t}px;margin-top:${sz.m}px">${md(x.tekst)}</p>${x.knop?`<div style="margin-top:${sz.m+6}px"><span class="pill" style="font-size:${sz.p}px;padding:${sz.pp}">${esc(x.knop)}</span></div>`:''}`;
if(li){const sz={k:50,t:19,m:12,p:18,pp:'12px 26px'};
return `<div class="main" style="background:var(--licht);display:block">
<div style="position:absolute;left:-180px;top:30px;width:860px;height:480px;border-radius:50%;background:var(--blauw)"></div>
<div style="position:absolute;right:-180px;top:30px;width:860px;height:480px;border-radius:50%;background:var(--groen)"></div>
<div style="position:absolute;left:470px;top:110px;width:260px;height:320px;border-radius:50%;background:var(--navy)"></div>
<div style="position:absolute;left:470px;top:250px;width:260px;text-align:center;font-family:B;font-weight:800;font-size:28px;color:#fff">${esc(p.midden||'Rechtstreeks')}</div>
<div class="z" style="position:absolute;left:70px;top:165px;width:400px">${blok(L,'',sz)}</div>
<div class="z" style="position:absolute;left:760px;top:165px;width:400px">${blok(Rr,'',sz)}</div></div>`;}
const sz={k:82,t:31,m:18,p:30,pp:'20px 44px'};
return `<div class="main" style="background:var(--licht);display:block">
<div style="position:absolute;left:-160px;top:-60px;width:1400px;height:740px;border-radius:50%;background:var(--blauw)"></div>
<div style="position:absolute;left:-160px;top:530px;width:1400px;height:740px;border-radius:50%;background:var(--groen)"></div>
<div style="position:absolute;left:300px;top:520px;width:480px;height:210px;border-radius:50%;background:var(--navy)"></div>
<div style="position:absolute;left:300px;top:600px;width:480px;text-align:center;font-family:B;font-weight:800;font-size:44px;color:#fff">${esc(p.midden||'Rechtstreeks')}</div>
<div class="z" style="position:absolute;left:90px;top:110px;width:880px">${blok(L,'',sz)}</div>
<div class="z" style="position:absolute;left:90px;top:780px;width:880px">${blok(Rr,'',sz)}</div></div>`;};
