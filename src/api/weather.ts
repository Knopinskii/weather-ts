import axios from "axios";
import type { ForecastData, WeatherData } from "../types/types";

const API_KEY = "02fc3984fd596c725f50addce4b51cad";

export async function fetchCurrentWeather(city: string): Promise<WeatherData> {
  const res = await axios.get<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}

export async function fetchForecast(city: string): Promise<ForecastData> {
  const res = await axios.get<ForecastData>(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}

export async function fetchForecastByCoords(lat: number, lon: number) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}
export async function fetchCurrentWeatherByCoords(lat: number, lon: number) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch current weather");
  return res.json();
}
