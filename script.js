// Back to Top Button

const backToTop = document.createElement("button");

backToTop.innerText = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({ top: 0, behavior: "smooth" });

});

// Dark / Light Mode Toggle with localStorage

const themeToggle = document.getElementById("themeToggle");

// Load saved theme

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");

});