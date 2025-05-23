// script.js - JavaScript functionality for XTRA PR71 Router Controller website

document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    });
  });

  // Add current date to footer
  const footerElement = document.querySelector("footer");
  if (footerElement) {
    const currentYear = new Date().getFullYear();
    const copyrightText = footerElement.querySelector("p");
    if (copyrightText) {
      copyrightText.innerHTML = `&copy; ${currentYear} XTRA PR71 Router Controller. All rights reserved.`;
    }
  }

  // Simple theme toggle functionality (light/dark mode)
  const createThemeToggle = () => {
    const header = document.querySelector("header");
    if (!header) return;

    const themeToggle = document.createElement("button");
    themeToggle.innerHTML = "<span>🌙</span> Dark Mode";
    themeToggle.classList.add("theme-toggle");

    let darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
      document.body.classList.add("dark-mode");
      themeToggle.innerHTML = "<span>☀️</span> Light Mode";
      applyDarkMode();
    }

    themeToggle.addEventListener("click", () => {
      darkMode = !darkMode;
      localStorage.setItem("darkMode", darkMode);

      if (darkMode) {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = "<span>☀️</span> Light Mode";
        applyDarkMode();
      } else {
        document.body.classList.remove("dark-mode");
        themeToggle.innerHTML = "<span>🌙</span> Dark Mode";
        applyLightMode();
      }
    });

    document.body.appendChild(themeToggle);
  };

  function applyDarkMode() {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#eee";

    const headers = document.querySelectorAll("h1, h2, h3");
    headers.forEach((h) => (h.style.color = "#fff"));

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => {
      card.style.backgroundColor = "#333";
      card.style.borderColor = "#555";
    });

    const links = document.querySelectorAll("a:not(.cta-button)");
    links.forEach((link) => (link.style.color = "#66aaff"));
  }

  function applyLightMode() {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    const headers = document.querySelectorAll("h1, h2, h3");
    headers.forEach((h) => (h.style.color = ""));

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => {
      card.style.backgroundColor = "";
      card.style.borderColor = "";
    });

    const links = document.querySelectorAll("a:not(.cta-button)");
    links.forEach((link) => (link.style.color = ""));
  }

  createThemeToggle();
});
