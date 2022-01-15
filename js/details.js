// Get calls
const detailsResultConteiner = document.querySelector(".details-results");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// API for get requests
const detailsUrlRickAndMorty = "https://rickandmortyapi.com/api/character/" + id;

async function detailsOfCharacter() {
  try {
    const response = await fetch(detailsUrlRickAndMorty);
    const details = await response.json();
    createDetails(details);
  } catch (error) {
    detailsResultConteiner.innerHTML = displayError("Error: Failed to fetch API data");
  }
}
detailsOfCharacter();

function createDetails(details) {
  document.title = details.name;
  detailsResultConteiner.innerHTML = `
      <div class="character-details">
          <div> <img src="${details.image}" alt="Image of Character"/> </div>
          <div class="details"> Name: ${details.name}</div>
          <div class="details"> Gender: ${details.gender}</div>
          <div class="details"> Species: ${details.species}</div>
          <div class="details"> Status: ${details.status}</div>
          <div class="details"> 
          <p>Last known location:</p>
          ${details.location.name}
          </div>
          <div class="details"> Created: ${details.created}</div>
      </div>`;
}
