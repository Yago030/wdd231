document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mainNav");
  const overlay = document.getElementById("overlay");
  const button = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");
  const links = document.querySelectorAll("#mainNav a");
  const currentURL = window.location.pathname;

  button.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("visible");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
  });

  closeButton.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
  });

  links.forEach((link) => {
    if (link.href.includes(currentURL)) {
      link.classList.add("active");
    }
  });
});
