document.addEventListener("DOMContentLoaded", () => {
  // Год в футере
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
