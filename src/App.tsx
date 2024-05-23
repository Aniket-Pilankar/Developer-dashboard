/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, SelectChangeEvent, Stack, Toolbar } from "@mui/material";
import "./App.css";
import BarChartComp from "./chart-components/BarChart";
import LineChartComp from "./chart-components/LineChart";
import Header from "./shared-components/Header";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { useSelector } from "react-redux";
import { selectActivity } from "./redux/developer-redux/selector";
import { fetchDeveloperActivity } from "./redux/developer-redux/thunk";
import Loader from "./shared-components/Loading";
import TopBar from "./shared-components/Topbar";
import CalendarChart from "./chart-components/CalendarChart";
import LineChart from "./chart-components/LineChart";
import { getName } from "./shared-components/Topbar/helper";
import { getDeveloperInfo } from "./utils/helper";

function useAppVM() {
  const dispatch = useAppDispatch();
  const activity = useSelector(selectActivity);

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const developerInfo = getDeveloperInfo({ name, activity });

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  useEffect(
    function initPage() {
      setIsLoading(true);

      dispatch(fetchDeveloperActivity())
        .then((res) => {
          console.log("res:", res);
          const activity = res.payload;
          const namesOfDevelopers = getName({ activity });
          if (!namesOfDevelopers) return;
          setName(namesOfDevelopers[0].value);
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch]
  );

  return { isLoading, name, handleChange, developerInfo };
}

function App() {
  const { isLoading, name, handleChange, developerInfo } = useAppVM();

  if (isLoading)
    return (
      <Stack
        position="absolute"
        top={"50%"}
        left={"50%"}
        sx={{ transform: "traslate(-50%,-50%)" }}
      >
        <Loader />
      </Stack>
    );
  return (
    <Stack mt={10} p={5}>
      <TopBar name={name} onChange={handleChange} />

      <Box>
        <Header
          title="Day Activity of Developer"
          subtitle={name}
          activeDays={developerInfo?.activeDays.days}
        />
        <Box height="500px">
          <BarChartComp name={name} />
        </Box>
      </Box>
      <Stack display={"flex"} direction="column" gap={5}>
        <Stack direction="column" flexGrow={1}>
          <Header title="Total Activity" subtitle={name} />
          <Box height="300px">
            <LineChart name={name} />
          </Box>
        </Stack>
        <Stack direction="column" flexGrow={1}>
          <Header title="Commits" subtitle={name} />
          <Box height="300px">
            <CalendarChart name={name} />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
