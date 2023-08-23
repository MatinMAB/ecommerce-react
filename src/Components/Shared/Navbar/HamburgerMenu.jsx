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
                  <DiamondIcon sx={{ color: "#71008E", mr: 1 }} />
                  <span>اکسسوری</span>
                </li>
                <li className={styles.categoryListItem}>
                  <CheckroomIcon sx={{ color: "#EF7889", mr: 1 }} />
                  <span>لباس</span>
                </li>
                <li className={styles.categoryListItem}>
                  <DevicesIcon sx={{ color: "#71008E", mr: 1 }} />
                  <span>لوازم دیجیتال</span>
                </li>
                <li className={styles.categoryListItem}>
                  <WatchIcon sx={{ color: "#EF7889", mr: 1 }} />
                  <span>ساعت</span>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <List>
            <ListItem disablePadding>
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
            </ListItem>
            <ListItem disablePadding>
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
            </ListItem>
            <ListItem disablePadding>
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
            </ListItem>
            <ListItem disablePadding>
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
            </ListItem>
            <ListItem disablePadding>
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
            </ListItem>
            <ListItem disablePadding>
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
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
