const container = document.getElementById("placesContainer");

async function loadPlaces() {
  try {
    const response = await fetch("data/places.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    data.forEach((place, index) => {
      const card = document.createElement("section");
      card.classList.add("place-card");
      card.style.gridArea = `item${index + 1}`;

      card.innerHTML = `
        <h3>${place.name}</h3>
        <figure>
          <img src="images/places/${place.image}" alt="${place.name}" width="300" height="200" loading="lazy" />
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading places:", error);
    container.innerHTML = `<p class="error">Failed to load content. Please try again later.</p>`;
  }
}

loadPlaces();
