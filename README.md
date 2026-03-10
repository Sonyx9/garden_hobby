# Grill & Hobby – Dočasná stránka „E-shop se připravuje“

Jednoduchá, responsivní dočasná landing page pro připravovaný e-shop. Vytvořeno v Astro + Tailwind CSS.

## Spuštění

```bash
npm install
npm run dev
```

Stránka běží na [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Výstup je ve složce `dist/`.

## GitHub Pages

1. Repozitář v GitHubu → Settings → Pages → Source: **GitHub Actions**
2. Po push na `main` se stránka automaticky nasadí
3. URL: `https://<username>.github.io/<repo>/`

## Konfigurace

- **Kontakt** – v `src/pages/index.astro` upravte props `email` a `phone` v komponentě `<Contact />`
- **Meta / OG** – v `astro.config.mjs` nastavte `site` na skutečnou doménu
- **Favicon** – nahraďte `public/favicon.svg` vlastním logem

## Struktura

```
src/
├── components/
│   ├── Hero.astro      # Banner s Fotem 1 + overlay
│   ├── Features.astro  # Sekce „Co chystáme“ (3 body)
│   ├── Contact.astro   # Kontakt / newsletter
│   └── Footer.astro
├── layouts/
│   └── Layout.astro    # Meta, SEO, OG
├── pages/
│   └── index.astro
└── styles/
    └── global.css
public/
├── images/
│   └── hero-bg.png     # Foto 1 – hlavní vizuál
└── favicon.svg
```
