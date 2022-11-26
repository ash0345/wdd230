const requestURL = "https://ash0345.github.io/wdd230/chamber/data.json";
const spotlights = document.querySelector(".spotlights");

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

async function getSpotlights() {
    const response = await fetch(requestURL);
    const data = await response.json();
    // loop through data array and find gold membership
    let goldBusinesses = [];
    data.businesses.forEach((business) => {
        if (business.membership === "Gold") {
            goldBusinesses.push(business);
        }
    })
    // limit results to three
    goldBusinesses = shuffle(goldBusinesses);
    goldBusinesses = goldBusinesses.slice(0, 3);
    // add businesses to page
    goldBusinesses.forEach((business) => {
        displaySpotlight(business);
    })
}

function displaySpotlight(business) {
    let div = document.createElement('div');
    let h3 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');

    div.setAttribute('class', 'spotlight');

    h3.textContent = `${business.name}`;

    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Logo of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    address.textContent = `${business.address}`;
    phone.textContent = `For more information call ${business.phone}`;

    div.appendChild(portrait);
    div.appendChild(h3);
    div.appendChild(address);
    div.appendChild(phone);

    spotlights.appendChild(div);
}

getSpotlights();