document.getElementById("fetchWeather").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value || "Toronto";
  const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  const data = await response.json();
  console.log(data);

  const weatherResult = document.getElementById("weatherResult");
  

  if (response.ok && data.main && data.main.temp !== undefined) {
    const temperatureC = (data.main.temp - 273.15).toFixed(1);
    const windSpeedMPH = (data.wind.speed * 2.23694).toFixed(1);
    
    weatherResult.innerHTML = `
      <strong>City:</strong> ${data.name} <br>
      <strong>Temperature:</strong> ${temperatureC}ºC <br>
      <strong>Weather:</strong> ${data.weather[0].description} <br>
      <strong>Humidity:</strong> ${data.main.humidity}% <br>
      <strong>Wind Speed:</strong> ${windSpeedMPH} mph 
    `;
  } else {
    weatherResult.innerHTML = `<p style="color: red;">Error: ${data.message}</p>`;
  }
}
