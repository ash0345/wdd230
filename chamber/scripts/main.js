// nav bar
function toggleMenu() {
    document.getElementById("nav-bar").classList.toggle("hide");
}

// lazy load
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imageOptions ={
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      })
    }, imageOptions);

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
   });
}

// visits

const lastVisit = new Date(window.localStorage.getItem('lastVisitDate'));
const current = new Date();
window.localStorage.setItem('lastVisitDate', current);

const calculate = (current, lastVisitDate) => {
  const difference = (current - lastVisitDate)/86400000;
  return Math.floor(difference);
}

const $visits = document.querySelector('#visits');
const daysBetween = calculate(current, lastVisit);

if ($visits) {
  if (!daysBetween) {
    $visits.textContent = `This is your first visit!`
  } else {
    $visits.textContent = `${daysBetween} days from your last visit`
  }
}

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
  website.setAttribute('class', 'paragraph');
  membershipStatus.setAttribute('class', 'paragraph');
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