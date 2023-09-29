import React from "react";

//Material UI components
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { Box, TextField, Grid, Button, InputAdornment } from "@mui/material";

// images
import logo from "../../../images/logo.png";

//React-Router-DOM
import { Link } from "react-router-dom";

function TopNavigation() {
 return (
  <>
   <Grid
    container
    spacing={2}
    sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
   >
    <Grid item xs={2} md={1}>
     <Link to="/">
      <Box
       sx={{
        height: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
       }}
      >
       <img style={{ width: "70px" }} src={logo} alt="logo" />
      </Box>
     </Link>
    </Grid>
    <Grid item xs={6} md={8}>
     <Box
      sx={{
       display: "flex",
       justifyContent: "flex-start",
      }}
     >
      <TextField
       id="Search-box"
       label="جستجوی محصول"
       variant="outlined"
       size="small"
       sx={{ width: { sm: "80%", md: "50%", xs: "100%" } }}
       InputLabelProps={{
        style: { fontSize: 16, color: "#71008E" },
       }}
       InputProps={{
        style: { fontSize: 16 },
        startAdornment: (
         <InputAdornment position="start">
          <SearchIcon
           sx={{
            color: "action.active",
            cursor: "pointer",
           }}
          />
         </InputAdornment>
        ),
       }}
      />
     </Box>
    </Grid>
    <Grid item xs={4} md={3} sx={{ textAlign: "right" }}>
     <Link to="#">
      <Button
       variant="outlined"
       startIcon={
        <LoginIcon
         sx={{
          color: "#EF7889",
          ":hover": {
           color: "#71008E",
          },
         }}
        />
       }
       sx={{
        fontSize: { xs: "12px", sm: "14px" },
        borderColor: "#EF7889",
        ":hover .muirtl-hao3aw-MuiSvgIcon-root": {
         color: "#71008E",
        },
       }}
      >
       ورود | ثبت نام
      </Button>
     </Link>
    </Grid>
   </Grid>
  </>
 );
}

export default TopNavigation;
