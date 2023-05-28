import { WeatherForecatType } from "../../types/weather";

type Props = {
  forecasts: WeatherForecatType[];
  select: (arg: 0 | 1 | 2) => void;
};

export const Forecasts = ({ forecasts, select }: Props) => {
  const handleOnSelect = (tabNumber: 0 | 1 | 2) => {
    select(tabNumber);
  };

  return (
    <div className="flex justify-center gap-3 items-center">
      {forecasts?.map((forecast: WeatherForecatType, i) => {
        return (
          <button
            type="button"
            className="text-center"
            key={i}
            onClick={() => {
              const tabNum = i as 0 | 1 | 2;
              handleOnSelect(tabNum);
            }}
          >
            <img src={forecast.image.url} alt="" />
            <span>{forecast.dateLabel}</span>
            <div>
              <span>{forecast.temperature.max.celsius}</span> -{" "}
              <span>{forecast.temperature.min.celsius}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
