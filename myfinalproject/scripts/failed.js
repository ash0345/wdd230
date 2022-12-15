const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=6bebf1caa2d153d51dfca5bcb5a26ff0';

const forecastDate1 = document.querySelector('.forecastDate1');
const forecastMin1 = document.querySelector('.forecastMin1');
const forecastMax1 = document.querySelector('.forecastMax1');
const forecastDate2 = document.querySelector('.forecastDate2');
const forecastMin2 = document.querySelector('.forecastMin2');
const forecastMax2 = document.querySelector('.forecastMax2');
const forecastDate3 = document.querySelector('.forecastDate3');
const forecastMin3 = document.querySelector('.forecastMin3');
const forecastMax3 = document.querySelector('.forecastMax3');

async function fetchForecast() {
  try {
    const response = await fetch(forecasturl);
    if (response.ok) {
      days = await response.json();
      console.log(days);
      displayForecastResults(days);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

fetchForecast();

function displayForecastResults(days) {
  // day 1
  forecastDate1.textContent = days.list[2].main.dt_txt; 
  forecastMin1.textContent = days.list[2].main.temp_min.toFixed(0);
  forecastMax1.textContent = days.list[2].main.temp_max.toFixed(0);

  // day 2
  forecastDate2.textContent = days.list[10].main.dt_txt; 
  forecastMin2.innerHTML = days.list[10].main.temp_min.toFixed(0);
  forecastMax2.textContent = days.list[10].main.temp_max.toFixed(0);

  // day 3
  forecastDate3.textContent = days.list[18].main.dt_txt; 
  forecastMin3.innerHTML = days.list[18].main.temp_min.toFixed(0);
  forecastMax3.textContent = days.list[18].main.temp_max.toFixed(0);


  // create variables daysIndex = 0 currentDayofWeek = 0
  // const daysIndex = 0;
  // const currentDayofWeek = 0;
  // create an array of the days let days =[]
  // go through day[0] loop thorugh data.list
  // if (currentDayofWeek !== datei) {
  //   daysIndex ++;
  //   currentDayofWeek = datei;
  // }
  // new date with list[i]
  // if (!days[daysIndex]) {
  //   days[daysIndex] = {min: datei.min, max: datei.max, dayofweek: datei day of week};
  // } else {
  //   days[daysIndex].min = Math.min(datei.min, days[daysIndex].min);
  //   days[daysIndex].max = Math.max(datei.max, days[daysIndex].max);
  // }
}