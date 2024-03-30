interface WeatherData {
  cityName: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const apiKey = "37450a2c94bd4ee5b0dc3074c2456b19";
const cities = ["New York", "London", "Paris"];

async function getWeatherData(city: string): Promise<WeatherData> {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return {
    cityName: city,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}

async function displayWeatherData(): Promise<void> {
  const weatherData = await Promise.all(cities.map(getWeatherData));
  const table: HTMLTableElement | null = document.getElementById('weather-table') as HTMLTableElement;

  // Clear any existing rows from the table
  while (table?.rows.length > 0) {
    table.deleteRow(0);
  }

  // Create table rows and cells with weather data for all cities
  for (const data of weatherData) {
    const row = table?.insertRow();
    const cityCell = row?.insertCell();
    cityCell.textContent = data.cityName;

    const tempCell = row?.insertCell();
    tempCell.textContent = data.temperature.toFixed(1);

    const humidityCell = row?.insertCell();
    humidityCell.textContent = data.humidity.toString();

    const windCell = row?.insertCell();
    windCell.textContent = data.windSpeed.toString();
  }
}

displayWeatherData().catch((error) => console.error(error));
