# Maakt output/overzicht-<formaat>.png met alle beelden naast elkaar (handig om te controleren)
import sys,os,glob
from PIL import Image
for fmt,cols,sc in [('linkedin',3,.4),('instagram',5,.3)]:
    fs=sorted(glob.glob(f'output/{fmt}/*.png'))
    if not fs: continue
    ims=[Image.open(f) for f in fs]; w,h=int(ims[0].width*sc),int(ims[0].height*sc); g=12
    rows=(len(ims)+cols-1)//cols
    sheet=Image.new('RGB',(cols*(w+g)+g,rows*(h+g)+g),(255,255,255))
    for i,im in enumerate(ims): sheet.paste(im.resize((w,h),Image.LANCZOS),(g+(i%cols)*(w+g),g+(i//cols)*(h+g)))
    sheet.save(f'output/overzicht-{fmt}.png')
