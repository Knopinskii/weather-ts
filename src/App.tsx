import ForecastCard from "./components/ForecastCard";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";
import BackgroundWrapper from "./UI/BackgroundWrapper";

function App() {
  const { city, setCity, weather, forecast, getCity, getWeatherByLocation } =
    useWeather();

  return (
    <BackgroundWrapper weather={weather}>
      <div className="min-h-screen text-white px-4 py-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 bg-white/20 backdrop-blur-sm text-white rounded-lg p-5 ">
          <h1 className="text-3xl font-semibold tracking-wide">
            ☀️ Weather App
          </h1>

          <SearchInput
            onSearch={getCity}
            city={city}
            setCity={setCity}
            onLocationClick={getWeatherByLocation}
          />

          {weather && (
            <div className="w-80">
              <WeatherCard data={weather} />
            </div>
          )}

          {forecast && (
            <div className="w-full mt-6">
              <h2 className="text-2xl font-medium mb-4 text-center">
                5-Day Forecast for {forecast.city.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {forecast.list
                  .filter((item) => item.dt_txt.includes("12:00:00"))
                  .map((item) => (
                    <ForecastCard
                      key={item.dt}
                      date={item.dt_txt}
                      temp={item.main.temp}
                      description={item.weather[0].description}
                      icon={item.weather[0].icon}
                      wind={item.wind.speed}
                      humidity={item.main.humidity}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </BackgroundWrapper>
  );
}

export default App;
