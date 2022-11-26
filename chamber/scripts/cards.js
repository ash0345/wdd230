// json cards directory

const requestURL = "https://ash0345.github.io/wdd230/chamber/data.json";
const cards = document.querySelector(".cards");

async function getBusinesses() {
  const response = await fetch(requestURL);
  const data = await response.json();
  data.businesses.forEach((business) => {
    displayBusinesses(business);
    console.log(business);
  })
}

function displayBusinesses(business) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let website = document.createElement('p');
  let membershipStatus = document.createElement('p');
  let portrait = document.createElement('img');

  // set classes
  card.setAttribute('class', 'card-section');
  h2.setAttribute('class', 'business-name');
  address.setAttribute('class', 'paragraph');
  phone.setAttribute('class', 'paragraph');
  website.setAttribute('class', 'paragraph website');
  membershipStatus.setAttribute('class', 'paragraph member');
  portrait.setAttribute('class', 'portrait');
  
  // Change the textContent property of the h2 element to contain the business name
  h2.textContent = `${business.name}`;
  
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute('src', business.image);
  portrait.setAttribute('alt', `Logo of ${business.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Add address, phone, membership and website
  address.textContent = `${business.address}`;
  phone.textContent = `${business.phone}`;
  website.innerHTML =  `<a href="${business.website}">${business.website}</a>`;
  membershipStatus.textContent = `${business.membership} Membership`;
  
  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
  card.appendChild(membershipStatus);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

getBusinesses();

// LIST / GRID
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	cards.classList.add("cards");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("cards");
});