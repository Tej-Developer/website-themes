# The Design Archive // Sovereign Multi-Theme Pavilion

> A museum-grade architectural gallery and interactive exhibition portal of sovereign, standalone custom-themed websites. Built with pure digital craft, zero global stylesheet cross-contamination, and rich tactile micro-interactions.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge)](LICENSE)

---

## 🏛️ Overview & Philosophy

**The Design Archive** (`website-themes`) is an interactive design portal curating distinct eras and paradigms of digital user interfaces. Rather than locking visitors into a single monolithic framework or presenting static mockups, the Archive is engineered around **Sovereignty**:

- **Complete Style Sandboxing**: Each themed experience lives in its own dedicated multi-page environment with zero global stylesheet leakage.
- **Pure Vanilla Craft**: Standalone themed websites run without heavy framework runtimes, delivering near-instant loading, raw CSS token architectures, and authentic portability.
- **Tactile Exploration**: The main gallery acts as an aesthetically neutral, matte obsidian/titanium pavilion with its own tactile physical instruments—including an interactive analog radio synthesizer deck, dynamic drafting coordinate grid, and design evolution timeline.

---

## 💎 The Sovereign Theme Collection

| Exhibit | Design Movement | Status | Depth Model | Experience |
|:---:|---|:---:|---|---|
| **№ 01** | **[Liquid Glass](#-exhibit--01-liquid-glass)** | `PRODUCTION READY` | Specular Refraction & Frosted Translucency | [Launch Standalone ↗](themes/liquid-glass/index.html) |
| **№ 02** | **Neumorphic Soft UI** | `IN LABORATORY` | Continuous Extruded Surfaces & Dual Opposing Shadows | In Laboratory |
| **№ 03** | **Analog Skeuomorphism** | `IN LABORATORY` | 3D Knurled Potentiometers, Brushed Bronze & VU Meters | In Laboratory |
| **№ 04** | **Brutalist Wireframe** | `CONCEPT STUDY` | High-Contrast Wireframe, Monospaced Grid & Raw Stamps | Concept Study |

---

## 🔮 Exhibit № 01: Liquid Glass

The flagship completed installation in this archive is **AETHER // Liquid Glass Design System & Multi-Theme Engine**.

![Liquid Glass Exhibition](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

Liquid Glass synthesizes high-index optical refraction, sub-pixel specular borders, and real-time kinetic canvas metaparticles.

### Key Capabilities
- **Fluid Metaparticle Engine**: 4-node GPU-accelerated HTML5 Canvas simulation rendering chromatic dispersion and subsurface luminescence behind frosted glass panes.
- **12 Curated Mood Presets**: Including *Midnight Cosmic*, *Hyper Emerald*, *Solar Mirage*, *Pearl Frost* (Apple-inspired light luxury mode), *Matcha Zen*, and *Tokyo Cyber*.
- **Deep Theme Studio & Customizer (`#studio`)**: Real-time slider controls for fluid flow velocity, harmonic drift, glass blur radius (0–60px), surface translucency, and 360° hue rotation.
- **User Theme Persistence**: Create, preview, save, edit, and delete custom user palettes via `localStorage`.
- **Interactive SaaS Telemetry**: Live SVG curve interpolation with dynamic data range morphing (7d / 30d / 1y) and point tooltips.
- **3D Bento Grid & Micro-Interactions**: Specular glare mouse tracking, swipe-to-dismiss toasts, collapsible floating dock, and Zen preview mode.

> [!TIP]
> ### 📖 Comprehensive Liquid Glass Documentation
> For detailed architecture, theme studio parameter breakdowns, preset palettes, and token specifications, see the dedicated documentation:  
> 👉 **[themes/liquid-glass/README-liquid_glass.md](themes/liquid-glass/README-liquid_glass.md)**

---

## 🎛️ Interactive Hub Features

The main hub (`index.html`) is equipped with dedicated interactive physical modules:

1. **Architectural Coordinate Grid (`src/components/hero-canvas.js`)**:
   - An interactive 40px drafting coordinate system with cursor proximity tracking and hairline crosshairs. Zero garish neon blobs—strictly architectural.
2. **The Archive Acoustic Deck (`src/components/archive-radio.js`)**:
   - A fully functional retro-futuristic analog radio instrument built with the Web Audio API.
   - Dual ballistic VU meters with damped needle physics and stereo audio harmonic bars.
   - Knurled 3D rotary volume potentiometer with continuous drag and mousewheel scrubbing.
   - Preset multi-band station frequencies (88.5, 96.2, 104.8 MHz) and master power toggle.
3. **Chronology of Digital Aesthetics Timeline (`src/components/timeline.js`)**:
   - Interactive historical scrubber spanning 2007 to 2026+:
     - *2007–2012*: The Golden Age of Skeuomorphism
     - *2013–2019*: Flat Design & Material Architecture
     - *2020*: The Neumorphic Explosion (Soft UI)
     - *2021–2024*: The Rise of Liquid Glass
     - *2025–2026+*: Spatial Computing & Kinetic Synthesis
4. **Paradigm Comparison Matrix**:
   - Technical evaluation table comparing depth models, tactile affordance, target web applications, and ecosystem statuses across all movements.

---

## 📂 Repository Structure

```
website-themes/
├── index.html                           # Flagship Architectural Gallery & Archive Portal
├── vite.config.js                       # Multi-page Rollup bundle configuration
├── package.json                         # Dependencies & project scripts
├── capacitor.config.json                # Mobile runtime container config
│
├── src/                                 # Gallery Core Logic & Design System
│   ├── hub.js                           # Entry module initializing grid, radio, & timeline
│   ├── hub.css                          # Matte obsidian & titanium architectural styles
│   ├── components/
│   │   ├── hero-canvas.js               # Coordinate drafting grid canvas
│   │   ├── archive-radio.js             # Interactive analog radio & Web Audio synth
│   │   ├── theme-cards.js               # Tactile theme cards & push-button audio triggers
│   │   └── timeline.js                  # Digital design evolution scrubber (2007–2026+)
│   └── utils/
│       └── audio.js                     # Synthesized mechanical clicks & haptic audio
│
├── themes/                              # Sovereign Themed Standalone Environments
│   └── liquid-glass/                    # EXHIBIT № 01: Liquid Glass (Self-Contained)
│       ├── index.html                   # Complete standalone themed web application
│       ├── glass.css                    # Liquid glass tokens, frosted blur, & dark/light styles
│       ├── glass.js                     # Fluid metaparticles, theme studio, & 3D tilt
│       └── README-liquid_glass.md       # Deep technical guide for the Liquid Glass engine
│
└── public/                              # Static vectors, icons & assets
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Tej-Developer/website-themes.git
cd website-themes

# 2. Install dependencies
npm install

# 3. Launch Vite development server
npm run dev
```

The application will be served locally at:
```
http://localhost:5173/
```

### Navigating Routes Locally

| Page | URL Path | Description |
|---|---|---|
| **The Design Archive** | `/` (`index.html`) | Flagship exhibition hub, acoustic deck, timeline & comparison matrix |
| **Liquid Glass Website** | `/themes/liquid-glass/` | Standalone Liquid Glass SaaS experience with live theme studio |

### Production Build

```bash
# Compile and optimize production multi-page bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ES Modules), Vanilla CSS Design Tokens
- **Audio Synthesis**: Web Audio API (real-time oscillators, noise generators, dynamic filters)
- **Canvas Physics**: 2D Context HTML5 Canvas (metaparticles & drafting crosshairs)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis) smooth inertia scroll engine
- **Icons**: [Lucide](https://lucide.dev/)
- **Build Tooling**: [Vite](https://vitejs.dev/) with multi-page Rollup routing
- **Mobile Container**: [Capacitor](https://capacitorjs.com/) (iOS & Android ready)

---

## 📑 Related Documentation

- 📄 **[Liquid Glass Engine Technical Manual](themes/liquid-glass/README-liquid_glass.md)**: Deep dive into the fluid metaparticle canvas loop, the 12 curated presets, CSS custom properties, and user custom theme lifecycle.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute these theme designs for personal, educational, or commercial projects.
