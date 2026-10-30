/**
 * Theme Exhibition Interactive Elements Engine
 * Binds interactive tactile micro-interactions for Neumorphic buttons and Skeuomorphic dials.
 */

import { playPop, playTick, playChime } from '../utils/audio.js';

export function initThemeCards() {
  // 1. Liquid Glass Card Refraction Tracker
  const glassCards = document.querySelectorAll('.card-liquid-glass, #card-liquid-glass, .spotlight-visual-frame');
  glassCards.forEach(card => {
    const shine = card.querySelector('.card-specular-shine');
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (shine) {
        shine.style.background = `radial-gradient(circle 320px at ${x}% ${y}%, rgba(255, 255, 255, 0.22), transparent 70%)`;
      }
    });

    card.addEventListener('pointerenter', () => {
      playChime();
    });
  });

  // 2. Neumorphic Interactive Soft Button
  const neuBtns = document.querySelectorAll('.bento-neu-btn, #bento-neu-btn, .neu-preview-button');
  neuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playPop();
      btn.classList.add('pressed');
      setTimeout(() => {
        btn.classList.remove('pressed');
      }, 350);
    });
  });

  // 3. Skeuomorphic Rotary Dial Knob
  const skeuoKnobs = document.querySelectorAll('.bento-skeuo-knob, #bento-skeuo-knob, .skeuo-dial-knob');
  skeuoKnobs.forEach(knob => {
    let currentAngle = -45;
    knob.addEventListener('click', () => {
      currentAngle += 45;
      if (currentAngle > 135) currentAngle = -135;
      knob.style.transform = `rotate(${currentAngle}deg)`;
      playTick();
    });
  });
}
