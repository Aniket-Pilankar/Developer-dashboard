import { DayWiseActivity } from "../../types";

interface CalendarFormat {
  day: string;
  value: number;
}

export function getCalendarChartFormat(
  dayActivityOfDeveloper: DayWiseActivity[] | undefined
) {
  if (!dayActivityOfDeveloper) return;
  const formattedData: CalendarFormat[] = dayActivityOfDeveloper.map((day) => {
    const commitsItem = day.items.children.find(
      (item) => item.label === "Commits"
    );
    return {
      day: day.date,
      value: commitsItem ? parseInt(commitsItem.count) : 0,
    };
  });
  return formattedData;
}
