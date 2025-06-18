const EVENTS_PER_PAGE = 10;
let currentPage = 1;
let allEvents = [];

async function fetchEvents() {
  const response = await fetch("data/events.json");
  allEvents = await response.json();
  renderEvents();
  renderPagination();
}

function renderEvents() {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * EVENTS_PER_PAGE;
  const end = start + EVENTS_PER_PAGE;
  const eventsToShow = allEvents.slice(start, end);

  eventsToShow.forEach((event) => {
    const card = document.createElement("article");
    card.classList.add("event-card");
    card.innerHTML = `
      <h3>${event.titulo}</h3>
      <p><strong>Fecha:</strong> ${event.fecha}</p>
      <p><strong>Lugar:</strong> ${event.lugar} (${event.direccion})</p>
<p><strong>Tipo:</strong> ${event.tipo} | <strong>${event.entrada}</strong> | <strong>${event.ambito}</strong></p>
      <p>${event.descripcion}</p>
    `;
    container.appendChild(card);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(allEvents.length / EVENTS_PER_PAGE);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.textContent = "« Anterior";
    prev.onclick = () => {
      currentPage--;
      renderEvents();
      renderPagination();
    };
    pagination.appendChild(prev);
  }

  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.textContent = "Siguiente »";
    next.onclick = () => {
      currentPage++;
      renderEvents();
      renderPagination();
    };
    pagination.appendChild(next);
  }
}

fetchEvents();
