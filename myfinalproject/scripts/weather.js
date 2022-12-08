// API stuff
// select HTML elements in the document
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('.cloudy');
const humidity = document.querySelector('.humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=6bebf1caa2d153d51dfca5bcb5a26ff0';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {    
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const newdesc = desc.charAt(0).toUpperCase() + desc.slice(1);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', newdesc);
    captionDesc.textContent = newdesc;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}`;
}
