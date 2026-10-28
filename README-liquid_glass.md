# AETHER // Liquid Glass Design System & Multi-Theme Engine

A state-of-the-art tactile **Liquid Glassmorphism** design system, interactive component laboratory, and multi-theme testing playground built with pure Vanilla CSS, HTML5 Canvas physics, and JavaScript.

![AETHER Liquid Glass Hero](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Highlights

- **Fluid Metaparticle Physics Engine**: 4-node GPU-accelerated HTML5 Canvas simulation rendering dynamic chromatic dispersion and ambient subsurface lighting behind frosted glass.
- **12 Curated Presets**: Instantly switch between 12 distinct mood palettes ranging from deep obsidian SaaS darks to ethereal Apple-inspired luxury light modes.
- **Deep Theme Studio & Customizer**: Full-page interactive studio allowing live editing of fluid metaballs, glass refraction blur, corner radii, typography scale, and color atmosphere.
- **Custom Theme Management**: Create, edit, save, and delete user-crafted themes with persistent `localStorage` synchronization.
- **Interactive Analytics Dashboard**: Responsive SaaS dashboard featuring live SVG telemetry curve morphing, 7-day/30-day/1-year data switches, and mouseover tooltip telemetry.
- **Bento Grid & 3D Specular Tilt**: Gyroscopic/mouse-tracking 3D card tilt with dynamic radial specular light reflections.
- **Adaptive Dark & Light Modes**: Seamless toggle with high-contrast slider tracks and progress bars specifically engineered to prevent washed-out milky surfaces.
- **Tactile Micro-Interactions**: Bottom-right swipe-to-dismiss toasts, collapsible floating dock, clean preview (Zen) mode, and mobile liquid glass navigation drawer.

---

## 🎨 Curated Theme Palettes (12 Presets)

| # | Theme Name | Primary Palette | Mood & Character |
|---|---|---|---|
| 1 | **Midnight Cosmic** | Obsidian Navy (`#070913`) + Violet (`#6366f1`) & Cyan (`#06b6d4`) | Quintessential SaaS AI & modern dark glassmorphism |
| 2 | **Hyper Emerald** | Abyssal Teal (`#03120e`) + Toxic Mint (`#34d399`) & Emerald Glow (`#10b981`) | Bioluminescent cyber-nature with high-energy dispersion |
| 3 | **Solar Mirage** | Wine Violet (`#14070e`) + Molten Amber (`#f97316`) & Coral Rose (`#fbbf24`) | Warm golden hour sunset refraction |
| 4 | **Cyber Prism** | Deep Void (`#07030f`) + Hyper-Pink (`#ec4899`) & Laser Cyan (`#22d3ee`) | Synthwave neon with high-contrast specular edges |
| 5 | **Pearl Frost** | Frosted Platinum (`#edf2f7`) + Sapphire Blue (`#2563eb`) & Iris Violet (`#7c3aed`) | Apple-inspired ethereal light luxury mode with high contrast |
| 6 | **Matcha Zen** | Deep Forest Slate (`#05130b`) + Frosted Jade (`#4ade80`) & Spring Mint (`#86efac`) | Tranquil Japanese botanical moss & soothing bamboo glass |
| 7 | **Crimson Eclipse** | Black Burgundy (`#130307`) + Volcanic Blood Scarlet (`#f43f5e`) & Rose Glare | Passionate, moody, high-drama dark velvet liquid glass |
| 8 | **Nordic Glacier** | Arctic Ocean Navy (`#030c18`) + Ice Cyan (`#38bdf8`) & Arctic Frost (`#0ea5e9`) | Sub-zero crystalline iceberg dispersion & arctic glow |
| 9 | **Tokyo Cyber** | Midnight Purple (`#0a0216`) + Electric Fuchsia (`#d946ef`) & Laser Violet (`#a855f7`) | Akihabara rainy neon streets & high-voltage cyberpunk refraction |
| 10 | **Amber Honey** | Deep Roasted Molten (`#160a03`) + Golden Honey (`#fbbf24`) & Topaz Syrup (`#f59e0b`) | Warm luxury confectionery syrup & radiant caramel warmth |
| 11 | **Amethyst Void** | Imperial Royal Purple (`#0a0416`) + Lilac (`#c084fc`) & Lavender Haze (`#9333ea`) | Mystical mineral crystal glass & arcane cosmic energy |
| 12 | **Ghost Titanium** | Slate Ash Monochrome (`#090a0f`) + Brushed Titanium (`#cbd5e1`) & White Glare | Minimalist monochrome dark glass with crisp white specular highlights |

---

## 🎛️ Theme Studio & Deep Customizer

Located at `#studio`, the customizer provides real-time control over 4 core engine layers with inline documentation explaining **How the feature works** and **What it customizes**:

```
THEME STUDIO ARCHITECTURE
├── 1. Fluid Blobs Engine
│   ├── Blob 1 (Primary Highlight)       -> Sets dominant hero & nav glow
│   ├── Blob 2 (Secondary Harmonic)      -> Generates duotone color blending
│   ├── Blob 3 (Ambient Glow)            -> Provides peripheral atmospheric fill
│   ├── Blob 4 (Accent Specular)         -> Adds high-frequency sheen & dispersion
│   ├── Fluid Flow Velocity (0.0x–3.0x)  -> Canvas animation loop step rate
│   └── Harmonic Drift Amplitude         -> Non-linear sine turbulence deviation
│
├── 2. Glass Physics & Surface
│   ├── Glass Blur Depth (0px–60px)      -> backdrop-filter: blur() diffusion
│   ├── Surface Translucency Multiplier  -> Alpha opacity scaling without color washout
│   ├── Specular Glare Intensity         -> Mouse-tracking radial sheen brightness
│   ├── Backdrop Saturation Boost        -> Prism vibrancy through frosted panels
│   ├── Glass Border Width (0px–4px)     -> Perimeter contour line thickness
│   ├── Card Corner Radius (8px–40px)    -> Global component curvature
│   └── Subtle Micro-Frost Noise         -> SVG fractal sandblasted tactile texture
│
├── 3. Typography & Scale
│   ├── Primary Font Family              -> Plus Jakarta Sans, Inter, Outfit, JetBrains Mono
│   ├── Base Body Font Size (14px–20px)  -> Root typography scale factor
│   └── Heading Scale (0.8x–1.35x)       -> Header visual hierarchy ratio
│
└── 4. Color Atmosphere
    ├── Theme Name                       -> Display title in dock, navbar, and presets
    ├── Background Base Color            -> Deep foundation canvas tone
    ├── Primary Accent Highlight         -> Buttons, active tags, charts, and glow rings
    ├── Secondary Accent                 -> Gradient endpoints & secondary strokes
    └── 360° Hue Shifter Wheel           -> Real-time HSL chromatic rotation
```

### User Custom Theme Lifecycle
1. **Creation**: Adjust any parameters in the studio and click **Save as Custom Theme ✨**.
2. **Storage**: Serialized and stored in `localStorage` under `aether-custom-themes`.
3. **Card & Dock Injection**: Automatically renders an interactive preview card with swatches and injects a button into the floating theme dock.
4. **Live Editing**: Click **`✏️ Edit`** on any custom theme card to load its parameters back into the studio. The save button transforms into `Update Theme "[Name]" 💾`, and updates are written in place without duplicates.
5. **Deletion**: Click **`🗑️`** on any custom theme card to instantly purge it from storage and UI.

---

## 🏗️ Project Architecture

```
test/
├── index.html              # Main application markup & component showcase
├── src/
│   ├── main.js             # Fluid canvas engine, 3D tilt, theme manager & interactive chart
│   └── style.css           # Design tokens, liquid glass component styles & responsive layouts
├── package.json            # Vite build configuration
├── vite.config.js          # Dev server setup
└── README-liquid_glass.md  # System documentation
```

### Component Breakdown (`index.html`)
- **Header**: Glass navbar with frosted brand mark, non-wrapping navigation links, theme indicator, and mobile liquid drawer toggle.
- **Section 1 - Showcase Hero (`#showcase`)**: High-impact heading, glass action pills, and live telemetry counter metrics.
- **Section 2 - Analytics Dashboard (`#dashboard`)**: SaaS platform preview with live SVG chart curve morphing (7d, 30d, 1y) and point tooltips.
- **Section 3 - Theme Studio (`#studio`)**: Tabbed deep customizer with live sync and inline educational tooltips.
- **Section 4 - Pricing Calculator (`#pricing`)**: Monthly/Annual pricing tier cards with unclipping badges and glass feature lists.
- **Section 5 - Preset Themes Grid (`#themes`)**: 12 preset cards + dynamic user-crafted cards with mini refraction previews.
- **Section 6 - Bento Grid (`#features`)**: Holographic pass card, refraction prism monitor, and interactive audio player.
- **Section 7 - Kitchen Sink (`#components`)**: Glass buttons, form inputs, toggle switches, and progress bars.
- **Section 8 - Token Inspector (`#tokens`)**: Live CSS variable token inspector with one-click copy.
- **Section 9 - Contact Form (`#contact`)**: Frosted glass inquiry form with floating labels and instant feedback.
- **Floating Controls**: Collapsible bottom theme dock (`.floating-theme-dock`), Zen preview exit capsule, and swipe-to-dismiss toast container.

---

## 📐 CSS Custom Property System (`tokens`)

```css
:root, [data-theme="cosmic"] {
  --bg-base: #070913;
  --bg-gradient: radial-gradient(circle at 50% 0%, #151932 0%, #070913 85%);
  --surface-tint-rgb: 16, 21, 38;
  --glass-tint-rgb: 255, 255, 255;

  --liquid-blob-1: #6366f1;
  --liquid-blob-2: #8b5cf6;
  --liquid-blob-3: #06b6d4;
  --liquid-blob-4: #3b82f6;

  --glass-opacity-multiplier: 1.0;
  --glass-opacity-val: 0.12;
  --glass-bg: rgba(var(--surface-tint-rgb), calc(var(--glass-opacity-val) * var(--glass-opacity-multiplier)));
  --glass-blur: 22px;
  --glass-saturation: 180%;
  --glass-border-width: 1px;
  --glass-corner-radius: 24px;
  --glass-border: rgba(255, 255, 255, 0.13);
  --glass-specular: rgba(255, 255, 255, 0.45);
  --glass-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.55);

  --accent-primary: #06b6d4;
  --accent-secondary: #8b5cf6;
  --accent-glow: rgba(6, 182, 212, 0.45);

  --font-family-base: 'Plus Jakarta Sans', sans-serif;
  --font-size-base: 16px;
  --font-size-heading-scale: 1.0;
}
```

---

## ⚡ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` or `pnpm`

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Launch Vite development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

Development server will be live at:
```
http://localhost:5173/
```

---

## 💡 Keyboard Shortcuts & Gestures
- **`Escape`**: Exit Clean Preview (Zen) Mode.
- **Drag Right (Toasts)**: Click or touch any toast notification and drag right to dismiss with fluid momentum.
- **Dock Toggle (`▾`)**: Minimize floating bottom dock to an unobtrusive pill.

---

## 📄 License
MIT License. Free for personal, commercial, and educational template usage.
