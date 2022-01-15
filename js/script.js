// API for get requests
const rickAndMorty = "https://rickandmortyapi.com/api/character";
const proxy = "https://noroffcors.herokuapp.com/";
const crosFix = proxy + rickAndMorty;
const resultConteiner = document.querySelector(".character-results");

async function getRickAndMorty() {
  try {
    const response = await fetch(crosFix);
    const data = await response.json();
    const resultfacts = data.results;
    resultConteiner.innerHTML = "";
    for (let i = 0; i < 20; i++) {
      resultConteiner.innerHTML += `
      <div class="character">
      <div class="lodder-container">
          <div class="toxic-rick-lodder">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
          </div>
          <div> <img src="${resultfacts[i].image}"/ alt="Image of Character"> </div>
          <div class="character-title"> ${resultfacts[i].name}</div>
          <div> Species: ${resultfacts[i].species}</div>
          <a href="details.html?id=${resultfacts[i].id}" class="button">Details</a>
      </div>`;
    }
  } catch (error) {
    resultConteiner.innerHTML = "";
    resultConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getRickAndMorty();
