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

const lastVisit = window.localStorage.getItem('lastVisitDate');
const current = new Date();
window.localStorage.setItem('lastVisitDate', current);

const calculate = (current, lastVisitDate) => {
  const difference = current - lastVisitDate;
  return Math.floor(difference);
}

const $visits = document.querySelector('#visits');
const daysBetween = calculate(current, lastVisit);

if (daysBetween === 0) {
  $visits.textContent = `This is your first visit!`;
} else {
  $visits.textContent = `${daysBetween} days from your last visit`;
}











// const lastVisit = window.localStorage.getItem('lastVisitDate');
// const lastVisitDate = lastVisit;
// const current = new Date();

// const setLast = (current) => {
//   localStorage.setItem('lastVisitDate', current);
// }

// const calculate = (current, lastVisitDate) => {
//   const difference = current - lastVisitDate;
//   return Math.floor(difference);
// }

// const print = (current, lastVisit) => {
//   const visits = document.querySelector('#visits');
//   const lastVisitDate = lastVisit;

//   if (lastVisitDate) {
//     visits.textContent = `This is your first visit!`;
//     setLast(current);
    
//   } else {
//     const daysBetween = calculate(current, lastVisitDate);
//     setLast(current);
  
//     visits.textContent = `${daysBetween} days from your last visit`;
//   }
// }

// print(current, lastVisitDate);
