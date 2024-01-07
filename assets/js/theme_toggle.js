/**
 * DARK MODE TOGGLE
 */
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("toggleMode");
  const body = document.body;
  const storedMode = localStorage.getItem("mode");

  if (storedMode) {
    body.classList.add(storedMode);
    updateButtonText();
  }

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLightMode = body.classList.contains("light-mode");
    localStorage.setItem("mode", isLightMode ? "light-mode" : "");

    updateButtonText();
  });

  function updateButtonText() {
    const isLightMode = body.classList.contains("light-mode");
    modeToggle.innerHTML = isLightMode
      ? '<ion-icon name="moon-outline" aria-hidden="true"></ion-icon>'
      : '<ion-icon name="sunny-outline" aria-hidden="true"></ion-icon>';
  }
});
