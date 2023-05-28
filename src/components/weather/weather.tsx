import { fetchWhetherInfo } from "../../lib/whether";
import { useQuery } from "@tanstack/react-query";
import { Forecasts } from "./forecasts";
import { useState } from "react";
import { Detail } from "./detail";

export const Weather = () => {
  const { data } = useQuery(["whether"], fetchWhetherInfo, {});
  const forecasts = data?.forecasts;
  const link = data?.link as string;

  // 0: 今日, 1: 明日, 2: 明後日
  const [selected, setSelected] = useState<0 | 1 | 2>(0);

  return (
    <div className="max-w-[800px] border shadow-lg rounded-[12px] p-12  mx-auto w-full gap-8 flex flex-col items-center">
      <Forecasts forecasts={forecasts} select={setSelected}></Forecasts>
      <Detail
        forecast={forecasts ? forecasts[`${selected}`] : null}
        link={link ?? null}
      ></Detail>
    </div>
  );
};
