# Kartik Gawade — Portfolio

A clean, minimal frontend developer portfolio built with React + Vite + Tailwind CSS + Framer Motion. 

## Tech Stac
- **React 18** — UI components
- **Vite 5** — dev server & bundler
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — subtle scroll animations
- **DM Sans + Syne** — typography

## Getting Started

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy this folder to **Netlify**, **Vercel**, or **GitHub Pages**.

---

## Customization

All personal content lives in one file:

```
src/utils/data.js
```

Edit `personalInfo`, `skills`, `projects`, `experience`, and `education` there — the entire site updates automatically.

### Swap the anime character

Replace `public/anime-character.png` with any image. Opacity and blend are controlled in `src/components/Hero/Hero.jsx`.

### Change the color accent

Edit `tailwind.config.js`:

```js
accent: {
  DEFAULT: '#4a6fa5',  // ← change this
  light: '#6a8ec4',
  dim: '#2d4f7a',
},
```

### Connect the contact form

In `src/components/Contact/Contact.jsx`, replace `handleSubmit` with your preferred service:

- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })`
- **EmailJS**: use `emailjs.send(...)`
- **Netlify Forms**: add `data-netlify="true"` to the `<form>` tag

---

## Folder Structure

```
portfolio/
├── public/
│   ├── anime-character.png    ← hero character image
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/Navbar.jsx
│   │   ├── Hero/Hero.jsx
│   │   ├── About/About.jsx
│   │   ├── Skills/Skills.jsx
│   │   ├── Projects/Projects.jsx
│   │   ├── Experience/Experience.jsx
│   │   ├── Contact/Contact.jsx
│   │   └── Footer/Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── utils/
│   │   └── data.js            ← all resume content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```
