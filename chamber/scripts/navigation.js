document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mainNav");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("menuButton");
  const closeBtn = document.getElementById("closeMenu");

  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("visible");
    document.body.classList.add("menu-open");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
    document.body.classList.remove("menu-open");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
    document.body.classList.remove("menu-open");
  });
});
