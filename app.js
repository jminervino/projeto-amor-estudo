/**
 * CarineStudy — lógica do app (multi-matéria, localStorage, modos de estudo)
 * Depende de: MATERIAS em data.js
 */

const STORAGE_KEY = "carinestudy_clinica_v1";
const LEGACY_STORAGE_KEY = "felixstudy_progress";

const MOTIVO_HIT = [
  "Arrasou, Carine! 💜",
  "Vet aprovada! 💉",
  "Isso aí! 🏆",
  "Mandou bem! ⭐",
  "Conteúdo na veia! 📖",
];

const MOTIVO_MISS = [
  "Quase lá! Revisa esse 📚",
  "Anota — vai cair na prova! ✏️",
  "Respira e lê de novo 🌙",
  "Foco no tratamento — você consegue 💜",
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function defaultProgress() {
  return {
    totalRespondidas: 0,
    totalAcertos: 0,
    streak: 0,
    bestStreak: 0,
    weakPoints: {},
  };
}

function materiaIdsSorted() {
  const M = typeof MATERIAS !== "undefined" ? MATERIAS : {};
  return Object.keys(M).sort((a, b) => {
    const oa = M[a].ordem ?? 999;
    const ob = M[b].ordem ?? 999;
    if (oa !== ob) return oa - ob;
    return M[a].nome.localeCompare(M[b].nome, "pt-BR");
  });
}

/** Primeira matéria em que dá para estudar (ignora arquivo / em breve). */
function firstPlayableMateriaId() {
  const M = typeof MATERIAS !== "undefined" ? MATERIAS : {};
  const ids = materiaIdsSorted();
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const m = M[id];
    if (!m) continue;
    if (m.apenasMemoria || m.emBreve) continue;
    return id;
  }
  return ids[0] || null;
}

function loadRoot() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const oldRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (oldRaw) {
        const old = JSON.parse(oldRaw);
        if (old.materias && old.materias.clinicaPeqAnimais) {
          return {
            materias: { clinicaPeqAnimais: { ...defaultProgress(), ...old.materias.clinicaPeqAnimais } },
            lastMateria: "clinicaPeqAnimais",
          };
        }
      }
      return { materias: {}, lastMateria: firstPlayableMateriaId() };
    }
    const parsed = JSON.parse(raw);
    if (!parsed.materias) {
      const id = firstPlayableMateriaId();
      return { materias: id ? { [id]: { ...defaultProgress(), ...parsed } } : {}, lastMateria: id };
    }
    return parsed;
  } catch {
    return { materias: {}, lastMateria: firstPlayableMateriaId() };
  }
}

function saveRoot(root) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(root));
}

const state = {
  root: loadRoot(),
  materiaId: null,
  weakOnly: false,
  view: "subjects",
  session: null,
};

function getMateria() {
  return state.materiaId ? MATERIAS[state.materiaId] : null;
}

function getProgress() {
  const id = state.materiaId;
  if (!id) return defaultProgress();
  if (!state.root.materias[id]) state.root.materias[id] = defaultProgress();
  return state.root.materias[id];
}

function saveProgress() {
  if (state.materiaId) {
    state.root.lastMateria = state.materiaId;
  }
  saveRoot(state.root);
}

function sumWeakErrors(wp) {
  if (!wp || typeof wp !== "object") return 0;
  return Object.values(wp).reduce((acc, v) => acc + (v.erros || 0), 0);
}

function weakTopicKeys() {
  const p = getProgress();
  return Object.keys(p.weakPoints || {}).filter((k) => (p.weakPoints[k].erros || 0) > 0);
}

function filterByWeak(items) {
  const keys = new Set(weakTopicKeys());
  if (keys.size === 0) return [];
  return items.filter((it) => keys.has(it.topico));
}

function registerWeakTopic(topic) {
  if (!topic || !state.materiaId) return;
  const p = getProgress();
  const cur = p.weakPoints[topic] || { erros: 0, ultimoErro: null };
  cur.erros = (cur.erros || 0) + 1;
  cur.ultimoErro = new Date().toISOString();
  p.weakPoints[topic] = cur;
  saveProgress();
}

function reduceWeakTopic(topic) {
  if (!topic || !state.materiaId) return;
  const p = getProgress();
  const cur = p.weakPoints[topic];
  if (!cur || cur.erros <= 0) return;
  cur.erros = cur.erros - 1;
  if (cur.erros <= 0) delete p.weakPoints[topic];
  else p.weakPoints[topic] = cur;
  saveProgress();
}

function recordAnswer(correct) {
  const p = getProgress();
  p.totalRespondidas = (p.totalRespondidas || 0) + 1;
  if (correct) {
    p.totalAcertos = (p.totalAcertos || 0) + 1;
    p.streak = (p.streak || 0) + 1;
    if (p.streak > (p.bestStreak || 0)) p.bestStreak = p.streak;
  } else {
    p.streak = 0;
  }
  saveProgress();
}

function applyMateriaTheme(m) {
  if (!m) return;
  document.documentElement.style.setProperty("--primary", m.corPrimaria || "#7c3aed");
  document.documentElement.style.setProperty("--accent", m.corSecundaria || "#f59e0b");
  const hi = document.getElementById("header-icon");
  const ht = document.getElementById("header-title");
  if (hi) hi.textContent = m.icone || "📚";
  if (ht) ht.textContent = "CarineStudy";
}

function showView(name) {
  state.view = name;
  document.querySelectorAll(".view").forEach((el) => {
    el.classList.toggle("view-active", el.id === `view-${name}`);
  });
  const header = document.getElementById("app-header");
  if (header) header.hidden = name === "subjects";
  const back = document.getElementById("btn-global-back");
  if (back) back.hidden = name === "subjects";
}

function renderPdfChecklist() {
  const m = getMateria();
  const ul = document.getElementById("pdf-checklist");
  if (!ul || !m || !m.topicos) return;
  ul.innerHTML = "";
  const entries = Object.entries(m.topicos).sort((a, b) => a[1].localeCompare(b[1], "pt-BR"));
  entries.forEach(([key, label]) => {
    const li = document.createElement("li");
    li.textContent = label;
    li.dataset.topico = key;
    ul.appendChild(li);
  });
}

function renderSubjects() {
  const grid = document.getElementById("subject-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const ids = materiaIdsSorted();

  ids.forEach((id) => {
    const m = MATERIAS[id];

    if (m.apenasMemoria) {
      const arq = document.createElement("article");
      arq.className = "subject-card subject-card--memory-locked fade-in";
      arq.setAttribute("role", "group");
      arq.setAttribute("aria-label", `${m.nome} — arquivo, sem estudo no app`);
      arq.innerHTML = `
        <div class="subject-card-lock-badge" aria-hidden="true">
          <span class="subject-card-lock-icon">🔒</span>
          <span class="subject-card-lock-text">Arquivo</span>
        </div>
        <div class="subject-card-top">
          <span class="subject-card-icon-wrap" aria-hidden="true">
            <span class="subject-card-icon subject-card-icon--ghost">${m.icone}</span>
            <span class="subject-card-mini-lock">🔒</span>
          </span>
          <span class="subject-card-name">${escapeHtml(m.nome)}</span>
        </div>
        <span class="subject-card-status subject-card-status--done">Prova concluída — só lembrança ✓</span>
        <p class="subject-card-desc">${escapeHtml(m.descricao)}</p>
        <p class="subject-card-static-hint">Não é clicável: é só para você ver o que já passou 💜</p>
      `;
      grid.appendChild(arq);
      return;
    }

    if (m.emBreve) {
      const fut = document.createElement("article");
      fut.className = "subject-card subject-card--futuro fade-in";
      fut.setAttribute("role", "group");
      fut.setAttribute("aria-label", `${m.nome} — em breve`);
      fut.innerHTML = `
        <div class="subject-card-futuro-badge" aria-hidden="true">
          <span>🔜</span>
          <span>Em breve</span>
        </div>
        <div class="subject-card-top">
          <span class="subject-card-icon subject-card-icon--futuro">${m.icone}</span>
          <span class="subject-card-name">${escapeHtml(m.nome)}</span>
        </div>
        <p class="subject-card-desc">${escapeHtml(m.descricao)}</p>
        <p class="subject-card-static-hint">Sem pagamento: só entra conteúdo quando for a vez no calendário.</p>
      `;
      grid.appendChild(fut);
      return;
    }

    const btn = document.createElement("button");
    btn.type = "button";
    const classes = ["subject-card", "fade-in"];
    if (m.provaAtual) classes.push("subject-card--atual");
    btn.className = classes.join(" ");
    const topo = `
      <div class="subject-card-top">
        <span class="subject-card-icon">${m.icone}</span>
        <span class="subject-card-name">${escapeHtml(m.nome)}</span>
      </div>
      <p class="subject-card-desc">${escapeHtml(m.descricao)}</p>
    `;
    if (m.provaAtual) {
      btn.innerHTML = `
        <div class="subject-card-atual-badge" aria-hidden="true">
          <span class="subject-card-atual-pulse"></span>
          <span>Prova atual — liberada</span>
        </div>
        ${topo}
        <p class="subject-card-hint subject-card-hint--atual">Toque para estudar agora ✨</p>
      `;
    } else {
      btn.innerHTML = topo;
    }
    btn.addEventListener("click", () => openMateria(id));
    grid.appendChild(btn);
  });
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function openMateria(id) {
  if (!MATERIAS[id]) return;
  const m = MATERIAS[id];
  if (m.apenasMemoria || m.emBreve) return;
  state.materiaId = id;
  state.weakOnly = false;
  applyMateriaTheme(m);
  renderPdfChecklist();
  refreshHome();
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.tap();
  showView("home");
}

function refreshHome() {
  const m = getMateria();
  if (!m) return;
  const mid = state.materiaId;
  const p = getProgress();
  const badge = document.getElementById("home-materia-badge");
  const title = document.getElementById("home-title");
  const desc = document.getElementById("home-desc");
  if (badge) badge.textContent = m.nome;
  if (title) title.textContent = `CarineStudy ${m.icone}`;
  if (desc) desc.textContent = m.descricao;

  const answered = p.totalRespondidas || 0;
  const correct = p.totalAcertos || 0;
  const rate = answered > 0 ? Math.round((correct / answered) * 100) : null;

  document.getElementById("stat-answered").textContent = String(answered);
  document.getElementById("stat-rate").textContent = rate === null ? "—" : `${rate}%`;
  document.getElementById("stat-streak").textContent = String(p.streak || 0);
  document.getElementById("stat-best-streak").textContent = String(p.bestStreak || 0);

  const motiv = document.getElementById("home-motivation");
  const temConteudo =
    (m.flashcards && m.flashcards.length > 0) || (m.multiplaEscolha && m.multiplaEscolha.length > 0);
  if (motiv) {
    if (!temConteudo) {
      motiv.textContent = "Quando o João colocar flashcards/questões aqui, os modos abaixo ligam na hora.";
    } else if (answered === 0) {
      motiv.textContent =
        "Dica: Flash express ou Quiz express primeiro; depois pontos fracos se errar bastante.";
    } else if (rate >= 80) motiv.textContent = "Ritmo excelente! Fecha com casos clínicos se tiver.";
    else motiv.textContent = "Errou? Abre o painel de pontos fracos e reforça.";
  }

  const weakBtn = document.getElementById("btn-weak-home");
  const errSum = sumWeakErrors(p.weakPoints);
  if (weakBtn) weakBtn.hidden = errSum < 3;

  const ban = document.getElementById("weak-only-banner");
  if (ban) ban.hidden = !state.weakOnly;

  const emBreve = document.getElementById("home-em-breve");
  if (emBreve) {
    const tem =
      (m.flashcards && m.flashcards.length > 0) ||
      (m.multiplaEscolha && m.multiplaEscolha.length > 0);
    emBreve.hidden = tem;
  }

  const pdfMap = document.getElementById("pdf-map");
  if (pdfMap) {
    const temTopicos = m.topicos && Object.keys(m.topicos).length > 0;
    pdfMap.hidden = !temTopicos;
  }

  const examTips = document.getElementById("exam-tips-block");
  if (examTips) examTips.hidden = !m.provaAtual;
}

function goSubjects() {
  state.materiaId = null;
  state.session = null;
  state.weakOnly = false;
  const poa = MATERIAS.poaTecnologia;
  if (poa) applyMateriaTheme(poa);
  renderSubjects();
  showView("subjects");
}

function goHome() {
  state.session = null;
  refreshHome();
  showView("home");
}

function showFeedback(elId, hit) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = hit ? pickRandom(MOTIVO_HIT) : pickRandom(MOTIVO_MISS);
  el.style.color = hit ? "var(--success)" : "var(--warn)";
}

function setProgressBar(id, cur, total) {
  const bar = document.getElementById(id);
  if (!bar) return;
  const p = total > 0 ? Math.round((cur / total) * 100) : 0;
  bar.style.setProperty("--p", `${p}%`);
}

/* ---------- Flashcards ---------- */
function startFlash(options = {}) {
  const m = getMateria();
  if (!m) return;
  let pool = [...m.flashcards];
  if (state.weakOnly) {
    pool = filterByWeak(pool);
    if (pool.length === 0) {
      alert("Não há flashcards nos tópicos dos pontos fracos. Estude outros modos ou resete.");
      return;
    }
  }
  let items = shuffle(pool);
  const cap = options.limit;
  if (cap && cap > 0) items = items.slice(0, Math.min(cap, items.length));
  if (items.length === 0) {
    alert("Não há flashcards disponíveis.");
    return;
  }
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.tap();
  state.session = { type: "flash", items, index: 0, flipped: false, express: !!cap };
  showView("flash");
  renderFlash();
}

function startFlashCram() {
  const m = getMateria();
  if (!m) return;
  startFlash({ limit: m.cramFlashN || 18 });
}

function renderFlash() {
  const s = state.session;
  if (!s || s.type !== "flash") return;
  const card = document.getElementById("flash-card");
  const total = s.items.length;
  const cur = s.index + 1;
  document.getElementById("flash-counter").textContent = `${cur} / ${total}`;
  document.getElementById("flash-streak").textContent = `🔥 ${getProgress().streak || 0}`;
  setProgressBar("flash-progress", s.index, total);

  const item = s.items[s.index];
  document.getElementById("flash-front-text").textContent = item.frente;
  document.getElementById("flash-back-text").textContent = item.verso;

  s.flipped = false;
  card.classList.remove("is-flipped");
  document.getElementById("flash-tap-hint").hidden = false;
  document.getElementById("flash-actions").hidden = true;
  document.getElementById("flash-feedback").textContent = "";

  card.onclick = () => {
    if (s.flipped) return;
    s.flipped = true;
    card.classList.add("is-flipped");
    if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.flip();
    document.getElementById("flash-tap-hint").hidden = true;
    document.getElementById("flash-actions").hidden = false;
  };
}

function advanceFlash(knew) {
  const s = state.session;
  if (!s || s.type !== "flash") return;
  const item = s.items[s.index];
  if (knew) {
    recordAnswer(true);
    reduceWeakTopic(item.topico);
    showFeedback("flash-feedback", true);
    if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.success();
  } else {
    recordAnswer(false);
    registerWeakTopic(item.topico);
    showFeedback("flash-feedback", false);
    if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.error();
  }

  s.index += 1;
  if (s.index >= s.items.length) {
    const msg = s.express ? `Revisão expressa: ${s.items.length} flashcards ✓` : "Flashcards concluídos!";
    endSession(msg);
    return;
  }
  const wrap = document.getElementById("flash-card-wrap");
  wrap.classList.remove("fade-in");
  void wrap.offsetWidth;
  wrap.classList.add("fade-in");
  renderFlash();
}

/* ---------- Múltipla escolha ---------- */
function shuffleAlts(q) {
  const alts = q.alternativas.map((a, i) => ({ ...a, _i: i }));
  return shuffle(alts);
}

function startMc(options = {}) {
  const m = getMateria();
  if (!m) return;
  let pool = [...m.multiplaEscolha];
  if (state.weakOnly) {
    pool = filterByWeak(pool);
    if (pool.length === 0) {
      alert("Não há questões de múltipla escolha nos tópicos fracos.");
      return;
    }
  }
  let items = shuffle(pool).map((q) => ({
    ...q,
    _alts: shuffleAlts(q),
  }));
  const cap = options.limit;
  if (cap && cap > 0) items = items.slice(0, Math.min(cap, items.length));
  if (items.length === 0) {
    alert("Não há questões de múltipla escolha disponíveis.");
    return;
  }
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.tap();
  state.session = { type: "mc", items, index: 0, answered: false, express: !!cap };
  showView("mc");
  renderMc();
}

function startMcCram() {
  const m = getMateria();
  if (!m) return;
  startMc({ limit: m.cramMcN || 12 });
}

function renderMc() {
  const s = state.session;
  if (!s || s.type !== "mc") return;
  const total = s.items.length;
  const cur = s.index + 1;
  document.getElementById("mc-counter").textContent = `${cur} / ${total}`;
  document.getElementById("mc-streak").textContent = `🔥 ${getProgress().streak || 0}`;
  setProgressBar("mc-progress", s.index, total);

  const q = s.items[s.index];
  document.getElementById("mc-question").textContent = q.pergunta;
  const exp = document.getElementById("mc-explanation");
  exp.hidden = true;
  exp.textContent = "";
  document.getElementById("mc-next").hidden = true;
  document.getElementById("mc-feedback").textContent = "";

  const box = document.getElementById("mc-alternatives");
  box.innerHTML = "";
  const labels = ["A", "B", "C", "D"];
  s.answered = false;

  q._alts.forEach((alt, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "alt-btn";
    b.textContent = `${labels[idx]}) ${alt.texto}`;
    b.dataset.correta = alt.correta ? "1" : "0";
    b.addEventListener("click", () => onMcPick(alt.correta, b));
    box.appendChild(b);
  });
}

function onMcPick(isCorrect, btnEl) {
  const s = state.session;
  if (!s || s.type !== "mc" || s.answered) return;
  s.answered = true;
  const q = s.items[s.index];
  const buttons = document.querySelectorAll("#mc-alternatives .alt-btn");

  buttons.forEach((b) => {
    b.disabled = true;
    if (b.dataset.correta === "1") {
      b.classList.add("correct", "pulse-green");
    }
  });

  const hit = !!isCorrect;
  if (!hit) {
    btnEl.classList.add("wrong", "shake");
    registerWeakTopic(q.topico);
  } else {
    btnEl.classList.add("correct", "pulse-green");
    reduceWeakTopic(q.topico);
  }

  recordAnswer(hit);
  showFeedback("mc-feedback", hit);
  if (typeof CarineStudyAudio !== "undefined") {
    if (hit) CarineStudyAudio.success();
    else CarineStudyAudio.error();
  }

  const exp = document.getElementById("mc-explanation");
  exp.textContent = q.explicacao || "";
  exp.hidden = !q.explicacao;
  document.getElementById("mc-next").hidden = false;
}

function advanceMc() {
  const s = state.session;
  if (!s || s.type !== "mc") return;
  s.index += 1;
  if (s.index >= s.items.length) {
    const msg = s.express ? `Quiz express: ${s.items.length} questões ✓` : "Múltipla escolha concluída!";
    endSession(msg);
    return;
  }
  document.getElementById("mc-card").classList.remove("fade-in");
  void document.getElementById("mc-card").offsetWidth;
  document.getElementById("mc-card").classList.add("fade-in");
  renderMc();
}

/* ---------- Resposta escrita ---------- */
function startWritten() {
  const m = getMateria();
  if (!m) return;
  let pool = [...m.dissertativas];
  if (state.weakOnly) {
    pool = filterByWeak(pool);
    if (pool.length === 0) {
      alert("Não há questões dissertativas nos tópicos fracos.");
      return;
    }
  }
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.tap();
  state.session = { type: "written", items: shuffle(pool), index: 0, phase: "input" };
  showView("written");
  renderWritten();
}

function renderWritten() {
  const s = state.session;
  if (!s || s.type !== "written") return;
  const total = s.items.length;
  const cur = s.index + 1;
  document.getElementById("written-counter").textContent = `${cur} / ${total}`;
  document.getElementById("written-streak").textContent = `🔥 ${getProgress().streak || 0}`;
  setProgressBar("written-progress", s.index, total);

  const q = s.items[s.index];
  document.getElementById("written-question").textContent = q.pergunta;
  const inp = document.getElementById("written-input");
  inp.value = "";
  inp.disabled = false;
  document.getElementById("written-submit").hidden = false;
  document.getElementById("written-reveal").hidden = true;
  document.getElementById("written-feedback").textContent = "";
  s.phase = "input";
}

function submitWritten() {
  const s = state.session;
  if (!s || s.type !== "written" || s.phase !== "input") return;
  const q = s.items[s.index];
  const text = document.getElementById("written-input").value.trim();
  document.getElementById("written-yours").textContent = text || "(em branco)";
  document.getElementById("written-model").textContent = q.respostaEsperada;
  document.getElementById("written-reveal").hidden = false;
  document.getElementById("written-input").disabled = true;
  document.getElementById("written-submit").hidden = true;
  s.phase = "reveal";
}

function evalWritten(kind) {
  const s = state.session;
  if (!s || s.type !== "written" || s.phase !== "reveal") return;
  const q = s.items[s.index];
  if (kind === "hit") {
    recordAnswer(true);
    showFeedback("written-feedback", true);
    if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.success();
  } else {
    recordAnswer(false);
    registerWeakTopic(q.topico);
    showFeedback("written-feedback", false);
    if (typeof CarineStudyAudio !== "undefined") {
      if (kind === "partial") CarineStudyAudio.partial();
      else CarineStudyAudio.error();
    }
  }

  s.index += 1;
  if (s.index >= s.items.length) {
    endSession("Resposta escrita — sessão concluída!");
    return;
  }
  document.querySelector("#view-written .question-card").classList.remove("fade-in");
  void document.querySelector("#view-written .question-card").offsetWidth;
  document.querySelector("#view-written .question-card").classList.add("fade-in");
  renderWritten();
}

/* ---------- Casos clínicos ---------- */
function startCases() {
  const m = getMateria();
  if (!m || !m.casosClinicos || m.casosClinicos.length === 0) {
    alert("Esta matéria ainda não tem casos clínicos em data.js.");
    return;
  }
  let pool = [...m.casosClinicos];
  if (state.weakOnly) {
    pool = filterByWeak(pool);
    if (pool.length === 0) {
      alert("Não há casos clínicos nos tópicos fracos.");
      return;
    }
  }
  const cases = shuffle(pool);
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.tap();
  state.session = {
    type: "cases",
    cases,
    caseIndex: 0,
    qIndex: 0,
    phase: "input",
  };
  showView("cases");
  renderCase();
}

function renderCase() {
  const s = state.session;
  if (!s || s.type !== "cases") return;
  const c = s.cases[s.caseIndex];
  const qs = c.perguntas || [];
  const totalQ = qs.length;
  document.getElementById("case-title").textContent = c.titulo;
  document.getElementById("case-scenario").textContent = c.cenario;
  document.getElementById("cases-counter").textContent = `Caso ${s.caseIndex + 1} / ${s.cases.length}`;
  document.getElementById("cases-q-index").textContent = String(s.qIndex + 1);
  document.getElementById("cases-q-total").textContent = String(totalQ);

  const globalTotal = s.cases.reduce((acc, cs) => acc + (cs.perguntas || []).length, 0);
  const globalStep =
    s.cases.slice(0, s.caseIndex).reduce((acc, cs) => acc + (cs.perguntas || []).length, 0) + s.qIndex;
  setProgressBar("cases-progress", globalStep, globalTotal);

  if (s.qIndex >= totalQ) {
    s.caseIndex += 1;
    s.qIndex = 0;
    if (s.caseIndex >= s.cases.length) {
      endSession("Casos clínicos concluídos!");
      return;
    }
    return renderCase();
  }

  const q = qs[s.qIndex];
  document.getElementById("case-question-text").textContent = q.texto;
  const inp = document.getElementById("case-input");
  inp.value = "";
  inp.disabled = false;
  document.getElementById("case-submit").hidden = false;
  document.getElementById("case-reveal").hidden = true;
  document.getElementById("cases-feedback").textContent = "";
  s.phase = "input";
}

function submitCase() {
  const s = state.session;
  if (!s || s.type !== "cases" || s.phase !== "input") return;
  const c = s.cases[s.caseIndex];
  const q = c.perguntas[s.qIndex];
  document.getElementById("case-model").textContent = q.resposta || "";
  document.getElementById("case-reveal").hidden = false;
  document.getElementById("case-input").disabled = true;
  document.getElementById("case-submit").hidden = true;
  s.phase = "reveal";
}

function evalCase(kind) {
  const s = state.session;
  if (!s || s.type !== "cases" || s.phase !== "reveal") return;
  const c = s.cases[s.caseIndex];
  if (kind === "hit") {
    recordAnswer(true);
    showFeedback("cases-feedback", true);
    if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.success();
  } else {
    recordAnswer(false);
    registerWeakTopic(c.topico);
    showFeedback("cases-feedback", false);
    if (typeof CarineStudyAudio !== "undefined") {
      if (kind === "partial") CarineStudyAudio.partial();
      else CarineStudyAudio.error();
    }
  }

  s.qIndex += 1;
  s.phase = "input";
  document.querySelector("#view-cases .case-card").classList.remove("fade-in");
  void document.querySelector("#view-cases .case-card").offsetWidth;
  document.querySelector("#view-cases .case-card").classList.add("fade-in");
  renderCase();
}

function endSession(msg) {
  state.session = null;
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.complete();
  const modal = document.getElementById("session-end-modal");
  document.getElementById("session-end-title").textContent = "Sessão concluída";
  document.getElementById("session-end-body").textContent = msg;
  modal.hidden = false;
  refreshHome();
}

function closeSessionModal() {
  document.getElementById("session-end-modal").hidden = true;
  goHome();
}

/* ---------- Painel pontos fracos ---------- */
function openWeakPanel() {
  const m = getMateria();
  if (!m) return;
  document.getElementById("weak-materia-name").textContent = m.nome;
  const p = getProgress();
  const wp = p.weakPoints || {};
  const entries = Object.entries(wp)
    .map(([k, v]) => ({ key: k, erros: v.erros || 0, ultimo: v.ultimoErro }))
    .filter((e) => e.erros > 0)
    .sort((a, b) => b.erros - a.erros);

  const summary = document.getElementById("weak-summary");
  const sum = sumWeakErrors(wp);
  summary.innerHTML =
    sum === 0
      ? "<p>Nenhum ponto fraco registrado ainda. Erros em questões preenchem este painel.</p>"
      : `<p><strong>${sum}</strong> erro(s) acumulado(s) em <strong>${entries.length}</strong> tópico(s).</p>`;

  const list = document.getElementById("weak-list");
  list.innerHTML = "";
  const topicos = m.topicos || {};
  const maxErros = entries.length ? entries[0].erros : 1;
  entries.forEach((e) => {
    const pct = Math.min(100, Math.round((e.erros / Math.max(maxErros, 1)) * 100));
    const level = e.erros >= 6 ? "level-high" : e.erros >= 3 ? "level-mid" : "level-low";
    const card = document.createElement("div");
    card.className = "weak-card";
    card.innerHTML = `
      <div class="weak-card-header">
        <span class="weak-card-name">${escapeHtml(topicos[e.key] || e.key)}</span>
        <span class="weak-card-badge">${e.erros} erro${e.erros > 1 ? "s" : ""}</span>
      </div>
      <div class="weak-card-bar">
        <div class="weak-card-bar-fill ${level}" style="width:${pct}%"></div>
      </div>
    `;
    list.appendChild(card);
  });

  const sugWrap = document.getElementById("weak-suggestions");
  const sugList = document.getElementById("suggestion-list");
  sugList.innerHTML = "";
  if (entries.length === 0) {
    sugWrap.hidden = true;
  } else {
    sugWrap.hidden = false;
    const topKeys = entries.slice(0, 3).map((e) => e.key);
    const pool = m.multiplaEscolha.filter((q) => topKeys.includes(q.topico));
    const sample = shuffle(pool).slice(0, 3);
    sample.forEach((q) => {
      const li = document.createElement("li");
      li.textContent = q.pergunta;
      sugList.appendChild(li);
    });
    if (sample.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Adicione mais questões de múltipla escolha nesses tópicos para ver sugestões aqui.";
      sugList.appendChild(li);
    }
  }

  showView("weak");
}

function resetWeakPoints() {
  if (!confirm("Limpar todos os pontos fracos desta matéria?")) return;
  const p = getProgress();
  p.weakPoints = {};
  saveProgress();
  refreshHome();
  openWeakPanel();
}

function practiceWeakOnly() {
  state.weakOnly = true;
  refreshHome();
  showView("home");
}

/* ---------- Navegação voltar ---------- */
function onGlobalBack() {
  if (state.view === "home") {
    goSubjects();
    return;
  }
  if (state.view === "weak") {
    goHome();
    return;
  }
  if (["flash", "mc", "written", "cases"].includes(state.view)) {
    if (state.session && !confirm("Sair da sessão atual? O progresso já salvo permanece.")) return;
    goHome();
  }
}

/* ---------- Inicialização ---------- */
function wireEvents() {
  document.getElementById("btn-global-back").addEventListener("click", onGlobalBack);
  const btnChange = document.getElementById("btn-change-subject");
  if (btnChange) {
    btnChange.addEventListener("click", () => {
      if (!confirm("Voltar para escolher outra matéria?")) return;
      goSubjects();
    });
  }
  document.getElementById("btn-weak-home").addEventListener("click", openWeakPanel);

  document.querySelectorAll(".mode-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      if (mode === "flash") startFlash();
      else if (mode === "cram-flash") startFlashCram();
      else if (mode === "mc") startMc();
      else if (mode === "cram-mc") startMcCram();
      else if (mode === "written") startWritten();
      else if (mode === "cases") startCases();
    });
  });

  document.getElementById("flash-knew").addEventListener("click", () => advanceFlash(true));
  document.getElementById("flash-didnt").addEventListener("click", () => advanceFlash(false));

  document.getElementById("mc-next").addEventListener("click", advanceMc);

  document.getElementById("written-submit").addEventListener("click", submitWritten);
  document.querySelectorAll("#view-written .self-eval-btns .btn").forEach((b) => {
    b.addEventListener("click", () => evalWritten(b.getAttribute("data-eval")));
  });

  document.getElementById("case-submit").addEventListener("click", submitCase);
  document.querySelectorAll("[data-case-eval]").forEach((b) => {
    b.addEventListener("click", () => evalCase(b.getAttribute("data-case-eval")));
  });

  document.getElementById("session-end-close").addEventListener("click", closeSessionModal);

  document.getElementById("btn-practice-weak").addEventListener("click", practiceWeakOnly);
  document.getElementById("btn-reset-weak").addEventListener("click", resetWeakPoints);
}

function init() {
  if (typeof MATERIAS === "undefined") {
    document.body.innerHTML = "<p>Erro: data.js não carregou.</p>";
    return;
  }
  if (!Object.keys(MATERIAS).length) {
    document.body.innerHTML = "<p>Erro: data.js sem matérias.</p>";
    return;
  }
  if (typeof CarineStudyAudio !== "undefined") CarineStudyAudio.init();
  wireEvents();
  const poa = MATERIAS.poaTecnologia;
  if (poa) applyMateriaTheme(poa);
  renderSubjects();
  showView("subjects");
}

init();
