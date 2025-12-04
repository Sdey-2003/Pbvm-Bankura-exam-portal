// List of all Vigyan Kendra and their portal links
// Replace placeholder links with your real admit/registration/result links
const vigyanKendras = {
  "Bankura": {
    registration: "https://sdey-2003.github.io/medha-anneshan-2026/",
    admit: "https://script.google.com/a/macros/bankurapbvm.xyz/s/AKfycbxFlAqyiJhGXSs-sv-jk5KPDc3iqziTqemcDDv-9k006seWtUBTyB6f9_oPp5IHqpXj/exec",
    result: "https://forms.gle/VrRk69X75D9FykcK8"
  },
  "Chhatna": {
    registration: "https://sdey-2003.github.io/medha-anneshan-2026/",
    admit: "https://example.com/chhatna/admit",
    result: "https://example.com/chhatna/result"
  },
  "Saltora": {
    registration: "https://sdey-2003.github.io/medha-anneshan-2026/",
    admit: "https://script.google.com/a/macros/bankurapbvm.xyz/s/AKfycbxFlAqyiJhGXSs-sv-jk5KPDc3iqziTqemcDDv-9k006seWtUBTyB6f9_oPp5IHqpXj/exec",
    result: "https://example.com/saltora/result"
  },
  "Mejiya": {
    registration: "https://sdey-2003.github.io/medha-anneshan-2026/",
    admit: "https://example.com/mejiya/admit",
    result: "https://example.com/mejiya/result"
  },
  "Borjora": {
    registration: "https://sdey-2003.github.io/medha-anneshan-2026/",
    admit: "https://example.com/borjora/admit",
    result: "https://example.com/borjora/result"
  }
};

// Utility: set button state (href + disabled class)
function setButtonState(el, href) {
  if (!href || href === "#") {
    el.href = "#";
    el.classList.add("disabled");
    el.setAttribute("aria-disabled", "true");
  } else {
    el.href = href;
    el.classList.remove("disabled");
    el.removeAttribute("aria-disabled");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("kendraSelect");
  const regBtn = document.getElementById("registrationLink");
  const admitBtn = document.getElementById("admitCardLink");
  const resultBtn = document.getElementById("resultLink");
  const openAllBtn = document.getElementById("openInNewTab");

  // populate select options
  Object.keys(vigyanKendras).forEach(kendra => {
    const opt = document.createElement("option");
    opt.value = kendra;
    opt.textContent = kendra;
    select.appendChild(opt);
  });

  // initial disabled state
  setButtonState(regBtn, "#");
  setButtonState(admitBtn, "#");
  setButtonState(resultBtn, "#");

  // when selection changes, update buttons
  select.addEventListener("change", () => {
    const chosen = select.value;
    if (!chosen || !vigyanKendras[chosen]) {
      setButtonState(regBtn, "#");
      setButtonState(admitBtn, "#");
      setButtonState(resultBtn, "#");
      return;
    }

    setButtonState(regBtn, vigyanKendras[chosen].registration || "#");
    setButtonState(admitBtn, vigyanKendras[chosen].admit || "#");
    setButtonState(resultBtn, vigyanKendras[chosen].result || "#");
  });

  // optional: open all three portals in new tabs (if enabled)
  openAllBtn.addEventListener("click", () => {
    const chosen = select.value;
    if (!chosen || !vigyanKendras[chosen]) {
      alert("Please choose your Vigyan Kendra first.");
      select.focus();
      return;
    }

    // open registration, admit, result in new tabs (if link exists)
    const urls = [
      vigyanKendras[chosen].registration,
      vigyanKendras[chosen].admit,
      vigyanKendras[chosen].result
    ];

    urls.forEach(url => {
      if (url && url !== "#") window.open(url, "_blank", "noopener");
    });
  });

  // bonus: allow Enter on select to open registration in same tab
  select.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const chosen = select.value;
      if (chosen && vigyanKendras[chosen] && vigyanKendras[chosen].registration) {
        window.location.href = vigyanKendras[chosen].registration;
      }
    }
  });
});
