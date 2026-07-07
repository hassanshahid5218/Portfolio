# Muhammad Hassan — Portfolio

A modern, dark-themed, recruiter-focused portfolio website built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. Designed to look at home next to portfolios shipped by engineers at Microsoft, Amazon, Google, Meta, and Vercel.

## ✨ Features

- Clean, minimal, glassmorphism-accented dark UI
- Fully responsive (mobile, tablet, desktop)
- Subtle Framer Motion animations (fade-in, slide-up, hover, scroll reveal)
- Accessible: visible focus states, semantic HTML, reduced-motion support
- Reusable component architecture with a single source of truth for content (`src/data`)
- SEO-friendly meta tags
- Ready to deploy to Vercel, Netlify, or GitHub Pages

## 🧱 Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf              # Replace with your real resume
│   └── projects/                # Project cover images
├── src/
│   ├── components/              # UI building blocks (one component per file)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionWrapper.jsx   # Shared scroll-reveal + spacing wrapper
│   │   └── SectionHeading.jsx   # Shared eyebrow/title/subtext pattern
│   ├── data/                    # Content lives here — edit these, not the components
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   └── achievements.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The app runs at `http://localhost:5173` by default.

## ✏️ Customizing Content

All real content lives in `src/data/`, so you rarely need to touch component code:

| File | Controls |
|---|---|
| `profile.js` | Name, title, tagline, email, phone, social links, resume path |
| `skills.js` | Skill categories and icons |
| `projects.js` | Project cards (title, description, tech stack, features, links, image) |
| `education.js` | University, degree, CGPA, duration |
| `achievements.js` | Achievement cards |

### Replacing the résumé

Drop your real PDF into `public/resume.pdf` (same filename), or update `resumeUrl` in `src/data/profile.js` to point elsewhere.

### Replacing project images

Add your own screenshots to `public/projects/` and update the `image` field in `src/data/projects.js`. Recommended size: **1600×1000px** (16:10), JPG or WebP for smaller file size.

## 🎨 Design Tokens

Defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#2563EB` | Buttons, links, glow accents |
| `accent` | `#3B82F6` | Icons, highlights, hover states |
| `background` | `#0F172A` | Page background |
| `surface` | `#1E293B` | Cards, panels |
| `text.primary` | `#F8FAFC` | Headings, primary text |
| `text.secondary` | `#94A3B8` | Body copy, muted text |

## ♿ Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`)
- Visible keyboard focus rings on all interactive elements
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Sufficient color contrast between text and background per the chosen palette
- Descriptive `aria-label`s on icon-only buttons/links

## 📦 Deployment

This is a static Vite app — deploy the `dist/` folder (after `npm run build`) to:

- **Vercel**: `vercel deploy`
- **Netlify**: drag-and-drop the `dist` folder or connect the repo
- **GitHub Pages**: use `vite-plugin-gh-pages` or publish `dist` to the `gh-pages` branch

## 📄 License

Personal project — free to use as a template for your own portfolio.
