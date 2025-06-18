document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcome-modal");
  const closeBtn = modal.querySelector(".modal-close");

  if (!sessionStorage.getItem("modalShown")) {
    modal.classList.add("show");
    sessionStorage.setItem("modalShown", "true");
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});