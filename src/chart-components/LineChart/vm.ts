import { useSelector } from "react-redux";
import { selectActivity } from "../../redux/developer-redux/selector";
import { getDeveloperInfo } from "../../utils/helper";
import { useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { getLineChartFormat } from "./helper";

export interface VMProps {
  name: string;
}

export default function useLineChartVM({ name }: VMProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const activity = useSelector(selectActivity);
  const developerInfo = getDeveloperInfo({ name, activity });
  const formattedData = getLineChartFormat(developerInfo?.totalActivity);
  return { colors, formattedData };
}
