# Rufaida Salman — MERN Stack Developer Portfolio

A responsive, single-page personal portfolio website built with a handcrafted **Bohemian (boho)** aesthetic: warm, earthy, artistic, and welcoming.

## ✨ Tech Stack & Design System
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS + Custom Boho CSS & SVG decorations
- **Typography**: 
  - Headings: *Playfair Display*
  - Handwritten Accents: *Caveat*
  - Body: *Lora* / *Nunito*
- **Color Palette**:
  - Background: Warm Cream (`#F6EEDD`)
  - Surface: Sand (`#EBDDC3`)
  - Primary: Terracotta (`#C8663F`)
  - Secondary: Sage Green (`#8A9A5B`)
  - Accent: Mustard Gold (`#D9A441`)
  - Accent 2: Dusty Rose (`#C98B8B`)
  - Text: Deep Brown (`#3E2A1F`)
  - Dark Mode: Warm Dark Brown (`#2B1D16`)

## 📁 Project Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── assets/
│       ├── images/
│       │   ├── profile.jpg
│       │   ├── travel-agency-thumb.jpg
│       │   └── school-management-thumb.jpg
│       ├── videos/
│       │   ├── travel-agency-demo.mp4
│       │   └── school-management-demo.mp4
│       └── Rufaida_Salman_CV.pdf
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── portfolioData.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── VideoModal.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── BohoDecorations.jsx
```

## 🚀 Getting Started

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
