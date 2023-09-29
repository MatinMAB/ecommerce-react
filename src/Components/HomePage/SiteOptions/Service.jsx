import React from "react";

//Material UI components
import { Box, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Service({ src, alt, title, description }) {
  return (
    <Grid
      item
      xs={12}
      sm={5.7}
      display="flex"
      alignItems="center"
      sx={{
        cursor: "pointer",
        padding: 2,
        borderRadius: "15px",
        border: "1px solid #e0e0e0 ",
        transition: "background-color ease-in-out 0.3s",
        "&:hover": {
          backgroundColor: "#eeeeee ",
        },
      }}
    >
      <img src={src} alt={alt} style={{ width: "22%" }} />
      <Box flexGrow={1}>
        <h6
          style={{
            paddingRight: "10px",
            color: "#000",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          {title}
        </h6>
        <p
          style={{ paddingRight: "10px", fontSize: "12px", fontWeight: "bold" }}
        >
          {description}
        </p>
      </Box>
      <KeyboardBackspaceIcon />
    </Grid>
  );
}

export default Service;
