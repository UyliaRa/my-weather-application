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

function changeIcon(response) {
  let iconElement = document.querySelector("#iconOfNow");
  let conditionNow = response.data.weather[0].id;
  if (
    conditionNow === 200 ||
    conditionNow === 201 ||
    conditionNow === 202 ||
    conditionNow === 210 ||
    conditionNow === 211 ||
    conditionNow === 212 ||
    conditionNow === 221 ||
    conditionNow === 230 ||
    conditionNow === 231 ||
    conditionNow === 232
  ) {
    iconElement.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionNow === 300 ||
    conditionNow === 301 ||
    conditionNow === 302 ||
    conditionNow === 310 ||
    conditionNow === 311 ||
    conditionNow === 312 ||
    conditionNow === 313 ||
    conditionNow === 314 ||
    conditionNow === 321
  ) {
    iconElement.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionNow === 500 ||
    conditionNow === 501 ||
    conditionNow === 502 ||
    conditionNow === 503 ||
    conditionNow === 504 ||
    conditionNow === 511 ||
    conditionNow === 520 ||
    conditionNow === 521 ||
    conditionNow === 522 ||
    conditionNow === 531
  ) {
    iconElement.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionNow === 600 ||
    conditionNow === 601 ||
    conditionNow === 602 ||
    conditionNow === 611 ||
    conditionNow === 612 ||
    conditionNow === 613 ||
    conditionNow === 615 ||
    conditionNow === 616 ||
    conditionNow === 620 ||
    conditionNow === 621 ||
    conditionNow === 622
  ) {
    iconElement.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionNow === 701 ||
    conditionNow === 711 ||
    conditionNow === 721 ||
    conditionNow === 731 ||
    conditionNow === 741 ||
    conditionNow === 751 ||
    conditionNow === 761 ||
    conditionNow === 762 ||
    conditionNow === 771 ||
    conditionNow === 781
  ) {
    iconElement.setAttribute("src", "src/images/wind.png");
  } else if (conditionNow === 800) {
    iconElement.setAttribute("src", "src/images/sun.png");
  } else if (conditionNow === 801) {
    iconElement.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionNow === 802) {
    iconElement.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionNow === 803 || conditionNow === 804) {
    iconElement.setAttribute("src", "src/images/cloud.png");
  } else {
    iconElement.setAttribute("src", "src/images/season.png");
  }
}

function showForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Thu", "Fri", "Sat", "Sun"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
            <div class="col-2">
              <p>${day}</p>
              <img
                class="smallicon"
                src="src/images/sun_clouds.png"
                alt="sun-clouds"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max">23°C </span
                ><span> | </span
                ><span class="weather-forecast-temperature-min"> 15°C</span>
              </div>
            </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
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

  searchedCity.innerHTML = yourCity;
  currentTemperature.innerHTML = Math.round(temperatureNow);
  currentHumidity.innerHTML = humidityNow;
  currentWind.innerHTML = windNow;
  currentSkyCondition.innerHTML = skyNow;

  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeIcon);
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

showForecast();
