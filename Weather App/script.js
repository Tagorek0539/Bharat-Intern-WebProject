document.getElementById("search-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const cityName = document.getElementById("search-input").value;
  const apiKey = "your-api-key";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    displayWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

function displayWeatherData(data) {
  const resultContainer = document.getElementById("result-container");

  const weatherData = document.createElement("div");
  weatherData.className = "weather-data";

  const temperature = document.createElement("p");
  temperature.textContent = "Temperature ${data.main.temp} K";

  const humidity = document.createElement("p");
  humidity.textContent = "Humidity: ${data.main.humidity}%";

  const windSpeed = document.createElement("p");
  windSpeed.textContent = "Wind Speed: ${data.wind.speed} m/s";

  weatherData.appendChild(temperature);
  weatherData.appendChild(humidity);
  weatherData.appendChild(windSpeed);

  resultContainer.appendChild(weatherData);
}
