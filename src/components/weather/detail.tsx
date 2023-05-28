import { WeatherForecatType } from "../../types/weather";
import { convertChanceOfRainToColors } from "../../utils/rains";

type Props = {
  forecast: WeatherForecatType | null;
  link: string | null;
};

export const Detail = ({ forecast, link }: Props) => {
  if (!forecast || !link) return null;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center flex flex-col items-center">
        <img
          src={forecast.image.url}
          alt={forecast.image.title}
          width={150}
          height={150}
        />
        <p className="font-bold text-gray-600">{forecast.image.title}</p>
      </div>

      <table className="border-collapse border shadow-lg">
        <thead>
          <tr>
            <th className="border p-3">00 - 06</th>
            <th className="border p-3">06 - 12</th>
            <th className="border p-3">12 - 18</th>
            <th className="border p-3">18 - 24</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td
              className={`border p-3 text-center ${convertChanceOfRainToColors(
                forecast.chanceOfRain.T00_06
              )}`}
            >
              {forecast.chanceOfRain.T00_06}
            </td>
            <td
              className={`border p-3 text-center ${convertChanceOfRainToColors(
                forecast.chanceOfRain.T06_12
              )}`}
            >
              {forecast.chanceOfRain.T06_12}
            </td>
            <td
              className={`border p-3 text-center ${convertChanceOfRainToColors(
                forecast.chanceOfRain.T12_18
              )}`}
            >
              {forecast.chanceOfRain.T12_18}
            </td>
            <td
              className={`border p-3 text-center ${convertChanceOfRainToColors(
                forecast.chanceOfRain.T18_24
              )}`}
            >
              {forecast.chanceOfRain.T18_24}
            </td>
          </tr>
        </tbody>
      </table>

      <a
        href={link}
        target="blank"
        className="px-8 py-2 text-sm border rounded-[6px] text-center shadow-lg"
      >
        天気を詳しく知る
      </a>
    </div>
  );
};
