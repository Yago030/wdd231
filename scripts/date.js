const year = new Date().getFullYear();
const copyright = document.querySelector("footer p");
const lastModified = document.querySelector("#lastModified");

copyright.innerHTML = `&copy; ${year} Santiago Bergerat Argentina`;
lastModified.textContent = `Last Updated: ${document.lastModified}`;

