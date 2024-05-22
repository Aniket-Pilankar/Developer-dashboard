import { tokens } from "../../styles/theme";
import { TotalActivity } from "../../types";

export const getLineChartFormat = (
  dayActivityOfDeveloper: TotalActivity[] | undefined
) => {
  console.log("dayActivityOfDeveloper:", dayActivityOfDeveloper);
  if (!dayActivityOfDeveloper) return;
  //   const transformedMockLineData = dayActivityOfDeveloper.map((day) => ({
  //     id: "totalActivity",
  //     color: tokens("dark").greenAccent[500],
  //     data: day.map((d) => ({
  //       x: d.name,
  //       y: d.,
  //     })),
  //   }));

  const formattedData = {
    id: "totalActivity",
    color: tokens("dark").greenAccent[500],
    data: dayActivityOfDeveloper.map((day) => ({
      x: day.name,
      y: Number(day.value),
    })),
  };

  console.log("formattedData:LineChart", formattedData);
  return formattedData;
};
