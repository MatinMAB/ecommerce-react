import React from "react";

//Material Ui
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";

function MaterialUI({ children }) {
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  // Create theme
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
    palette: {
      primary: {
        main: "#71008E",
      },
      secondary: {
        main: "#EF7889",
      },
      light: {
        main: "#ffffff",
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>
    </ThemeProvider>
  );
}

export default MaterialUI;
