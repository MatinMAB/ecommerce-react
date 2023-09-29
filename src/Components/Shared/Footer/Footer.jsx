//React
import React from "react";

//Material Ui Components
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

//Components
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import CopyRigth from "./CopyRigth";

export default function Footer() {
 return (
  <>
   <Divider />
   <Container maxWidth="xl" sx={{ mt: 6 , mb : 4}}>
    <TopFooter />
    <BottomFooter />
    <Divider sx={{my : 4}}/>
    <CopyRigth/>
   </Container>
  </>
 );
}
