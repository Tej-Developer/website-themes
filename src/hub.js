/**
 * The Design System Archive Orchestrator
 * High-performance architectural exhibition portal, smooth inertia scrolling, and acoustic engine.
 */

import 'lenis/dist/lenis.css';
import Lenis from 'lenis';
import { animate } from 'motion';
import { 
  createIcons, 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  Sliders, 
  Layers, 
  Zap,
  Radio,
  Play,
  Pause,
  ChevronDown
} from 'lucide';

import { initHeroCanvas } from './components/hero-canvas.js';
import { initArchiveRadio } from './components/archive-radio.js';
import { initTimeline } from './components/timeline.js';
import { initThemeCards } from './components/theme-cards.js';
import { isSoundEnabled, toggleSound, playTick } from './utils/audio.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  try {
    createIcons({
      icons: { Volume2, VolumeX, ArrowUpRight, Sliders, Layers, Zap, Radio, Play, Pause, ChevronDown }
    });
  } catch (e) {
    console.warn('Lucide icon initialization skipped:', e);
  }

  // 2. Initialize Lenis Smooth Inertia Scrolling
  let lenis = null;
  try {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (e) {
    console.warn('Lenis scroll initialization skipped:', e);
  }

  // 3. Initialize Interactive Components
  initHeroCanvas('hero-mesh-canvas');
  initArchiveRadio();
  initTimeline();
  initThemeCards();

  // 4. Sound Controls
  const soundBtn = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');

  function updateSoundUI() {
    const enabled = isSoundEnabled();
    if (soundBtn) {
      soundBtn.setAttribute('title', enabled ? 'Mute Acoustic Feedback' : 'Unmute Acoustic Feedback');
      soundBtn.setAttribute('aria-label', enabled ? 'Mute Sound' : 'Enable Sound');
    }
    if (soundIcon) {
      soundIcon.textContent = enabled ? '🔊' : '🔇';
    }
  }

  if (soundBtn) {
    updateSoundUI();
    soundBtn.addEventListener('click', () => {
      toggleSound();
      updateSoundUI();
    });
  }

  // 5. Kinetic Hero Reveals with Motion
  try {
    animate(
      '.hero-status-row',
      { opacity: [0, 1], y: [-15, 0] },
      { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
    );
    animate(
      '.hero-title-main',
      { opacity: [0, 1], y: [25, 0] },
      { duration: 0.9, delay: 0.15, easing: [0.16, 1, 0.3, 1] }
    );
    animate(
      '.hero-subhead',
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.9, delay: 0.3, easing: [0.16, 1, 0.3, 1] }
    );
    animate(
      '.architectural-metrics-strip',
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.9, delay: 0.45, easing: [0.16, 1, 0.3, 1] }
    );
  } catch (e) {
    console.warn('Motion animation error:', e);
  }

  // 6. Smooth anchor links with sound and Lenis scrollTo
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          playTick();
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -60, duration: 1.2 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });
});
