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
