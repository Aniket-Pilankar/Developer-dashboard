import { useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { selectActivity } from "../../redux/developer-redux/selector";
import { getBarChartFormat, getBarChartKeys } from "./helper";
import { useSelector } from "react-redux";
import { getDeveloperInfo } from "../../utils/helper";

export interface VMProps {
  name: string;
}

export default function useBarChartVM({ name }: VMProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const activity = useSelector(selectActivity);

  const developerInfo = getDeveloperInfo({ name, activity });
  const formattedData = getBarChartFormat(developerInfo?.dayWiseActivity);
  const barChartKeys = getBarChartKeys(formattedData);
  return { theme, colors, formattedData, barChartKeys };
}
