import React from "react";

//Material Ui components
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";

//components
import TopNav from "./TopNavigation";
import BottomNav from "./BottomNavigation";

function Navbar() {
  return (
    <header>
      <AppBar color="light" sx={{py : 1}}>
        <Container maxWidth="xl">
          <TopNav />
          <BottomNav/>
        </Container>
      </AppBar>
    </header>
  );
}

export default Navbar;
