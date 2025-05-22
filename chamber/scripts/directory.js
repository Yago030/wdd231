const url = "data/members.json";

const displayMembers = (members) => {
  const container = document.querySelector("#directory");

  members.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = member.name;

    const logo = document.createElement("img");
    logo.setAttribute("src", `${member.logo}`);
    logo.setAttribute("alt", `${member.name} logo`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "400");
    logo.setAttribute("height", "200");
    logo.classList.add("business-logo");

    const shortDesc = document.createElement("p");
    shortDesc.textContent = member.shortDescription;

    const category = document.createElement("p");
    category.innerHTML = `<strong>Category:</strong> ${member.category}`;

    const email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a>`;

    const phone = document.createElement("p");
    phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(shortDesc);
    card.appendChild(category);
    card.appendChild(email);
    card.appendChild(phone);

    container.appendChild(card);
  });
};

async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayMembers(data);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

getMembers();
