//React
import React from "react";

//Material Ui Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//Images
import PhoneGuard from "../../images/AdsBanner/phone-guard.jpg";
import NoodleBanner from "../../images/AdsBanner/noodle.jpg";

//CSS Styles
import styles from "./AdsBanner.module.css";


export default function AdsBanner() {
 return (
  <div>
   <Container maxWidth="xl">
    <Grid container spacing={2} sx={{ my: 8 }}>
     <Grid item xs={12} md={6}>
      <img className={styles.ads_img} src={PhoneGuard} alt="Phone-Guard" />
     </Grid>
     <Grid item xs={12} md={6}>
      <img className={styles.ads_img} src={NoodleBanner} alt="Phone-Guard" />
     </Grid>
    </Grid>
   </Container>
  </div>
 );
}
