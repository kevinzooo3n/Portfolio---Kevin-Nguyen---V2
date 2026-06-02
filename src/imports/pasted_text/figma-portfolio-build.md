# Prompt Figma Make — Kevin Nguyen Portfolio

---

Build a fully operational, pixel-perfect single-page portfolio website based on this Figma design:
https://www.figma.com/design/dEgbSfmJ2SWR85jqZlOXNN/Kevin-Nguyen-%E2%80%94-Portfolio?node-id=0-1

## DESIGN FIDELITY — PIXEL PERFECT

Reproduce every element exactly as designed:

- **Font**: Poppins (Regular, Light, Medium, SemiBold, Italic) — import from Google Fonts
- **Background**: #0D0D0F
- **Off-white text**: #EFEDEA
- **Slate text**: #807F85 / #AFAEB4
- **Gold accent**: #F4DDB5
- **Card background**: #151518
- **Border color**: #2A2A30
- **Green dot**: #48DB87
- **Width**: 1440px desktop, fully responsive down to 375px mobile

---

## STRUCTURE — SINGLE PAGE WITH ANCHOR SECTIONS

The page has 5 anchor sections. Each nav link scrolls smoothly to its section:

1. `#hero` — Hero section
2. `#about` — À propos
3. `#projects` — Projets
4. `#services` — Services
5. `#contact` — Contact

---

## SECTION 1 — NAV (sticky, top: 0, z-index: 100)

- Left: "Kevin Nguyen" in Poppins SemiBold 22px, color #EFEDEA
- Right links: "À propos", "Projets", "Services", "Contact" — Poppins Regular 14px, color #AFAEB4
- Bottom border: 1px solid #2A2A30 at 40% opacity
- Background: #0D0D0F with backdrop-filter blur(12px) when scrolled
- On click: smooth scroll to corresponding anchor section

---

## SECTION 2 — HERO (id="hero")

- Full viewport height, centered content
- **Ambient glows**: two radial gradient ellipses in background (warm gold left, cool blue right)
- **Badge**: pill shape, background #151518, border #2A2A30, contains:
  - Green pulsing dot (7px, color #48DB87, CSS pulse animation)
  - Text "Disponible pour de nouveaux projets" — Poppins Regular 12px, #AFAEB4
- **Headline** (centered, stacked):
  - "Designer." — Poppins SemiBold 112px, #EFEDEA, letter-spacing: -3px, line-height: 108px
  - "Créateur." — Poppins SemiBold 112px, #EFEDEA, letter-spacing: -3px, line-height: 108px
  - "Storyteller." — Poppins Italic 112px, #F4DDB5, letter-spacing: -3px, line-height: 108px
- **Subtext** (centered): "Je conçois des expériences numériques qui captivent — interfaces épurées, identités visuelles fortes, sites qui convertissent." — Poppins Regular 17px, #AFAEB4, line-height: 30px, max-width: 600px
- **Two CTA buttons** (centered row, gap: 20px):
  - Primary "Voir mes projets" — white fill #EFEDEA, text #0D0D0F, border-radius: 100px, 200×52px — scrolls to #projects on click
  - Secondary "Me contacter" — transparent fill, border 1px #2A2A30, text #AFAEB4, border-radius: 100px, 200×52px — scrolls to #contact on click
- **Scroll indicator**: "SCROLL" text + vertical line below, centered, Poppins Light 10px, letter-spacing: 4px

### Hero animations (on page load, staggered):
- Badge: fade in + slide up, delay 0ms
- "Designer." fade in + slide up, delay 100ms
- "Créateur." fade in + slide up, delay 200ms
- "Storyteller." fade in + slide up, delay 300ms
- Subtext: fade in, delay 400ms
- Buttons: fade in + slide up, delay 500ms

---

## SECTION 3 — À PROPOS (id="about")

- Section label "À PROPOS" — Poppins Regular 11px, #807F85, letter-spacing: 3px
- Title "Passionné par le design qui a du sens." — Poppins SemiBold 52px, #EFEDEA, line-height: 66px, max-width: 680px
- Body copy — Poppins Light 16px, #AFAEB4, line-height: 28px, max-width: 580px
- **Skill tags** (pill badges): background #151518, border 1px #2A2A30, border-radius: 100px, Poppins Regular 13px, #AFAEB4 — tags: UI Design, UX Research, Figma, Framer, HTML/CSS, Branding, Motion, Webflow, Merch
- **Stats row** (3 items):
  - "47+" — Poppins SemiBold 44px, #EFEDEA
  - "Projets livrés" — Poppins Light 13px, #807F85
  - Same for "5 ans / D'expérience" and "98% / Clients satisfaits"
- **Portrait circle** (right side): 280×280px circle, background #151518, border 1px #2A2A30 — placeholder for photo
- Scroll-triggered fade in + slide up for each element

---

## SECTION 4 — PROJETS (id="projects")

- Section label "PROJETS" — Poppins Regular 11px, #807F85, letter-spacing: 3px
- Title "Mes réalisations." — Poppins SemiBold 52px, #EFEDEA
- Subtitle — Poppins Light 16px, #AFAEB4

### Hero project card (full width: 1200px × 360px):
- Background #151518, border-radius: 16px
- Top image zone: 1200×220px, background #1A1A1C (placeholder)
- Tag badge: "BRANDING · MERCH · RADIO" — pill, Poppins Regular 9px, #807F85, letter-spacing: 1.5px
- Title "Podcast NB — Codiac FM" — Poppins SemiBold 32px, #EFEDEA
- "Voir le projet →" — Poppins Regular 13px, #F4DDB5, positioned bottom right
- **On click**: opens https://www.figma.com/design/tBnQCGKchoSOi8JA4FPj4n/CODIAC-MERCH-PRESENTATION in new tab
- Hover: scale(1.01) + shadow transition 300ms

### 4 small cards (288×256px each, gap: 16px):

**Card 1 — Ateliers du bois**
- Tag: "WEB · UI/UX"
- Title: "Ateliers du bois"
- Link chip at bottom: "🔗 figma.com › Website---Ateliers-du-bois"
- **On click**: opens https://www.figma.com/design/NpjwDYmFkmp8ZHWakGISqD/Website---Ateliers-du-bois in new tab

**Card 2 — Courtepaille App**
- Tag: "APP · UI/UX"
- Title: "Courtepaille App"
- Link chip: "🔗 figma.com › Courtepaille-App"
- **On click**: opens https://www.figma.com/design/wGJWpgc32VSlxxaKnxycBB/Courtepaille-App in new tab

**Card 3 — Xavier Sport Scientist**
- Tag: "WEB · SITE VITRINE"
- Title: "Xavier Sport Scientist"
- Link chip: "🔗 figma.com › TP4_DG3_sitevitrine_XavierSport"
- **On click**: opens https://www.figma.com/design/ttWG99B1cpghAyJfOPvDJs/TP4_DG3_sitevitrine_XavierSportScientist?node-id=5468-1192 in new tab

**Card 4 — Codiac Merch**
- Tag: "BRANDING · MERCH"
- Title: "Codiac FM"
- Link chip: "🔗 figma.com › CODIAC-MERCH-PRESENTATION"
- **On click**: opens https://www.figma.com/design/tBnQCGKchoSOi8JA4FPj4n/CODIAC-MERCH-PRESENTATION in new tab

All cards: background matches section color, border-radius 14px, hover scale(1.02) + brightness(1.05), cursor pointer, transition 250ms ease

---

## SECTION 5 — SERVICES (id="services")

- Label "SERVICES", title "Ce que je propose." — same style as other sections
- **3×2 grid** of service cards (380×220px, gap: 30px horizontal, 16px vertical)
- Each card: background #151518, border 1px #2A2A30 at 50% opacity, border-radius: 14px
- Card contents:
  - Icon circle (44×44px, background #0D0D0F, border 1px #2A2A30, centered symbol in gold #F4DDB5)
  - Title — Poppins Medium 17px, #EFEDEA
  - Description — Poppins Light 13px, #AFAEB4, line-height: 22px
  - Price — Poppins Regular 13px, #F4DDB5, positioned bottom left

**6 services:**
1. ✦ UI / UX Design — "Wireframes, maquettes haute-fidélité, prototypes Figma interactifs et design systems." — À partir de 2000 $
2. ◈ Site web — "Design et intégration sur WordPress / Framer. Rapides, performants et optimisés." — Sur devis
3. ◇ Branding & Identité — "Logo, palette, typographie, charte graphique et templates. Identité complète." — À partir de 3500 $
4. ▣ Design System — "Systèmes scalables et documentés — composants, tokens, guidelines." — À partir de 2 500 $
5. ⊕ Merch & Imprimé — "Vêtements, accessoires, affiches, signalétique. De l'idée au produit fini." — Sur devis
6. ◎ Direction artistique — "DA pour événements, campagnes, médias sociaux et productions complètes." — Sur devis

---

## SECTION 6 — CONTACT (id="contact")

- Label "CONTACT", title "Parlons de votre projet." — Poppins SemiBold 52px
- Subtitle: "Je réponds généralement sous 24h." — Poppins Light 16px, #AFAEB4
- **Left column** — contact info (3 items separated by 1px #2A2A30 lines):
  - Label (Poppins Light 11px, #807F85, letter-spacing: 1.5px) + Value (Poppins Regular 15px, #EFEDEA)
  - Email / kevin77nguyen@gmail.com (mailto link)
  - Localisation / Moncton, NB
  - Disponibilité / Disponible dès maintenant
- **Right column** — contact form:
  - Row 1: Prénom (290px) + Nom (290px), gap 20px
  - Row 2: Email (600px)
  - Row 3: Type de projet (600px)
  - Row 4: Message textarea (600px × 130px)
  - All fields: background #151518, border 1px #2A2A30, border-radius: 10px, Poppins Regular 15px, #AFAEB4
  - Field label: Poppins Light 10px, #807F85, letter-spacing: 1px
  - Submit button "Envoyer le message →": background #EFEDEA, text #0D0D0F, Poppins Medium 14px, border-radius: 100px, 220×52px
  - Form submission: use Formspree or mailto:kevin77nguyen@gmail.com

---

## FOOTER

- Left: "Kevin Nguyen" — Poppins SemiBold 16px, #AFAEB4
- Center: "À propos · Projets · Services · Contact" — Poppins Regular 13px, #807F85 — each word is a smooth scroll anchor link
- Right: "© 2026 Kevin Nguyen · Direction artistique & design" — Poppins Light 12px, #807F85
- Top border: 1px #2A2A30 at 35% opacity

---

## GLOBAL ANIMATIONS

- **Scroll reveal**: all sections fade in + slide up 30px on scroll into view (IntersectionObserver, threshold 0.15, once)
- **Nav**: on scroll past 80px, add backdrop-filter blur(12px) + subtle border-bottom
- **Green dot pulse**: CSS keyframe animation, scale 1→1.4→1, opacity 1→0.5→1, loop 2s
- **Card hover**: scale(1.02), brightness increase, transition 250ms ease
- **Button hover**: opacity 0.85, transition 150ms

---

## RESPONSIVE (mobile 375px)

- Hero headline: 52px
- Single column layout for all grids
- Nav collapses to hamburger menu
- Cards stack vertically
- Form fields full width

---

## TECH STACK

- Vanilla HTML + CSS + JS (no framework needed)
- Google Fonts: Poppins 300, 400, 500, 600, italic
- No external dependencies except Google Fonts
- Smooth scroll: `scroll-behavior: smooth` on html
- Form: mailto action or Formspree endpoint