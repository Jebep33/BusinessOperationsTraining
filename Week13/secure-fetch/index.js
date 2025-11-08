// index.js
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const API_KEY = process.env.API_KEY; // Read the key from .env

// Simple helper function to fetch data securely
async function fetchSecureWeather(city = "Cebu") {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;

  try {
    // Add the API key in headers for secure requests (some APIs require headers)
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
    });

    // Handle invalid credentials
    if (response.status === 401) {
      throw new Error("Unauthorized: Invalid or expired API key");
    }

    // Handle other HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    // Parse JSON data
    const data = await response.json();

    console.log("✅ Secure fetch successful!");
    console.log("---------------------------");
    console.log(`City: ${data.name}`);
    console.log(`Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
  } catch (error) {
    console.error("❌ Error fetching secure data:", error.message);
  }
}

// Run the function
fetchSecureWeather("Cebu");
