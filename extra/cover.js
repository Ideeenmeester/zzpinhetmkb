// LinkedIn-coverafbeelding voor de bedrijfspagina (1128x191, ook in 2x)
const path=require('path'),fs=require('fs'),yaml=require('js-yaml'),{chromium}=require('playwright');
const root=path.join(__dirname,'..');const {css}=require('../templates/_shared');
const b=yaml.load(fs.readFileSync(path.join(root,'brand/brand.yml'),'utf8'));
const html=`<!doctype html><html><head><meta charset="utf-8"><style>${css(b)}</style></head><body>
<div style="width:1128px;height:191px;position:relative;overflow:hidden;background:var(--blauw)">
 <div class="deco" style="right:-120px;top:-140px;width:280px;height:280px;border:44px solid var(--geel)"></div>
 <div class="deco" style="right:150px;bottom:-110px;width:160px;height:160px;background:var(--groen)"></div>
 <div class="z" style="position:absolute;left:290px;top:42px">
  <h1 style="font-size:36px;letter-spacing:-.03em">Zzp'ers rechtstreeks en <span class="y">goed geregeld</span></h1>
  <div style="display:flex;gap:10px;margin-top:16px;align-items:center">
   ${['zonder marge','zonder afhankelijkheid','Wtta en DBA'].map(t=>`<span class="tag" style="font-size:15px;padding:6px 15px">${t}</span>`).join('')}
   <span class="url" style="color:#fff;font-size:17px;margin-left:12px">${b.url}</span>
  </div>
 </div>
</div></body></html>`;
(async()=>{const br=await chromium.launch();
 for(const s of [1,2]){const pg=await br.newPage({viewport:{width:1128,height:191},deviceScaleFactor:s});
  fs.writeFileSync(path.join(root,'.render.html'),html);await pg.goto('file://'+path.join(root,'.render.html'));await pg.evaluate(()=>document.fonts.ready);
  fs.mkdirSync(path.join(root,'output/extra'),{recursive:true});
  await pg.screenshot({path:path.join(root,`output/extra/linkedin-cover-${s===1?'1128x191':'2256x382'}.png`)});}
 fs.rmSync(path.join(root,'.render.html'));await br.close();})();
