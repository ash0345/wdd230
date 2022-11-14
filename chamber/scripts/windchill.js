// API stuff
// select HTML elements in the document
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('.cloudy');
const windSpeed = document.querySelector('.wind-speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hilo&units=imperial&appid=6bebf1caa2d153d51dfca5bcb5a26ff0';

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
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    windSpeed.innerHTML = `Wind Speed: <strong>${weatherData.wind.speed.toFixed(0)}</strong> mph`;
}

// windchill stuff
var windChill = (35.74 + (0.6215 * currentTemp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
var windChill = Math.round(windChill);
document.querySelector('.windchill').textContent = windChill;
