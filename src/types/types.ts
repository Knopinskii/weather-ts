export type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

export type ForecastData = {
  city: {
    name: string;
    country: string;
  };
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  }[];
};
