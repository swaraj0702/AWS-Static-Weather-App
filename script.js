const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.getElementById('humid');
const wind = document.getElementById('windSpeed');
const location_not_found = document.querySelector('.loc-not-found')
const weather_body = document.querySelector('.main-weather')


async function checkWeather(city){
  const api_key = "a06ef8a6bf77a9374b77f630f2c6c7e9"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());

  if(weather_data.cod === `404`){
    location_not_found.style.display= "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  location_not_found.style.display= "none";
  weather_body.style.display = "flex";

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind.innerHTML = `${weather_data.wind.speed}km/h`;
  
  switch(weather_data.weather[0].main){
    case 'Clouds':
      weather_img.src= "clouds.png";
      break
    case 'Rain':
      weather_img.src= "rain.png";
      break
    case 'Clear':
      weather_img.src= "clear.png";
      break
    case 'Haze':
      weather_img.src= "mist.png";
      break
    case 'Snow':
      weather_img.src= "snow.png";
      break
    case 'Mist':
      weather_img.src= "drizzle.png";
      break
  }



  // console.log(weather_data)
}


searchbtn.addEventListener('click', ()=>{
  checkWeather(inputBox.value);
});