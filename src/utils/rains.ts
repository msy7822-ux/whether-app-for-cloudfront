import { ChanceOfRainType } from "../types/weather";

export const convertChanceOfRainToColors = (
  chanceOfRain?: ChanceOfRainType
) => {
  if (!chanceOfRain) return "bg-white";
  if (chanceOfRain === "--%") return "bg-white";

  const chanceOfRainNumber = parseInt(chanceOfRain.split("%").slice(0)[0], 10);

  if ([...Array(2)].map((_, i) => (i + 1) * 10).includes(chanceOfRainNumber))
    return "bg-rain-4";
  if ([...Array(3)].map((_, i) => (i + 3) * 10).includes(chanceOfRainNumber))
    return "bg-rain-3";
  if ([...Array(3)].map((_, i) => (i + 6) * 10).includes(chanceOfRainNumber))
    return "bg-rain-2";
  if ([...Array(2)].map((_, i) => (i + 8) * 10).includes(chanceOfRainNumber))
    return "bg-rain-1";

  return "bg-white";
};
