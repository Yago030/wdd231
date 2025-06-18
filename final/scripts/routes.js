const ROUTES_PER_PAGE = 10;
let currentPage = 1;
let allRoutes = [];

async function fetchRoutes() {
  const response = await fetch('data/routes.json');
  allRoutes = await response.json();
  renderRoutes();
  renderPagination();
}

function renderRoutes() {
  const container = document.getElementById('routes-container');
  container.innerHTML = '';

  const start = (currentPage - 1) * ROUTES_PER_PAGE;
  const end = start + ROUTES_PER_PAGE;
  const routesToShow = allRoutes.destinations.slice(start, end);

  routesToShow.forEach(route => {
    const card = document.createElement('article');
    card.classList.add('route-card');
    card.innerHTML = `
      <h3>${route.name}</h3>
      ${route.iframe}
      <p><strong>Distancia:</strong> ${route.distance_km} km</p>
      <p><strong>Tiempo estimado:</strong> ${route.travel_time}</p>
      <p><strong>Vehículo recomendado:</strong> ${route.recommended_vehicle}</p>
      <p><strong>Recomendaciones:</strong> ${route.zone_recommendations}</p>
      <p><strong>Actividades:</strong> ${route.activities.join(', ')}</p>
    `;
    container.appendChild(card);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(allRoutes.destinations.length / ROUTES_PER_PAGE);
  const pagination = document.getElementById('routes-pagination');
  pagination.innerHTML = '';

  if (currentPage > 1) {
    const prev = document.createElement('button');
    prev.textContent = '« Anterior';
    prev.onclick = () => {
      currentPage--;
      renderRoutes();
      renderPagination();
    };
    pagination.appendChild(prev);
  }

  if (currentPage < totalPages) {
    const next = document.createElement('button');
    next.textContent = 'Siguiente »';
    next.onclick = () => {
      currentPage++;
      renderRoutes();
      renderPagination();
    };
    pagination.appendChild(next);
  }
}

fetchRoutes();
