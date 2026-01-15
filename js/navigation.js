const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");
const themeToggle = document.getElementById("themeToggle");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
