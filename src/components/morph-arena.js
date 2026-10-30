/**
 * Theme Experience Stage Engine
 * Interactive website viewport mockup dynamically showcasing different custom theme websites.
 */

import { playPop, playClick, playChime, playMorph } from '../utils/audio.js';

const THEME_DATA = {
  'liquid-glass': {
    name: 'Liquid Glass (AETHER)',
    tagline: 'Hyper-refractive translucent surfaces with dynamic ambient fluid optics.',
    urlPath: '/themes/liquid-glass/',
    urlDisplay: 'https://themes.hub/liquid-glass',
    status: 'PRODUCTION READY',
    statusClass: 'status-ready',
    philosophy: 'Liquid Glass dissolves the boundary between digital layers through high-radius frosted diffusion (`backdrop-filter: blur(28px)`), sub-pixel specular highlight borders, and dynamic ambient metaparticles.',
    bestFor: 'Luxury SaaS dashboards, AI studio interfaces, creative portfolios, and futuristic fintech platforms.',
    features: [
      'Liquid canvas metaparticle engine reacting to cursor inertia',
      'Full Theme Studio with live color spectrum customizers',
      'Dual Dark & Light calibrated liquid refraction palettes',
      'Comprehensive landing page components & modal systems'
    ],
    buttonText: 'Launch Liquid Glass Website ↗',
    isLive: true
  },
  'neumorphism': {
    name: 'Neumorphic Soft UI',
    tagline: 'Seamless continuous surfaces with calibrated dual-opposing shadow depth.',
    urlPath: '#',
    urlDisplay: 'https://themes.hub/neumorphism',
    status: 'IN LABORATORY',
    statusClass: 'status-lab',
    philosophy: 'Neumorphism treats the user interface as a single, pliable tactile surface. Rather than floating layers, elements are sculpted directly into or extruded out of the plane using calibrated light and dark shadow physics.',
    bestFor: 'Smart home thermostats, IoT control panels, ambient audio stations, and tactile utility consoles.',
    features: [
      'Dual-opposing shadow elevation system (convex & concave)',
      'Tactile extruded toggles with realistic push depression',
      'Ultra-clean monochromatic lighting calibration',
      'Low eye-fatigue surface continuity for dedicated devices'
    ],
    buttonText: 'Full Website In Development (Preview Above)',
    isLive: false
  },
  'skeuomorphism': {
    name: 'Analog Skeuomorphism',
    tagline: 'Rich tangible textures, brushed bronze chassis, and physical mechanical cues.',
    urlPath: '#',
    urlDisplay: 'https://themes.hub/skeuomorphism',
    status: 'IN LABORATORY',
    statusClass: 'status-lab',
    philosophy: 'Skeuomorphism pays homage to analog physical craftsmanship—recreating the tactile warmth of brushed bronze, stitched saddle leather, knurled metal dials, and warm vacuum tube glow.',
    bestFor: 'Audiophile workstations, vintage synthesizers, precision hardware controllers, and retro gaming interfaces.',
    features: [
      'Multi-layered 3D metallic bevels and rotary potentiometer controls',
      'Dynamic needle physics simulating spring-damped analog VU meters',
      'Tactile mechanical switches with synthesized acoustic click feedback',
      'Rich physical textures without external raster image dependencies'
    ],
    buttonText: 'Full Website In Development (Preview Above)',
    isLive: false
  }
};

export function initMorphArena() {
  const container = document.getElementById('morph-arena');
  if (!container) return;

  let currentTheme = 'liquid-glass';

  // DOM Elements
  const themePills = container.querySelectorAll('.stage-theme-pill');
  const stageMockup = container.querySelector('#stage-preview-window');
  const stageUrl = container.querySelector('#stage-browser-url');
  const infoTitle = container.querySelector('#stage-theme-title');
  const infoTagline = container.querySelector('#stage-theme-tagline');
  const infoStatus = container.querySelector('#stage-theme-status');
  const infoPhilosophy = container.querySelector('#stage-theme-philosophy');
  const infoBestFor = container.querySelector('#stage-theme-bestfor');
  const infoFeaturesList = container.querySelector('#stage-theme-features');
  const ctaButton = container.querySelector('#stage-launch-cta');

  // Interactive mockup element inside preview
  const previewInteractiveBtn = container.querySelector('#stage-preview-action-btn');
  const previewStatusDot = container.querySelector('#stage-preview-dot');

  function updateStage(themeKey) {
    currentTheme = themeKey;
    const data = THEME_DATA[themeKey];
    if (!data) return;

    playMorph();

    // Update Pills
    themePills.forEach(pill => {
      const active = pill.dataset.theme === themeKey;
      pill.classList.toggle('active', active);
      pill.setAttribute('aria-selected', String(active));
    });

    // Update Mockup Theme
    if (stageMockup) {
      stageMockup.setAttribute('data-preview-theme', themeKey);
    }

    // Update Mockup URL bar
    if (stageUrl) {
      stageUrl.textContent = data.urlDisplay;
    }

    // Update Side Info Card
    if (infoTitle) infoTitle.textContent = data.name;
    if (infoTagline) infoTagline.textContent = `“${data.tagline}”`;
    if (infoPhilosophy) infoPhilosophy.textContent = data.philosophy;
    if (infoBestFor) infoBestFor.textContent = data.bestFor;

    if (infoStatus) {
      infoStatus.textContent = data.status;
      infoStatus.className = `stage-status-badge ${data.statusClass}`;
    }

    if (infoFeaturesList) {
      infoFeaturesList.innerHTML = data.features.map(f => `
        <li class="stage-feature-item">
          <span class="feature-pip">✦</span>
          <span>${f}</span>
        </li>
      `).join('');
    }

    if (ctaButton) {
      ctaButton.textContent = data.buttonText;
      if (data.isLive) {
        ctaButton.href = data.urlPath;
        ctaButton.classList.remove('btn-disabled');
        ctaButton.classList.add('btn-primary');
      } else {
        ctaButton.href = '#stage-preview-window';
        ctaButton.classList.remove('btn-primary');
        ctaButton.classList.add('btn-disabled');
      }
    }
  }

  // Pill click handlers
  themePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const t = pill.dataset.theme;
      if (t && t !== currentTheme) {
        updateStage(t);
      }
    });
  });

  // Interactive button inside mockup
  if (previewInteractiveBtn) {
    previewInteractiveBtn.addEventListener('click', () => {
      if (currentTheme === 'liquid-glass') {
        playChime();
        previewInteractiveBtn.classList.add('animate-glass-pulse');
        setTimeout(() => previewInteractiveBtn.classList.remove('animate-glass-pulse'), 400);
      } else if (currentTheme === 'neumorphism') {
        playPop();
        previewInteractiveBtn.classList.toggle('neu-depressed');
      } else if (currentTheme === 'skeuomorphism') {
        playClick();
        previewInteractiveBtn.classList.toggle('skeuo-switched');
      }
    });
  }

  // Initial render
  updateStage('liquid-glass');
}
