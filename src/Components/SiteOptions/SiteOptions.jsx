import React, { useState } from "react";

//Material Ui components
import Container from "@mui/material/Container";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Grid, Typography } from "@mui/material";

//images
import ShopJet from "../../images//SiteOptions/Shop-Jet.png";
import Truck from "../../images/SiteOptions/truck.png";
import Total from "../../images/SiteOptions/Total.png";
import ShopPay from "../../images/SiteOptions/Shop-Pay.png";
import HarajStyle from "../../images/SiteOptions/Haraj-Style.png";
import Game from "../../images/SiteOptions/game.png";
import Coupon from "../../images/SiteOptions/coupon.png";

//Components
import MoreOptionsModal from "./MoreOptionsModal";
import Option from "./Option";

function SiteOptions() {
  const [isOpen, setIsOpen] = useState("");

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Option src={ShopJet} alt="shop-jet" typography="فروشگاه جت" md="1.5" />
        <Option
          src={HarajStyle}
          alt="haraj-style"
          typography="حراج استایل"
          md="1.5"
        />
        <Option src={ShopPay} alt="Shop-pay" typography="شاپ پی" md="1.5" />
        <Option src={Total} alt="total" typography="خرید عمده" md="1.5" />
        <Option src={Coupon} alt="coupon" typography="کوله پر تخفیف" md="1.5" />
        <Option src={Game} alt="game-net" typography="گیم نت" md="1.5" />
        <Option
          src={Truck}
          alt="sending-truck"
          typography="شیوه های ارسال"
          md="1.5"
        />
        <Grid
          item
          xs={4}
          sm={3}
          md={1.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MoreHorizIcon
            sx={{
              backgroundColor: "#f7f7f7",
              borderRadius: "50%",
              padding: "8px",
              fontSize: "46px",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            بیشتر
          </Typography>
          <MoreOptionsModal isOpen={isOpen} handleClose={handleClose} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SiteOptions;
