# Media slots — where photos & videos go

Every grey striped box on the site has a black **slot badge** (e.g. `P2`, `H1`, `R3`).
To fill a slot, save the file with the **exact name** below into the listed folder.
It shows up automatically — no code changes needed. Until then, the placeholder stays.

Recommended: JPG, ~1600px wide, under 300 KB (compress with squoosh.app). Videos: MP4 (H.264), muted, 10–20 s, under 8 MB.

## Site & pages — `public/images/site/` and `public/videos/`

| Slot | Where | File | Shape |
|---|---|---|---|
| H1 | Home hero (video **or** photo) | `public/videos/hero.mp4` and/or `public/images/site/hero.jpg` | portrait 4:5 |
| H2 | Home "About" section, large | `public/images/site/home-about.jpg` | 5:4 |
| H3 | Home "About" section, small inset | `public/images/site/home-about-2.jpg` | square |
| A1 | About page, large | `public/images/site/about-main.jpg` | 5:4 |
| A2 | About page, small inset | `public/images/site/about-2.jpg` | square |
| L1 | About page, leadership photo 1 | `public/images/site/team-1.jpg` | portrait 4:5 |
| L2 | About page, leadership photo 2 | `public/images/site/team-2.jpg` | portrait 4:5 |
| — | Social share preview | `public/images/site/og-image.jpg` | 1200×630 |

## Granules — `public/images/products/`

Main photo = `<name>.jpg`; three extra gallery photos = `<name>-2.jpg`, `-3.jpg`, `-4.jpg` (slots `b`, `c`, `d`).

| Slot | Product | Main file |
|---|---|---|
| P1 | HDPE Blue Drum Granules | `hdpe-blue-drum-granules.jpg` |
| P2 | HDPE Blow Grade Granules | `hdpe-blow-grade-granules.jpg` |
| P3 | PP Injection Grade Granules | `pp-injection-grade-granules.jpg` |
| P4 | PPCP White Granules | `ppcp-white-granules.jpg` |
| P5 | LDPE Film Grade Granules | `ldpe-film-grade-granules.jpg` |

## Regrinds — `public/images/regrinds/`

| Slot | Product | Main file |
|---|---|---|
| P6 | Regrinds overview (photo and/or video) | `regrinds-overview.jpg` / `public/videos/regrinds.mp4` |
| R1 | HDPE Blue Drum Regrind | `hdpe-blue-drum-regrind.jpg` |
| R2 | PPCP Battery Regrind | `ppcp-battery-regrind.jpg` |
| R3 | ABS Regrind | `abs-regrind.jpg` |
| R4 | PPCP White Paint Bucket Regrind | `ppcp-white-paint-bucket-regrind.jpg` |
| R5 | HDPE Blow Bottle Regrind (FMCG) | `hdpe-blow-bottle-regrind.jpg` |

Gallery extras follow the same pattern, e.g. `abs-regrind-2.jpg`.

Gallery extras (slots `b`, `c`, `d`) are hidden until their file exists, so pages never show empty boxes. Add the file, then rebuild/redeploy, and the thumbnail appears.
