var temp = 8;
var speed = 5.5;

var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
var windChill = Math.round(windChill);
document.querySelector('.windchill').innerHTML = windChill;