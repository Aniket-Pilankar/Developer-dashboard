import { useSelector } from "react-redux";
import { selectActivity } from "../../redux/developer-redux/selector";
import { getDeveloperInfo } from "../../utils/helper";
import { getCalendarChartFormat } from "./helper";
import { tokens } from "../../styles/theme";
import { useTheme } from "@mui/material";

export interface VMProps {
  name: string;
}

export function useCalendarChartVM({ name }: VMProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const activity = useSelector(selectActivity);
  const developerInfo = getDeveloperInfo({ name, activity });
  const formattedData = getCalendarChartFormat(developerInfo?.dayWiseActivity);

  return { formattedData, theme, colors };
}
