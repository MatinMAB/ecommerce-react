import React from "react";

//Material Ui Components
import { Grid, Typography } from "@mui/material";

function Option({ md, src, alt, typography }) {
  return (
    <Grid
      item
      xs={4}
      sm={3}
      md={md && md}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={src} alt={alt} style={{ width: "33%", cursor: "pointer" }} />
      <Typography
        variant="subtitle1"
        color="initial"
        sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
      >
        {typography}
      </Typography>
    </Grid>
  );
}

export default Option;
