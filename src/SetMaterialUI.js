import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

function MaterialUI({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Vazir",
      fontSize: 16,
      fontWeightThin: 100,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MaterialUI;
