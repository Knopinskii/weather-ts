import { useState } from "react";
import {
  fetchCurrentWeather,
  fetchCurrentWeatherByCoords,
  fetchForecast,
  fetchForecastByCoords,
} from "../api/weather";
import { type ForecastData, type WeatherData } from "../types/types";

export function useWeather() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);

  const getCity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city) return;

    try {
      const data = await fetchCurrentWeather(city);
      const forecastData = await fetchForecast(city);
      setWeather(data);
      setForecast(forecastData);
    } catch (error) {
      console.error(error);
    } finally {
      setCity("");
    }
  };

  const getWeatherByLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const current = await fetchCurrentWeatherByCoords(latitude, longitude);
        const forecast = await fetchForecastByCoords(latitude, longitude);
        setWeather(current);
        setForecast(forecast);
      } catch (error) {
        console.error("Ошибка при получении погоды по локации", error);
      }
    });
  };

  return {
    city,
    setCity,
    weather,
    forecast,
    getCity,
    getWeatherByLocation,
  };
}
