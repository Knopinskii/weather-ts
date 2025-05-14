import type { WeatherData } from "../types/types";

type Props = {
  weather: WeatherData | null;
  children: React.ReactNode;
};

function getBackgroundImage(weather: WeatherData | null) {
  if (!weather) return "/bg/default.jpg";

  const main = weather.weather[0].main.toLowerCase();

  if (main.includes("clear")) return "/bg/clear.jpg";
  if (main.includes("clouds")) return "/bg/clouds.jpg";
  if (main.includes("rain") || main.includes("drizzle")) return "/bg/rain.jpg";
  if (main.includes("snow")) return "/bg/snow.jpg";

  return "/bg/default.jpg";
}

export default function BackgroundWrapper({ weather, children }: Props) {
  const bgImage = getBackgroundImage(weather);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-8 flex justify-center items-start"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
}
