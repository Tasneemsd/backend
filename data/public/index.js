const video = document.getElementById('bg-video');
const sources = ['video1.mp4', 'video4.mp4', 'video5.mp4'];
let current = 0;

video.addEventListener('ended', () => {
  current = (current + 1) % sources.length;
  const nextSrc = 'images/' + sources[current];
  video.src = nextSrc;
  video.load();
  video.play();
});

const API_KEY = '1c2483a3a7453cfeeae9bf04d106c24f';

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("city-input");

searchButton.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    fetchWeather(city);
    fetchForecast(city);
  }
});

async function fetchWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("current-city").textContent = data.name;
    document.getElementById("current-temp").textContent = `${data.main.temp}°C`;
    document.getElementById("current-condition").textContent = data.weather[0].description;
    document.getElementById("current-details").textContent =
      `Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s`;

 

  } catch (error) {
    alert("Error fetching weather. Please enter a valid city.");
    console.error(error);
  }
}

async function fetchForecast(city) {
  const forecastURL =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(forecastURL);
    if (!response.ok) throw new Error("Forecast fetch failed");

    const data = await response.json();

    const dailyForecasts = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);
   

    dailyForecasts.forEach((day, i) => {
      document.getElementById(`day${i}-name`).textContent = new Date(day.dt_txt).toLocaleDateString('en-US', {
        weekday: 'short'
      });
      document.getElementById(`day${i}-temp`).textContent = `${Math.round(day.main.temp)}°C`;
      document.getElementById(`day${i}-desc`).textContent = day.weather[0].description;
      document.getElementById(`day${i}-icon`).src = `icons/${day.weather[0].icon}.png`;
   


    });
  } catch (error) {
    console.error("Forecast error:", error);
  }
}  

 


