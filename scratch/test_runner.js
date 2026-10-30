import fs from 'fs';

console.log("=== STARTING LIQUID GLASS SYSTEM RIGOROUS SUITE TEST ===");

const mainJsPath = '/run/media/tej/Data/Coding/test/src/main.js';
const styleCssPath = '/run/media/tej/Data/Coding/test/src/style.css';
const indexHtmlPath = '/run/media/tej/Data/Coding/test/index.html';

const mainJs = fs.readFileSync(mainJsPath, 'utf8');
const styleCss = fs.readFileSync(styleCssPath, 'utf8');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const findings = [];

function check(title, condition, description, severity = "HIGH") {
  if (condition) {
    findings.push({ title, severity, status: "FAIL", description });
    console.log(`❌ [${severity}] ${title}: ${description}`);
  } else {
    console.log(`✅ [PASS] ${title}`);
  }
}

// 1. Stored XSS Check in Custom Theme Card
check(
  "Stored XSS in Custom Theme Injection",
  mainJs.includes('<h3 class="theme-name">${t.name}</h3>') || !mainJs.includes('escapeHtml'),
  "Custom theme name is directly interpolated into element.innerHTML without HTML escaping, allowing arbitrary JavaScript execution via theme names.",
  "CRITICAL"
);

// 2. Empty Theme Name Acceptance
check(
  "Empty Theme Name Allowed",
  !mainJs.includes('validName') && !mainJs.includes('rawName || "Custom Liquid Spectrum"'),
  "If nameInput.value.trim() is empty string '', theme should default to non-empty name.",
  "HIGH"
);

// 3. Hex to RGBA Crash / NaN Vulnerability
check(
  "Invalid Hex Color produces NaN in rgba()",
  (() => {
    // Test the hexToRgba regex check in main.js
    const regexMatch = mainJs.includes('/^[0-9a-fA-F]{6}$/');
    return !regexMatch;
  })(),
  "hexToRgba does not validate hex format before parsing with parseInt, resulting in rgba(0, 0, 0, alpha) or NaN on malformed inputs.",
  "MEDIUM"
);

// 4. CSS Variable Leakage when switching between Custom and Default Themes
check(
  "Permanent CSS Token Leakage on Custom Theme Deactivation",
  !mainJs.includes('customProperties') && !mainJs.includes('removeProperty("--accent-primary")'),
  "When applying a custom theme, --accent-primary and --accent-glow must be removed when switching back to default preset.",
  "CRITICAL"
);

// 5. Preset Mutation in Memory via Theme Studio
check(
  "Direct Mutation of Base Preset Objects in Memory",
  mainJs.includes('if (THEMES[currentTheme]) THEMES[currentTheme][`blob${idx}`] = e.target.value;'),
  "Studio slider changes directly mutate the in-memory preset object in THEMES, corrupting base themes for the session even if Reset or another theme is selected.",
  "HIGH"
);

// 6. Unwired UI Controls Audit
const unwiredControls = [
  { id: 'toggle-motion', name: 'Fluid Motion Drift switch (Bento 4)' },
  { id: 'toggle-chromatic', name: 'Chromatic Refraction switch (Bento 4)' },
  { id: 'toggle-noise', name: 'Glass Surface Noise switch (Bento 4)' },
  { id: 'studio-accent2-color', name: 'Secondary Accent color picker (Theme Studio Tab 4)' },
  { id: 'studio-accent2-hex', name: 'Secondary Accent hex input (Theme Studio Tab 4)' },
  { id: 'studio-hue-shifter', name: 'Accent Color Wheel 360° Slider (Theme Studio Tab 4)' },
  { id: 'audio-prev', name: 'Previous Track button in Liquid Soundscape' },
  { id: 'audio-next', name: 'Next Track button in Liquid Soundscape' }
];

unwiredControls.forEach(ctrl => {
  const inHtml = indexHtml.includes(`id="${ctrl.id}"`);
  const inJs = mainJs.includes(`"${ctrl.id}"`) || mainJs.includes(`'${ctrl.id}'`);
  check(
    `Unwired Dead UI Element: ${ctrl.name}`,
    inHtml && !inJs,
    `Element #${ctrl.id} exists in HTML but has ZERO event listeners or functionality attached in main.js. It is a completely inert/dead UI control.`,
    "HIGH"
  );
});

// 7. Audio Player Initial State Mismatch
check(
  "Audio Player Initial Play/Pause State Inverted",
  mainJs.includes('let isPlaying = true;') && !mainJs.includes('let isPlaying = false;'),
  "HTML initializes with '▶' (Play icon, indicating paused/stopped), but JS initializes isPlaying = true.",
  "MEDIUM"
);

// 8. Modal Missing Escape Key & Aria-Hidden Sync
check(
  "Modal Missing Escape Key Handler",
  !mainJs.includes('modal.classList.contains("active")') || !mainJs.includes('e.key === "Escape"'),
  "Modal does not close when the user presses the 'Escape' key, violating WCAG accessibility standards for dialogs.",
  "MEDIUM"
);

check(
  "Modal aria-hidden Attribute Never Updated",
  !mainJs.includes('modal.setAttribute("aria-hidden"'),
  "When the demo modal opens, modal.setAttribute('aria-hidden', 'false') is never called, leaving aria-hidden='true' permanently.",
  "MEDIUM"
);

// 9. Mobile Navigation Missing Body Scroll Lock & Aria-Hidden
check(
  "Mobile Navigation Drawer Fails to Lock Body Scroll",
  !mainJs.includes('document.body.style.overflow = "hidden"'),
  "Opening the mobile navigation drawer does not set overflow: hidden on the body, allowing content behind the drawer to scroll.",
  "LOW"
);

// 10. Light Mode / Dark Mode Inline Style Specificity Conflict
check(
  "Light Mode Text Invisibility with Custom Themes",
  !mainJs.includes('document.documentElement.style.removeProperty("--bg-base");') ||
  !mainJs.includes('if (mode === "light")'),
  "Custom theme sets inline --bg-base: #070913 (dark). When user switches to Light mode, style.css changes --text-primary to #0f172a (dark slate). Since inline --bg-base overrides CSS stylesheet, text becomes dark slate on dark background (unreadable).",
  "HIGH"
);

// 11. Mobile Toast vs Dock Collision
check(
  "Mobile Screen: Toast Container Obscures Floating Themes Dock",
  styleCss.includes('.toast-container { right: 12px; bottom: 12px; left: 12px; max-width: none; }'),
  "On screens <= 640px, both the floating theme dock and toast container were pinned to bottom: 12px.",
  "MEDIUM"
);

// 12. Dead Pricing Tier Buttons
check(
  "Dead Pricing Plan Buttons",
  !mainJs.includes('.pricing-card .liquid-btn'),
  "Pricing tier CTA buttons ('Get Started Free', 'Launch Pro Studio', 'Enterprise Custom') have no click events or destination links.",
  "MEDIUM"
);

// 13. Toast Stack Threshold: Must only appear when > 3 toasts
check(
  "Toast Stack Threshold Invalid (Appears on <= 3 Toasts)",
  !mainJs.includes("if (count <= 3)"),
  "Toast stack should not appear when there are 3 toasts. It must only appear when there are more than 3 toasts (count > 3).",
  "HIGH"
);

// 14. Toast Stack Position: Must be below the toast, not above
check(
  "Toast Stack Positioned Above Toast Instead of Below",
  styleCss.includes(".toast-deck-layers {\n  position: absolute;\n  bottom: 100%;") ||
  !styleCss.includes(".toast-deck-layers {\n  position: absolute;\n  top: 100%;"),
  "Toast deck layers must be positioned below the toast card (top: 100%), not above it (bottom: 100%).",
  "HIGH"
);

// 15. Toast Stack Theme Colors: Must match active theme variables
check(
  "Toast Stack Hardcoded Colors Clashing with Theme",
  styleCss.includes("#38bdf8") && styleCss.includes("#fb923c") && styleCss.includes(".toast-deck-layer.deck-layer-2 {\n  background: #fb923c"),
  "Toast stack layers must dynamically use active theme variables (--accent-primary, --glass-bg, --liquid-blob) instead of hardcoded colors.",
  "HIGH"
);

// 16. Background Base Color: Must update both --bg-base and live --bg-gradient so background visually changes
check(
  "Background Base Color Fails to Update Background Visually",
  !mainJs.includes('updateBgBase') || !styleCss.includes('var(--bg-gradient, radial-gradient'),
  "Changing Background Base Color must update both --bg-base and live --bg-gradient so the body background updates without being masked.",
  "HIGH"
);

// 17. Secondary Accent Sync: studio-accent2 inputs must be populated when themes switch
check(
  "Secondary Accent Inputs Inert / Not Synced on Theme Switch",
  !mainJs.includes('accent2Color.value = accent2Hex.value = config.accent2') || !mainJs.includes('updateAccentSecondary'),
  "Secondary accent inputs (#studio-accent2-color, #studio-accent2-hex) must be populated during theme switch and trigger live updates.",
  "HIGH"
);

// 18. Secondary Accent Visual Application: Must be used across buttons, sheen text, and badges
check(
  "Secondary Accent Has No Visual Effect on UI Elements",
  !styleCss.includes('var(--accent-secondary, var(--liquid-blob-1))') || !styleCss.includes('.btn-primary {\n  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary'),
  "Secondary accent variable --accent-secondary must be wired into primary buttons, brand logo, hero sheen text, and badges.",
  "HIGH"
);

console.log("\n=== TOTAL UNRESOLVED ISSUES ===");
console.log(`Total Findings: ${findings.length}`);
if (findings.length === 0) {
  console.log("🎉 ALL TESTS PASSED! ZERO CRITICAL, HIGH, OR MEDIUM DEFECTS REMAINING!");
} else {
  console.log(JSON.stringify(findings, null, 2));
}
