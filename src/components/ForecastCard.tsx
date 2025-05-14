import React from "react";

type Props = {
  date: string;
  temp: number;
  description: string;
  icon: string;
  wind: number;
  humidity: number;
};

const ForecastCard: React.FC<Props> = ({
  date,
  temp,
  description,
  icon,
  wind,
  humidity,
}) => {
  return (
    <div className="flex">
      <div className="bg-white/10 p-4 rounded-2xl shadow-md backdrop-blur-sm w-[160px] h-[260px] text-center flex flex-col justify-between">
        <div>
          <p className="font-semibold">
            {new Date(date).toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="mx-auto"
          />
          <p className="capitalize">{description}</p>
        </div>
        <div className="text-sm space-y-1">
          <p>🌡 {Math.round(temp)} °C</p>
          <p>💨 {Math.round(wind)} m/s</p>
          <p>💧 {Math.round(humidity)}%</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
