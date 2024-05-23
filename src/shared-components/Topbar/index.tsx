import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import useTopbarVM from "./vm";

interface TopBarProps {
  name: string;
  onChange: (event: SelectChangeEvent) => void;
}

const TopBar = ({ name, onChange: handleChange }: TopBarProps) => {
  const { colorMode, theme, namesOfDevelopers } = useTopbarVM();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" enableColorOnDark>
        <Toolbar>
          {namesOfDevelopers && (
            <Box sx={{ minWidth: 120, flexGrow: 1, padding: "10px" }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={name}
                  label="name"
                  onChange={handleChange}
                >
                  {namesOfDevelopers.map((elem) => (
                    <MenuItem value={elem.value}>{elem.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}
          <Button
            startIcon={
              theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )
            }
            onClick={colorMode.toggleMode}
          >
            {theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
