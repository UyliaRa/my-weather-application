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

function showWeather(response) {
  let yourCity = response.data.name;
  let searchedCity = document.querySelector("#searchedCity");
  let temperatureNow = response.data.main.temp;
  let currentTemperature = document.querySelector("#currentTemperature");
  let humidityNow = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  let windNow = response.data.wind.speed;
  let currentWind = document.querySelector("#wind");
  let skyNow = response.data.weather[0].description;
  let currentSkyCondition = document.querySelector("#skyCondition");
  let conditionNow = response.data.weather[0].description;
  let iconElement = document.querySelector("#iconOfNow");

  searchedCity.innerHTML = yourCity;
  currentTemperature.innerHTML = Math.round(temperatureNow);
  currentHumidity.innerHTML = humidityNow;
  currentWind.innerHTML = windNow;
  currentSkyCondition.innerHTML = skyNow;

  if (conditionNow === "clear sky") {
    iconElement.setAttribute("src", "src/images/sun.png");
  } else if (conditionNow === "few clouds") {
    iconElement.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionNow === "scattered clouds") {
    iconElement.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionNow === "broken clouds" || "overcast clouds") {
    iconElement.setAttribute("src", "src/images/cloud.png");
  } else if (
    conditionNow === "light rain" ||
    "moderate rain" ||
    "light intensity shower rain" ||
    "light intensity drizzle" ||
    "drizzle" ||
    "heavy intensity drizzle" ||
    "light intensity drizzle rain" ||
    "drizzle rain" ||
    "heavy intensity drizzle rain" ||
    "shower rain and drizzle" ||
    "heavy shower rain and drizzle" ||
    "shower drizzle"
  ) {
    iconElement.setAttribute("src", "src/images/rainy-day.png");
  } else if (
    conditionNow === "heavy intensity rain" ||
    "very heavy rain" ||
    "extreme rain" ||
    "freezing rain" ||
    "shower rain" ||
    "	heavy intensity shower rain" ||
    "ragged shower rain"
  ) {
    iconElement.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionNow === "thunderstorm with light rain" ||
    "thunderstorm with rain" ||
    "thunderstorm with heavy rain" ||
    "	light thunderstorm" ||
    "thunderstorm" ||
    "heavy thunderstorm" ||
    "ragged thunderstorm" ||
    "thunderstorm with light drizzle" ||
    "thunderstorm with drizzle" ||
    "thunderstorm with heavy drizzle"
  ) {
    iconElement.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionNow === "light snow" ||
    "Snow" ||
    "Heavy snow" ||
    "Sleet" ||
    "Light shower sleet" ||
    "Shower sleet" ||
    "Light rain and snow" ||
    "Rain and snow" ||
    "Light shower snow" ||
    "Shower snow" ||
    "Heavy shower snow"
  ) {
    iconElement.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionNow === "mist" ||
    "Smoke" ||
    "Haze" ||
    "sand/ dust whirls" ||
    "fog" ||
    "sand" ||
    "dust" ||
    "volcanic ash" ||
    "squalls" ||
    "tornado"
  ) {
    iconElement.setAttribute("src", "src/images/wind.png");
  }
}
function searchWeatherData(response) {
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
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

function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function goToNavigator(event) {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let getMyPosition = document.querySelector("#current-location-button");
getMyPosition.addEventListener("click", goToNavigator);
