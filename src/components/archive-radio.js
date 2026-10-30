/**
 * Archive Acoustic Deck & Analog Radio Engine
 * Interactive physical radio instrument with rotary volume potentiometer,
 * dual analog VU needle physics, harmonic spectrum bars, and ambient Web Audio synthesizer.
 */

import { playClick, playTick, playChime, isSoundEnabled } from '../utils/audio.js';

let synthNode = null;
let synthGain = null;
let isAudioActive = false;

function getAudioContext() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!window.__archiveAudioCtx) {
    window.__archiveAudioCtx = new AudioCtx();
  }
  if (window.__archiveAudioCtx.state === 'suspended') {
    window.__archiveAudioCtx.resume();
  }
  return window.__archiveAudioCtx;
}

function startAmbientDrone(freq = 220) {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    stopAmbientDrone();

    synthGain = ctx.createGain();
    synthGain.gain.setValueAtTime(0.001, ctx.currentTime);
    synthGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.4);

    // Warm multi-oscillator chord
    const freqs = [freq, freq * 1.5, freq * 2];
    synthNode = freqs.map((f, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, ctx.currentTime);
      osc.connect(synthGain);
      osc.start();
      return osc;
    });

    synthGain.connect(ctx.destination);
    isAudioActive = true;
  } catch (e) {
    console.warn('Web Audio synthesis error:', e);
  }
}

function stopAmbientDrone() {
  try {
    if (synthGain) {
      const ctx = getAudioContext();
      if (ctx) {
        synthGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
      }
    }
    setTimeout(() => {
      if (synthNode) {
        synthNode.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch (e) {}
        });
        synthNode = null;
      }
      isAudioActive = false;
    }, 220);
  } catch (e) {}
}

export function initArchiveRadio() {
  const container = document.getElementById('archive-acoustic-deck');
  if (!container) return;

  let isPowerOn = true;
  let isPlaying = false;
  let volume = 68; // 0 to 100
  let currentStation = '88.5';
  let animId = null;

  // DOM Elements
  const powerBtn = container.querySelector('#radio-power-btn');
  const playBtn = container.querySelector('#radio-play-btn');
  const playLabel = container.querySelector('#radio-play-label');
  const volumeKnob = container.querySelector('#radio-volume-knob');
  const volumeValue = container.querySelector('#radio-volume-val');
  const vuNeedleL = container.querySelector('#radio-vu-needle-l');
  const vuNeedleR = container.querySelector('#radio-vu-needle-r');
  const spectrumBars = container.querySelectorAll('.radio-spectrum-bar');
  const stationButtons = container.querySelectorAll('.station-selector-btn');
  const activeStationDisplay = container.querySelector('#radio-station-display');
  const chassis = container.querySelector('.radio-chassis');

  // Station Frequencies for Synth
  const STATION_FREQS = {
    '88.5': 220,  // A3 (Ambient Ethereal)
    '96.2': 196,  // G3 (Warm Tape)
    '104.8': 261.63 // C4 (Kinetic Pulse)
  };

  // 1. Power Toggle
  if (powerBtn) {
    powerBtn.addEventListener('click', () => {
      isPowerOn = !isPowerOn;
      playClick();
      powerBtn.classList.toggle('active', isPowerOn);
      if (chassis) chassis.classList.toggle('powered-off', !isPowerOn);

      if (!isPowerOn && isPlaying) {
        isPlaying = false;
        if (playLabel) playLabel.textContent = 'ENGAGE AUDIO STREAM';
        stopAmbientDrone();
      }
    });
  }

  // 2. Play / Pause Transport
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (!isPowerOn) return;
      isPlaying = !isPlaying;
      playClick();

      playBtn.classList.toggle('playing', isPlaying);
      if (playLabel) {
        playLabel.textContent = isPlaying ? 'DISENGAGE AUDIO STREAM' : 'ENGAGE AUDIO STREAM';
      }

      if (isPlaying) {
        startAmbientDrone(STATION_FREQS[currentStation] || 220);
      } else {
        stopAmbientDrone();
      }
    });
  }

  // 3. Station Selector Buttons
  stationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isPowerOn) return;
      playTick();
      const station = btn.dataset.station;
      if (station) {
        currentStation = station;
        stationButtons.forEach(b => b.classList.toggle('active', b === btn));
        if (activeStationDisplay) {
          activeStationDisplay.textContent = `${station} MHz`;
        }
        if (isPlaying) {
          startAmbientDrone(STATION_FREQS[currentStation] || 220);
        }
      }
    });
  });

  // 4. Rotary Volume Knob Rotation & Drag Physics
  let isDragging = false;
  let startAngle = 0;
  let startVol = volume;

  function updateVolume(val) {
    volume = Math.max(0, Math.min(100, Math.round(val)));
    const angle = -135 + (volume / 100) * 270; // -135deg to +135deg
    if (volumeKnob) {
      volumeKnob.style.transform = `rotate(${angle}deg)`;
    }
    if (volumeValue) {
      volumeValue.textContent = `${volume}%`;
    }
    if (synthGain && isPlaying) {
      const ctx = getAudioContext();
      if (ctx) {
        const targetGain = (volume / 100) * 0.05;
        synthGain.gain.setValueAtTime(targetGain, ctx.currentTime);
      }
    }
  }

  if (volumeKnob) {
    updateVolume(volume);

    volumeKnob.addEventListener('pointerdown', (e) => {
      if (!isPowerOn) return;
      isDragging = true;
      volumeKnob.setPointerCapture(e.pointerId);
      const rect = volumeKnob.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      startAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
      startVol = volume;
      playTick();
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging || !volumeKnob) return;
      const rect = volumeKnob.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const currentAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
      let diff = currentAngle - startAngle;

      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;

      const deltaVol = (diff / (Math.PI * 1.5)) * 100;
      updateVolume(startVol + deltaVol);
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
    });

    volumeKnob.addEventListener('wheel', (e) => {
      if (!isPowerOn) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? -4 : 4;
      updateVolume(volume + delta);
      playTick();
    }, { passive: false });
  }

  // 5. Analog Needle & Harmonic Spectrum Animation Loop
  let step = 0;
  function animateRadio() {
    animId = requestAnimationFrame(animateRadio);
    step += 0.05;

    if (!isPowerOn || !isPlaying) {
      if (vuNeedleL) vuNeedleL.style.transform = 'rotate(-38deg)';
      if (vuNeedleR) vuNeedleR.style.transform = 'rotate(-38deg)';
      spectrumBars.forEach(b => { b.style.height = '6%'; });
      return;
    }

    const volFactor = volume / 100;

    // Damped needle physics
    const waveL = (Math.sin(step * 3.2) * 0.45 + Math.sin(step * 6.8) * 0.3 + 0.5) * volFactor;
    const waveR = (Math.cos(step * 2.9) * 0.45 + Math.sin(step * 5.4) * 0.3 + 0.5) * volFactor;

    const angleL = -38 + waveL * 68; // -38deg to +30deg
    const angleR = -38 + waveR * 68;

    if (vuNeedleL) vuNeedleL.style.transform = `rotate(${angleL}deg)`;
    if (vuNeedleR) vuNeedleR.style.transform = `rotate(${angleR}deg)`;

    // Spectrum bars
    spectrumBars.forEach((bar, idx) => {
      const h = Math.max(8, (Math.sin(step * 3.5 + idx * 0.6) * 45 + Math.cos(step * 4.8 + idx * 0.3) * 35 + 25) * volFactor);
      bar.style.height = `${Math.min(95, h)}%`;
    });
  }

  animateRadio();

  return () => {
    cancelAnimationFrame(animId);
    stopAmbientDrone();
  };
}
