import React, { useState } from "react";

//Material UI components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import WatchIcon from "@mui/icons-material/Watch";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MoneyIcon from "@mui/icons-material/Money";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InfoIcon from "@mui/icons-material/Info";
import {
 Accordion,
 AccordionDetails,
 AccordionSummary,
 Typography,
} from "@mui/material";

//CSS
import styles from "./HamburgerMenu.module.css";

//React-Router-DOM
import { Link } from "react-router-dom";

function HamburgerMenu() {
 const [isOpen, setIsOpen] = useState("");
 const toggleDrawer = (open) => (event) => {
  if (
   event.type === "keydown" &&
   (event.key === "Tab" || event.key === "Shift")
  ) {
   return;
  }
  setIsOpen(open);
 };

 return (
  <>
   <MenuIcon
    onClick={toggleDrawer(true)}
    sx={{ color: "secondary.main", cursor: "pointer" }}
   />
   <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
    <Box
     sx={{ width: 250 }}
     role="presentation"
     onClick={toggleDrawer("close")}
     onKeyDown={toggleDrawer("close")}
    >
     <Accordion sx={{ borderBottomColor: "red" }}>
      <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="accordion-content"
       id="accordion-header"
      >
       <Typography sx={{ fontSize: "14px" }} fontWeight="bold">
        دسته&zwnj;بندی کالاها
       </Typography>
      </AccordionSummary>
      <AccordionDetails>
       <ul className={styles.categoryHamburgerMenu}>
        <li className={styles.categoryListItem}>
         <Link to="#">
          <DiamondIcon sx={{ color: "#71008E", mr: 1 }} />
          <span>اکسسوری</span>
         </Link>
        </li>

        <li className={styles.categoryListItem}>
         <Link to="#">
          <CheckroomIcon sx={{ color: "#EF7889", mr: 1 }} />
          <span>لباس</span>
         </Link>
        </li>
        <li className={styles.categoryListItem}>
         <Link to="#">
          <DevicesIcon sx={{ color: "#71008E", mr: 1 }} />
          <span>لوازم دیجیتال</span>
         </Link>
        </li>
        <li className={styles.categoryListItem}>
         <Link to="#">
          <WatchIcon sx={{ color: "#EF7889", mr: 1 }} />
          <span>ساعت</span>
         </Link>
        </li>
       </ul>
      </AccordionDetails>
     </Accordion>
     <List>
      <ListItem disablePadding>
       <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
        <ListItemButton>
         <ListItemIcon>
          <HomeIcon color="primary" />
         </ListItemIcon>
         <ListItemText
          primary={
           <Typography variant="caption" style={{ color: "#6e6e6e" }}>
            صفحه اصلی
           </Typography>
          }
         />
        </ListItemButton>
       </Link>
      </ListItem>
      <ListItem disablePadding>
       <Link to="/products" style={{ textDecoration: "none", width: "100%" }}>
        <ListItemButton>
         <ListItemIcon>
          <ShoppingBagIcon color="secondary" />
         </ListItemIcon>
         <ListItemText
          primary={
           <Typography variant="caption" style={{ color: "#6e6e6e" }}>
            محصولات
           </Typography>
          }
         />
        </ListItemButton>
       </Link>
      </ListItem>
      <ListItem disablePadding>
       <Link to="#" style={{ textDecoration: "none", width: "100%" }}>
        <ListItemButton>
         <ListItemIcon>
          <CardGiftcardIcon color="primary" />
         </ListItemIcon>
         <ListItemText
          primary={
           <Typography variant="caption" style={{ color: "#6e6e6e" }}>
            تخفیف ها و پیشنهادها
           </Typography>
          }
         />
        </ListItemButton>
       </Link>
      </ListItem>
      <ListItem disablePadding>
       <Link to="#" style={{ textDecoration: "none", width: "100%" }}>
        <ListItemButton>
         <ListItemIcon>
          <MoneyIcon color="secondary" />
         </ListItemIcon>
         <ListItemText
          primary={
           <Typography variant="caption" style={{ color: "#6e6e6e" }}>
            کارت هدیه
           </Typography>
          }
         />
        </ListItemButton>
       </Link>
      </ListItem>
      <ListItem disablePadding>
       <Link to="#" style={{ textDecoration: "none", width: "100%" }}>
        <ListItemButton>
         <ListItemIcon>
          <PhoneEnabledIcon color="primary" />
         </ListItemIcon>
         <ListItemText
          primary={
           <Typography variant="caption" style={{ color: "#6e6e6e" }}>
            تماس با ما
           </Typography>
          }
         />
        </ListItemButton>
       </Link>
      </ListItem>
      <ListItem disablePadding>
       <Link to="#" style={{ textDecoration: "none", width: "100%" }}>
        <ListItemButton>
         <ListItemIcon>
          <InfoIcon color="secondary" />
         </ListItemIcon>
         <ListItemText
          primary={
           <Typography variant="caption" style={{ color: "#6e6e6e" }}>
            درباره ما
           </Typography>
          }
         />
        </ListItemButton>
       </Link>
      </ListItem>
     </List>
    </Box>
   </Drawer>
  </>
 );
}

export default HamburgerMenu;
