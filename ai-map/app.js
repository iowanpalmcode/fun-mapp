let map;
let geojsonLayer;
let legend;

let countryData = {};
let nameToCode = {};
let metricCatalog = [];
let apiAvailable = false;
let apiBase = "";
let lastRows = [];
let lastMetric = null;
let lastRegionLabel = "Global";
let lastScopeCountryCodes = [];
let selectedDataSource = "world-bank";
let promptRotationTimer = null;
let promptTypeTimer = null;
let currentSuggestedPrompt = "";

const statusEl = document.getElementById("status");
const meshEl = document.getElementById("mesh");
const submitButton = document.getElementById("submit");
const promptInput = document.getElementById("prompt");
const promptHintEl = document.getElementById("promptHint");
const resultShellEl = document.getElementById("resultShell");
const dataSourceToggle = document.getElementById("dataSourceToggle");
const infoToggle = document.getElementById("infoToggle");
const infoPanel = document.getElementById("infoPanel");
const viewButtons = Array.from(document.querySelectorAll(".view-btn"));
const viewMap = {
  map: document.getElementById("mapView"),
  ranking: document.getElementById("rankingView"),
  summary: document.getElementById("summaryView")
};

const queryEchoEl = document.getElementById("queryEcho");
const aiExplanationEl = document.getElementById("aiExplanation");
const sourceInfoEl = document.getElementById("sourceInfo");
const spinnerContainer = document.getElementById("spinnerContainer");
const themeToggle = document.getElementById("themeToggle");
const modeCaption = document.getElementById("modeCaption");
const mapPlaceholder = document.getElementById("mapPlaceholder");
const rankingPlaceholder = document.getElementById("rankingPlaceholder");
const summaryPlaceholder = document.getElementById("summaryPlaceholder");
const mapEl = document.getElementById("map");
const rankingContent = document.getElementById("rankingContent");
const summaryContent = document.getElementById("summaryContent");

const metricNameEl = document.getElementById("metricName");
const countryCountEl = document.getElementById("countryCount");
const minValueEl = document.getElementById("minValue");
const maxValueEl = document.getElementById("maxValue");
const rankingTitleEl = document.getElementById("rankingTitle");
const rankingBodyEl = document.getElementById("rankingBody");
const rankingLimitEl = document.getElementById("rankingLimit");
const rankingContextEl = document.getElementById("rankingContext");

const countriesEndpoint = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";
const geojsonEndpoint = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
const defaultHostedApiBase = "https://fun-mapp.onrender.com";

const fallbackMetrics = [
  { key: "gdp", label: "GDP", unit: "usd" },
  { key: "population", label: "Population", unit: "people" },
  { key: "life_expectancy", label: "Life Expectancy", unit: "years" },
  { key: "internet_users", label: "Internet Users", unit: "percent" },
  { key: "clean_water_access", label: "Access To Clean Water", unit: "percent" },
  { key: "tourism_arrivals", label: "International Tourism Arrivals", unit: "people" }
];

const regionBounds = {
  africa: [[-36, -20], [38, 55]],
  north_africa: [[15, -18], [38, 35]],
  sub_saharan_africa: [[-36, 10], [16, 52]],
  europe: [[35, -12], [72, 45]],
  asia: [[-10, 25], [65, 180]],
  north_america: [[7, -170], [84, -50]],
  south_america: [[-56, -82], [13, -34]],
  latin_america: [[-56, -120], [33, -34]],
  oceania: [[-50, 110], [10, 180]],
  middle_east: [[12, 25], [43, 65]]
};

function setStatus(message) {
  statusEl.textContent = message || "";
}

function initializeDarkMode() {
  const prefersDark = localStorage.getItem("theme") === "dark" || 
                      (localStorage.getItem("theme") === null && 
                       window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (prefersDark) {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
    if (modeCaption) modeCaption.classList.add("visible");
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
    if (modeCaption) modeCaption.classList.remove("visible");
  }
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  if (modeCaption) {
    modeCaption.classList.toggle("visible", isDark);
  }
});

function showContent() {
  resultShellEl.classList.add("visible");
  if (mapPlaceholder) mapPlaceholder.style.display = "none";
  if (mapEl) mapEl.style.display = "block";
  if (rankingPlaceholder) rankingPlaceholder.style.display = "none";
  if (rankingContent) rankingContent.style.display = "block";
  if (summaryPlaceholder) summaryPlaceholder.style.display = "none";
  if (summaryContent) summaryContent.style.display = "block";
}

function setBusy(isBusy) {
  submitButton.disabled = isBusy;
  meshEl.style.opacity = isBusy ? "0.32" : "0";
  if (isBusy) {
    spinnerContainer.classList.add("active");
  } else {
    spinnerContainer.classList.remove("active");
  }
}

function toggleInfoPanel(forceState = null) {
  if (!infoToggle || !infoPanel) return;
  const shouldShow = forceState == null ? !infoPanel.classList.contains("visible") : Boolean(forceState);
  infoPanel.classList.toggle("visible", shouldShow);
  infoToggle.setAttribute("aria-expanded", String(shouldShow));
}

function shuffleArray(values) {
  const list = Array.from(values || []);
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
}

function buildPromptSuggestions() {
  const catalog = (metricCatalog && metricCatalog.length ? metricCatalog : fallbackMetrics)
    .filter((metric) => metric && metric.label)
    .slice(0, 80);
  const starters = ["top countries by", "countries with highest", "show me", "map", "compare"];
  const suffixes = ["in africa", "in asia", "globally", "in europe", "in latin america", "worldwide"];

  const generated = shuffleArray(catalog)
    .slice(0, 14)
    .map((metric, index) => `${starters[index % starters.length]} ${metric.label.toLowerCase()} ${suffixes[index % suffixes.length]}`);

  const explicit = [
    "water access in africa",
    "beef consumption intensity in south america",
    "number of golfers in europe",
    "water balloon suitability in tropical countries",
    "pm2.5 pollution in asia",
    "research and development spending globally"
  ];

  return shuffleArray([...explicit, ...generated]);
}

function typePlaceholderText(nextText) {
  if (!promptInput || !nextText) return;
  if (promptTypeTimer) clearInterval(promptTypeTimer);

  const full = `Try: ${nextText}`;
  let cursor = 0;
  promptInput.placeholder = "";

  promptTypeTimer = setInterval(() => {
    if (document.activeElement === promptInput || promptInput.value.trim()) {
      clearInterval(promptTypeTimer);
      return;
    }
    cursor += 1;
    promptInput.placeholder = full.slice(0, cursor);
    if (cursor >= full.length) {
      clearInterval(promptTypeTimer);
    }
  }, 24);
}

function applySuggestedPromptToInput() {
  if (!promptInput || !currentSuggestedPrompt) return;
  promptInput.value = currentSuggestedPrompt;
  promptInput.focus();
  promptInput.setSelectionRange(promptInput.value.length, promptInput.value.length);
  setStatus("Suggestion inserted. Press Enter to run.");
}

function startPromptRotation() {
  if (!promptInput) return;
  if (promptRotationTimer) clearInterval(promptRotationTimer);

  const suggestions = buildPromptSuggestions();
  if (!suggestions.length) return;

  let cursor = 0;
  const rotate = () => {
    if (document.activeElement === promptInput || promptInput.value.trim()) return;

    const suggestion = suggestions[cursor % suggestions.length];
    currentSuggestedPrompt = suggestion;
    if (promptHintEl) {
      promptHintEl.classList.add("shift");
      setTimeout(() => {
        promptHintEl.textContent = `Try: ${suggestion}`;
        promptHintEl.classList.remove("shift");
      }, 130);
    }

    typePlaceholderText(suggestion);
    cursor += 1;
  };

  rotate();
  promptRotationTimer = setInterval(rotate, 3600);
}

function metricByKey(key) {
  return metricCatalog.find((m) => m.key === key) || null;
}

function setActiveView(viewKey) {
  Object.entries(viewMap).forEach(([key, section]) => {
    section.classList.toggle("active", key === viewKey);
  });

  viewButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewKey);
  });

  if (viewKey === "map" && map) {
    setTimeout(() => map.invalidateSize(), 60);
  }
}

function renderRanking() {
  if (!lastMetric) {
    rankingBodyEl.innerHTML = "";
    rankingContextEl.textContent = "No ranking available yet.";
    rankingTitleEl.textContent = "Top Countries";
    return;
  }

  const limitRaw = rankingLimitEl && rankingLimitEl.value ? rankingLimitEl.value : "25";
  const limit = limitRaw === "all" ? lastRows.length : Number(limitRaw);
  const displayRows = lastRows.slice(0, limit);

  rankingTitleEl.textContent = `Top ${limitRaw === "all" ? "All" : String(limit)} - ${lastMetric.label}`;
  rankingContextEl.textContent = `Ranking scope: ${lastRegionLabel || "Global"}`;
  rankingBodyEl.innerHTML = displayRows
    .map(
      (row, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${row.country}</td>
        <td>${window.formatMetricValue(row.value, lastMetric.unit)}</td>
      </tr>
    `
    )
    .join("");
}

function focusMapForRegion(regionKey) {
  if (!regionKey || !regionBounds[regionKey]) {
    map.setView([20, 0], 2);
    return;
  }
  map.fitBounds(regionBounds[regionKey], { padding: [8, 8] });
}

function parseMetricFromPrompt(text) {
  const prompt = String(text || "").toLowerCase();
  if (prompt.includes("rich") || prompt.includes("gdp") || prompt.includes("econom")) return "gdp";
  if (prompt.includes("populat")) return "population";
  if (prompt.includes("life") || prompt.includes("longevity")) return "life_expectancy";
  if (prompt.includes("internet") || prompt.includes("online")) return "internet_users";
  return null;
}

async function fetchJsonSafe(url, options) {
  const response = await fetch(url, options);
  const contentType = (response.headers.get("content-type") || "").toLowerCase();
  const bodyText = await response.text();

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} from ${url}`);
  }

  if (!contentType.includes("application/json")) {
    const preview = bodyText.slice(0, 40).replace(/\s+/g, " ");
    throw new Error(`Expected JSON from ${url}, got: ${preview}`);
  }

  return JSON.parse(bodyText);
}

function buildApiUrl(pathname) {
  return `${apiBase}${pathname}`;
}

function normalizeConfiguredApiBase(rawValue) {
  let value = String(rawValue || "").trim();
  if (!value) return "";

  try {
    value = decodeURIComponent(value);
  } catch (_error) {
    // Ignore decode errors and use the original string.
  }

  value = value.replace(/^['"]+|['"]+$/g, "");
  value = value.split(/[\s"')]/)[0];
  if (!value) return "";

  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`;
  }

  try {
    const parsed = new URL(value);
    let pathname = parsed.pathname.replace(/\/+$/, "");
    if (/\/health$/i.test(pathname)) {
      pathname = pathname.replace(/\/health$/i, "");
    }
    return `${parsed.origin}${pathname}`;
  } catch (_error) {
    return "";
  }
}

function readConfiguredApiBase() {
  const fromWindow = typeof window.GEOINSIGHT_API_BASE === "string" ? window.GEOINSIGHT_API_BASE.trim() : "";
  const fromMeta = document.querySelector('meta[name="geoinsight-api-base"]')?.getAttribute("content")?.trim() || "";
  const fromQuery = new URLSearchParams(window.location.search).get("api")?.trim() || "";
  return normalizeConfiguredApiBase(fromQuery || fromWindow || fromMeta || defaultHostedApiBase);
}

async function resolveApiBase() {
  const isHttp = window.location.protocol === "http:" || window.location.protocol === "https:";
  const sameOrigin = isHttp ? window.location.origin : "";
  const configuredApiBase = readConfiguredApiBase();
  const candidates = [configuredApiBase, sameOrigin, "http://localhost:8000", "http://127.0.0.1:8000"]
    .filter(Boolean)
    .filter((value, index, arr) => arr.indexOf(value) === index);

  for (const candidate of candidates) {
    try {
      const health = await fetchJsonSafe(`${candidate}/health`);
      if (health && health.ok) {
        apiBase = candidate;
        return true;
      }
    } catch (_error) {
      // Try the next candidate.
    }
  }

  apiBase = sameOrigin || "";
  return false;
}

function updateLegend(metric, min, max) {
  const container = legend.getContainer();
  container.innerHTML = `
    <strong>${metric.label}</strong><br>
    <small>${window.formatMetricValue(min, metric.unit)} -> ${window.formatMetricValue(max, metric.unit)}</small><br><br>
    <div style="display:flex;align-items:center;gap:6px;">
      <span style="width:14px;height:14px;background:#bf211e;display:inline-block;border-radius:3px"></span>
      <span style="font-size:12px">Lower</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px;">
      <span style="width:14px;height:14px;background:#f8b500;display:inline-block;border-radius:3px"></span>
      <span style="font-size:12px">Middle</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px;">
      <span style="width:14px;height:14px;background:#118251;display:inline-block;border-radius:3px"></span>
      <span style="font-size:12px">Higher</span>
    </div>
  `;
}

function updateSummary(metric, rows, stats) {
  lastMetric = metric;
  lastRows = rows;

  metricNameEl.textContent = metric.label;
  countryCountEl.textContent = String(stats.count || 0);
  minValueEl.textContent = stats.min == null ? "-" : window.formatMetricValue(stats.min, metric.unit);
  maxValueEl.textContent = stats.max == null ? "-" : window.formatMetricValue(stats.max, metric.unit);
  renderRanking();
}

async function hydrateMap(metricKey, queryMeta) {
  const metric = {
    key: metricKey,
    label: queryMeta.metricLabel || (metricByKey(metricKey) && metricByKey(metricKey).label) || metricKey,
    unit: queryMeta.metricUnit || (metricByKey(metricKey) && metricByKey(metricKey).unit) || "score",
    invertScale: Boolean(
      queryMeta.metricInvertScale ||
      (metricByKey(metricKey) && metricByKey(metricKey).invertScale)
    )
  };
  const regionParam = queryMeta.region ? `&region=${encodeURIComponent(queryMeta.region)}` : "";
  const countriesParam = Array.isArray(queryMeta.focusCountryCodes) && queryMeta.focusCountryCodes.length
    ? `&countries=${encodeURIComponent(queryMeta.focusCountryCodes.join(","))}`
    : "";
  const sourceParam = queryMeta.dataSource ? `&dataSource=${encodeURIComponent(queryMeta.dataSource)}` : "";
  const queryParam = queryMeta.query ? `&query=${encodeURIComponent(queryMeta.query)}` : "";
  const payload = await fetchJsonSafe(buildApiUrl(`/data?metric=${encodeURIComponent(metricKey)}&limit=500${regionParam}${countriesParam}${sourceParam}${queryParam}`));

  const rows = payload.rows || [];
  const valuesMap = new Map(rows.map((r) => [r.countryCode, Number(r.value)]));
  const scopeCountryCodes = Array.isArray(payload.focusCountryCodes) && payload.focusCountryCodes.length
    ? payload.focusCountryCodes
    : rows.map((r) => r.countryCode);
  const scopedMode = Boolean(queryMeta.region || (Array.isArray(payload.focusCountryCodes) && payload.focusCountryCodes.length));
  const scopeSet = new Set(scopeCountryCodes);
  const bounds = L.latLngBounds([]);

  const min = payload.stats && payload.stats.min != null ? Number(payload.stats.min) : 0;
  const max = payload.stats && payload.stats.max != null ? Number(payload.stats.max) : 0;

  geojsonLayer.eachLayer((layer) => {
    const featureName = layer.feature.properties.name;
    const code = nameToCode[featureName];

    if (!code) {
      layer.setStyle({ fillColor: "#c3ced2", fillOpacity: 0.74, opacity: 0.7, weight: 1 });
      return;
    }

    if (scopedMode && !scopeSet.has(code)) {
      layer.setStyle({ fillColor: "#ffffff", fillOpacity: 0, opacity: 0, weight: 0 });
      return;
    }

    if (!valuesMap.has(code)) {
      layer.setStyle({ fillColor: "#c3ced2", fillOpacity: 0.2, opacity: 0.35, weight: 0.6 });
      return;
    }

    const value = valuesMap.get(code);
    const color = window.getColor(value, Boolean(metric.invertScale), min, max);
    layer.setStyle({ fillColor: color, fillOpacity: 0.82, opacity: 0.9, weight: 0.9 });

    const countryName = countryData[code] && countryData[code].name ? countryData[code].name : featureName;
    layer.bindPopup(`<strong>${countryName}</strong><br>${metric.label}: ${window.formatMetricValue(value, metric.unit)}`);
    if (layer.getBounds) {
      bounds.extend(layer.getBounds());
    }
  });

  updateLegend(metric, min, max);
  updateSummary(metric, rows, payload.stats || { count: 0, min: null, max: null });
  lastScopeCountryCodes = scopeCountryCodes;
  lastRegionLabel = queryMeta.regionLabel || (lastScopeCountryCodes.length ? "Selected countries" : "Global");
  if (queryMeta.focusCountryCodes && queryMeta.focusCountryCodes.length) {
    const names = queryMeta.focusCountryCodes
      .map((code) => (countryData[code] && countryData[code].name ? countryData[code].name : code))
      .join(", ");
    lastRegionLabel = `Selected: ${names}`;
  }
  rankingContextEl.textContent = `Ranking scope: ${lastRegionLabel}`;

  // Display source citation
  let sourceHtml = "<strong>Data Source:</strong> ";
  if (queryMeta.dataSource === "world-bank") {
    sourceHtml += '<a href="https://data.worldbank.org" target="_blank" rel="noopener">World Bank</a>';
  } else if (queryMeta.dataSource === "ai-generated") {
    sourceHtml += "AI-generated";
  }
  sourceHtml += " | <strong>Explanation:</strong> ";
  if (queryMeta.explanationSource === "ai") {
    sourceHtml += '<a href="https://openrouter.ai" target="_blank" rel="noopener">OpenRouter AI</a>';
  } else if (queryMeta.explanationSource === "fallback") {
    const reason = queryMeta.explanationReason ? ` (${queryMeta.explanationReason})` : "";
    sourceHtml += `Template${reason}`;
  }
  if (queryMeta.explanationModel) {
    sourceHtml += ` | <strong>Model:</strong> ${queryMeta.explanationModel}`;
  }
  sourceInfoEl.innerHTML = sourceHtml;
  sourceInfoEl.style.display = "block";

  showContent();

  if (scopedMode && bounds.isValid()) {
    map.fitBounds(bounds, { padding: [8, 8] });
  } else {
    focusMapForRegion(queryMeta.region);
  }

  queryEchoEl.textContent = `Query: ${queryMeta.query}`;
  aiExplanationEl.textContent = queryMeta.explanation || "No explanation available.";

  if (queryMeta.explanationSource === "fallback") {
    const reason = queryMeta.explanationReason ? ` (${queryMeta.explanationReason})` : "";
    setStatus(`Map ready: ${queryMeta.metricLabel} - AI summary unavailable, using fallback${reason}.`);
  }
}

async function runQuery() {
  const query = promptInput.value.trim();
  selectedDataSource = dataSourceToggle ? dataSourceToggle.value : "world-bank";

  if (!query) {
    setStatus("Enter a question to generate a map.");
    return;
  }
  promptInput.value = "";

  if (!apiAvailable) {
    const guessed = parseMetricFromPrompt(query) || "gdp";
    const found = metricByKey(guessed) || fallbackMetrics[0];
    setStatus("API is offline. Start server with: npm install ; npm start");
    queryEchoEl.textContent = `Query: ${query}`;
    aiExplanationEl.textContent = `Could not reach /query API. The app needs the Node backend running on the same origin. Suggested metric: ${found.label}.`;
    return;
  }

  setBusy(true);
  setStatus("Understanding query...");

  try {
    const queryMeta = await fetchJsonSafe(buildApiUrl("/query"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, dataSource: selectedDataSource })
    });

    setStatus("Fetching mapped dataset...");
    await hydrateMap(queryMeta.metric, queryMeta);
    setStatus(`Map ready: ${queryMeta.metricLabel}`);
    resultShellEl.classList.add("visible");
    setActiveView("map");
    setTimeout(() => map.invalidateSize(), 80);
  } catch (error) {
    console.error(error);
    setStatus("Failed to process query. Ensure Node API is running.");
  } finally {
    setBusy(false);
  }
}

async function initializeData() {
  setStatus("Loading map assets...");

  const [countriesResponse, geoJsonResponse] = await Promise.all([
    fetch(countriesEndpoint),
    fetch(geojsonEndpoint)
  ]);

  const countries = await countriesResponse.json();
  const worldGeoJson = await geoJsonResponse.json();

  countries.forEach((country) => {
    const code = country.cca3;
    countryData[code] = {
      name: country.name.common,
      population: country.population,
      area: country.area
    };

    nameToCode[country.name.common] = code;
    if (country.name.official) {
      nameToCode[country.name.official] = code;
    }
  });

  const aliases = {
    "United States": "USA",
    "United States of America": "USA",
    Russia: "RUS",
    "Democratic Republic of the Congo": "COD",
    "Republic of the Congo": "COG",
    "South Korea": "KOR",
    "North Korea": "PRK",
    Vietnam: "VNM",
    Iran: "IRN",
    Syria: "SYR",
    Laos: "LAO",
    Bolivia: "BOL",
    Venezuela: "VEN",
    Moldova: "MDA",
    Tanzania: "TZA"
  };
  Object.assign(nameToCode, aliases);

  geojsonLayer = L.geoJSON(worldGeoJson, {
    style: {
      fillColor: "#c3ced2",
      weight: 1,
      opacity: 1,
      color: "#ffffff",
      fillOpacity: 0.72
    },
    onEachFeature: (feature, layer) => {
      const rawName = feature.properties.name;
      const code = nameToCode[rawName];
      const displayName = code && countryData[code] ? countryData[code].name : rawName;
      layer.bindPopup(displayName);
    }
  }).addTo(map);

  legend = L.control({ position: "bottomright" });
  legend.onAdd = () => {
    const div = L.DomUtil.create("div", "legend");
    div.innerHTML = "Submit a query to generate the thematic map.";
    return div;
  };
  legend.addTo(map);

  apiAvailable = await resolveApiBase();

  if (apiAvailable) {
    const metricsPayload = await fetchJsonSafe(buildApiUrl("/metrics"));
    metricCatalog = [...(metricsPayload.metrics || []), ...(metricsPayload.aiMetrics || [])];
    setStatus("Ready. Ask a question to generate a world map.");
  } else {
    metricCatalog = fallbackMetrics;
    setStatus("Map loaded, but API offline. Set a hosted API URL with ?api=https://your-api-domain.com or meta[name=geoinsight-api-base].");
  }

  startPromptRotation();
}

document.addEventListener("DOMContentLoaded", async () => {
  map = L.map("map", {
    zoomControl: true,
    worldCopyJump: false,
    maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 1.0,
    minZoom: 2,
    maxZoom: 6
  }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    noWrap: true,
    bounds: [[-85, -180], [85, 180]]
  }).addTo(map);

  initializeDarkMode();

  try {
    await initializeData();
  } catch (error) {
    console.error(error);
    setStatus("Startup failed while loading map resources.");
  }

  submitButton.addEventListener("click", runQuery);

  if (promptHintEl) {
    promptHintEl.classList.add("clickable");
    promptHintEl.setAttribute("role", "button");
    promptHintEl.setAttribute("tabindex", "0");
    promptHintEl.setAttribute("title", "Click to insert this suggestion into the input");
    promptHintEl.addEventListener("click", applySuggestedPromptToInput);
    promptHintEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        applySuggestedPromptToInput();
      }
    });
  }

  if (infoToggle) {
    infoToggle.addEventListener("click", () => toggleInfoPanel());
  }
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveView(btn.dataset.view);
    });
  });

  if (rankingLimitEl) {
    rankingLimitEl.addEventListener("change", renderRanking);
  }

  promptInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runQuery();
    }
  });
});
