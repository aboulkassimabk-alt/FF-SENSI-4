const modes = document.querySelectorAll(".mode");
const generateBtn = document.getElementById("generate");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const themeBtn = document.getElementById("themeBtn");

let selectedMode = "balanced";

modes.forEach(button => {

  button.addEventListener("click", () => {

    modes.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedMode = button.dataset.mode;
  });

});


generateBtn.addEventListener("click", () => {

  const device = document.getElementById("device").value;

  if (!device) {
    alert("اختار الجهاز ديالك أولاً 📱");
    return;
  }

  let settings;

  if (selectedMode === "fast") {

    settings = {
      general: 200,
      redDot: 190,
      scope2: 180,
      scope4: 170,
      sniper: 150,
      freeLook: 200
    };

  } else if (selectedMode === "low") {

    settings = {
      general: 150,
      redDot: 140,
      scope2: 130,
      scope4: 120,
      sniper: 100,
      freeLook: 150
    };

  } else {

    settings = {
      general: 180,
      redDot: 170,
      scope2: 160,
      scope4: 150,
      sniper: 120,
      freeLook: 180
    };

  }

  document.getElementById("general").textContent = settings.general;
  document.getElementById("redDot").textContent = settings.redDot;
  document.getElementById("scope2").textContent = settings.scope2;
  document.getElementById("scope4").textContent = settings.scope4;
  document.getElementById("sniper").textContent = settings.sniper;
  document.getElementById("freeLook").textContent = settings.freeLook;

  result.classList.remove("hidden");

  result.scrollIntoView({
    behavior: "smooth"
  });

});


copyBtn.addEventListener("click", async () => {

  const text = `
FF SENSI SETTINGS

General: ${document.getElementById("general").textContent}
Red Dot: ${document.getElementById("redDot").textContent}
2X Scope: ${document.getElementById("scope2").textContent}
4X Scope: ${document.getElementById("scope4").textContent}
Sniper: ${document.getElementById("sniper").textContent}
Free Look: ${document.getElementById("freeLook").textContent}
`;

  await navigator.clipboard.writeText(text);

  copyBtn.textContent = "✅ تم النسخ!";

  setTimeout(() => {
    copyBtn.textContent = "📋 نسخ الإعدادات";
  }, 2000);

});


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }

});