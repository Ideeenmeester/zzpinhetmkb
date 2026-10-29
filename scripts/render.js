// Maakt van elk bestand in posts/ een LinkedIn- (liggend) en Instagram-beeld (staand).
// Gebruik: npm run render            -> alle posts
//          npm run render:een -- 05  -> alleen posts waarvan de naam met 05 begint
const fs=require('fs'), path=require('path'), yaml=require('js-yaml'), {chromium}=require('playwright');
const root=path.join(__dirname,'..');
const {css,foot,tokens}=require('../templates/_shared');
const brand=yaml.load(fs.readFileSync(path.join(root,'brand/brand.yml'),'utf8'));
const alleen=process.argv.includes('--alleen') ? process.argv[process.argv.indexOf('--alleen')+1] : null;
const deep=(v)=>typeof v==='string'?tokens(v,brand):Array.isArray(v)?v.map(deep):(v&&typeof v==='object')?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,deep(x)])):v;

(async()=>{
  const files=fs.readdirSync(path.join(root,'posts')).filter(f=>/\.ya?ml$/.test(f)&&(!alleen||f.startsWith(alleen))).sort();
  if(!files.length){console.log('Geen posts gevonden.');return;}
  const browser=await chromium.launch(); const page=await browser.newPage();
  const tmp=path.join(root,'.render.html'); let fouten=0;
  for(const file of files){
    const id=file.replace(/\.ya?ml$/,'');
    try{
      const post=deep(yaml.load(fs.readFileSync(path.join(root,'posts',file),'utf8')));
      const tpl=require(path.join(root,'templates',post.sjabloon+'.js'));
      for(const [fmt,{breedte:w,hoogte:h}] of Object.entries(brand.formaten)){
        if(post.formaten && !post.formaten.includes(fmt)) continue;
        const html=`<!doctype html><html><head><meta charset="utf-8"><style>${css(brand)}</style></head><body><div class="c" style="width:${w}px;height:${h}px">${tpl(post,fmt,brand)}${foot(brand,fmt)}</div></body></html>`;
        fs.writeFileSync(tmp,html);
        await page.setViewportSize({width:w,height:h});
        await page.goto('file://'+tmp); await page.evaluate(()=>document.fonts.ready);
        const out=path.join(root,'output',fmt); fs.mkdirSync(out,{recursive:true});
        await page.screenshot({path:path.join(out,`${id}.png`)});
      }
      console.log('✓',id);
    }catch(e){fouten++;console.error('✗',id,'-',e.message);}
  }
  fs.rmSync(tmp,{force:true}); await browser.close();
  if(fouten) process.exit(1);
})();
