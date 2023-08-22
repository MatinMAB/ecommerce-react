import React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

//images
import ShopJet from "../../images//SiteOptions/Shop-Jet.png";
import Truck from "../../images/SiteOptions/truck.png";
import Total from "../../images/SiteOptions/Total.png";
import ShopPay from "../../images/SiteOptions/Shop-Pay.png";
import HarajStyle from "../../images/SiteOptions/Haraj-Style.png";
import Game from "../../images/SiteOptions/game.png";
import Coupon from "../../images/SiteOptions/coupon.png";

function SiteOptions() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ mt: 2 }}>
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
          <img
            src={ShopJet}
            alt="Shop-jet"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            فروشگاه جت
          </Typography>
        </Grid>
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
          <img
            src={HarajStyle}
            alt="haraj-style"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            حراج استایل
          </Typography>
        </Grid>
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
          <img
            src={ShopPay}
            alt="Shop-pay"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            شاپ پی
          </Typography>
        </Grid>
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
          <img
            src={Total}
            alt="total"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            خرید عمده
          </Typography>
        </Grid>
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
          <img
            src={Coupon}
            alt="coupon"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            کوله پر تخفیف
          </Typography>
        </Grid>
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
          <img
            src={Game}
            alt="game-net"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            گیم نت
          </Typography>
        </Grid>
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
          <img
            src={Truck}
            alt="sending-truck"
            style={{ width: "33%", cursor: "pointer" }}
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            شیوه های ارسال
          </Typography>
        </Grid>
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
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}
          >
            بیشتر
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SiteOptions;
