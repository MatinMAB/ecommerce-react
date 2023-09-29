//React
import React from "react";

//Material Ui Components
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Container } from "@mui/material";

//Images
import Logo from "../../../images/logo.png";
import expressDelivery from "../../../images/Footer/express-delivery.svg";
import cashOnDelivery from "../../../images/Footer/cash-on-delivery.svg";
import support from "../../../images/Footer/support.svg";
import daysReturn from "../../../images/Footer/days-return.svg";
import originalProducts from "../../../images/Footer/original-products.svg";

//CSS Styles
import styles from "./TopFooter.module.css";

//Components
import FooterServicesComponent from "./FooterServices";

//React-Router-DOM
import { Link } from "react-router-dom";

const FooterServices = [
 {
  title: "امکان تحویل اکسپرس",
  url: expressDelivery,
 },
 {
  title: "امکان پرداخت در محل",
  url: cashOnDelivery,
 },
 {
  title: "7 روز هفته ، 24 ساعته",
  url: support,
 },
 {
  title: "7 روز ضمانت بازگشت کالا",
  url: daysReturn,
 },
 {
  title: "ضمانت اصل بودن کالا",
  url: originalProducts,
 },
];

export default function TopFooter() {
 return (
  <>
   <div className={styles.flex_container}>
    <div
     style={{
      columnGap: "16px",
     }}
     className={styles.flex_container}
    >
     <Link to="/">
      <img src={Logo} alt="logo" style={{ width: "80px" }} />
     </Link>
     <p style={{ fontSize: "12px", color: "#707070" }}>
      تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱{" "}
      <span style={{ color: "#000000", fontWeight: "bold" }}>|</span> ۷ روز
      هفته، ۲۴ ساعته پاسخگوی شما هستیم
     </p>
    </div>

    <button
     className={styles.btn_go_to_up}
     onClick={() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
     }}
    >
     <span>برگشت به بالا</span>
     <ArrowUpwardIcon sx={{ fontSize: "22px", ml: 1 }} />
    </button>
   </div>

   <div>
    <Container
     maxWidth="lg"
     sx={{
      my: 4,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
     }}
    >
     {FooterServices.map((service) => (
      <React.Fragment key={service.title}>
       <FooterServicesComponent url={service.url} title={service.title} />
      </React.Fragment>
     ))}
    </Container>
   </div>
  </>
 );
}
