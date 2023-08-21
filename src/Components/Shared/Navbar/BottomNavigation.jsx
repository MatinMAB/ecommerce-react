import React, { useState } from "react";

//Material UI components
import {
  Box,
  Button,
  Grid,
  Hidden,
  Menu,
  MenuItem,
} from "@mui/material";
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
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <DiamondIcon sx={{ color: "#71008E", mr: 1 }} />
                  اکسسوری
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <CheckroomIcon sx={{ color: "#EF7889", mr: 1 }} />
                  لباس
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <DevicesIcon sx={{ color: "#71008E", mr: 1 }} />
                  لوازم دیجیتال
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <WatchIcon sx={{ color: "#EF7889", mr: 1 }} />
                  ساعت
                </MenuItem>
              </Menu>
              <Typography variant="caption" color="initial">
                |
              </Typography>
            </Box>
            <nav>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                  <HomeIcon />
                  <span>صفحه اصلی</span>
                </li>
                <li className={styles.menuListItem}>
                  <ShoppingBagIcon />
                  <span>محصولات</span>
                </li>
                <li className={styles.menuListItem}>
                  <MoneyIcon />
                  <span>تخفیف ها و پیشنهادها</span>
                </li>
                <li className={styles.menuListItem}>
                  <CardGiftcardIcon />
                  <span>کارت هدیه</span>
                </li>
                <li className={styles.menuListItem}>
                  <PhoneEnabledIcon />
                  <span>تماس با ما</span>
                </li>
                <li className={styles.menuListItem}>
                  <InfoIcon />
                  <span>درباره ما</span>
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
          <ShoppingCartIcon
            sx={{ margin: "0 5px", cursor: "pointer" }}
            color="primary"
          />
          <FavoriteIcon
            sx={{ margin: "0 5px", cursor: "pointer" }}
            color="primary"
          />
          <NotificationsActiveIcon
            sx={{ margin: "0 5px", cursor: "pointer" }}
            color="primary"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default BottomNavigation;
