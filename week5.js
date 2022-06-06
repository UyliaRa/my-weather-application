let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = day;
let Hours = now.getHours();
let currentHours = document.querySelector("#currentHours");
currentHours.innerHTML = now.getHours();
let currentMinutes = document.querySelector("#currentMinutes");

function showMinutes() {
  let minutes = now.getMinutes();
  if (minutes < 10) {
    return "0" + minutes;
  }
  return minutes;
}

currentMinutes.innerHTML = showMinutes();

function showCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity");
  let searchedCity = document.querySelector("#searchedCity");
  if (inputCity.value) {
    searchedCity.innerHTML = inputCity.value;
  } else {
    searchedCity.innerHTML = "Your city is...";
  }
}

function showTemperature(response) {
  let temperatureNow = response.data.main.temp;
  let currentTemperature = document.querySelector("#currentTemperature");
  currentTemperature.innerHTML = Math.round(temperatureNow);
}

function searchWeatherData(response) {
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("#searchingForm");
cityForm.addEventListener("submit", showCity);
cityForm.addEventListener("submit", searchWeatherData);

function showFahrenheit(response) {
  let temperatureNow = response.data.main.temp;
  let tempCels = temperatureNow;
  let tempFahr = (tempCels * 9) / 5 + 32;
  currentTemperature.innerHTML = Math.round(tempFahr);
}

function getTempData(event) {
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showFahrenheit);
}

let goTofahrenheit = document.querySelector("#fahrenheit");
goTofahrenheit.addEventListener("click", getTempData);

function showCelsius(response) {
  let tempCelsius = response.data.main.temp;
  currentTemperature.innerHTML = Math.round(tempCelsius);
}

function getTempDataCels(event) {
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCelsius);
}

let goToCelsius = document.querySelector("#celsius");
goToCelsius.addEventListener("click", getTempDataCels);

function showCurrentData(response) {
  let yourCity = response.data.name;
  let searchedCity = document.querySelector("#searchedCity");
  searchedCity.innerHTML = yourCity;
  let yourTemp = response.data.main.temp;
  let currentTemperature = document.querySelector("#currentTemperature");
  currentTemperature.innerHTML = Math.round(yourTemp);
}

function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCurrentData);
}

function goToNavigator(event) {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let getMyPosition = document.querySelector("#current-location-button");
getMyPosition.addEventListener("click", goToNavigator);
