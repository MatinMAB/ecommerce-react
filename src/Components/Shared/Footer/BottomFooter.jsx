//React
import React from "react";

//Material Ui Components
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//CSS Styles
import styles from "./BottomFooter.module.css";

const footerMenu = [
 {
  title: "با فروشگاه ما",
  list: [
   "اتاق خبر",
   "فروش",
   "فرصت های شغلی",
   "گزارش تخلف",
   "تماس با ما",
   "درباره ما",
  ],
 },
 {
  title: "خدمات مشتریان",
  list: [
   "پاسخ به پرسش های متداول",
   "رویه های بازگرداندن کالا",
   "شرایط استفاده",
   "حریم خصوصی",
   "گزارش باگ",
  ],
 },
 {
  title: "راهنمای خرید",
  list: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه های پرداخت"],
 },
];

export default function BottomFooter() {
 return (
  <Grid container spacing={2} sx={{ mt: 6 }}>
   {footerMenu.map((item) => (
    <React.Fragment key={item.title}>
     <Grid item xs={6} sm={4} md={3}>
      <h5 className={styles.footerMenu_title}>{item.title}</h5>
      <ul className={styles.footerMenu_list}>
       {item.list.map((li) => (
        <li className={styles.footerMenu_listItem} key={li}>
         {li}
        </li>
       ))}
      </ul>
     </Grid>
    </React.Fragment>
   ))}
   <Grid item xs={6} sm={4} md={3}>
    <h5 className={styles.footerMenu_title}>همراه ما باشید!</h5>
    <ul className={`${styles.footerMenu_list} ${styles.flex_container}`}>
     <li>
      <InstagramIcon className={styles.social_icon} />
     </li>
     <li>
      <TwitterIcon className={styles.social_icon} />
     </li>
     <li>
      <LinkedInIcon className={styles.social_icon} />
     </li>
     <li>
      <GitHubIcon className={styles.social_icon} />
     </li>
    </ul>
    <h5 style={{ marginTop: "6px" }}>ما را در شبکه های اجتماعی دنبال کنید.</h5>
   </Grid>
  </Grid>
 );
}
