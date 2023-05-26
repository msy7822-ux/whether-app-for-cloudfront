export const fetchWhetherInfo = async () => {
  const whetherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&lang=ja&units=metric`;
  const res = await fetch(whetherApiUrl);
  const json = await res.json();
  return json;
};

export const key_i18n = {
  temp: "平均気温",
  temp_min: "最低気温",
  temp_max: "最高気温",
  humidity: "湿度",
} as const;
