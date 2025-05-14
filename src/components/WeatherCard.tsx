import type { WeatherData } from "../types/types";

type Props = {
  data: WeatherData;
};

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, weather, main, wind } = data;
  const current = weather[0];
  return (
    <div
      className="bg-white/10 p-4 rounded-2xl shadow-md backdrop-blur-sm w-full max-w-md text-center
     "
    >
      <div className="flex flex-col">
        <h1 className="text-4xl pb-5">{name}</h1>
        <p className="text-2xl font-light">
          🌡 Temp: {Math.round(main.temp)} °C
        </p>
        <p className="text-2xl font-light">
          Feels like: {Math.round(main.feels_like)} °C
        </p>
        <p className="text-2xl font-light">
          Min: {Math.round(main.temp_min)} °C / Max: {Math.round(main.temp_max)}{" "}
          °C
        </p>
        <p className="text-2xl font-light">
          💨 Wind: {Math.round(wind.speed)} m/s
        </p>
        <p className="text-2xl font-light">
          💧 Humidity: {Math.round(main.humidity)}%
        </p>
        <p className="text-2xl font-light">
          ☁ Description: {current.description}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`}
          alt={current.description}
          className="w-30 h-30 mx-auto"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
