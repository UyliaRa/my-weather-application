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
  let forecastIconElementDayOne = document.querySelector("#iconDayOne");
  let conditionDayOne = response.data.daily[0].weather[0].id;

  let forecastIconElementDayTwo = document.querySelector("#iconDayTwo");
  let conditionDayTwo = response.data.daily[1].weather[0].id;

  let forecastIconElementDayThree = document.querySelector("#iconDayThree");
  let conditionDayThree = response.data.daily[2].weather[0].id;

  let forecastIconElementDayFour = document.querySelector("#iconDayFour");
  let conditionDayFour = response.data.daily[3].weather[0].id;

  let forecastIconElementDayFive = document.querySelector("#iconDayFive");
  let conditionDayFive = response.data.daily[4].weather[0].id;

  let forecastIconElementDaySix = document.querySelector("#iconDaySix");
  let conditionDaySix = response.data.daily[5].weather[0].id;

  if (
    conditionDayOne === 200 ||
    conditionDayOne === 201 ||
    conditionDayOne === 202 ||
    conditionDayOne === 210 ||
    conditionDayOne === 211 ||
    conditionDayOne === 212 ||
    conditionDayOne === 221 ||
    conditionDayOne === 230 ||
    conditionDayOne === 231 ||
    conditionDayOne === 232
  ) {
    forecastIconElementDayOne.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionDayOne === 300 ||
    conditionDayOne === 301 ||
    conditionDayOne === 302 ||
    conditionDayOne === 310 ||
    conditionDayOne === 311 ||
    conditionDayOne === 312 ||
    conditionDayOne === 313 ||
    conditionDayOne === 314 ||
    conditionDayOne === 321
  ) {
    forecastIconElementDayOne.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionDayOne === 500 ||
    conditionDayOne === 501 ||
    conditionDayOne === 502 ||
    conditionDayOne === 503 ||
    conditionDayOne === 504 ||
    conditionDayOne === 511 ||
    conditionDayOne === 520 ||
    conditionDayOne === 521 ||
    conditionDayOne === 522 ||
    conditionDayOne === 531
  ) {
    forecastIconElementDayOne.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionDayOne === 600 ||
    conditionDayOne === 601 ||
    conditionDayOne === 602 ||
    conditionDayOne === 611 ||
    conditionDayOne === 612 ||
    conditionDayOne === 613 ||
    conditionDayOne === 615 ||
    conditionDayOne === 616 ||
    conditionDayOne === 620 ||
    conditionDayOne === 621 ||
    conditionDayOne === 622
  ) {
    forecastIconElementDayOne.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionDayOne === 701 ||
    conditionDayOne === 711 ||
    conditionDayOne === 721 ||
    conditionDayOne === 731 ||
    conditionDayOne === 741 ||
    conditionDayOne === 751 ||
    conditionDayOne === 761 ||
    conditionDayOne === 762 ||
    conditionDayOne === 771 ||
    conditionDayOne === 781
  ) {
    forecastIconElementDayOne.setAttribute("src", "src/images/wind.png");
  } else if (conditionDayOne === 800) {
    forecastIconElementDayOne.setAttribute("src", "src/images/sun.png");
  } else if (conditionDayOne === 801) {
    forecastIconElementDayOne.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionDayOne === 802) {
    forecastIconElementDayOne.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionDayOne === 803 || conditionDayOne === 804) {
    forecastIconElementDayOne.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElementDayOne.setAttribute("src", "src/images/season.png");
  }

  if (
    conditionDayTwo === 200 ||
    conditionDayTwo === 201 ||
    conditionDayTwo === 202 ||
    conditionDayTwo === 210 ||
    conditionDayTwo === 211 ||
    conditionDayTwo === 212 ||
    conditionDayTwo === 221 ||
    conditionDayTwo === 230 ||
    conditionDayTwo === 231 ||
    conditionDayTwo === 232
  ) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionDayTwo === 300 ||
    conditionDayTwo === 301 ||
    conditionDayTwo === 302 ||
    conditionDayTwo === 310 ||
    conditionDayTwo === 311 ||
    conditionDayTwo === 312 ||
    conditionDayTwo === 313 ||
    conditionDayTwo === 314 ||
    conditionDayTwo === 321
  ) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionDayTwo === 500 ||
    conditionDayTwo === 501 ||
    conditionDayTwo === 502 ||
    conditionDayTwo === 503 ||
    conditionDayTwo === 504 ||
    conditionDayTwo === 511 ||
    conditionDayTwo === 520 ||
    conditionDayTwo === 521 ||
    conditionDayTwo === 522 ||
    conditionDayTwo === 531
  ) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionDayTwo === 600 ||
    conditionDayTwo === 601 ||
    conditionDayTwo === 602 ||
    conditionDayTwo === 611 ||
    conditionDayTwo === 612 ||
    conditionDayTwo === 613 ||
    conditionDayTwo === 615 ||
    conditionDayTwo === 616 ||
    conditionDayTwo === 620 ||
    conditionDayTwo === 621 ||
    conditionDayTwo === 622
  ) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionDayTwo === 701 ||
    conditionDayTwo === 711 ||
    conditionDayTwo === 721 ||
    conditionDayTwo === 731 ||
    conditionDayTwo === 741 ||
    conditionDayTwo === 751 ||
    conditionDayTwo === 761 ||
    conditionDayTwo === 762 ||
    conditionDayTwo === 771 ||
    conditionDayTwo === 781
  ) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/wind.png");
  } else if (conditionDayTwo === 800) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/sun.png");
  } else if (conditionDayTwo === 801) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionDayTwo === 802) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionDayTwo === 803 || conditionDayTwo === 804) {
    forecastIconElementDayTwo.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElementDayTwo.setAttribute("src", "src/images/season.png");
  }

  if (
    conditionDayThree === 200 ||
    conditionDayThree === 201 ||
    conditionDayThree === 202 ||
    conditionDayThree === 210 ||
    conditionDayThree === 211 ||
    conditionDayThree === 212 ||
    conditionDayThree === 221 ||
    conditionDayThree === 230 ||
    conditionDayThree === 231 ||
    conditionDayThree === 232
  ) {
    forecastIconElementDayThree.setAttribute(
      "src",
      "src/images/lightening.png"
    );
  } else if (
    conditionDayThree === 300 ||
    conditionDayThree === 301 ||
    conditionDayThree === 302 ||
    conditionDayThree === 310 ||
    conditionDayThree === 311 ||
    conditionDayThree === 312 ||
    conditionDayThree === 313 ||
    conditionDayThree === 314 ||
    conditionDayThree === 321
  ) {
    forecastIconElementDayThree.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionDayThree === 500 ||
    conditionDayThree === 501 ||
    conditionDayThree === 502 ||
    conditionDayThree === 503 ||
    conditionDayThree === 504 ||
    conditionDayThree === 511 ||
    conditionDayThree === 520 ||
    conditionDayThree === 521 ||
    conditionDayThree === 522 ||
    conditionDayThree === 531
  ) {
    forecastIconElementDayThree.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionDayThree === 600 ||
    conditionDayThree === 601 ||
    conditionDayThree === 602 ||
    conditionDayThree === 611 ||
    conditionDayThree === 612 ||
    conditionDayThree === 613 ||
    conditionDayThree === 615 ||
    conditionDayThree === 616 ||
    conditionDayThree === 620 ||
    conditionDayThree === 621 ||
    conditionDayThree === 622
  ) {
    forecastIconElementDayThree.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionDayThree === 701 ||
    conditionDayThree === 711 ||
    conditionDayThree === 721 ||
    conditionDayThree === 731 ||
    conditionDayThree === 741 ||
    conditionDayThree === 751 ||
    conditionDayThree === 761 ||
    conditionDayThree === 762 ||
    conditionDayThree === 771 ||
    conditionDayThree === 781
  ) {
    forecastIconElementDayThree.setAttribute("src", "src/images/wind.png");
  } else if (conditionDayThree === 800) {
    forecastIconElementDayThree.setAttribute("src", "src/images/sun.png");
  } else if (conditionDayThree === 801) {
    forecastIconElementDayThree.setAttribute(
      "src",
      "src/images/sun_clouds.png"
    );
  } else if (conditionDayThree === 802) {
    forecastIconElementDayThree.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionDayThree === 803 || conditionDayThree === 804) {
    forecastIconElementDayThree.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElementDayThree.setAttribute("src", "src/images/season.png");
  }

  if (
    conditionDayFour === 200 ||
    conditionDayFour === 201 ||
    conditionDayFour === 202 ||
    conditionDayFour === 210 ||
    conditionDayFour === 211 ||
    conditionDayFour === 212 ||
    conditionDayFour === 221 ||
    conditionDayFour === 230 ||
    conditionDayFour === 231 ||
    conditionDayFour === 232
  ) {
    forecastIconElementDayFour.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionDayFour === 300 ||
    conditionDayFour === 301 ||
    conditionDayFour === 302 ||
    conditionDayFour === 310 ||
    conditionDayFour === 311 ||
    conditionDayFour === 312 ||
    conditionDayFour === 313 ||
    conditionDayFour === 314 ||
    conditionDayFour === 321
  ) {
    forecastIconElementDayFour.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionDayFour === 500 ||
    conditionDayFour === 501 ||
    conditionDayFour === 502 ||
    cconditionDayFour === 503 ||
    cconditionDayFour === 504 ||
    conditionDayFour === 511 ||
    conditionDayFour === 520 ||
    conditionDayFour === 521 ||
    conditionDayFour === 522 ||
    conditionDayFour === 531
  ) {
    forecastIconElementDayFour.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionDayFour === 600 ||
    conditionDayFour === 601 ||
    conditionDayFour === 602 ||
    conditionDayFour === 611 ||
    conditionDayFour === 612 ||
    conditionDayFour === 613 ||
    conditionDayFour === 615 ||
    conditionDayFour === 616 ||
    conditionDayFour === 620 ||
    conditionDayFour === 621 ||
    conditionDayFour === 622
  ) {
    forecastIconElementDayFour.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionDayFour === 701 ||
    conditionDayFour === 711 ||
    conditionDayFour === 721 ||
    conditionDayFour === 731 ||
    conditionDayFour === 741 ||
    conditionDayFour === 751 ||
    conditionDayFour === 761 ||
    conditionDayFour === 762 ||
    conditionDayFour === 771 ||
    conditionDayFour === 781
  ) {
    forecastIconElementDayFour.setAttribute("src", "src/images/wind.png");
  } else if (conditionDayFour === 800) {
    forecastIconElementDayFour.setAttribute("src", "src/images/sun.png");
  } else if (conditionDayFour === 801) {
    forecastIconElementDayFour.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionDayFour === 802) {
    forecastIconElementDayFour.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionDayFour === 803 || conditionDayFour === 804) {
    forecastIconElementDayFour.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElementDayFour.setAttribute("src", "src/images/season.png");
  }

  if (
    conditionDayFive === 200 ||
    conditionDayFive === 201 ||
    conditionDayFive === 202 ||
    conditionDayFive === 210 ||
    conditionDayFive === 211 ||
    conditionDayFive === 212 ||
    conditionDayFive === 221 ||
    conditionDayFive === 230 ||
    conditionDayFive === 231 ||
    conditionDayFive === 232
  ) {
    forecastIconElementDayFive.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionDayFive === 300 ||
    conditionDayFive === 301 ||
    conditionDayFive === 302 ||
    conditionDayFive === 310 ||
    conditionDayFive === 311 ||
    conditionDayFive === 312 ||
    conditionDayFive === 313 ||
    conditionDayFive === 314 ||
    conditionDayFive === 321
  ) {
    forecastIconElementDayFive.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionDayFive === 500 ||
    conditionDayFive === 501 ||
    conditionDayFive === 502 ||
    conditionDayFive === 503 ||
    conditionDayFive === 504 ||
    conditionDayFive === 511 ||
    conditionDayFive === 520 ||
    conditionDayFive === 521 ||
    conditionDayFive === 522 ||
    conditionDayFive === 531
  ) {
    forecastIconElementDayFive.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionDayFive === 600 ||
    conditionDayFive === 601 ||
    conditionDayFive === 602 ||
    conditionDayFive === 611 ||
    conditionDayFive === 612 ||
    conditionDayFive === 613 ||
    conditionDayFive === 615 ||
    conditionDayFive === 616 ||
    conditionDayFive === 620 ||
    conditionDayFive === 621 ||
    conditionDayFive === 622
  ) {
    forecastIconElementDayFive.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionDayFive === 701 ||
    conditionDayFive === 711 ||
    conditionDayFive === 721 ||
    conditionDayFive === 731 ||
    conditionDayFive === 741 ||
    conditionDayFive === 751 ||
    conditionDayFive === 761 ||
    conditionDayFive === 762 ||
    conditionDayFive === 771 ||
    conditionDayFive === 781
  ) {
    forecastIconElementDayFive.setAttribute("src", "src/images/wind.png");
  } else if (conditionDayFive === 800) {
    forecastIconElementDayFive.setAttribute("src", "src/images/sun.png");
  } else if (conditionDayFive === 801) {
    forecastIconElementDayFive.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionDayFive === 802) {
    forecastIconElementDayFive.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionDayFive === 803 || conditionDayFive === 804) {
    forecastIconElementDayFive.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElementDayFive.setAttribute("src", "src/images/season.png");
  }

  if (
    conditionDaySix === 200 ||
    conditionDaySix === 201 ||
    conditionDaySix === 202 ||
    conditionDaySix === 210 ||
    conditionDaySix === 211 ||
    conditionDaySix === 212 ||
    conditionDaySix === 221 ||
    conditionDaySix === 230 ||
    conditionDaySix === 231 ||
    conditionDaySix === 232
  ) {
    forecastIconElementDaySix.setAttribute("src", "src/images/lightening.png");
  } else if (
    conditionDaySix === 300 ||
    conditionDaySix === 301 ||
    conditionDaySix === 302 ||
    conditionDaySix === 310 ||
    conditionDaySix === 311 ||
    conditionDaySix === 312 ||
    conditionDaySix === 313 ||
    conditionDaySix === 314 ||
    conditionDaySix === 321
  ) {
    forecastIconElementDaySix.setAttribute("src", "src/images/rainy_day.png");
  } else if (
    conditionDaySix === 500 ||
    conditionDaySix === 501 ||
    conditionDaySix === 502 ||
    conditionDaySix === 503 ||
    conditionDaySix === 504 ||
    conditionDaySix === 511 ||
    conditionDaySix === 520 ||
    conditionDaySix === 521 ||
    conditionDaySix === 522 ||
    conditionDaySix === 531
  ) {
    forecastIconElementDaySix.setAttribute("src", "src/images/rain.png");
  } else if (
    conditionDaySix === 600 ||
    conditionDaySix === 601 ||
    conditionDaySix === 602 ||
    conditionDaySix === 611 ||
    conditionDaySix === 612 ||
    conditionDaySix === 613 ||
    conditionDaySix === 615 ||
    conditionDaySix === 616 ||
    conditionDaySix === 620 ||
    conditionDaySix === 621 ||
    conditionDaySix === 622
  ) {
    forecastIconElementDaySix.setAttribute("src", "src/images/snowfall.png");
  } else if (
    conditionDaySix === 701 ||
    conditionDaySix === 711 ||
    conditionDaySix === 721 ||
    conditionDaySix === 731 ||
    conditionDaySix === 741 ||
    conditionDaySix === 751 ||
    conditionDaySix === 761 ||
    conditionDaySix === 762 ||
    conditionDaySix === 771 ||
    conditionDaySix === 781
  ) {
    forecastIconElementDaySix.setAttribute("src", "src/images/wind.png");
  } else if (conditionDaySix === 800) {
    forecastIconElementDaySix.setAttribute("src", "src/images/sun.png");
  } else if (conditionDaySix === 801) {
    forecastIconElementDaySix.setAttribute("src", "src/images/sun_clouds.png");
  } else if (conditionDaySix === 802) {
    forecastIconElementDaySix.setAttribute("src", "src/images/cloudy.png");
  } else if (conditionDaySix === 803 || conditionDaySix === 804) {
    forecastIconElementDaySix.setAttribute("src", "src/images/cloud.png");
  } else {
    forecastIconElementDaySix.setAttribute("src", "src/images/season.png");
  }
}

function formatDay(response, timestamp) {
  let dayOneDate = new Date(response.data.daily[0].dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayFirst = dayOneDate.getDay();
  let dayOne = document.querySelector("#day-one-name");

  let dayTwoDate = new Date(response.data.daily[1].dt * 1000);
  let daySecond = dayTwoDate.getDay();
  let dayTwo = document.querySelector("#day-two-name");

  let dayThreeDate = new Date(response.data.daily[2].dt * 1000);
  let dayThird = dayThreeDate.getDay();
  let dayThree = document.querySelector("#day-three-name");

  let dayFourDate = new Date(response.data.daily[3].dt * 1000);
  let dayFourth = dayFourDate.getDay();
  let dayFour = document.querySelector("#day-four-name");

  let dayFiveDate = new Date(response.data.daily[4].dt * 1000);
  let dayFifth = dayFiveDate.getDay();
  let dayFive = document.querySelector("#day-five-name");

  let daySixDate = new Date(response.data.daily[5].dt * 1000);
  let daySixth = daySixDate.getDay();
  let daySix = document.querySelector("#day-six-name");

  dayOne.innerHTML = days[dayFirst];
  dayTwo.innerHTML = days[daySecond];
  dayThree.innerHTML = days[dayThird];
  dayFour.innerHTML = days[dayFourth];
  dayFive.innerHTML = days[dayFifth];
  daySix.innerHTML = days[daySixth];
}

function showForecast(response) {
  let maxDayOne = response.data.daily[0].temp.max;
  let maxDayTwo = response.data.daily[1].temp.max;
  let maxDayThree = response.data.daily[2].temp.max;
  let maxDayFour = response.data.daily[3].temp.max;
  let maxDayFive = response.data.daily[4].temp.max;
  let maxDaySix = response.data.daily[5].temp.max;

  let dayOneMaxELement = document.querySelector("#day-one #max-temp");
  let dayTwoMaxELement = document.querySelector("#day-two #max-temp");
  let dayThreeMaxELement = document.querySelector("#day-three #max-temp");
  let dayFourMaxELement = document.querySelector("#day-four #max-temp");
  let dayFiveMaxELement = document.querySelector("#day-five #max-temp");
  let daySixMaxELement = document.querySelector("#day-six #max-temp");

  dayOneMaxELement.innerHTML = Math.round(maxDayOne) + "° | ";
  dayTwoMaxELement.innerHTML = Math.round(maxDayTwo) + "° | ";
  dayThreeMaxELement.innerHTML = Math.round(maxDayThree) + "° | ";
  dayFourMaxELement.innerHTML = Math.round(maxDayFour) + "° | ";
  dayFiveMaxELement.innerHTML = Math.round(maxDayFive) + "° | ";
  daySixMaxELement.innerHTML = Math.round(maxDaySix) + "° | ";

  let minDayOne = response.data.daily[0].temp.min;
  let minDayTwo = response.data.daily[1].temp.min;
  let minDayThree = response.data.daily[2].temp.min;
  let minDayFour = response.data.daily[3].temp.min;
  let minDayFive = response.data.daily[4].temp.min;
  let minDaySix = response.data.daily[5].temp.min;

  let dayOneMinELement = document.querySelector("#day-one #min-temp");
  let dayTwoMinELement = document.querySelector("#day-two #min-temp");
  let dayThreeMinELement = document.querySelector("#day-three #min-temp");
  let dayFourMinELement = document.querySelector("#day-four #min-temp");
  let dayFiveMinELement = document.querySelector("#day-five #min-temp");
  let daySixMinELement = document.querySelector("#day-six #min-temp");

  dayOneMinELement.innerHTML = Math.round(minDayOne) + "°";
  dayTwoMinELement.innerHTML = Math.round(minDayTwo) + "°";
  dayThreeMinELement.innerHTML = Math.round(minDayThree) + "°";
  dayFourMinELement.innerHTML = Math.round(minDayFour) + "°";
  dayFiveMinELement.innerHTML = Math.round(minDayFive) + "°";
  daySixMinELement.innerHTML = Math.round(minDaySix) + "°";
}

function getForecast(coordinates) {
  let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
  axios.get(apiUrl).then(formatDay);
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
  currentTemperature.innerHTML = Math.round(temperatureNow) + "°C";
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
