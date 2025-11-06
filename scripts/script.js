const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme on startup
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
} else {
  toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("portfolio-theme", "dark");
  } else {
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("portfolio-theme", "light");
  }
});
