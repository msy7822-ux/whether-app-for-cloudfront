import { fetchWhetherInfo, key_i18n } from "./lib/whether";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, isLoading } = useQuery(["whether"], fetchWhetherInfo);
  const temp = data?.main?.temp;
  const temp_min = data?.main?.temp_min;
  const temp_max = data?.main?.temp_max;
  const humidity = data?.main?.humidity;

  if (isLoading) return <>loading...</>;

  return (
    <div className="max-w-[400px] mx-auto w-full flex flex-col items-center">
      <div>
        {key_i18n["temp"]}
        {temp}
      </div>
      <div>
        {key_i18n["temp_min"]}
        {temp_min}
      </div>
      <div>
        {key_i18n["temp_max"]}
        {temp_max}
      </div>
      <div>
        {key_i18n["humidity"]}
        {humidity}
      </div>
    </div>
  );
}

export default App;
