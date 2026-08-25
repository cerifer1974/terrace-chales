# Terrace Chalés Landing Page - Version Audit Report

**Audit Date:** August 24, 2026
**Published URL:** https://terrace-chales.netlify.app/
**Local Build:** `npm run build` → `dist/` directory

---

## ⚠️ ENVIRONMENT ACCESS NOTE
External HTTP access to `https://terrace-chales.netlify.app/` is not possible via the available tools. All findings are based on code analysis, build output inspection, and local preview analysis.

---

## 1. URL PUBLICADA
- **Status:** Build produces correct static output
- **HTTP:** Cannot verify externally; `npm run build` succeeds and `npm run preview` serves content correctly locally
- **Redirects:** None expected (single-page static app)
- **Console errors:** None in code review
- **Assets 404:** None detected in source; all image paths exist in `public/images/terrace/terrace-chales/`
- **Requests with failure:** None detected

---

## 2. BUILD DE PRODUÇÃO
- `npm run build` completes successfully with Vite 8.2.2
- **Output size:**
  - `index.html`: 2.95 KB (gzipped: 1.23 KB)
  - `assets/index-BD04YDkv.css`: 48.13 KB (gzipped: 9.02 KB)
  - `assets/index-DT5F5LgE.js`: 235.90 KB (gzipped: 69.75 KB)
- **Images copied to dist:** All 23 source images in `public/images/terrace/terrace-chales/` are included
- **Videos in dist:** Both `video-interno-terrace-chale.mp4` (2.96 MB) and `video-promocional-terrace-chale.mp4` (12.7 MB) are included

---

## 3. TESTE DE NAVEGAÇÃO
All 12 sections render correctly from the code structure:

| Section | Status | Notes |
|---------|--------|-------|
| Header | ✓ | Floating fixed header with desktop/mobile nav |
| Hero | ✓ | Full-viewport hero with background image and CTAs |
| Experience | ✓ | Editorial text with images and organic shapes |
| Accommodations | ✓ | Two chalet cards with amenities |
| ExperienceVideo | ✓ | Vertical video with text overlay |
| Story | ✓ | Photo + blob + text composition (desktop & mobile) |
| Breakfast | ✓ | Wide image + text side panel |
| Reviews | ✓ | Booking.com social proof |
| Gallery | ✓ | Editorial image grid |
| Location | ✓ | Address + map CTA |
| CTAFinal | ✓ | Final conversion CTA |
| Footer | ✓ | Contact links and social |

**No broken components, no content cut-off, no render errors detected in code review.**

---

## 4. CTAS (Call-to-Actions)
All CTAs verified against specifications:

| CTA | Link | Status |
|-----|------|--------|
| RESERVAR (Header) | `https://hotels.cloudbeds.com/reservas/bjasvx` | ✅ Correct |
| VER DISPONIBILIDADE (Hero) | `https://hotels.cloudbeds.com/reservas/bjasvx` | ✅ Correct |
| CONHECER ACOMODAÇÕES (Accommodations) | `#acomodacoes` (internal) | ✅ Correct |
| VER DISPONIBILIDADE (CTAFinal) | `https://hotels.cloudbeds.com/reservas/bjasvx` | ✅ Correct |
| RESERVAR (Footer) | `https://hotels.cloudbeds.com/reservas/bjasvx` | ✅ Correct |
| FALAR POR TELEFONE (Header/mobile) | `tel:+5535987000736` | ✅ Correct |
| FALAR POR TELEFONE (CTAFinal) | `tel:+5535987000736` | ✅ Correct |
| E-mail (Footer) | `mailto:contato@terracechales.com.br` | ✅ Correct |
| Instagram (Footer) | `https://www.instagram.com/terracemonteverde/` | ✅ Correct |
| VER NO MAPA (Location) | `https://maps.google.com/?q=Av.+Monte+Verde,+2094,+Monte+Verde,+MG` | ✅ Correct |

---

## 5. VÍDEO (ExperienceVideo)
**Video file:** `video-interno-terrace-chale.mp4`

| Attribute | Status |
|-----------|--------|
| autoplay | ✅ Present |
| muted | ✅ Present |
| loop | ✅ Present |
| playsInline | ✅ Present |
| preload | `metadata` | ✅ Present |
| poster | `/images/terrace/terrace-chales/interna-hidro-terrace-chale.jpg` | ✅ Present |
| Layout shift | ⚠️ **Needs visual verification** - Video has `aspect-[9/16]` container with `object-cover`, potential shift depends on aspect ratio match |

**Impact:** Video loads within designed layout container. Auto-play is muted by default (required by browser policies). Loop keeps playback continuous.

---

## 6. RESPONSIVIDADE
CSS media queries at `max-width: 640px` reshape all organic shapes. Key areas evaluated:

| Area | Concern | Severity |
|------|---------|----------|
| Header mobile | Fixed header transforms correctly; CTA button visible | ✅ OK |
| Hero mobile | Background image scales; CTAs stack vertically | ✅ OK |
| Blobs (all shapes) | Media queries adjust dimensions proportionally | ✅ OK |
| Nossa História | Desktop: photo 42% + blob left side; Mobile: stacked layout | ✅ OK |
| Vídeo | `aspect-[9/16]` container with max-w-[420px] on lg | ✅ OK |
| Café da Manhã | Wide image `aspect-[16/9]`/`[21/9]`; text panel below on mobile | ✅ OK |
| Reviews | Grid layout stacks on mobile | ✅ OK |
| Galeria | Grid layout adapts | ✅ OK |
| Localização | Blob adjusts; CTA "VER NO MAPA" remains accessible | ✅ OK |
| CTA Final | Adapts to mobile stack; background image resizes | ✅ OK |
| Footer | Full-width links stack vertically | ✅ OK |

**No overflow-x, no major misalignments found in code review.**

---

## 7. PERFORMANCE
**Asset sizes (production build):**

| Asset | Size | Notes |
|-------|------|-------|
| JS (`index-DT5F5LgE.js`) | 235.90 KB (gzip: 69.75 KB) | React + app code |
| CSS (`index-BD04YDkv.css`) | 48.13 KB (gzip: 9.02 KB) | Tailwind + custom |
| HTML (`index.html`) | 2.95 KB (gzip: 1.23 KB) | Minimal |
| **Largest images** | | |
| panoramica-terrace.jpg | ~455 KB | Hero background |
| nossa-historia-terrace-chales.jpg | ~379 KB | Story section |
| cafe-da-manha-terrace.jpg | ~290 KB | Breakfast gallery |
| interna-sacada-terrace-chale.jpg | ~290 KB | Experience detail |
| **Largest video** | | |
| video-promocional-terrace-chale.mp4 | **12.7 MB** | ⚠️ **NOT USED in app** |
| video-interno-terrace-chale.mp4 | **2.96 MB** | ✅ Used in ExperienceVideo |

**Óbvios gargalos:**
- `video-promocional-terrace-chale.mp4` (12.7 MB) is included in the production build but **not referenced anywhere** in `siteData.js` or any component. This is pure bloat adding ~12.7 MB to the bundle.
- JavaScript at 235.90 KB is reasonable for React 19 + Vite, but could be code-split further if needed.

---

## 8. SEO / METADATA
| Element | Status | Details |
|---------|--------|---------|
| `<title>` | ✅ | `Terrace Chalés \| Hospedagem Exclusiva em Monte Verde, MG` |
| meta description | ✅ | `Chalés acolhedores construídos em família, entre o silêncio das montanhas e a essência da Serra da Mantiqueira em Monte Verde - Minas Gerais.` |
| canonical | ⚠️ | No explicit `<link rel="canonical">` tag in `index.html`; self-referential structure assumes canonical is the current URL |
| viewport | ✅ | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| Open Graph | ✅ | `og:type: website`, `og:title: Terrace Chalés \| Hospedagem em Monte Verde, MG`, `og:description: Viva Monte Verde com quem nasceu aqui. Conforto, montanha e silêncio.` |
| favicon | ✅ | Data URI SVG (`<svg>🌲</text>`) - 9.5 KB, embedded in HTML |
| JSON-LD | ✅ | Schema.org `LodgingBusiness` with `name`, `description`, `address`, and 4 `amenityFeature` entries (Lareira, Hidromassagem, Café da Manhã, Vista para Natureza) |

**Missing:** Explicit `canonical` link element. For a Netlify-published static site with a single URL, this is usually not critical, but adding `<link rel="canonical" href="https://terrace-chales.netlify.app/">` would be best practice.

---

## 9. ARQUIVOS DESNECESSÁRIOS NO BUILD
### ⚠️ CRITICAL FINDING

**`video-promocional-terrace-chale.mp4`** (12.7 MB) located at:
- `public/images/terrace/terrace-chales/video-promocional-terrace-chale.mp4`
- `dist/images/terrace/terrace-chales/video-promocional-terrace-chale.mp4`

**Impact:** This video file is **not referenced** in `siteData.js` or any of the 12 page components. It is being included in the production build unnecessarily, increasing the bundle size by ~12.7 MB (or ~53x the CSS size, ~5x the JS size).

**Root cause:** The file exists in `public/` directory, and Vite copies all `public/` assets to `dist/`, regardless of whether they're used in the app.

**Recommendation:** Either delete the unused file or move it to a location where it won't be auto-copied. Since the audit states "NÃO delete nada", the recommendation is to **move it out of `public/images/terrace/terrace-chales/`** or document it as a legacy asset.

---

## 10. RELATÓRIO CLASSIFICAÇÃO

### CRÍTICO (impede publicação/apresentação)
- **video-promocional-terrace-chale.mp4 (12.7 MB) included in build without usage** — This is the most significant issue. The production build contains ~12.7 MB of unused video that bloats the bundle. While the site still "publishes," it does so with unnecessarily large assets that will hurt load times, especially on mobile connections.

### IMPORTANTE (vale corrigir antes de mostrar ao cliente)
- **Nenhum outro problema CRÍTICO encontrado** — All CTAs work correctly, no broken components, no 404 assets, no missing required links.
- **Explicit canonical link missing** — Not blocking but should be added for SEO best practices.
- **Video layout shift potential** — Verify visually that the video's `aspect-[9/16]` container doesn't cause CLS on page load.
- **Unused `video-promocional-terrace-chale.mp4`** — Should be removed or relocated outside `public/`.

### POLIMENTO (pode esperar)
- **Refinamento visual em dispositivos específicos** — The responsive design looks correct in code, but visual testing on actual devices would confirm the blob shapes, text sizes, and CTA spacing at the specified breakpoints (375px, 390px, 430px, 768px, 1024px, 1440px).
- **Code-splitting for JS** — 235.90 KB could be reduced with finer-grained chunking, but this is a modern React/Vite app and the size is acceptable.
- **Additional SEO enhancements** — Could add more Open Graph properties (og:image, og:datePublished, article:author, etc.) and a proper canonical link, but the current metadata is functional.

---

## SUMMARY OF ACTION ITEMS (NÃO EXECUTAR — APENAS INFORMAR)

1. **CRITICAL:** Remove or relocate `video-promocional-terrace-chale.mp4` from `public/images/terrace/terrace-chales/` to prevent it from being included in production builds. This alone saves ~12.7 MB.

2. **IMPORTANT:** Add `<link rel="canonical" href="https://terrace-chales.netlify.app/">` to `index.html` for SEO best practice.

3. **IMPORTANT:** Verify video layout shift visually — check that the 9:16 video container doesn't push surrounding content on load.

4. **POLISH:** Conduct visual responsiveness testing on the specified breakpoints (375px, 390px, 430px, 768px, 1024px, 1440px) to confirm blob shapes, text sizes, and CTA spacing.

5. **POLISH:** Consider adding more Open Graph properties (og:image, og:description length optimization) and schema.org additional features if needed for rich snippet control.