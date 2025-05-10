document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mainNav");
    const overlay = document.getElementById("overlay");
    const button = document.getElementById("menuButton");
  
    button.addEventListener("click", () => {
      menu.classList.add("open");
      overlay.classList.add("visible");
    });
  
    overlay.addEventListener("click", () => {
      menu.classList.remove("open");
      overlay.classList.remove("visible");
    });
  });
  