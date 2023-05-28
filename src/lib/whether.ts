export const fetchWhetherInfo = async () => {
  const whetherApiUrl =
    "https://weather.tsukumijima.net/api/forecast/city/130010";
  const res = await fetch(whetherApiUrl);
  const json = await res.json();
  return json;
};
