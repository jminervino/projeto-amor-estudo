/**
 * Sons leves via Web Audio API — funciona em navegadores desktop e mobile
 * após qualquer toque/clique (resume do AudioContext). Preferência em localStorage.
 */
(function (w) {
  const STORAGE_KEY = "carinestudy_sound_v1";
  const state = { enabled: true, ctx: null };

  function loadPref() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const j = JSON.parse(raw);
      if (typeof j.enabled === "boolean") state.enabled = j.enabled;
    } catch (_) {}
  }

  function savePref() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ enabled: state.enabled }));
    } catch (_) {}
  }

  function getContext() {
    if (state.ctx) return state.ctx;
    const AC = w.AudioContext || w.webkitAudioContext;
    if (!AC) return null;
    state.ctx = new AC();
    return state.ctx;
  }

  function scheduleTone(ctx, freq, tStart, duration, volume, type) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, tStart);
    g.gain.setValueAtTime(0.0001, tStart);
    g.gain.exponentialRampToValueAtTime(Math.min(volume, 0.2), tStart + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, tStart + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(tStart);
    osc.stop(tStart + duration + 0.04);
  }

  function run(schedule) {
    if (!state.enabled) return;
    const ctx = getContext();
    if (!ctx) return;
    const resume = ctx.resume();
    const go = () => {
      try {
        schedule(ctx);
      } catch (_) {}
    };
    if (resume && typeof resume.then === "function") resume.then(go).catch(go);
    else go();
  }

  function updateToggleUI() {
    const btn = document.getElementById("sound-toggle");
    if (!btn) return;
    btn.setAttribute("aria-pressed", state.enabled ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      state.enabled ? "Desativar sons de estudo" : "Ativar sons de estudo"
    );
    btn.classList.toggle("sound-fab--off", !state.enabled);
    const icon = btn.querySelector(".sound-fab-icon");
    if (icon) icon.textContent = state.enabled ? "🔊" : "🔇";
  }

  const api = {
    tap() {
      run((ctx) => {
        const t = ctx.currentTime + 0.01;
        scheduleTone(ctx, 720, t, 0.04, 0.07);
      });
    },

    flip() {
      run((ctx) => {
        const t = ctx.currentTime + 0.01;
        scheduleTone(ctx, 340, t, 0.055, 0.055);
        scheduleTone(ctx, 520, t + 0.045, 0.065, 0.065);
      });
    },

    success() {
      run((ctx) => {
        const t = ctx.currentTime + 0.012;
        scheduleTone(ctx, 523.25, t, 0.1, 0.095);
        scheduleTone(ctx, 659.25, t + 0.09, 0.11, 0.1);
        scheduleTone(ctx, 783.99, t + 0.2, 0.13, 0.09);
      });
    },

    error() {
      run((ctx) => {
        const t = ctx.currentTime + 0.012;
        scheduleTone(ctx, 185, t, 0.12, 0.075, "triangle");
        scheduleTone(ctx, 130, t + 0.09, 0.14, 0.065, "triangle");
      });
    },

    partial() {
      run((ctx) => {
        const t = ctx.currentTime + 0.012;
        scheduleTone(ctx, 392, t, 0.09, 0.075);
        scheduleTone(ctx, 349.23, t + 0.08, 0.09, 0.065);
      });
    },

    complete() {
      run((ctx) => {
        const t = ctx.currentTime + 0.018;
        const seq = [261.63, 329.63, 392, 523.25];
        let off = 0;
        seq.forEach((f) => {
          scheduleTone(ctx, f, t + off, 0.11, 0.085);
          off += 0.095;
        });
      });
    },

    setEnabled(on) {
      state.enabled = !!on;
      savePref();
      updateToggleUI();
    },

    getEnabled() {
      return state.enabled;
    },

    init() {
      loadPref();
      updateToggleUI();
      const btn = document.getElementById("sound-toggle");
      if (btn) {
        btn.addEventListener("click", () => {
          api.setEnabled(!state.enabled);
          if (state.enabled) api.tap();
        });
      }
    },
  };

  w.CarineStudyAudio = api;
})(typeof window !== "undefined" ? window : this);
