# Benhur L. Cariaga — Developer Portfolio

[![Deploy to GitHub Pages](https://github.com/bencariaga/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/bencariaga/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-bencariaga.github.io%2Fportfolio-blue.svg)](https://bencariaga.github.io/portfolio/)

Personal portfolio website for **Benhur L. Cariaga**, a Junior Full-Stack Web Developer based in General Santos City, Philippines. The portfolio highlights practical experience building database-driven web applications with PHP, Laravel, PostgreSQL, MySQL, and the TALL stack.

---

## 🌟 Core Focus & Professional Identity

- **Role:** Junior Full-Stack Web Developer
- **Primary Stack:** PHP | Laravel | Livewire (TALL Stack) | PostgreSQL | MySQL | Tailwind CSS | Alpine.js
- **Specialization:** Database-driven management systems, relational schema design, role-based authentication with OTP verification, and responsive user interfaces.

---

## 📁 Featured Projects Highlighted

1. **[HTCGSC Guidance Office Records Management System](https://github.com/bencariaga/htcgsc-gorms)**
   - *Tech Stack:* Laravel, Livewire, PHP, PostgreSQL, Tailwind CSS, Alpine.js, Render
   - *Overview:* Centralized administrative records management platform designed for the Guidance and Testing Center (GTC) at Holy Trinity College of General Santos City. Transitions physical student guidance records into structured digital workflows with role-based access control and OTP authentication.
   - *Status:* Academic system repository kept private to preserve student data privacy.

2. **[AMPING Medical Assistance Monitoring and Notification System](https://github.com/bencariaga/amping-mamans)**
   - *Tech Stack:* Laravel, PHP, MySQL, Bootstrap, JavaScript
   - *Overview:* Public-service records management and status-notification application for the Auxiliaries and Medical Program for Individuals and Needy Generals (AMPING) in General Santos City.
   - *Status:* Beneficiary management repository protected for public health and privacy compliance.

---

## 🛠️ Architecture & Tech Stack

- **Framework:** [Astro v7](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens
- **Typography:** Local `Optimistic Display` & `Optimistic Text` web fonts with standard fallback stacks
- **Icons:** Font Awesome 6
- **Hosting / CI/CD:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

### Key Features

- **Working Light / Dark Theme:** Zero-flash script, system preference fallback, persistent choice via `localStorage`, and accessible toggle control.
- **Accessibility (WCAG 2.2 AA aligned):** Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<aside>`, `<footer>`), keyboard navigation, skip-to-content link, high contrast ratios, visible `:focus-visible` rings, and descriptive alternative text for informative assets.
- **Mobile Responsive:** Seamless responsive navigation drawer with Escape-key dismiss and automatic close on anchor click.

---

## 💻 Local Development

### Prerequisites

- Node.js `>= 22.12.0`
- npm

### Installation & Execution

```bash
# Clone repository
git clone https://github.com/bencariaga/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Format code with Prettier
npm run format

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Repository Structure

```txt
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── fonts/                  # Self-hosted web fonts (WOFF2)
│   └── images/                 # Project screenshots and authentic portrait
├── src/
│   ├── components/
│   │   ├── Contact.astro       # Verified direct contact links & email
│   │   ├── Education.astro     # BSIT degree status & TESDA NC II credential
│   │   ├── Footer.astro        # Accessible footer navigation & copyright
│   │   ├── Hero.astro          # Professional introduction & calls-to-action
│   │   ├── Interests.astro     # Subdued secondary creative & systems interests
│   │   ├── Navbar.astro        # Responsive header with theme toggle & mobile drawer
│   │   ├── Projects.astro      # Featured projects with roles & verified tech stack
│   │   └── Skills.astro        # Categorized skills matrix with core highlights
│   ├── data/
│   │   └── portfolio.ts        # Single source-of-truth TypeScript definitions & data
│   ├── layouts/
│   │   └── Layout.astro        # HTML head metadata, theme script, skip link
│   ├── pages/
│   │   ├── Home.astro          # Structured landing view
│   │   └── index.astro         # Main entry point
│   └── styles/
│       ├── global.css          # Design tokens, font faces, scrollbars, focus rings
│       └── media-queries.css   # Layout safety resets
├── astro.config.mjs            # Astro configuration with site & base path (/portfolio)
├── package.json
└── tsconfig.json
```

---

## 📬 Contact & Links

- **Email:** [bencariaga13@gmail.com](mailto:bencariaga13@gmail.com)
- **LinkedIn:** [linkedin.com/in/benhur-cariaga](https://www.linkedin.com/in/benhur-cariaga/)
- **GitHub:** [github.com/bencariaga](https://github.com/bencariaga)
- **Portfolio Live:** [https://bencariaga.github.io/portfolio/](https://bencariaga.github.io/portfolio/)
