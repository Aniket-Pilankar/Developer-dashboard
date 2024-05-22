import { DayWiseActivity } from "../../types";
import { FormattedData } from "./types";

export function getBarChartFormat(
  dayActivityOfDeveloper: DayWiseActivity[] | undefined
) {
  if (!dayActivityOfDeveloper) return;
  const formattedData: FormattedData[] = dayActivityOfDeveloper.map((day) => {
    const result: FormattedData = { date: day.date };
    day.items.children.forEach((item) => {
      result[item.label] = item.count;
      result[`${item.label}Color`] = item.fillColor;
    });
    return result;
  });
  return formattedData;
}

export function getBarChartKeys(formattedData: FormattedData[] | undefined) {
  if (!formattedData) return;

  const firstItem = formattedData[0];

  const filteredKeys: string[] = Object.keys(firstItem).filter(
    (key) => key !== "date" && !key.endsWith("Color")
  );

  return filteredKeys;
}
