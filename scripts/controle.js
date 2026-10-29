// Controleert alle posts op de vaste regels en maakt output/planning.csv
// Gebruik: npm run controle
const fs=require('fs'),path=require('path'),yaml=require('js-yaml');
const root=path.join(__dirname,'..');
const files=fs.readdirSync(path.join(root,'posts')).filter(f=>/\.ya?ml$/.test(f)).sort();
let fout=0; const rows=[['nr','datum','tijd','onderwerp','beeld','woorden']]; const koppen={};
for(const f of files){
  const p=yaml.load(fs.readFileSync(path.join(root,'posts',f),'utf8')); const t=(p.linkedin||'').trim(); const id=f.replace(/\.ya?ml$/,'');
  const err=m=>{fout++;console.log(`✗ ${f}: ${m}`);};
  if(!t) err('geen linkedin-tekst');
  if(!t.endsWith('Bekijk onze website.')) err('eindigt niet op "Bekijk onze website."');
  if(/https?:|www\.|zzpinhetmkb\.nl/i.test(t)) err('bevat een link of url');
  if(/[—–]/.test(t+(p.kop||''))) err('bevat een gedachtestreepje');
  if(/[’‘]/.test(t)) err('gekrulde apostrof');
  if(/#\w/.test(t)) err('bevat hashtag');
  if(/Ik ben benieuwd|Mijn vraag:|Herkenbaar\?/.test(t)) err('AI-afsluiter');
  if(/€\s?5 per maand|€\s?2,50/.test(t)) err('oude prijs');
  if(/keurmerk/i.test(t)) err('"keurmerk" i.p.v. toelating');
  if('tekst' in p && p.sjabloon!=='twee-kanten') err('beeld heeft tekst-veld (te veel tekst)');
  if(koppen[p.kop]) err(`zelfde kop als ${koppen[p.kop]}`); koppen[p.kop]=f;
  const w=t.split(/\s+/).length; if(w>160) err(`te lang (${w} woorden)`);
  rows.push([p.nr,p.datum,p.tijd,`"${String(p.onderwerp).replace(/"/g,'""')}"`,`output/linkedin/${id}.png`,w]);
}
fs.mkdirSync(path.join(root,'output'),{recursive:true});
fs.writeFileSync(path.join(root,'output/planning.csv'),rows.map(r=>r.join(',')).join('\n'));
console.log(`${files.length} posts gecontroleerd, ${fout} problemen.`); if(fout) process.exit(1);
