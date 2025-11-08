import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config(); // Load .env file

const API_KEY = process.env.API_KEY;
const city = "London"; // Example query
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    console.log("✅ Weather data:", data);
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
  }
}

getWeather();

