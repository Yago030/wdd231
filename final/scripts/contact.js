const form = document.getElementById("contact-form");
const checkbox = document.getElementById("suscripcion");

form.addEventListener("submit", () => {
  localStorage.setItem("novedades", checkbox.checked);
});
