/* ============================================================
   AETHER LIQUID GLASS ENGINE & THEME CONTROLLER (v2.6)
   ============================================================ */

// 1. BASE THEMES PRESET CONFIGURATION
const DEFAULT_THEMES = {
  cosmic: {
    name: "Midnight Cosmic",
    bg: "#070913",
    surface: "rgba(16, 21, 38, 0.55)",
    blob1: "#6366f1",
    blob2: "#8b5cf6",
    blob3: "#06b6d4",
    blob4: "#3b82f6",
    accent: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.45)",
    glassBg: "rgba(255, 255, 255, 0.05)",
    glassBorder: "rgba(255, 255, 255, 0.12)",
    glassSpecular: "rgba(255, 255, 255, 0.45)",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8"
  },
  emerald: {
    name: "Hyper Emerald",
    bg: "#03120e",
    surface: "rgba(7, 34, 27, 0.55)",
    blob1: "#10b981",
    blob2: "#059669",
    blob3: "#14b8a6",
    blob4: "#84cc16",
    accent: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.5)",
    glassBg: "rgba(16, 185, 129, 0.05)",
    glassBorder: "rgba(52, 211, 153, 0.16)",
    glassSpecular: "rgba(167, 243, 208, 0.5)",
    textPrimary: "#f0fdf4",
    textSecondary: "#a7f3d0"
  },
  solar: {
    name: "Solar Mirage",
    bg: "#14070e",
    surface: "rgba(38, 14, 26, 0.55)",
    blob1: "#f97316",
    blob2: "#e11d48",
    blob3: "#fbbf24",
    blob4: "#d946ef",
    accent: "#fb923c",
    accentGlow: "rgba(251, 146, 60, 0.5)",
    glassBg: "rgba(251, 146, 60, 0.05)",
    glassBorder: "rgba(251, 146, 60, 0.18)",
    glassSpecular: "rgba(254, 215, 170, 0.55)",
    textPrimary: "#fff1f2",
    textSecondary: "#fecdd3"
  },
  cyber: {
    name: "Cyber Prism",
    bg: "#07030f",
    surface: "rgba(23, 7, 39, 0.6)",
    blob1: "#ec4899",
    blob2: "#8b5cf6",
    blob3: "#06b6d4",
    blob4: "#f43f5e",
    accent: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.55)",
    glassBg: "rgba(236, 72, 153, 0.06)",
    glassBorder: "rgba(236, 72, 153, 0.22)",
    glassSpecular: "rgba(253, 164, 175, 0.65)",
    textPrimary: "#ffffff",
    textSecondary: "#e9d5ff"
  },
  pearl: {
    name: "Pearl Frost",
    bg: "#edf2f7",
    surface: "rgba(255, 255, 255, 0.65)",
    blob1: "#3b82f6",
    blob2: "#8b5cf6",
    blob3: "#06b6d4",
    blob4: "#ec4899",
    accent: "#2563eb",
    accentGlow: "rgba(37, 99, 235, 0.35)",
    glassBg: "rgba(255, 255, 255, 0.65)",
    glassBorder: "rgba(255, 255, 255, 0.85)",
    glassSpecular: "rgba(255, 255, 255, 0.95)",
    textPrimary: "#0f172a",
    textSecondary: "#334155"
  },
  matcha: {
    name: "Matcha Zen",
    bg: "#05130b",
    surface: "rgba(6, 31, 19, 0.55)",
    blob1: "#22c55e",
    blob2: "#15803d",
    blob3: "#86efac",
    blob4: "#166534",
    accent: "#4ade80",
    accentGlow: "rgba(74, 222, 128, 0.45)",
    glassBg: "rgba(34, 197, 94, 0.05)",
    glassBorder: "rgba(74, 222, 128, 0.18)",
    glassSpecular: "rgba(187, 247, 208, 0.55)",
    textPrimary: "#f0fdf4",
    textSecondary: "#bbf7d0"
  },
  crimson: {
    name: "Crimson Eclipse",
    bg: "#130307",
    surface: "rgba(36, 8, 14, 0.55)",
    blob1: "#f43f5e",
    blob2: "#e11d48",
    blob3: "#fb7185",
    blob4: "#9f1239",
    accent: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.5)",
    glassBg: "rgba(244, 63, 94, 0.06)",
    glassBorder: "rgba(244, 63, 94, 0.22)",
    glassSpecular: "rgba(254, 205, 211, 0.6)",
    textPrimary: "#fff1f2",
    textSecondary: "#fecdd3"
  },
  glacier: {
    name: "Nordic Glacier",
    bg: "#030c18",
    surface: "rgba(6, 24, 46, 0.55)",
    blob1: "#0ea5e9",
    blob2: "#0284c7",
    blob3: "#38bdf8",
    blob4: "#06b6d4",
    accent: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.45)",
    glassBg: "rgba(56, 189, 248, 0.05)",
    glassBorder: "rgba(56, 189, 248, 0.2)",
    glassSpecular: "rgba(186, 230, 253, 0.55)",
    textPrimary: "#f0f9ff",
    textSecondary: "#bae6fd"
  },
  tokyo: {
    name: "Tokyo Cyber",
    bg: "#0a0216",
    surface: "rgba(28, 6, 52, 0.55)",
    blob1: "#d946ef",
    blob2: "#a855f7",
    blob3: "#3b82f6",
    blob4: "#f43f5e",
    accent: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.5)",
    glassBg: "rgba(217, 70, 239, 0.06)",
    glassBorder: "rgba(217, 70, 239, 0.24)",
    glassSpecular: "rgba(245, 208, 254, 0.65)",
    textPrimary: "#faf5ff",
    textSecondary: "#e9d5ff"
  },
  amber: {
    name: "Amber Honey",
    bg: "#160a03",
    surface: "rgba(38, 18, 7, 0.55)",
    blob1: "#f59e0b",
    blob2: "#d97706",
    blob3: "#fbbf24",
    blob4: "#b45309",
    accent: "#fbbf24",
    accentGlow: "rgba(251, 191, 36, 0.45)",
    glassBg: "rgba(245, 158, 11, 0.05)",
    glassBorder: "rgba(251, 191, 36, 0.2)",
    glassSpecular: "rgba(254, 243, 199, 0.55)",
    textPrimary: "#fffbeb",
    textSecondary: "#fde68a"
  },
  amethyst: {
    name: "Amethyst Void",
    bg: "#0a0416",
    surface: "rgba(24, 10, 48, 0.55)",
    blob1: "#9333ea",
    blob2: "#7e22ce",
    blob3: "#c084fc",
    blob4: "#4f46e5",
    accent: "#c084fc",
    accentGlow: "rgba(192, 132, 252, 0.5)",
    glassBg: "rgba(147, 51, 234, 0.06)",
    glassBorder: "rgba(192, 132, 252, 0.22)",
    glassSpecular: "rgba(233, 213, 255, 0.6)",
    textPrimary: "#faf5ff",
    textSecondary: "#d8b4fe"
  },
  titanium: {
    name: "Ghost Titanium",
    bg: "#090a0f",
    surface: "rgba(20, 23, 31, 0.6)",
    blob1: "#64748b",
    blob2: "#94a3b8",
    blob3: "#cbd5e1",
    blob4: "#475569",
    accent: "#e2e8f0",
    accentGlow: "rgba(226, 232, 240, 0.35)",
    glassBg: "rgba(255, 255, 255, 0.04)",
    glassBorder: "rgba(255, 255, 255, 0.16)",
    glassSpecular: "rgba(255, 255, 255, 0.5)",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8"
  }
};

// STUDIO INSPIRATION PRESETS
const STUDIO_PRESETS = {
  matcha: {
    name: "Matcha Zen",
    bg: "#06130d",
    accent: "#4ade80",
    accent2: "#10b981",
    blob1: "#22c55e",
    blob2: "#15803d",
    blob3: "#86efac",
    blob4: "#166534"
  },
  crimson: {
    name: "Crimson Blood",
    bg: "#150407",
    accent: "#f43f5e",
    accent2: "#fb7185",
    blob1: "#e11d48",
    blob2: "#9f1239",
    blob3: "#fda4af",
    blob4: "#881337"
  },
  glacier: {
    name: "Nordic Glacier",
    bg: "#040d1a",
    accent: "#38bdf8",
    accent2: "#0284c7",
    blob1: "#0ea5e9",
    blob2: "#0284c7",
    blob3: "#7dd3fc",
    blob4: "#0369a1"
  },
  tokyo: {
    name: "Tokyo Cyber",
    bg: "#0e021a",
    accent: "#a855f7",
    accent2: "#ec4899",
    blob1: "#d946ef",
    blob2: "#3b82f6",
    blob3: "#c084fc",
    blob4: "#8b5cf6"
  },
  amber: {
    name: "Amber Honey",
    bg: "#160b03",
    accent: "#fbbf24",
    accent2: "#f59e0b",
    blob1: "#f59e0b",
    blob2: "#d97706",
    blob3: "#fde68a",
    blob4: "#b45309"
  },
  peach: {
    name: "Sunset Peach",
    bg: "#1c0a14",
    accent: "#fb7185",
    accent2: "#f43f5e",
    blob1: "#fb923c",
    blob2: "#f43f5e",
    blob3: "#fed7aa",
    blob4: "#e11d48"
  }
};

let THEMES = { ...DEFAULT_THEMES };

let currentTheme = localStorage.getItem("aether-theme") || "cosmic";
let currentMode = localStorage.getItem("aether-mode") || "dark";
let fluidSpeedMultiplier = 1.0;
let harmonicDrift = 35;
let motionEnabled = true;

/* ------------------------------------------------------------
   2. PERSISTENCE & CUSTOM THEME MANAGEMENT
   ------------------------------------------------------------ */

let editingCustomThemeId = null;

function loadCustomThemesFromStorage() {
  try {
    const raw = localStorage.getItem("aether-custom-themes");
    if (!raw) return;
    const customList = JSON.parse(raw);
    customList.forEach((t) => {
      THEMES[t.id] = t;
      injectCustomThemeCard(t);
      injectCustomDockButton(t);
    });
    updateTotalThemesCounter();
  } catch (err) {
    console.warn("Could not parse saved custom themes:", err);
  }
}

function saveCustomTheme(themeData) {
  const isUpdating = Boolean(editingCustomThemeId && editingCustomThemeId === themeData.id);
  THEMES[themeData.id] = themeData;

  try {
    const existing = JSON.parse(localStorage.getItem("aether-custom-themes") || "[]");
    const filtered = existing.filter((t) => t.id !== themeData.id);
    filtered.push(themeData);
    localStorage.setItem("aether-custom-themes", JSON.stringify(filtered));
  } catch (err) {
    console.warn("Error saving custom theme:", err);
  }

  injectCustomThemeCard(themeData);
  injectCustomDockButton(themeData);
  updateTotalThemesCounter();

  applyTheme(themeData.id);

  if (isUpdating) {
    showToast(`Custom theme "${themeData.name}" updated successfully! 💾✨`);
  } else {
    showToast(`Custom theme "${themeData.name}" created and applied! ✨`);
  }

  cancelEditCustomTheme();
}

function editCustomTheme(themeId) {
  const t = THEMES[themeId];
  if (!t) return;

  editingCustomThemeId = themeId;
  applyTheme(themeId);

  // Sync Studio Inputs
  syncStudioWithActiveTheme(t);

  const nameInput = document.getElementById("studio-theme-name");
  if (nameInput) nameInput.value = t.name;

  const bgInput = document.getElementById("studio-bg-color");
  const bgHex = document.getElementById("studio-bg-hex");
  if (bgInput) bgInput.value = t.bg;
  if (bgHex) bgHex.value = t.bg;

  const accentInput = document.getElementById("studio-accent-color");
  const accentHex = document.getElementById("studio-accent-hex");
  if (accentInput) accentInput.value = t.accent;
  if (accentHex) accentHex.value = t.accent;

  const b1 = document.getElementById("studio-blob1-color");
  const b1Hex = document.getElementById("studio-blob1-hex");
  if (b1) b1.value = t.blob1;
  if (b1Hex) b1Hex.value = t.blob1;

  const b2 = document.getElementById("studio-blob2-color");
  const b2Hex = document.getElementById("studio-blob2-hex");
  if (b2) b2.value = t.blob2;
  if (b2Hex) b2Hex.value = t.blob2;

  const b3 = document.getElementById("studio-blob3-color");
  const b3Hex = document.getElementById("studio-blob3-hex");
  if (b3) b3.value = t.blob3 || t.blob1;
  if (b3Hex) b3Hex.value = t.blob3 || t.blob1;

  const b4 = document.getElementById("studio-blob4-color");
  const b4Hex = document.getElementById("studio-blob4-hex");
  if (b4) b4.value = t.blob4 || t.blob2;
  if (b4Hex) b4Hex.value = t.blob4 || t.blob2;

  // Update Studio Badge & Save Button
  const studioBadge = document.getElementById("studio-active-badge");
  if (studioBadge) studioBadge.textContent = `✏️ Editing Custom: ${t.name}`;

  const saveBtn = document.getElementById("btn-studio-save");
  if (saveBtn) {
    saveBtn.innerHTML = `<span class="btn-shine"></span><span>Update Theme "${t.name}" 💾</span>`;
  }

  const cancelBtn = document.getElementById("btn-studio-cancel-edit");
  if (cancelBtn) cancelBtn.style.display = "inline-flex";

  // Scroll smoothly to studio section
  document.getElementById("studio")?.scrollIntoView({ behavior: "smooth" });
  showToast(`Loaded "${t.name}" into Theme Studio for editing! 🎨`);
}

function cancelEditCustomTheme() {
  editingCustomThemeId = null;
  const saveBtn = document.getElementById("btn-studio-save");
  if (saveBtn) {
    saveBtn.innerHTML = `<span class="btn-shine"></span><span>Save as Custom Theme ✨</span>`;
  }
  const cancelBtn = document.getElementById("btn-studio-cancel-edit");
  if (cancelBtn) cancelBtn.style.display = "none";

  const config = THEMES[currentTheme] || DEFAULT_THEMES.cosmic;
  const studioBadge = document.getElementById("studio-active-badge");
  if (studioBadge) studioBadge.textContent = `Editing: ${config.name}`;
}

function deleteCustomTheme(themeId) {
  const t = THEMES[themeId];
  if (!t) return;

  if (editingCustomThemeId === themeId) {
    cancelEditCustomTheme();
  }

  delete THEMES[themeId];

  try {
    const existing = JSON.parse(localStorage.getItem("aether-custom-themes") || "[]");
    const filtered = existing.filter((item) => item.id !== themeId);
    localStorage.setItem("aether-custom-themes", JSON.stringify(filtered));
  } catch (err) {
    console.warn("Error deleting custom theme:", err);
  }

  const card = document.querySelector(`.theme-card[data-theme-target="${themeId}"]`);
  if (card) card.remove();

  const dockBtn = document.querySelector(`.dock-btn[data-theme-target="${themeId}"]`);
  if (dockBtn) dockBtn.remove();

  updateTotalThemesCounter();

  if (currentTheme === themeId) {
    applyTheme("cosmic");
  }

  showToast(`Custom theme "${t.name}" deleted. 🗑️`);
}

function injectCustomThemeCard(t) {
  const container = document.getElementById("theme-cards-grid");
  if (!container) return;

  let existing = container.querySelector(`[data-theme-target="${t.id}"]`);
  if (existing) existing.remove();

  const card = document.createElement("div");
  card.className = "liquid-card theme-card tilt-card";
  card.dataset.themeTarget = t.id;
  card.innerHTML = `
    <div class="card-specular-glare"></div>
    <div class="theme-card-preview" style="background: ${t.bg};">
      <div class="theme-orb" style="width: 100px; height: 100px; background: ${t.blob1}; top: 10px; left: 20px;"></div>
      <div class="theme-orb" style="width: 110px; height: 110px; background: ${t.blob2}; bottom: 0; right: 20px;"></div>
      <div class="theme-glass-mini"></div>
    </div>
    <div class="theme-card-body">
      <div class="theme-title-row">
        <h3 class="theme-name">${t.name}</h3>
        <span class="theme-status-tag">CUSTOM</span>
      </div>
      <p class="theme-desc">User-crafted liquid glass spectrum with dynamic fluid gradients.</p>
      <div class="theme-palette-swatches">
        <span class="swatch" style="background: ${t.bg};" title="Background"></span>
        <span class="swatch" style="background: ${t.blob1};" title="Blob 1"></span>
        <span class="swatch" style="background: ${t.blob2};" title="Blob 2"></span>
        <span class="swatch" style="background: ${t.accent};" title="Accent"></span>
      </div>
      <div class="theme-card-actions">
        <button class="liquid-btn btn-sm btn-glass theme-select-btn">Apply Theme</button>
        <button class="liquid-btn btn-sm btn-glass theme-action-icon-btn theme-edit-btn" data-edit-id="${t.id}" title="Edit this custom theme in Studio">✏️ Edit</button>
        <button class="liquid-btn btn-sm btn-glass theme-action-icon-btn theme-delete-btn" data-delete-id="${t.id}" title="Delete this custom theme">🗑️</button>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".theme-edit-btn")) {
      e.stopPropagation();
      editCustomTheme(t.id);
      return;
    }
    if (e.target.closest(".theme-delete-btn")) {
      e.stopPropagation();
      deleteCustomTheme(t.id);
      return;
    }
    applyTheme(t.id);
  });

  container.appendChild(card);
  initSingleCardSpecular(card);
}

function injectCustomDockButton(t) {
  const container = document.getElementById("dock-buttons-container");
  if (!container) return;

  let existing = container.querySelector(`[data-theme-target="${t.id}"]`);
  if (existing) existing.remove();

  const btn = document.createElement("button");
  btn.className = "dock-btn";
  btn.dataset.themeTarget = t.id;
  btn.title = t.name;
  btn.innerHTML = `
    <span class="dock-dot" style="background: ${t.accent}; box-shadow: 0 0 6px ${t.accent};"></span>
    <span class="dock-name">${t.name.split(" ")[0]}</span>
  `;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    applyTheme(t.id);
  });

  container.appendChild(btn);
}

function updateTotalThemesCounter() {
  const counter = document.getElementById("total-themes-counter");
  if (counter) {
    const count = Object.keys(THEMES).length;
    counter.innerHTML = `${count} <span class="stat-unit">Themes</span>`;
  }
}

/* ------------------------------------------------------------
   3. FLUID CANVAS SIMULATION ENGINE
   ------------------------------------------------------------ */

class FluidBlob {
  constructor(canvasWidth, canvasHeight, colorKey, radius) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.baseRadius = radius;
    this.radius = radius;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.colorKey = colorKey;
    this.angle = Math.random() * Math.PI * 2;
    this.angularSpeed = (Math.random() - 0.5) * 0.02;
  }

  update(width, height, mouse, speed) {
    if (!motionEnabled) return;

    this.angle += this.angularSpeed * speed;
    this.radius = this.baseRadius + Math.sin(this.angle) * harmonicDrift;

    this.x += this.vx * speed;
    this.y += this.vy * speed;

    if (this.x < -this.radius) this.x = width + this.radius;
    if (this.x > width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = height + this.radius;
    if (this.y > height + this.radius) this.y = -this.radius;

    // Mouse fluid displacement
    if (mouse.x !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 340 && dist > 0) {
        const force = ((340 - dist) / 340) * 1.6;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
      }
    }
  }

  draw(ctx, themeConfig) {
    const color = themeConfig[this.colorKey] || themeConfig.blob1;
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, Math.max(10, this.radius)
    );

    gradient.addColorStop(0, hexToRgba(color, 0.75));
    gradient.addColorStop(0.5, hexToRgba(color, 0.35));
    gradient.addColorStop(1, hexToRgba(color, 0));

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(10, this.radius), 0, Math.PI * 2);
    ctx.fill();
  }
}

function hexToRgba(hex, alpha) {
  if (!hex) return `rgba(99, 102, 241, ${alpha})`;
  if (hex.startsWith("rgba")) return hex;
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c.split("").map((x) => x + x).join("");
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Canvas Initialization
const canvas = document.getElementById("liquid-canvas");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const mouse = { x: null, y: null };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const blobs = [
  new FluidBlob(width, height, "blob1", 280),
  new FluidBlob(width, height, "blob2", 340),
  new FluidBlob(width, height, "blob3", 260),
  new FluidBlob(width, height, "blob4", 300),
  new FluidBlob(width, height, "blob1", 220),
];

// FPS Monitoring
let frameCount = 0;
let lastFpsUpdate = performance.now();
const fpsCounterEl = document.getElementById("fps-counter");

function renderFluidLoop(time) {
  frameCount++;
  if (time - lastFpsUpdate >= 500) {
    const currentFps = Math.round((frameCount * 1000) / (time - lastFpsUpdate));
    if (fpsCounterEl) {
      fpsCounterEl.innerHTML = `${currentFps} <span class="stat-unit">FPS</span>`;
    }
    frameCount = 0;
    lastFpsUpdate = time;
  }

  ctx.clearRect(0, 0, width, height);

  const activeConfig = THEMES[currentTheme] || THEMES.cosmic;
  ctx.globalCompositeOperation = currentMode === "light" ? "multiply" : "screen";

  for (const blob of blobs) {
    blob.update(width, height, mouse, fluidSpeedMultiplier);
    blob.draw(ctx, activeConfig);
  }

  requestAnimationFrame(renderFluidLoop);
}

requestAnimationFrame(renderFluidLoop);

/* ------------------------------------------------------------
   4. LIQUID CURSOR FOLLOWER & CLICK RIPPLE
   ------------------------------------------------------------ */

function initSpecialEffects() {
  const follower = document.getElementById("liquid-cursor-follower");
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function updateFollower() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;
    if (follower) {
      follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    }
    requestAnimationFrame(updateFollower);
  }
  requestAnimationFrame(updateFollower);

  // Click Ripple
  window.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "liquid-ripple";
    const size = 60;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - size / 2}px`;
    ripple.style.top = `${e.clientY - size / 2}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* ------------------------------------------------------------
   5. 3D TILT & SPECULAR CURSOR TRACKING
   ------------------------------------------------------------ */

function initSingleCardSpecular(card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    if (card.classList.contains("tilt-card")) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    }
  });

  card.addEventListener("mouseleave", () => {
    if (card.classList.contains("tilt-card")) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  });
}

function initCardSpecularAndTilt() {
  document.querySelectorAll(".liquid-card").forEach(initSingleCardSpecular);
}

/* ------------------------------------------------------------
   6. SCROLL SPY & NAVIGATION
   ------------------------------------------------------------ */

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
          mobileLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ------------------------------------------------------------
   7. DARK / LIGHT MODE ENGINE
   ------------------------------------------------------------ */

function setMode(mode) {
  currentMode = mode;
  localStorage.setItem("aether-mode", mode);
  document.documentElement.setAttribute("data-mode", mode);

  const modeText = document.getElementById("mode-text-label");
  if (modeText) modeText.textContent = mode === "dark" ? "Dark" : "Light";

  const dockIcon = document.querySelector(".dock-mode-icon");
  if (dockIcon) dockIcon.textContent = mode === "dark" ? "🌙" : "☀️";

  const statMode = document.getElementById("stat-active-mode");
  if (statMode) {
    statMode.innerHTML = `${mode === "dark" ? "Dark" : "Light"} <span class="stat-unit">Mode</span>`;
  }

  showToast(`Switched to ${mode === "dark" ? "Dark Glass 🌙" : "Light Glass ☀️"}`);
}

function toggleMode() {
  setMode(currentMode === "dark" ? "light" : "dark");
}

function initModeToggle() {
  const navBtn = document.getElementById("btn-mode-toggle");
  if (navBtn) navBtn.addEventListener("click", toggleMode);

  const dockBtn = document.getElementById("dock-mode-toggle");
  if (dockBtn) dockBtn.addEventListener("click", toggleMode);

  const mobileModeBtn = document.getElementById("btn-mobile-mode-toggle");
  if (mobileModeBtn) mobileModeBtn.addEventListener("click", toggleMode);

  setMode(currentMode);
}

/* ------------------------------------------------------------
   8. MOBILE NAVIGATION DRAWER & COLLAPSIBLE DOCK (POINT 7)
   ------------------------------------------------------------ */

function initMobileNav() {
  const menuBtn = document.getElementById("btn-mobile-menu");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  const closeBtn = document.getElementById("btn-close-mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openDrawer() {
    if (backdrop) backdrop.classList.add("active");
  }

  function closeDrawer() {
    if (backdrop) backdrop.classList.remove("active");
  }

  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeDrawer();
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Dock Collapse Trigger
  const dockTrigger = document.getElementById("dock-collapse-trigger");
  const floatingDock = document.getElementById("floating-dock");
  if (dockTrigger && floatingDock) {
    dockTrigger.addEventListener("click", () => {
      floatingDock.classList.toggle("collapsed");
      const isCol = floatingDock.classList.contains("collapsed");
      dockTrigger.title = isCol ? "Expand Themes Dock" : "Collapse Dock";
    });
  }
}

/* ------------------------------------------------------------
   9. CLEAN PREVIEW MODE WITH EXIT BUTTON (POINT 4)
   ------------------------------------------------------------ */

function initZenPreviewMode() {
  const zenBtn = document.getElementById("dock-btn-zen");
  const exitPillBtn = document.getElementById("btn-exit-zen");

  function toggleZen(forceState) {
    const active = typeof forceState === "boolean" ? forceState : !document.body.classList.contains("zen-mode");
    document.body.classList.toggle("zen-mode", active);
    showToast(active ? "Clean Preview Active (Click Exit button or Esc to return)" : "Standard View Restored ✨");
  }

  if (zenBtn) zenBtn.addEventListener("click", () => toggleZen());
  if (exitPillBtn) exitPillBtn.addEventListener("click", () => toggleZen(false));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("zen-mode")) {
      toggleZen(false);
    }
  });
}

/* ------------------------------------------------------------
   10. MULTI-THEME ENGINE & SWITCHER LOGIC
   ------------------------------------------------------------ */

function applyTheme(themeKey) {
  if (!THEMES[themeKey]) return;
  currentTheme = themeKey;
  localStorage.setItem("aether-theme", themeKey);

  document.documentElement.dataset.theme = themeKey;
  const config = THEMES[themeKey];

  if (config.id && !DEFAULT_THEMES[config.id]) {
    document.documentElement.style.setProperty("--bg-base", config.bg);
    document.documentElement.style.setProperty("--accent-primary", config.accent);
    document.documentElement.style.setProperty("--accent-glow", hexToRgba(config.accent, 0.45));
    document.documentElement.style.setProperty("--liquid-blob-1", config.blob1);
    document.documentElement.style.setProperty("--liquid-blob-2", config.blob2);
  } else {
    document.documentElement.style.removeProperty("--bg-base");
    document.documentElement.style.removeProperty("--liquid-blob-1");
    document.documentElement.style.removeProperty("--liquid-blob-2");
  }

  // Update navbar theme indicator
  const pillLabel = document.getElementById("current-theme-name");
  if (pillLabel) pillLabel.textContent = config.name;

  const studioBadge = document.getElementById("studio-active-badge");
  if (studioBadge) studioBadge.textContent = `Editing: ${config.name}`;

  // Update theme cards active state
  document.querySelectorAll(".theme-card").forEach((card) => {
    const isTarget = card.dataset.themeTarget === themeKey;
    card.classList.toggle("active", isTarget);
    const tag = card.querySelector(".theme-status-tag");
    if (tag) tag.textContent = isTarget ? "ACTIVE" : card.dataset.themeTarget.startsWith("custom_") ? "CUSTOM" : "PRESET";
    const btn = card.querySelector(".theme-select-btn");
    if (btn) btn.textContent = isTarget ? "Active Theme ✓" : "Apply Theme";
  });

  // Update floating dock buttons
  document.querySelectorAll(".dock-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.themeTarget === themeKey);
  });

  // Update Token Inspector Code block
  updateTokenDisplay(themeKey, config);

  // Sync Studio Inputs
  syncStudioWithActiveTheme(config);

  showToast(`Switched to ${config.name} theme ✨`);
}

function updateTokenDisplay(themeKey, config) {
  const tokenBlock = document.getElementById("tokens-code");
  const tokenTitle = document.getElementById("token-theme-name");
  if (tokenTitle) tokenTitle.textContent = config.name;

  if (tokenBlock) {
    tokenBlock.innerHTML = `<code>/* Active Theme: ${config.name} */
[data-theme="${themeKey}"] {
  --bg-base: <span style="color:${config.accent}">${config.bg}</span>;
  --bg-surface: <span style="color:${config.accent}">${config.surface || "rgba(16, 21, 38, 0.55)"}</span>;
  --liquid-blob-1: <span style="color:${config.blob1}">${config.blob1}</span>;
  --liquid-blob-2: <span style="color:${config.blob2}">${config.blob2}</span>;
  --liquid-blob-3: <span style="color:${config.blob3 || config.blob1}">${config.blob3 || config.blob1}</span>;
  --liquid-blob-4: <span style="color:${config.blob4 || config.blob2}">${config.blob4 || config.blob2}</span>;
  --accent-primary: <span style="color:${config.accent}">${config.accent}</span>;
  --accent-glow: <span style="color:${config.accent}">${config.accentGlow || hexToRgba(config.accent, 0.45)}</span>;
  --glass-bg: <span style="color:${config.accent}">${config.glassBg || "rgba(255, 255, 255, 0.06)"}</span>;
  --glass-border: <span style="color:${config.accent}">${config.glassBorder || "rgba(255, 255, 255, 0.14)"}</span>;
  --glass-specular: <span style="color:${config.accent}">${config.glassSpecular || "rgba(255, 255, 255, 0.5)"}</span>;
  --text-primary: <span>${config.textPrimary || "#f8fafc"}</span>;
  --text-secondary: <span>${config.textSecondary || "#94a3b8"}</span>;
}</code>`;
  }
}

function initThemeListeners() {
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.addEventListener("click", () => {
      applyTheme(card.dataset.themeTarget);
    });
  });

  document.querySelectorAll(".dock-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      applyTheme(btn.dataset.themeTarget);
    });
  });
}

/* ------------------------------------------------------------
   11. THEME STUDIO & DEEP CUSTOMIZER (POINT 6)
   ------------------------------------------------------------ */

function syncStudioWithActiveTheme(config) {
  const blob1Color = document.getElementById("studio-blob1-color");
  const blob1Hex = document.getElementById("studio-blob1-hex");
  const blob2Color = document.getElementById("studio-blob2-color");
  const blob2Hex = document.getElementById("studio-blob2-hex");
  const blob3Color = document.getElementById("studio-blob3-color");
  const blob3Hex = document.getElementById("studio-blob3-hex");
  const blob4Color = document.getElementById("studio-blob4-color");
  const blob4Hex = document.getElementById("studio-blob4-hex");

  const bgColor = document.getElementById("studio-bg-color");
  const bgHex = document.getElementById("studio-bg-hex");
  const accentColor = document.getElementById("studio-accent-color");
  const accentHex = document.getElementById("studio-accent-hex");
  const themeNameInput = document.getElementById("studio-theme-name");

  if (blob1Color) blob1Color.value = blob1Hex.value = config.blob1 || "#6366f1";
  if (blob2Color) blob2Color.value = blob2Hex.value = config.blob2 || "#8b5cf6";
  if (blob3Color) blob3Color.value = blob3Hex.value = config.blob3 || "#06b6d4";
  if (blob4Color) blob4Color.value = blob4Hex.value = config.blob4 || "#3b82f6";

  if (bgColor) bgColor.value = bgHex.value = config.bg || "#070913";
  if (accentColor) accentColor.value = accentHex.value = config.accent || "#06b6d4";
  if (themeNameInput) themeNameInput.value = config.name;

  updateStudioSwatches(config.bg, config.blob1, config.blob2, config.accent);
}

function updateStudioSwatches(bg, b1, b2, acc) {
  const sBg = document.getElementById("swatch-disp-bg");
  const sB1 = document.getElementById("swatch-disp-b1");
  const sB2 = document.getElementById("swatch-disp-b2");
  const sAcc = document.getElementById("swatch-disp-acc");

  if (sBg) sBg.style.background = bg;
  if (sB1) sB1.style.background = b1;
  if (sB2) sB2.style.background = b2;
  if (sAcc) sAcc.style.background = acc;
}

function initThemeStudio() {
  // Tabs switching
  const tabBtns = document.querySelectorAll(".studio-tab-btn");
  const panels = document.querySelectorAll(".studio-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(btn.dataset.tab);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  // Tab 1: Fluid Blob Sizing & Colors
  function setupBlobPair(idx, colorId, hexId, sizeId, valId, cssVarSize) {
    const colorEl = document.getElementById(colorId);
    const hexEl = document.getElementById(hexId);
    const sizeEl = document.getElementById(sizeId);
    const valEl = document.getElementById(valId);

    if (colorEl && hexEl) {
      colorEl.addEventListener("input", (e) => {
        hexEl.value = e.target.value;
        document.documentElement.style.setProperty(`--liquid-blob-${idx}`, e.target.value);
        if (THEMES[currentTheme]) THEMES[currentTheme][`blob${idx}`] = e.target.value;
      });
      hexEl.addEventListener("input", (e) => {
        if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
          colorEl.value = e.target.value;
          document.documentElement.style.setProperty(`--liquid-blob-${idx}`, e.target.value);
          if (THEMES[currentTheme]) THEMES[currentTheme][`blob${idx}`] = e.target.value;
        }
      });
    }

    if (sizeEl && valEl) {
      sizeEl.addEventListener("input", (e) => {
        const val = `${e.target.value}px`;
        valEl.textContent = val;
        document.documentElement.style.setProperty(cssVarSize, val);
        if (blobs[idx - 1]) blobs[idx - 1].baseRadius = parseInt(e.target.value);
      });
    }
  }

  setupBlobPair(1, "studio-blob1-color", "studio-blob1-hex", "studio-blob1-size", "val-blob1-size", "--blob1-size");
  setupBlobPair(2, "studio-blob2-color", "studio-blob2-hex", "studio-blob2-size", "val-blob2-size", "--blob2-size");
  setupBlobPair(3, "studio-blob3-color", "studio-blob3-hex", "studio-blob3-size", "val-blob3-size", "--blob3-size");
  setupBlobPair(4, "studio-blob4-color", "studio-blob4-hex", "studio-blob4-size", "val-blob4-size", "--blob4-size");

  // Speed & Drift
  const flowSpeed = document.getElementById("studio-flow-speed");
  const valSpeed = document.getElementById("val-studio-speed");
  if (flowSpeed) {
    flowSpeed.addEventListener("input", (e) => {
      const val = (e.target.value / 10).toFixed(1);
      fluidSpeedMultiplier = parseFloat(val);
      if (valSpeed) valSpeed.textContent = `${val}x`;
    });
  }

  const driftEl = document.getElementById("studio-harmonic-drift");
  const valDrift = document.getElementById("val-studio-drift");
  if (driftEl) {
    driftEl.addEventListener("input", (e) => {
      harmonicDrift = parseInt(e.target.value);
      if (valDrift) valDrift.textContent = `${e.target.value}px`;
    });
  }

  // Tab 2: Glass Physics & Surface
  const glassBlur = document.getElementById("studio-glass-blur");
  const valGlassBlur = document.getElementById("val-studio-blur");
  if (glassBlur) {
    glassBlur.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--glass-blur", `${e.target.value}px`);
      if (valGlassBlur) valGlassBlur.textContent = `${e.target.value}px`;
    });
  }

  const glassOpacity = document.getElementById("studio-glass-opacity");
  const valGlassOpacity = document.getElementById("val-studio-opacity");
  if (glassOpacity) {
    glassOpacity.addEventListener("input", (e) => {
      const mult = (e.target.value / 100).toFixed(2);
      document.documentElement.style.setProperty("--glass-opacity-multiplier", mult);
      if (valGlassOpacity) valGlassOpacity.textContent = `${mult}x`;
    });
  }

  const glassSpecular = document.getElementById("studio-glass-specular");
  const valGlassSpecular = document.getElementById("val-studio-specular");
  if (glassSpecular) {
    glassSpecular.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--specular-opacity", (e.target.value / 100).toString());
      if (valGlassSpecular) valGlassSpecular.textContent = `${e.target.value}%`;
    });
  }

  const glassSaturation = document.getElementById("studio-glass-saturation");
  const valGlassSaturation = document.getElementById("val-studio-saturation");
  if (glassSaturation) {
    glassSaturation.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--glass-saturation", `${e.target.value}%`);
      if (valGlassSaturation) valGlassSaturation.textContent = `${e.target.value}%`;
    });
  }

  const borderWidth = document.getElementById("studio-border-width");
  const valBorderWidth = document.getElementById("val-studio-border");
  if (borderWidth) {
    borderWidth.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--glass-border-width", `${e.target.value}px`);
      if (valBorderWidth) valBorderWidth.textContent = `${e.target.value}px`;
    });
  }

  const cornerRadius = document.getElementById("studio-corner-radius");
  const valCornerRadius = document.getElementById("val-studio-radius");
  if (cornerRadius) {
    cornerRadius.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--glass-corner-radius", `${e.target.value}px`);
      if (valCornerRadius) valCornerRadius.textContent = `${e.target.value}px`;
    });
  }

  const toggleNoise = document.getElementById("studio-toggle-noise");
  const grainOverlay = document.querySelector(".glass-grain-overlay");
  if (toggleNoise && grainOverlay) {
    toggleNoise.addEventListener("change", (e) => {
      grainOverlay.style.display = e.target.checked ? "block" : "none";
    });
  }

  // Tab 3: Typography & Fonts
  const fontFamilySel = document.getElementById("studio-font-family");
  const typeSampleFont = document.getElementById("type-sample-fontname");
  if (fontFamilySel) {
    fontFamilySel.addEventListener("change", (e) => {
      document.documentElement.style.setProperty("--font-family-base", e.target.value);
      if (typeSampleFont) typeSampleFont.textContent = e.target.options[e.target.selectedIndex].text.split(" ")[0];
      showToast(`Font set to ${e.target.options[e.target.selectedIndex].text.split(" ")[0]}`);
    });
  }

  const fontSize = document.getElementById("studio-font-size");
  const valFontSize = document.getElementById("val-studio-fontsize");
  if (fontSize) {
    fontSize.addEventListener("input", (e) => {
      document.documentElement.style.setProperty("--base-font-size", `${e.target.value}px`);
      if (valFontSize) valFontSize.textContent = `${e.target.value}px`;
    });
  }

  const headingScale = document.getElementById("studio-heading-scale");
  const valHeadingScale = document.getElementById("val-studio-headingscale");
  if (headingScale) {
    headingScale.addEventListener("input", (e) => {
      const scale = (e.target.value / 100).toFixed(2);
      document.documentElement.style.setProperty("--heading-font-scale", scale);
      if (valHeadingScale) valHeadingScale.textContent = `${scale}x`;
    });
  }

  // Tab 4: Atmosphere Colors
  const bgColor = document.getElementById("studio-bg-color");
  const bgHex = document.getElementById("studio-bg-hex");
  const accentColor = document.getElementById("studio-accent-color");
  const accentHex = document.getElementById("studio-accent-hex");

  if (bgColor && bgHex) {
    bgColor.addEventListener("input", (e) => {
      bgHex.value = e.target.value;
      document.documentElement.style.setProperty("--bg-base", e.target.value);
    });
    bgHex.addEventListener("input", (e) => {
      if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
        bgColor.value = e.target.value;
        document.documentElement.style.setProperty("--bg-base", e.target.value);
      }
    });
  }

  if (accentColor && accentHex) {
    accentColor.addEventListener("input", (e) => {
      accentHex.value = e.target.value;
      document.documentElement.style.setProperty("--accent-primary", e.target.value);
      document.documentElement.style.setProperty("--accent-glow", hexToRgba(e.target.value, 0.45));
    });
    accentHex.addEventListener("input", (e) => {
      if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
        accentColor.value = e.target.value;
        document.documentElement.style.setProperty("--accent-primary", e.target.value);
        document.documentElement.style.setProperty("--accent-glow", hexToRgba(e.target.value, 0.45));
      }
    });
  }

  // Quick Inspiration Presets
  document.querySelectorAll(".palette-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const p = STUDIO_PRESETS[pill.dataset.preset];
      if (!p) return;

      const nameInput = document.getElementById("studio-theme-name");
      if (nameInput) nameInput.value = p.name;

      document.documentElement.style.setProperty("--bg-base", p.bg);
      document.documentElement.style.setProperty("--accent-primary", p.accent);
      document.documentElement.style.setProperty("--accent-glow", hexToRgba(p.accent, 0.5));
      document.documentElement.style.setProperty("--liquid-blob-1", p.blob1);
      document.documentElement.style.setProperty("--liquid-blob-2", p.blob2);
      document.documentElement.style.setProperty("--liquid-blob-3", p.blob3);
      document.documentElement.style.setProperty("--liquid-blob-4", p.blob4);

      syncStudioWithActiveTheme({
        name: p.name,
        bg: p.bg,
        accent: p.accent,
        blob1: p.blob1,
        blob2: p.blob2,
        blob3: p.blob3,
        blob4: p.blob4
      });

      showToast(`Loaded "${p.name}" inspiration palette! 🎨`);
    });
  });

  // Save Theme Action
  const saveBtn = document.getElementById("btn-studio-save");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("studio-theme-name");
      const bgInput = document.getElementById("studio-bg-hex");
      const accentInput = document.getElementById("studio-accent-hex");
      const b1 = document.getElementById("studio-blob1-hex");
      const b2 = document.getElementById("studio-blob2-hex");
      const b3 = document.getElementById("studio-blob3-hex");
      const b4 = document.getElementById("studio-blob4-hex");

      const themeId = editingCustomThemeId || ("custom_" + Date.now());
      const newTheme = {
        id: themeId,
        name: nameInput ? nameInput.value.trim() : "Custom Theme",
        bg: bgInput ? bgInput.value : "#070913",
        surface: hexToRgba(bgInput ? bgInput.value : "#070913", 0.6),
        blob1: b1 ? b1.value : "#6366f1",
        blob2: b2 ? b2.value : "#8b5cf6",
        blob3: b3 ? b3.value : "#06b6d4",
        blob4: b4 ? b4.value : "#3b82f6",
        accent: accentInput ? accentInput.value : "#06b6d4",
        accentGlow: hexToRgba(accentInput ? accentInput.value : "#06b6d4", 0.5),
        glassBg: "rgba(255, 255, 255, 0.08)",
        glassBorder: hexToRgba(accentInput ? accentInput.value : "#06b6d4", 0.3),
        glassSpecular: "rgba(255, 255, 255, 0.55)",
        textPrimary: "#ffffff",
        textSecondary: "#cbd5e1"
      };

      saveCustomTheme(newTheme);
    });
  }

  const cancelEditBtn = document.getElementById("btn-studio-cancel-edit");
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener("click", cancelEditCustomTheme);
  }

  // Export CSS Tokens Action
  const exportBtn = document.getElementById("btn-studio-export-css");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const codeBlock = document.getElementById("tokens-code");
      if (!codeBlock) return;
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        showToast("CSS Tokens copied to clipboard! 📋");
      });
    });
  }

  // Reset to Defaults Action
  const resetBtn = document.getElementById("btn-studio-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const overrideProps = [
        "--base-font-size",
        "--heading-font-scale",
        "--font-family-base",
        "--glass-blur",
        "--glass-saturation",
        "--glass-border-width",
        "--glass-corner-radius",
        "--specular-opacity",
        "--glass-opacity-multiplier",
        "--blob1-size",
        "--blob2-size",
        "--blob3-size",
        "--blob4-size",
        "--bg-base",
        "--accent-primary",
        "--accent-glow",
        "--liquid-blob-1",
        "--liquid-blob-2",
        "--liquid-blob-3",
        "--liquid-blob-4"
      ];
      overrideProps.forEach((prop) => document.documentElement.style.removeProperty(prop));

      blobs[0].baseRadius = 280;
      blobs[1].baseRadius = 340;
      blobs[2].baseRadius = 260;
      blobs[3].baseRadius = 300;
      fluidSpeedMultiplier = 1.0;
      harmonicDrift = 35;

      applyTheme(currentTheme);
      showToast("Studio parameters restored to theme defaults ✨");
    });
  }
}

/* ------------------------------------------------------------
   12. QUICK SANDBOX CONTROLS
   ------------------------------------------------------------ */

function initSandboxControls() {
  const sliderBlur = document.getElementById("slider-blur");
  const valBlur = document.getElementById("val-blur");

  const sliderOpacity = document.getElementById("slider-opacity");
  const valOpacity = document.getElementById("val-opacity");

  const sliderSpecular = document.getElementById("slider-specular");
  const valSpecular = document.getElementById("val-specular");

  const sliderHue = document.getElementById("slider-hue");
  const valHue = document.getElementById("val-hue");

  if (sliderBlur) {
    sliderBlur.addEventListener("input", (e) => {
      const val = `${e.target.value}px`;
      document.documentElement.style.setProperty("--glass-blur", val);
      if (valBlur) valBlur.textContent = val;
    });
  }

  if (sliderOpacity) {
    sliderOpacity.addEventListener("input", (e) => {
      const pct = e.target.value;
      const multiplier = (pct / 100).toFixed(2);
      document.documentElement.style.setProperty("--glass-opacity-multiplier", multiplier);
      if (valOpacity) valOpacity.textContent = `${multiplier}x (${pct < 70 ? "Sheer" : pct > 160 ? "Dense" : "Balanced"})`;
    });
  }

  if (sliderSpecular) {
    sliderSpecular.addEventListener("input", (e) => {
      const pct = e.target.value;
      document.documentElement.style.setProperty("--specular-opacity", (pct / 100).toString());
      if (valSpecular) valSpecular.textContent = `${pct}%`;
    });
  }

  if (sliderHue) {
    sliderHue.addEventListener("input", (e) => {
      const hue = e.target.value;
      const color = `hsl(${hue}, 88%, 56%)`;
      const glow = `hsla(${hue}, 88%, 56%, 0.45)`;

      document.documentElement.style.setProperty("--accent-primary", color);
      document.documentElement.style.setProperty("--accent-glow", glow);
      if (valHue) valHue.textContent = `Custom (${hue}°)`;
    });
  }

  const btnReset = document.getElementById("btn-reset-sandbox");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      const overrideProps = [
        "--glass-blur",
        "--glass-opacity-multiplier",
        "--specular-opacity",
        "--accent-primary",
        "--accent-glow"
      ];
      overrideProps.forEach((prop) => document.documentElement.style.removeProperty(prop));

      if (sliderBlur) sliderBlur.value = 22;
      if (sliderOpacity) sliderOpacity.value = 100;
      if (sliderSpecular) sliderSpecular.value = 65;
      if (sliderHue) sliderHue.value = 260;

      if (valBlur) valBlur.textContent = "22px";
      if (valOpacity) valOpacity.textContent = "1.0x (Optimal)";
      if (valSpecular) valSpecular.textContent = "65%";
      if (valHue) valHue.textContent = "Theme Default";

      applyTheme(currentTheme);
      showToast("Sandbox parameters reset to default ✨");
    });
  }

  const btnCopyCss = document.getElementById("btn-copy-css");
  if (btnCopyCss) {
    btnCopyCss.addEventListener("click", () => {
      const blurVal = sliderBlur ? sliderBlur.value : 22;
      const cssSnippet = `.liquid-glass-element {
  background: var(--glass-bg);
  backdrop-filter: blur(${blurVal}px) saturate(180%);
  -webkit-backdrop-filter: blur(${blurVal}px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5),
              inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.45);
}`;
      navigator.clipboard.writeText(cssSnippet).then(() => {
        showToast("Copied Glass CSS snippet to clipboard! 📋");
      });
    });
  }
}

/* ------------------------------------------------------------
   13. LANDING PAGE COMPONENTS (PRICING, MODAL, CONTACT)
   ------------------------------------------------------------ */

function initLandingComponents() {
  // Pricing Monthly/Annual toggle
  const pricingToggle = document.getElementById("pricing-cycle-toggle");
  const labelMonthly = document.getElementById("label-monthly");
  const labelAnnual = document.getElementById("label-annual");
  const amountEls = document.querySelectorAll(".tier-amount");

  if (pricingToggle) {
    pricingToggle.addEventListener("change", (e) => {
      const isAnnual = e.target.checked;
      if (labelMonthly) labelMonthly.classList.toggle("active", !isAnnual);
      if (labelAnnual) labelAnnual.classList.toggle("active", isAnnual);

      amountEls.forEach((el) => {
        const val = isAnnual ? el.dataset.annual : el.dataset.monthly;
        el.textContent = val;
      });

      showToast(`Switched pricing to ${isAnnual ? "Annual (-20% discount)" : "Monthly"}`);
    });
  }

  // Demo Modal
  const modal = document.getElementById("modal-glass-demo");
  const openBtn1 = document.getElementById("btn-trigger-modal-demo");
  const openBtn2 = document.getElementById("btn-trigger-modal-demo-2");
  const closeBtn = document.getElementById("btn-close-demo-modal");
  const dismissBtn = document.getElementById("btn-dismiss-demo-modal");
  const confirmBtn = document.getElementById("btn-confirm-demo-modal");

  function openDemoModal() { if (modal) modal.classList.add("active"); }
  function closeDemoModal() { if (modal) modal.classList.remove("active"); }

  [openBtn1, openBtn2].forEach((btn) => { if (btn) btn.addEventListener("click", openDemoModal); });
  [closeBtn, dismissBtn, confirmBtn].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        closeDemoModal();
        if (btn === confirmBtn) showToast("Action confirmed in liquid glass! ✨");
      });
    }
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeDemoModal();
    });
  }

  // Audio Player
  const playBtn = document.getElementById("audio-play-toggle");
  const playIcon = document.getElementById("play-icon");
  const eqBars = document.querySelectorAll(".eq-bar");
  let isPlaying = true;

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      if (playIcon) playIcon.textContent = isPlaying ? "❚❚" : "▶";
      eqBars.forEach((bar) => {
        bar.style.animationPlayState = isPlaying ? "running" : "paused";
      });
      showToast(`Audio visualizer ${isPlaying ? "playing" : "paused"}`);
    });
  }

  // Segmented Controls
  document.querySelectorAll(".liquid-segmented-control").forEach((control) => {
    const buttons = control.querySelectorAll(".seg-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        showToast(`Selected "${btn.textContent}"`);
      });
    });
  });

  // Contact Form
  const contactForm = document.getElementById("demo-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Message sent successfully! ✨");
      contactForm.reset();
    });
  }

  // Copy Tokens
  const copyBtn = document.getElementById("btn-copy-tokens");
  const tokenText = document.getElementById("copy-tokens-text");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const codeBlock = document.getElementById("tokens-code");
      if (!codeBlock) return;
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        if (tokenText) tokenText.textContent = "Copied! ✓";
        showToast("Theme variables schema copied! 📋");
        setTimeout(() => { if (tokenText) tokenText.textContent = "Copy Token Code"; }, 2200);
      });
    });
  }

  const demoToastBtn = document.getElementById("btn-demo-toast");
  if (demoToastBtn) {
    demoToastBtn.addEventListener("click", () => {
      showToast("✨ Tactile Liquid Glass Toast! Swipe right or click ✕ to dismiss.");
    });
  }
}

/* ------------------------------------------------------------
   14. BOTTOM-RIGHT SWIPEABLE & DISMISSIBLE TOASTS (POINT 3)
   ------------------------------------------------------------ */

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "glass-toast";
  toast.innerHTML = `
    <div class="toast-content-wrap">
      <span class="toast-dot" style="width:8px; height:8px; border-radius:50%; background:var(--accent-primary); box-shadow:0 0 8px var(--accent-primary); flex-shrink:0;"></span>
      <span>${message}</span>
    </div>
    <button class="toast-close-btn" aria-label="Dismiss toast">✕</button>
  `;

  // Cross button click
  const closeBtn = toast.querySelector(".toast-close-btn");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dismissToastWithAnimation(toast);
  });

  // Swipe / Drag to right gesture
  let startX = 0;
  let currentDeltaX = 0;
  let isDragging = false;

  function onDragStart(clientX) {
    startX = clientX;
    isDragging = true;
    toast.style.transition = "none";
  }

  function onDragMove(clientX) {
    if (!isDragging) return;
    currentDeltaX = clientX - startX;
    if (currentDeltaX > 0) {
      toast.style.transform = `translateX(${currentDeltaX}px)`;
      toast.style.opacity = Math.max(0, 1 - currentDeltaX / 160).toString();
    }
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    toast.style.transition = "transform 0.25s ease, opacity 0.25s ease";

    if (currentDeltaX > 50) {
      dismissToastWithAnimation(toast);
    } else {
      toast.style.transform = "translateX(0)";
      toast.style.opacity = "1";
    }
  }

  // Mouse drag
  toast.addEventListener("mousedown", (e) => {
    if (e.target === closeBtn) return;
    onDragStart(e.clientX);
    const onMouseMove = (ev) => onDragMove(ev.clientX);
    const onMouseUp = () => {
      onDragEnd();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // Touch drag
  toast.addEventListener("touchstart", (e) => {
    if (e.target === closeBtn) return;
    onDragStart(e.touches[0].clientX);
  }, { passive: true });

  toast.addEventListener("touchmove", (e) => {
    onDragMove(e.touches[0].clientX);
  }, { passive: true });

  toast.addEventListener("touchend", onDragEnd);

  container.appendChild(toast);

  // Auto-dismiss after 4.5s
  const autoTimeout = setTimeout(() => {
    dismissToastWithAnimation(toast);
  }, 4500);

  function dismissToastWithAnimation(targetToast) {
    clearTimeout(autoTimeout);
    targetToast.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease";
    targetToast.style.transform = "translateX(120%)";
    targetToast.style.opacity = "0";
    setTimeout(() => { targetToast.remove(); }, 320);
  }
}

/* ------------------------------------------------------------
   14. ANALYTICS DASHBOARD CHART ENGINE
   ------------------------------------------------------------ */

function initAnalyticsDashboard() {
  const rangeBtns = document.querySelectorAll("[data-chart-range]");
  const chartArea = document.querySelector(".dash-chart-container .chart-area");
  const chartLine = document.querySelector(".dash-chart-container .chart-line");
  const chartPoints = document.querySelectorAll(".dash-chart-container .chart-point");
  const tooltip = document.getElementById("chart-tooltip");
  const tooltipDate = document.querySelector(".chart-tooltip .tooltip-date");
  const tooltipVal = document.querySelector(".chart-tooltip .tooltip-val");
  const metricBoxes = document.querySelectorAll(".dash-metrics-row .dash-metric-box");

  const chartData = {
    "7d": {
      line: "M 0,190 Q 120,70 240,110 T 480,50 T 720,130 L 800,80",
      area: "M 0,190 Q 120,70 240,110 T 480,50 T 720,130 L 800,80 L 800,240 L 0,240 Z",
      points: [
        { cx: 240, cy: 110, date: "May 10", val: "$28,400 • 99.1%" },
        { cx: 480, cy: 50, date: "May 12", val: "$42,100 • 99.8%" },
        { cx: 720, cy: 130, date: "May 14", val: "$38,420 • 99.4%" }
      ],
      vol: "$148,820",
      volSub: "↑ +24.6% this cycle",
      coh: "99.84%",
      shards: "14,290"
    },
    "30d": {
      line: "M 0,160 Q 160,110 300,60 T 540,100 T 720,40 L 800,60",
      area: "M 0,160 Q 160,110 300,60 T 540,100 T 720,40 L 800,60 L 800,240 L 0,240 Z",
      points: [
        { cx: 300, cy: 60, date: "Week 2", val: "$182,300 • 99.5%" },
        { cx: 540, cy: 100, date: "Week 3", val: "$214,800 • 99.8%" },
        { cx: 720, cy: 40, date: "Week 4", val: "$245,600 • 99.9%" }
      ],
      vol: "$612,450",
      volSub: "↑ +41.2% this month",
      coh: "99.92%",
      shards: "48,110"
    },
    "1y": {
      line: "M 0,210 Q 140,180 280,140 T 500,80 T 700,30 L 800,20",
      area: "M 0,210 Q 140,180 280,140 T 500,80 T 700,30 L 800,20 L 800,240 L 0,240 Z",
      points: [
        { cx: 280, cy: 140, date: "Q2 2026", val: "$980,000 • 99.6%" },
        { cx: 500, cy: 80, date: "Q3 2026", val: "$1,450,000 • 99.8%" },
        { cx: 700, cy: 30, date: "Q4 Peak", val: "$1,850,000 • 99.9%" }
      ],
      vol: "$4,280,000",
      volSub: "↑ +184% YoY surge",
      coh: "99.98%",
      shards: "128,400"
    }
  };

  rangeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const range = btn.dataset.chartRange;
      if (!chartData[range]) return;

      rangeBtns.forEach((b) => b.classList.toggle("active", b === btn));
      const d = chartData[range];

      if (chartLine) chartLine.setAttribute("d", d.line);
      if (chartArea) chartArea.setAttribute("d", d.area);

      d.points.forEach((pt, idx) => {
        if (chartPoints[idx]) {
          chartPoints[idx].setAttribute("cx", pt.cx);
          chartPoints[idx].setAttribute("cy", pt.cy);
        }
      });

      if (metricBoxes[0]) {
        const val = metricBoxes[0].querySelector(".metric-val");
        const sub = metricBoxes[0].querySelector(".metric-sub");
        if (val) val.textContent = d.vol;
        if (sub) sub.textContent = d.volSub;
      }
      if (metricBoxes[1]) {
        const val = metricBoxes[1].querySelector(".metric-val");
        if (val) val.textContent = d.coh;
      }
      if (metricBoxes[2]) {
        const val = metricBoxes[2].querySelector(".metric-val");
        if (val) val.textContent = d.shards;
      }

      if (tooltipDate) tooltipDate.textContent = d.points[2].date;
      if (tooltipVal) tooltipVal.textContent = d.points[2].val;

      showToast(`Telemetry range updated to ${btn.textContent} 📊`);
    });
  });

  chartPoints.forEach((point, idx) => {
    point.addEventListener("mouseenter", () => {
      const activeRange = document.querySelector(".mini-seg .seg-btn.active")?.dataset.chartRange || "7d";
      const info = chartData[activeRange]?.points[idx];
      if (info && tooltipDate && tooltipVal) {
        tooltipDate.textContent = info.date;
        tooltipVal.textContent = info.val;
      }
    });
  });
}

/* ------------------------------------------------------------
   INITIALIZATION
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  initSpecialEffects();
  initCardSpecularAndTilt();
  initScrollSpy();
  initModeToggle();
  initMobileNav();
  initZenPreviewMode();
  initThemeListeners();
  initThemeStudio();
  initSandboxControls();
  initLandingComponents();
  initAnalyticsDashboard();

  loadCustomThemesFromStorage();
  updateTotalThemesCounter();
  applyTheme(currentTheme);

  const params = new URLSearchParams(window.location.search);
  const scrollTarget = params.get("scroll") || (window.location.hash ? window.location.hash.substring(1) : null);
  if (scrollTarget) {
    const el = document.getElementById(scrollTarget);
    if (el) el.scrollIntoView({ behavior: "instant" });
  }
});

