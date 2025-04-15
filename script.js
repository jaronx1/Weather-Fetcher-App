document.getElementById("fetchWeather").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value || "Toronto";
  const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  const data = await response.json();

  const weatherResult = document.getElementById("weatherResult");

  if (data.cod === 200) {
    weatherResult.innerHTML = `
      <strong>City:</strong> ${data.name} <br>
      <strong>Temperature:</strong> ${(data.main.temp - 273.15).toFixed(1)}°C <br>
      <strong>Weather:</strong> ${data.weather[0].description} <br>
      <strong>Humidity:</strong> ${data.main.humidity}% <br>
      <strong>Wind Speed:</strong> ${data.wind.speed} m/s
    `;
  } else {
    weatherResult.innerHTML = `<p style="color: red;">Error: ${data.message}</p>`;
  }
}
