function formatMetricValue(value, unit) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "No data";

  if (unit === "usd") return `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  if (unit === "percent") return `${n.toFixed(2)}%`;
  if (unit === "years") return `${n.toFixed(1)} yrs`;
  if (unit === "co2") return `${n.toFixed(2)} t/capita`;
  if (unit === "people") return n.toLocaleString();

  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function getColor(value, invertScale, min, max) {
  if (value == null || !Number.isFinite(Number(value)) || max === min) return "#c3ced2";

  const numericValue = Number(value);
  const hasPositiveRange = min > 0 && max > 0;
  const dynamicRange = hasPositiveRange ? max / min : 1;
  const useLogScale = hasPositiveRange && dynamicRange >= 50;

  let rawRatio;
  if (useLogScale) {
    const logMin = Math.log(min);
    const logMax = Math.log(max);
    const logValue = Math.log(numericValue);
    rawRatio = (logValue - logMin) / (logMax - logMin);
  } else {
    rawRatio = (numericValue - min) / (max - min);
  }

  const ratio = Math.max(0, Math.min(1, invertScale ? 1 - rawRatio : rawRatio));

  const start = [191, 33, 30];
  const mid = [248, 181, 0];
  const end = [17, 130, 81];
  const c1 = ratio < 0.5 ? start : mid;
  const c2 = ratio < 0.5 ? mid : end;
  const t = ratio < 0.5 ? ratio * 2 : (ratio - 0.5) * 2;

  const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

window.formatMetricValue = formatMetricValue;
window.getColor = getColor;
