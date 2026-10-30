/**
 * Interactive UI Design History Timeline Engine (2007 - 2026+)
 * Scrubber and era cards detailing how digital design languages evolved.
 */

import { playTick, playChime } from '../utils/audio.js';

const TIMELINE_ERAS = [
  {
    id: 'skeuo-era',
    period: '2007 — 2012',
    name: 'The Golden Age of Skeuomorphism',
    paradigm: 'Tactile Physical Affordance',
    tagline: 'When software faithfully mirrored the physical workshop.',
    summary: 'Spearheaded by Steve Jobs and early iOS/OS X, digital interfaces replicated tangible materials—stitched Italian leather in Calendar, brushed aluminum in QuickTime, and green casino felt in Game Center. The goal was cognitive comfort for a world newly learning multi-touch screens.',
    highlights: [
      'Multi-layered bevels and gradients simulating physical overhead light',
      'Realistic material textures (brushed bronze, gloss glass, stitched saddle leather)',
      'High cognitive affordance: every digital button looked genuinely pushable'
    ],
    experienceSummary: 'Our collection pays tribute to this era with the upcoming Analog Skeuomorphic studio, featuring realistic rotary potentiometers and analog VU meters.',
    quote: '"We made the buttons on the screen look so good you\'ll want to lick them." — Steve Jobs'
  },
  {
    id: 'flat-era',
    period: '2013 — 2019',
    name: 'Flat Design & Material Architecture',
    paradigm: 'Swiss Minimalism & Elevation Grids',
    tagline: 'The radical purge of texture in pursuit of pure digital authenticity.',
    summary: 'With iOS 7 and Google Material Design, the digital world discarded physical metaphors. Interfaces embraced Swiss typography, stark geometric vectors, primary color palettes, and mathematical paper-sheet elevation models (z-index shadows).',
    highlights: [
      'Zero bevels, zero pseudo-realistic textures, clean hairline borders',
      'Material elevation system: 1dp to 24dp physics-based shadows',
      'Typography-first information hierarchies and vibrant high-contrast accents'
    ],
    experienceSummary: 'Established the modern digital grid and minimalist information hierarchy that powers clean web applications today.',
    quote: '"Flat design is not about taking away, but about revealing what is essential."'
  },
  {
    id: 'neumorph-era',
    period: '2020',
    name: 'The Neumorphic Explosion',
    paradigm: 'Soft UI & Continuous Surfaces',
    tagline: 'The viral bridge between flat minimalism and 3D physical extrusion.',
    summary: 'Born on Dribbble and popularized worldwide as "Soft UI", Neumorphism treated interface surfaces as pliable, vacuum-formed plastic sheets. Instead of layered cards floating over backgrounds, elements were extruded or punched directly into a monochromatic surface using dual opposing light and dark shadows.',
    highlights: [
      'Dual opposing shadows (bright highlight at -135°, dark shadow at 45°)',
      'Monochromatic background-to-element continuity with zero sharp contrast borders',
      'Convex extruded buttons that indent flush into concave wells on press'
    ],
    experienceSummary: 'Explored in our laboratory as a dedicated tactile theme for focused hardware, IoT, and audiophile consoles.',
    quote: '"Elements don\'t sit on top of the surface—they are sculpted directly from it."'
  },
  {
    id: 'liquid-glass-era',
    period: '2021 — 2024',
    name: 'The Rise of Liquid Glass',
    paradigm: 'Frosted Translucency & Specular Refraction',
    tagline: 'Multi-plane spatial depth powered by modern GPU shaders.',
    summary: 'With macOS Big Sur, Windows 11 Acrylic, and Vision interfaces, hardware acceleration brought high-fidelity translucent blur into mainstream web engines. Interfaces became frosted multi-plane glass panes revealing rich, flowing ambient color underneath.',
    highlights: [
      'Sub-pixel specular highlight borders with white-to-transparent falloff',
      'Deep frosted diffusion blur (16px - 32px) preserving background color vibrancy',
      'Dynamic fluid orbs and metaparticles providing kinetic life beneath the glass panes'
    ],
    experienceSummary: 'Fully realized in our live Liquid Glass website, featuring real-time canvas metaparticles and a customizer studio.',
    quote: '"Translucent depth creates a sense of spatial awareness without visual clutter."'
  },
  {
    id: 'spatial-era',
    period: '2025 — 2026+',
    name: 'Spatial Computing & Kinetic Synthesis',
    paradigm: 'Adaptive Multi-Paradigm Physics',
    tagline: 'The convergence of physical haptics, spatial depth, and responsive kinetics.',
    summary: 'Today’s vanguard synthesizes all historical lessons: the tactile physical satisfaction of skeuomorphism, the structural rigor of flat architecture, the organic softness of neumorphism, and the optical refraction of liquid surfaces. Interfaces now physically react to cursor inertia, sound, and lighting.',
    highlights: [
      'Spatial canvas depth and micro-haptic synthesized audio feedback',
      'Dynamic physical materials that adapt based on interaction context',
      'High-performance WebGL shaders and GPU-accelerated surface physics'
    ],
    experienceSummary: 'Anticipates adaptive kinetic physics and spatial depth across future multi-device interfaces.',
    quote: '"Digital interfaces are no longer static screens—they are living optical instruments."'
  }
];

export function initTimeline() {
  const container = document.getElementById('history-timeline') || document.getElementById('evolution');
  if (!container) return;

  let currentEraIndex = 3; // Default to Liquid Glass Era

  const navItems = container.querySelectorAll('.timeline-nav-item');
  const cardContainer = container.querySelector('#timeline-display-card');
  const prevBtn = container.querySelector('#btn-timeline-prev');
  const nextBtn = container.querySelector('#btn-timeline-next');
  const progressFill = container.querySelector('#timeline-progress-fill');

  function renderEra(index) {
    currentEraIndex = Math.max(0, Math.min(TIMELINE_ERAS.length - 1, index));
    const era = TIMELINE_ERAS[currentEraIndex];

    // Update nav items
    navItems.forEach((item, idx) => {
      const active = idx === currentEraIndex;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });

    // Update progress bar
    if (progressFill) {
      const percent = (currentEraIndex / (TIMELINE_ERAS.length - 1)) * 100;
      progressFill.style.width = `${percent}%`;
    }

    // Render Display Card with smooth transition
    if (cardContainer) {
      cardContainer.classList.add('transitioning');
      setTimeout(() => {
        cardContainer.innerHTML = `
          <div class="era-card-inner" data-era="${era.id}">
            <div class="era-header">
              <div class="era-meta">
                <span class="era-badge-period">${era.period}</span>
                <span class="era-badge-paradigm">${era.paradigm}</span>
              </div>
              <h3 class="era-title">${era.name}</h3>
              <p class="era-tagline">“${era.tagline}”</p>
            </div>

            <p class="era-summary">${era.summary}</p>

            <div class="era-highlights-grid">
              ${era.highlights.map(h => `
                <div class="era-highlight-pill">
                  <span class="highlight-bullet">✦</span>
                  <span class="highlight-text">${h}</span>
                </div>
              `).join('')}
            </div>

            <div class="era-experience-note">
              <span class="note-heading">IN THIS REPOSITORY</span>
              <p class="note-text">${era.experienceSummary}</p>
            </div>

            <div class="era-footer">
              <div class="era-quote-wrapper">
                <span class="era-quote">${era.quote}</span>
              </div>
              ${era.id === 'liquid-glass-era' ? `
                <div class="era-action-wrapper">
                  <a href="/themes/liquid-glass/" class="launch-portal-btn era-studio-cta">
                    <span>Launch Liquid Glass Website ↗</span>
                  </a>
                </div>
              ` : ''}
            </div>
          </div>
        `;
        cardContainer.classList.remove('transitioning');
      }, 140);
    }
  }

  navItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      playTick();
      renderEra(idx);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentEraIndex > 0) {
        playTick();
        renderEra(currentEraIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentEraIndex < TIMELINE_ERAS.length - 1) {
        playTick();
        renderEra(currentEraIndex + 1);
      }
    });
  }

  // Initial render
  renderEra(currentEraIndex);
}
