let input = document.getElementById("text");
let btn = document.getElementById("search");
let image = document.getElementById("img");
let temp = document.getElementById("temp");
let loc = document.getElementById("location");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind");

const key = ""; //add Your api key hear form https://openweathermap.org/
let q;

btn.addEventListener("click", async () => {
  q = input.value;
  if (q == "") {
    alert("Enter Location");
    
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}&units=metric`;
    try {
      const response = await fetch(url);
      let data = await response.json();
      if (response.status == 404) {
        alert("Enter Correct City Name");
        throw new Error('Enter correct city name');
      }
      else if (data.weather[0].main == "Clear") {
        image.src = "./images/clear.png";
      } else if (data.weather[0].main == "Clouds") {
        image.src = "./images/clouds.png";
      } else if (data.weather[0].main == "Drizzle") {
        image.src = "./images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        image.src = "./images/mist.png";
      } else if (data.weather[0].main == "Humidity") {
        image.src = "./images/humidity.png";
      } else if (data.weather[0].main == "Rain") {
        image.src = "./images/rain.png";
      } else if (data.weather[0].main == "Snow") {
        image.src = "./images/snow.png";
      }
      loc.innerText = data.name;
      temp.innerText = `${Math.round(data.main.temp)}°C`;
      humidity.innerText = `${data.main.humidity}%`;
      windSpeed.innerText = `${data.wind.speed}km/h`;
    //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
});
