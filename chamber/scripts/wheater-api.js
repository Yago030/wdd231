const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#caption-desc");
const forecastContainer = document.querySelector("#forecast-cards");

const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-34.654173697273&lon=-68.32579748654534&appid=7dd626098197f1464f72729921ada96c&units=metric";

async function apiFetch() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data.list[0]);
      displayForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Weather fetch failed:", error);
  }
}

function displayCurrentWeather(entry) {
  currentTemp.textContent = entry.main.temp.toFixed(1);
  const iconCode = entry.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  const desc = entry.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

function displayForecast(entries) {
  const filtered = entries.filter(f => f.dt_txt.includes("12:00:00")).slice(1, 4); // próximos 3 días al mediodía
  forecastContainer.innerHTML = "";

  filtered.forEach(forecast => {
    const date = new Date(forecast.dt_txt);
    const day = date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

    const iconSrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    const description = forecast.weather[0].description;

    const card = document.createElement("div");
    card.classList.add("forecast-card");
    card.innerHTML = `
      <h4>${day}</h4>
      <img src="${iconSrc}" alt="${description}" />
      <p>${forecast.main.temp.toFixed(1)} °C</p>
      <p class="desc">${description.charAt(0).toUpperCase() + description.slice(1)}</p>
    `;
    forecastContainer.appendChild(card);
  });
}

apiFetch();
