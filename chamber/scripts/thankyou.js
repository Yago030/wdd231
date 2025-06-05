const params = new URLSearchParams(window.location.search);

document.getElementById("out-fname").textContent = params.get("fname") || "-";
document.getElementById("out-lname").textContent = params.get("lname") || "-";
document.getElementById("out-email").textContent = params.get("email") || "-";
document.getElementById("out-phone").textContent = params.get("phone") || "-";
document.getElementById("out-orgname").textContent = params.get("orgname") || "-";
document.getElementById("out-timestamp").textContent = new Date().toLocaleString();
