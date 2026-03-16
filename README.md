# 👋 Aris Setyawan - Professional CV Website

Modern, responsive CV website built with React, Vite, and Tailwind CSS. Deployed on Cloudflare Pages with automatic CI/CD from GitHub.

[🌐 Visit Live Site](#) | [📄 Download CV](./public/Aris_Setyawan_CV.pdf) | [💼 GitHub](https://github.com/aris2394/cv)

---

## ✨ Features

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Optimized for all screen sizes
- ✅ Smooth scrolling and animations

### 🎨 Modern UI/UX
- ✅ Dark theme with gradient accents
- ✅ Interactive elements and hover effects
- ✅ Smooth animations on scroll
- ✅ Sticky navigation bar
- ✅ Particle background effects

### 📋 Comprehensive Sections
- ✅ **Hero Header** - Introduction with animated icons
- ✅ **Professional Summary** - Career overview
- ✅ **Work Experience** - Detailed job history (4 positions)
- ✅ **Featured Projects** - 3 major portfolio projects
- ✅ **Technical Skills** - 9+ skills with proficiency levels
- ✅ **Core Strengths** - Key competencies
- ✅ **Education** - Degrees and certifications

### 🚀 Performance
- ✅ Optimized bundle size (~355 KB gzip)
- ✅ Global CDN via Cloudflare
- ✅ Fast page load times
- ✅ SEO-friendly

### 🔄 Modern Development
- ✅ React 18 with Hooks
- ✅ Vite bundler (instant HMR)
- ✅ Tailwind CSS 4
- ✅ Lucide React icons
- ✅ TypeScript ready

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-------------|
| **Frontend** | React 18, Vite |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Deployment** | Cloudflare Pages |
| **CI/CD** | GitHub Actions |
| **Version Control** | Git + GitHub |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/aris2394/cv.git
cd cv

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit: http://localhost:5173
```

---

## 🎯 Development

### Available Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project Structure

```
cv/
├── src/
│   ├── App.jsx                 # Main component
│   ├── App.css                 # Global styles
│   ├── main.jsx                # Entry point
│   ├── index.css               # Base styles
│   └── components/
│       ├── Projects.jsx        # Featured projects
│       ├── Experience.jsx      # Work experience
│       ├── Skills.jsx          # Technical skills
│       ├── Education.jsx       # Education section
│       ├── Strengths.jsx       # Core strengths
│       ├── Summary.jsx         # Professional summary
│       ├── Header.jsx          # Header component
│       ├── ContactBar.jsx      # Contact information
│       └── Languages.jsx       # Language skills
├── public/
│   ├── index.html              # HTML template
│   ├── Aris_Setyawan_CV.pdf   # PDF resume
│   ├── _redirects              # SPA routing
│   └── favicon.svg             # Site icon
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── wrangler.toml               # Cloudflare config
└── README.md                   # This file
```

---

## 🚀 Deployment

### Cloudflare Pages (Automated)

#### Step 1: Connect GitHub

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select **GitHub** and authorize
5. Choose `aris2394/cv` repository
6. Select `main` branch

#### Step 2: Configure Build

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output | `dist` |
| Node version | 18 |

#### Step 3: Add Secrets

Add GitHub repository secrets:
- `CLOUDFLARE_API_TOKEN` - [Get from Cloudflare](https://dash.cloudflare.com/profile/api-tokens)
- `CLOUDFLARE_ACCOUNT_ID` - [Find in Cloudflare dashboard](https://dash.cloudflare.com/)

See [GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md) for detailed instructions.

#### Step 4: Deploy

Push to main branch:

```bash
git push origin main
```

Cloudflare automatically:
- ✅ Builds project
- ✅ Runs tests
- ✅ Deploys to CDN
- ✅ Generates URL

### Manual Deployment

Using Cloudflare CLI:

```bash
# Login (first time only)
npx wrangler login

# Deploy
npx wrangler pages deploy dist/

# Or use script
bash deploy-cloudflare.sh
```

---

## 📚 Documentation

- [Cloudflare Deployment Guide](./CLOUDFLARE_DEPLOYMENT.md)
- [GitHub Secrets Setup](./GITHUB_SECRETS_SETUP.md)
- [Lucide React Icons](https://lucide.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)

---

## 🎨 Customization

### Colors

Edit color variables in `src/App.css`:

```css
:root {
  --brand: #3b82f6;      /* Primary blue */
  --brand-dk: #1e40af;   /* Dark blue */
  --text: #0f172a;       /* Text color */
  --muted: #64748b;      /* Muted text */
  /* ... more colors ... */
}
```

### Content

Update content in `src/App.jsx`:

```jsx
const experiences = [
  {
    role: 'Your Role',
    company: 'Your Company',
    period: 'Start - End',
    tasks: ['Task 1', 'Task 2', 'Task 3'],
  },
  // ... more experiences
];
```

### Projects

Add/edit projects in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Project Title',
    role: 'Your Role',
    year: '2026',
    stack: ['Tech 1', 'Tech 2'],
    challenge: 'Problem description...',
    solution: 'Solution description...',
    impact: ['Impact 1', 'Impact 2'],
    gradient: 'from-blue-500 to-cyan-400',
    icon: Code2,
  },
  // ... more projects
];
```

---

## 📊 Performance Metrics

### Bundle Size
```
dist/assets/index-BJvExhyG.css   47.61 KB │ gzip: 7.97 KB
dist/assets/index-BCumd6JZ.js   186.45 KB │ gzip: 57.61 KB
dist/index.html                   0.86 KB │ gzip: 0.46 KB
─────────────────────────────────────────────────────────────
Total:                          ~234 KB  │ gzip: ~66 KB
```

### Lighthouse Scores (Target)
- ⚡ Performance: 95+
- ♿ Accessibility: 95+
- 📋 Best Practices: 95+
- 🔍 SEO: 100

---

## 🔐 Security

✅ Features:
- HTTPS enabled (Cloudflare)
- No sensitive data stored client-side
- CSP headers configured
- CORS properly set

---

## 📝 License

This project is open source. Feel free to fork and adapt!

---

## 👤 About

**Aris Setyawan**
- 📍 Bogor, Indonesia
- 💼 ICT Coordinator & Project Manager
- 📧 [arissetyawan2394@gmail.com](mailto:arissetyawan2394@gmail.com)
- 🔗 [LinkedIn Profile](https://www.linkedin.com/in/aris-setyawan2394/)
- 🐙 [GitHub](https://github.com/aris2394)

---

## 🙋 Support & Feedback

Found a bug or have suggestions? 

1. Check [GitHub Issues](https://github.com/aris2394/cv/issues)
2. Create a new issue with details
3. Submit a pull request with improvements

---

## 🎉 Changelog

### v1.1.0 - Featured Projects (March 16, 2026)
- ✨ Added Featured Projects section with 3 major portfolio projects
- 🚀 Added Cloudflare Pages deployment setup
- 🔄 Added GitHub Actions CI/CD workflow
- 📚 Added comprehensive deployment documentation

### v1.0.0 - Initial Release
- 🎨 Created modern CV website with React
- 📱 Implemented responsive design
- 🚀 Set up GitHub repository
- 📄 Added PDF resume download

---

**Last Updated:** March 16, 2026  
**Repository:** [aris2394/cv](https://github.com/aris2394/cv)  
**Deployed On:** Cloudflare Pages
