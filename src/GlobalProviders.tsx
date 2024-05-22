import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useThemeContext } from "./styles/themeContext";

const GlobalProviders = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default GlobalProviders;
