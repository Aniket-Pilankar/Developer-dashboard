import { useSelector } from "react-redux";
import { useThemeContext } from "../../styles/themeContext";
import { selectActivity } from "../../redux/developer-redux/selector";
import { getName } from "./helper";

export default function useTopbarVM() {
  const { colorMode, theme } = useThemeContext();
  const activity = useSelector(selectActivity);

  const namesOfDevelopers = getName({ activity });
  return { colorMode, theme, namesOfDevelopers };
}
