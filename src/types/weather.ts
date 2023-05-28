type Temperature = { celsius: string | null; fahrenheit: string | null };
export type ChanceOfRainType = `${number | "--"}%`;

export type WeatherForecatType = {
  chanceOfRain: {
    T00_06: ChanceOfRainType;
    T06_12: ChanceOfRainType;
    T12_18: ChanceOfRainType;
    T18_24: ChanceOfRainType;
  };
  date: `${number}-${number}-${number}`;
  dateLabel: "今日" | "明日" | "明後日";
  detail: {
    wave: string;
    weather: string;
  };
  image: { title: string; url: string; wudth: number; height: number };
  telop: string;
  temperature: {
    max: Temperature;
    min: Temperature;
  };
};
