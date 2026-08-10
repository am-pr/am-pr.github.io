# Amirhossein — Interactive Network Developer Portfolio

A dark, animated portfolio for a network-focused software developer.

## Before you publish

Search the project for every placeholder below and replace it:

- `am-pr`
- `amirhossein.bohlour@gmail.com`
- `https://www.linkedin.com/in/amirhossein-bohlour-516247260/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaukVXTXcR%2FC6WgaDSzJfQQ%3D%3D`
- `Mashhad, Iran`
- `https://github.com/am-pr/ERP-BackEnd`
- `https://github.com/am-pr/ERP-FrontEnd`
- `https://github.com/am-pr/Theory-of-Computation`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

This project is intended for the user-site repository:

```text
YOUR_USERNAME.github.io
```

For that repository, `vite.config.js` uses:

```js
base: '/'
```

In GitHub:

1. Repository → Settings
2. Pages
3. Build and deployment → Source
4. Select `GitHub Actions`

Every push to `main` triggers `.github/workflows/deploy.yml`.
