const spotlightDataURL = "data/members.json";

async function loadSpotlightMembers() {
  try {
    const response = await fetch(spotlightDataURL);
    const data = await response.json();

    const eligible = data.filter(member =>
      member.membershipLevel === 3 || member.membershipLevel === 2
    );

    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById("spotlight-container");

    selected.forEach((member, index) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("spotlight");
      if (index % 2 !== 0) wrapper.classList.add("alt");

      const img = document.createElement("img");
      img.src = member.logo;
      img.alt = member.name;
      img.loading = "lazy";

      const textWrapper = document.createElement("div");
      textWrapper.classList.add("spotlight-text");

      textWrapper.innerHTML = `
        <h3>${member.name}</h3>
        <span class="category">${member.category}</span>
        <p>${member.shortDescription}</p>
      `;

      wrapper.appendChild(img);
      wrapper.appendChild(textWrapper);

      container.appendChild(wrapper);
    });

  } catch (err) {
    console.error("Error loading spotlight members:", err);
  }
}

loadSpotlightMembers();
