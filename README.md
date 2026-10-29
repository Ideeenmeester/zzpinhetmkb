# zzpinhetmkb-socials

Socialmediabeelden voor zzpinhetmkb.nl. Je schrijft alleen de tekst; de repository maakt er automatisch een **LinkedIn-beeld (liggend, 1200×627)** en een **Instagram-beeld (staand, 1080×1350)** van, in de huisstijl en met het originele logo.

## Een nieuw beeld maken

1. Ga naar de map `posts/` en kopieer een bestaand bestand dat lijkt op wat je wilt.
2. Geef het een nieuwe naam, bijvoorbeeld `26-mijn-nieuwe-post.yml`.
3. Pas de tekst aan en sla op (op GitHub: *Commit changes*).
4. GitHub maakt de beelden binnen een paar minuten. Je vindt ze in `output/linkedin/` en `output/instagram/`, en als zip onder **Actions → Beelden maken → socials**.

### Schrijftips

- `*woord*` maakt een woord geel (of blauw op een gele achtergrond).
- `\n` in een kop zet de rest op een nieuwe regel.
- Houd het kort: een kop, hooguit drie labels en eventueel een korte regel boven de kop (`kicker`).
- Labels in gewone letters: Wtta, DBA, inlenen, uitlenen, inhuur, extern, zelfstandigen, flexibele schil, extra krachten, expertise, zekerheid, veilig, compleet.

## Sjablonen

| Sjabloon | Waarvoor | Voorbeeld |
| --- | --- | --- |
| `statement` | Eén sterke uitspraak | `posts/02-jij-bent-verantwoordelijk.yml` |
| `groot-getal` | Een bedrag of datum dat moet opvallen | `posts/06-waarborgsom.yml` |
| `tijdlijn` | Data op een rij | `posts/03-wtta-tijdlijn.yml` |
| `vergelijking` | Tabel met twee kolommen, rechts uitgelicht | `posts/15-inlenen-of-opdracht.yml` |
| `doorgestreept` | Wat je niet meer hoeft te betalen | `posts/18-wat-je-bespaart.yml` |
| `checklist` | Afvinklijst | `posts/24-checklist.yml` |
| `twee-kanten` | Organisatie en zzp'er, rechtstreeks verbonden | `posts/21-rechtstreeks.yml` |

Achtergrond kies je met `thema: blauw | navy | geel | groen`. De vorm rechtsboven met `vorm: ring | cirkel | geen`.

## Huisstijl en prijzen

Alles staat in `brand/brand.yml`: kleuren, url en prijzen. Verander je daar een prijs, dan passen alle beelden met `{{maand}}`, `{{overeenkomst}}` of `{{jaar:10}}` (jaarkosten bij 10 overeenkomsten) zich vanzelf aan.

Het logo (`brand/logo.png`) wordt **nooit aangepast**: het staat altijd onderaan op een balk in exact de achtergrondkleur van het logobestand.

## Lokaal draaien (optioneel)

```bash
npm install
npx playwright install chromium
npm run render              # alle beelden
npm run render:een -- 05    # alleen posts die met 05 beginnen
```

Lettertypes: Bricolage Grotesque en Inter (SIL Open Font License, zie `brand/fonts/`).
