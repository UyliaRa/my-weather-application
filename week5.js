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

function changeForecastIcons(response) {
  let forecastIconElement = document.querySelector("#iconForecast");
  let conditionForecast = response.data.daily[0].weather[0].id;

  if (
    conditionForecast === 200 ||
    conditionForecast === 201 ||
    conditionForecast === 202 ||
    conditionForecast === 210 ||
    conditionForecast === 211 ||
    conditionForecast === 212 ||
    conditionForecast === 221 ||
    conditionForecast === 230 ||
    conditionForecast === 231 ||
    conditionForecast === 232
  ) {
    forecastIconElement.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionForecast === 300 ||
    conditionForecast === 301 ||
    conditionForecast === 302 ||
    conditionForecast === 310 ||
    conditionForecast === 311 ||
    conditionForecast === 312 ||
    conditionForecast === 313 ||
    conditionForecast === 314 ||
    conditionForecast === 321
  ) {
    forecastIconElement.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionForecast === 500 ||
    conditionForecast === 501 ||
    conditionForecast === 502 ||
    conditionForecast === 503 ||
    conditionForecast === 504 ||
    conditionForecast === 511 ||
    conditionForecast === 520 ||
    conditionForecast === 521 ||
    conditionForecast === 522 ||
    conditionForecast === 531
  ) {
    forecastIconElement.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionForecast === 600 ||
    conditionForecast === 601 ||
    conditionForecast === 602 ||
    conditionForecast === 611 ||
    conditionForecast === 612 ||
    conditionForecast === 613 ||
    conditionForecast === 615 ||
    conditionForecast === 616 ||
    conditionForecast === 620 ||
    conditionForecast === 621 ||
    conditionForecast === 622
  ) {
    forecastIconElement.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionForecast === 701 ||
    conditionForecast === 711 ||
    conditionForecast === 721 ||
    conditionForecast === 731 ||
    conditionForecast === 741 ||
    conditionForecast === 751 ||
    conditionForecast === 761 ||
    conditionForecast === 762 ||
    conditionForecast === 771 ||
    conditionForecast === 781
  ) {
    forecastIconElement.setAttribute("src", "src/images/wind.png");
  } else if (conditionForecast === 800) {
    forecastIconElement.setAttribute("src", "src/images/sun.png");
  } else if (conditionForecast === 801) {
    forecastIconElement.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionForecast === 802) {
    forecastIconElement.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionForecast === 803 || conditionForecast === 804) {
    forecastIconElement.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElement.setAttribute("src", "src/images/season.png");
  }
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function showForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
            <div class="col-2">
              <p>${formatDay(forecastDay.dt)}</p>
              <img
                class="smallicon"
                id="iconForecast"
                src="src/images/season.png"
                alt="icon"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max">${Math.round(
                  forecastDay.temp.max
                )}°</span
                ><span> | </span
                ><span class="weather-forecast-temperature-min"> ${Math.round(
                  forecastDay.temp.min
                )}°</span>
              </div>
            </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
  axios.get(apiUrl).then(changeForecastIcons);
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
  getForecast(response.data.coord);
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
