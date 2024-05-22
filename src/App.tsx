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

function App() {
  const dispatch = useAppDispatch();
  const activity = useSelector(selectActivity);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  if (isLoading) return <Loader />;
  return (
    <Stack mt={10} p={5}>
      <TopBar name={name} onChange={handleChange} />

      <Box>
        <Header title="Day Activity of Developer" subtitle={name} />
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
