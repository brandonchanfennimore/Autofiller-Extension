// EDIT THESE: CSS selectors for each field and the values to put in them.
// Find a selector: right-click the field > Inspect > right-click the highlighted HTML > Copy > Copy selector.
const FIELDS = [
  { selector: "#dropdown", value: "Option text or value" },
  { selector: "#textbox", value: "12345" },
  { selector: "#start-date", value: "2026-11-01" }, // <input type="date"> wants YYYY-MM-DD
  { selector: "#end-date", value: "2026-11-30" },
];

// Sets a value so frameworks like React/Angular notice the change.
function setValue(el, value) {
  if (el.tagName === "SELECT") {
    const opt = [...el.options].find(o => o.value === value || o.text.trim() === value);
    if (!opt) return alert(`Dropdown option not found: ${value}`);
    value = opt.value;
  }
  const proto = Object.getPrototypeOf(el);
  Object.getOwnPropertyDescriptor(proto, "value").set.call(el, value);
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

function fill() {
  for (const { selector, value } of FIELDS) {
    const el = document.querySelector(selector);
    if (!el) return alert(`Field not found: ${selector}`);
    setValue(el, value);
  }
}

const btn = document.createElement("button");
btn.textContent = "FILL";
btn.style.cssText =
  "position:fixed;bottom:20px;right:20px;z-index:2147483647;padding:12px 20px;" +
  "font:bold 16px sans-serif;background:#2563eb;color:#fff;border:0;border-radius:8px;cursor:pointer;";
btn.onclick = fill;
document.body.appendChild(btn);
