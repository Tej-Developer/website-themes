/**
 * Architectural Grid & Coordinate Canvas Engine
 * Delicate kinetic vector matrix with cursor coordinate tracking and subtle momentum.
 * Zero colorful blobs - clean architectural drafting aesthetic.
 */

export function initHeroCanvas(canvasId = 'hero-mesh-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let animationId = null;

  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false
  };

  function resize() {
    width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
    height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
    mouse.active = true;
  });

  window.addEventListener('pointerleave', () => {
    mouse.active = false;
  });

  const GRID_SPACING = 60;

  function animate() {
    animationId = requestAnimationFrame(animate);

    if (mouse.active) {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
    } else {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Architectural Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    for (let x = 0; x <= width; x += GRID_SPACING) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += GRID_SPACING) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // 2. Draw Subtle Crosshair Nodes at Intersections
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    for (let x = 0; x <= width; x += GRID_SPACING) {
      for (let y = 0; y <= height; y += GRID_SPACING) {
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180) {
          const factor = (1 - dist / 180);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.12 + factor * 0.35})`;
          ctx.fillRect(x - 2, y - 2, 4, 4);

          // Subtle coordinate line to mouse
          if (dist < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${factor * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }
    }

    // 3. Subtle Crosshair Around Cursor
    if (mouse.active && mouse.x > 0 && mouse.y > 0) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1;

      // Small target cross
      const len = 12;
      ctx.beginPath();
      ctx.moveTo(mouse.x - len, mouse.y);
      ctx.lineTo(mouse.x + len, mouse.y);
      ctx.moveTo(mouse.x, mouse.y - len);
      ctx.lineTo(mouse.x, mouse.y + len);
      ctx.stroke();

      // Delicate coordinate text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText(`X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}`, mouse.x + 14, mouse.y - 8);
    }
  }

  animationId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resize);
  };
}
