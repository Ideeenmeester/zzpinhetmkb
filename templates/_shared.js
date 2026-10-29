// Gedeelde bouwstenen voor alle sjablonen.
const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
// *woord* wordt geel gemarkeerd, \n wordt een nieuwe regel
const md = s => esc(s).replace(/\*([^*]+)\*/g,'<span class="y">$1</span>').replace(/\n/g,'<br>');

function css(b){
  const k=b.kleuren;
  return `
@font-face{font-family:B;src:url(brand/fonts/bricolage-grotesque-latin-700-normal.woff2);font-weight:700}
@font-face{font-family:B;src:url(brand/fonts/bricolage-grotesque-latin-800-normal.woff2);font-weight:800}
@font-face{font-family:I;src:url(brand/fonts/inter-latin-400-normal.woff2);font-weight:400}
@font-face{font-family:I;src:url(brand/fonts/inter-latin-500-normal.woff2);font-weight:500}
@font-face{font-family:I;src:url(brand/fonts/inter-latin-600-normal.woff2);font-weight:600}
:root{--blauw:${k.blauw};--geel:${k.geel};--navy:${k.navy};--groen:${k.groen};--licht:${k.licht};--lichtblauw:${k.lichtblauw}}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:I,sans-serif;-webkit-font-smoothing:antialiased}
.c{position:relative;overflow:hidden;display:flex;flex-direction:column}
.main{flex:1;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:center;color:#fff}
.t-blauw{background:var(--blauw)} .t-navy{background:var(--navy)} .t-groen{background:var(--groen)}
.t-geel{background:var(--geel);color:var(--navy)} .t-geel h1,.t-geel .sub{color:var(--navy)} .t-geel .y{color:var(--blauw)}
.t-geel .tag{color:var(--navy);border-color:rgba(20,36,62,.45)} .t-geel .kick{color:var(--blauw)} .t-geel .pill{background:var(--navy);color:#fff}
.foot{background:var(--licht);display:flex;align-items:center;justify-content:space-between}
.foot img{display:block}
.url{font-family:B;font-weight:700;color:var(--navy)}
h1{font-family:B;font-weight:800;letter-spacing:-0.035em;line-height:.98;color:#fff}
h2{font-family:B;font-weight:800;letter-spacing:-0.02em;line-height:1.05}
.y{color:var(--geel)}
.kick{font-family:B;font-weight:700;color:var(--geel)}
.sub{color:#fff;opacity:.94;line-height:1.4}
.pill{display:inline-block;background:var(--geel);color:var(--navy);font-family:B;font-weight:700;border-radius:999px}
.tags{display:flex;flex-wrap:wrap;position:relative;z-index:2}
.tag{font-family:B;font-weight:700;color:#fff;border:2px solid rgba(255,255,255,.55);border-radius:999px}
.strike{position:relative;display:inline-block}
.strike:after{content:"";position:absolute;left:-2%;right:-2%;top:54%;height:.09em;background:var(--geel)}
.col{border-left:solid var(--geel)}
.z{position:relative;z-index:2}
.deco{position:absolute;border-radius:50%;z-index:1}
`;}

const S = f => f==='linkedin'
  ? {pad:'0 72px', kop:72, kopS:52, sub:23, kick:23, tag:17, tagPad:'7px 18px', gap:'10px', mb:'20px', pill:22, pillPad:'15px 34px'}
  : {pad:'0 80px', kop:112, kopS:74, sub:35, kick:31, tag:25, tagPad:'10px 26px', gap:'14px', mb:'30px', pill:33, pillPad:'24px 54px'};

const tags = (labels,f) => !labels?.length ? '' : (s=>`<div class="tags" style="gap:${s.gap};margin-bottom:${s.mb}">${labels.map(l=>`<span class="tag" style="font-size:${s.tag}px;padding:${s.tagPad}">${esc(l)}</span>`).join('')}</div>`)(S(f));

const foot = (b,f) => f==='linkedin'
  ? `<div class="foot" style="height:84px;padding:0 48px 0 34px"><img src="${b.logo}" style="height:72px"><span class="url" style="font-size:22px">${esc(b.url)}</span></div>`
  : `<div class="foot" style="height:132px;padding:0 64px 0 44px"><img src="${b.logo}" style="height:112px"><span class="url" style="font-size:30px">${esc(b.url)}</span></div>`;

// Decoratieve vormen zoals op de site: ring, cirkel
function deco(vorm,f,thema){
  const ring = thema==='geel' ? 'var(--blauw)' : 'var(--geel)';
  const bol = thema==='groen' ? 'var(--geel)' : (thema==='geel' ? 'var(--groen)' : 'var(--groen)');
  if(vorm==='geen') return '';
  if(f==='linkedin'){
    if(vorm==='cirkel') return `<div class="deco" style="right:-140px;top:-140px;width:420px;height:420px;background:${ring}"></div>`;
    return `<div class="deco" style="right:-120px;top:-150px;width:520px;height:520px;border:70px solid ${ring}"></div><div class="deco" style="right:140px;bottom:-90px;width:200px;height:200px;background:${bol}"></div>`;
  }
  if(vorm==='cirkel') return `<div class="deco" style="right:-160px;top:-160px;width:420px;height:420px;background:${ring}"></div>`;
  return `<div class="deco" style="right:-200px;top:-200px;width:640px;height:640px;border:90px solid ${ring}"></div><div class="deco" style="right:-80px;bottom:-120px;width:300px;height:300px;background:${bol}"></div>`;
}

const euro = n => '€' + Number(n).toLocaleString('nl-NL',{minimumFractionDigits: n%1?2:0, maximumFractionDigits:2});
// {{maand}}, {{overeenkomst}}, {{jaar:10}} = jaarkosten bij 10 lopende overeenkomsten
function tokens(s,b){
  const p=b.prijzen;
  return String(s ?? '').replace(/\{\{maand\}\}/g,euro(p.per_maand)).replace(/\{\{overeenkomst\}\}/g,euro(p.per_overeenkomst))
    .replace(/\{\{jaar:(\d+)\}\}/g,(_,n)=>euro(Math.round(12*p.per_maand + 12*n*p.per_overeenkomst)));
}

module.exports={esc,md,css,S,tags,foot,deco,tokens,euro};
