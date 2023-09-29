import React, { useState } from "react";

//Material UI components
import { Box, Button, Grid, Hidden, Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import CategoryIcon from "@mui/icons-material/Category";
import Typography from "@mui/material/Typography";
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
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

//Components
import HamburgerMenu from "./HamburgerMenu";

//CSS
import styles from "./BottomNavigation.module.css";

//React-Router-DOM
import { Link } from "react-router-dom";

function BottomNavigation() {
 //Anchor for category menu
 const [anchorEl, setAnchorEl] = useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <>
   <Grid
    container
    spacing={2}
    sx={{
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     my: 0.1,
    }}
   >
    <Grid
     xs={6}
     md={10}
     item
     sx={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
     }}
    >
     <Hidden mdDown>
      <Box>
       <Button
        sx={{
         color: "primary",
         ":hover": {
          backgroundColor: "unset",
         },
         "@media screen and (max-width:1200px)": {
          fontSize: "13px",
         },
        }}
        id="category-menu-btn"
        aria-controls={open ? "category-menu" : undefined}
        aria-haspopup="true"
        startIcon={<CategoryIcon />}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
       >
        دسته&zwnj;بندی کالاها
       </Button>
       <Menu
        id="category-menu"
        MenuListProps={{
         "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       >
        <Link to="#" style={{ textDecoration: "none", color: "unset" }}>
         <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
          <DiamondIcon sx={{ color: "#71008E", mr: 1 }} />
          اکسسوری
         </MenuItem>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "unset" }}>
         <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
          <CheckroomIcon sx={{ color: "#EF7889", mr: 1 }} />
          لباس
         </MenuItem>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "unset" }}>
         <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
          <DevicesIcon sx={{ color: "#71008E", mr: 1 }} />
          لوازم دیجیتال
         </MenuItem>
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "unset" }}>
         <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
          <WatchIcon sx={{ color: "#EF7889", mr: 1 }} />
          ساعت
         </MenuItem>
        </Link>
       </Menu>
       <Typography variant="caption" color="initial">
        |
       </Typography>
      </Box>
      <nav>
       <ul className={styles.menuList}>
        <li className={styles.menuListItem}>
         <Link to="/">
          <HomeIcon />
          <span>صفحه اصلی</span>
         </Link>
        </li>
        <li className={styles.menuListItem}>
         <Link to="/products">
          <ShoppingBagIcon />
          <span>محصولات</span>
         </Link>
        </li>
        <li className={styles.menuListItem}>
         <Link to="#">
          <MoneyIcon />
          <span>تخفیف ها و پیشنهادها</span>
         </Link>
        </li>
        <li className={styles.menuListItem}>
         <Link to="#">
          <CardGiftcardIcon />
          <span>کارت هدیه</span>
         </Link>
        </li>
        <li className={styles.menuListItem}>
         <Link to="#">
          <PhoneEnabledIcon />
          <span>تماس با ما</span>
         </Link>
        </li>
        <li className={styles.menuListItem}>
         <Link to="#">
          <InfoIcon />
          <span>درباره ما</span>
         </Link>
        </li>
       </ul>
      </nav>
     </Hidden>
     <Hidden mdUp>
      <HamburgerMenu />
     </Hidden>
    </Grid>
    <Grid
     item
     xs={6}
     md={2}
     sx={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
     }}
    >
     <Link to="#">
      <ShoppingCartIcon
       sx={{ margin: "10px 5px 0", cursor: "pointer" }}
       color="primary"
      />
     </Link>
     <Link to="#">
      <FavoriteIcon
       sx={{ margin: "10px 5px 0", cursor: "pointer" }}
       color="primary"
      />
     </Link>
     <Link to="#">
      <NotificationsActiveIcon
       sx={{ margin: "10px 5px 0", cursor: "pointer" }}
       color="primary"
      />
     </Link>
    </Grid>
   </Grid>
  </>
 );
}

export default BottomNavigation;
