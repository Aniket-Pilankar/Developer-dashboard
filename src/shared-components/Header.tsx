import { Box, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../styles/theme";

interface Props {
  title: string;
  subtitle: string;
  activeDays?: number;
}

const Header = ({ title, subtitle, activeDays }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      mb="30px"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack direction={"column"}>
        <Typography
          variant="h4"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h6" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Stack>
      {Boolean(activeDays) && (
        <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
          Active Days: {activeDays}
        </Typography>
      )}
    </Box>
  );
};

export default Header;
