import React, { forwardRef } from "react";

//Material Ui components
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

//images
import ShopJet from "../../../images//SiteOptions/Shop-Jet.png";
import Truck from "../../../images/SiteOptions/truck.png";
import ShopPay from "../../../images/SiteOptions/Shop-Pay.png";
import Game from "../../../images/SiteOptions/game.png";
import Coupon from "../../../images/SiteOptions/coupon.png";
import ShopPlus from "../../../images/SiteOptions/shop-plus.png";
import Points from "../../../images/SiteOptions/points.png";
import LuckyBox from "../../../images/SiteOptions/lucky-box.png";
import Services from "../../../images/SiteOptions/services.png";
import Local from "../../../images/SiteOptions/local.png";
import Fidibo from "../../../images/SiteOptions/fidibo.png";
import Mehr from "../../../images/SiteOptions/mehr.png";
import Pindo from "../../../images/SiteOptions/pindo.png";

//components
import Option from "./Option";
import Service from "./Service";

//Transition for Modal Should be out of Component
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MoreOptionsModal({ isOpen, handleClose }) {
  return (
    <>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          <Typography flexGrow={1} variant="h6" color="initial">
            خدمات فروشگاه ما
          </Typography>
          <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
        </DialogTitle>
        <Divider></Divider>
        <DialogContent sx={{ maxHeight: "500px" }}>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2}>
              <Option src={LuckyBox} alt="lucky-box" typography="جعبه شانس" />
              <Option src={ShopPlus} alt="Shop-plus" typography="شاپ پلاس" />
              <Option src={Points} alt="get-points" typography="امتیاز بگیر" />
              <Option src={Coupon} alt="coupon" typography="کوله پر تخفیف" />
              <Option src={Game} alt="game-net" typography="گیم نت" />
              <Option
                src={Truck}
                alt="sending-truck"
                typography="شیوه های ارسال"
              />
            </Grid>
            <Typography variant="body2" color="#757575" sx={{ my: 4 }}>
              سرویس های فروشگاه ما
            </Typography>
            <Grid container spacing={2} sx={{ gap: 1, mx: 0.5 }}>
              <Service
                src={ShopJet}
                alt="shop-jet"
                title="فروشگاه جت"
                description="خرید سریع از اطراف خود"
              />
              <Service
                src={ShopPay}
                alt="shop-pay"
                title="شاپ پی"
                description="خرید قسطی"
              />
              <Service
                src={Services}
                alt="shop-services"
                title="فروشگاه سرویس"
                description="خدمات پس از فروش"
              />
              <Service
                src={Local}
                alt="shop-local"
                title="بومی و محلی"
                description="عرضه محصولات دست ساز"
              />
              <Service
                src={Fidibo}
                alt="shop-fidibo"
                title="فیدیبو"
                description="خرید کتاب الکترونیکی"
              />
              <Service
                src={Mehr}
                alt="shop-mehr"
                title="فروشگاه مهر"
                description="به مسیر مهربانی بیا"
              />
              <Service
                src={Pindo}
                alt="shop-pindo"
                title="پیندو"
                description="ثبت آگهی برای کالا و خدمات"
              />
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MoreOptionsModal;
