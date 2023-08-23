import React from "react";

//Material UI components
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DevicesIcon from "@mui/icons-material/Devices";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DiamondIcon from "@mui/icons-material/Diamond";
import WatchIcon from "@mui/icons-material/Watch";

// CSS
import styles from "./CarouselComponent.module.css";

function CarouselComponent() {
  return (
    <div className={styles.slider}>
      <Carousel
        sx={{
          boxShadow: "inset 0 0.3em 1.2em -1em #757575",
        }}
        interval={5000}
        fullHeightHover={true}
        navButtonsProps={{
          style: {
            backgroundColor: "#fff",
            borderRadius: 0,
            fontWeight: "bold",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button onClick={onClick} className={className} style={style}>
              {prev && "قبلی"}
              {next && "بعدی"}
            </Button>
          );
        }}
        IndicatorIcon={<CircleIcon sx={{ fontSize: "16px" }} />} // Previous Example
        indicatorIconButtonProps={{
          style: {
            margin: "0 2px",
            color: "#EF7889",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#71008E",
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "10px",
            textAlign: "center",
          },
        }}
      >
        <Paper
          sx={{
            boxShadow: "inset 0 0.3em 1.2em -1em #757575",
            display: "flex",
          }}
          className={styles.firstPaper}
        >
          <div className={styles.box}>
            <button className={`${styles.iphoneBtn} ${styles.btn}`}>
              آیفون
            </button>
          </div>
          <div className={styles.box}>
            <button className={`${styles.macBtn} ${styles.btn}`}>مک</button>
          </div>
          <div className={styles.box}>
            <div>
              <h2>دیجیتال</h2>
              <p>خرید های شگفت انگیز خود را انجام دهید.</p>
              <DevicesIcon
                sx={{ fontSize: { xs: "40px", md: "56px" }, mt: 1 }}
              />
            </div>
            <button className={`${styles.colorfulBtn} ${styles.btn}`}>
              <span
                style={{
                  border: "3px solid #71008E",
                  padding: "6px",
                  borderRadius: "7px",
                  backgroundColor: "rgba(114, 0, 142, 0.392)",
                }}
              >
                الان ببینید{" "}
              </span>
            </button>
          </div>
        </Paper>
        <Paper
          sx={{
            boxShadow: "inset 0 0.3em 1.2em -1em #757575",
            display: "flex",
          }}
          className={styles.secondPaper}
        >
          <div className={styles.box}>
            <div>
              <h2>لباس</h2>
              <p>خرید های شگفت انگیز خود را انجام دهید.</p>
              <CheckroomIcon
                sx={{ fontSize: { xs: "40px", md: "56px" }, mt: 1 }}
              />
            </div>
            <button className={`${styles.colorfulBtn} ${styles.btn}`}>
              <span
                style={{
                  border: "3px solid #71008E",
                  padding: "6px",
                  borderRadius: "7px",
                  backgroundColor: "rgba(114, 0, 142, 0.392)",
                }}
              >
                الان ببینید{" "}
              </span>
            </button>
          </div>
          <div className={styles.box}>
            <button className={`${styles.womenBtn} ${styles.btn}`}>
              مردانه
            </button>
          </div>
          <div className={styles.box}>
            <button className={`${styles.menBtn} ${styles.btn}`}>زنانه</button>
          </div>
        </Paper>
        <Paper
          sx={{
            boxShadow: "inset 0 0.3em 1.2em -1em #757575",
            display: "flex",
          }}
          className={styles.thirdPaper}
        >
          <div className={styles.box}>
            <button className={`${styles.necklaceBtn} ${styles.btn}`}>
              گردنبند
            </button>
          </div>
          <div className={styles.box}>
            <div>
              <h2>اکسسوری</h2>
              <p>خرید های شگفت انگیز خود را انجام دهید.</p>
              <DiamondIcon
                sx={{ fontSize: { xs: "40px", md: "56px" }, mt: 1 }}
              />
            </div>
            <button className={`${styles.colorfulBtn} ${styles.btn}`}>
              <span
                style={{
                  border: "3px solid #71008E",
                  padding: "6px",
                  borderRadius: "7px",
                  backgroundColor: "rgba(114, 0, 142, 0.392)",
                }}
              >
                الان ببینید{" "}
              </span>
            </button>
          </div>
          <div className={styles.box}>
            <button className={`${styles.ornamentsBtn} ${styles.btn}`}>
              زیور آلات
            </button>
          </div>
        </Paper>
        <Paper
          sx={{
            boxShadow: "inset 0 0.3em 1.2em -1em #757575",
            display: "flex",
          }}
          className={styles.fourthPaper}
        >
          <div className={styles.box}>
            <button className={`${styles.fossilWhiteBGBtn} ${styles.btn}`}>
              زمان های ماندگار
            </button>
          </div>
          <div className={styles.box}>
            <div>
              <h2>ساعت</h2>
              <p>خرید های شگفت انگیز خود را انجام دهید.</p>
              <WatchIcon sx={{ fontSize: { xs: "40px", md: "56px" }, mt: 1 }} />
            </div>
            <button className={`${styles.colorfulBtn} ${styles.btn}`}>
              <span
                style={{
                  border: "3px solid #71008E",
                  padding: "6px",
                  borderRadius: "7px",
                  backgroundColor: "rgba(114, 0, 142, 0.392)",
                }}
              >
                الان ببینید
              </span>
            </button>
          </div>
          <div className={styles.box}>
            <button className={`${styles.fossilBrownBGBtn} ${styles.btn}`}>
              لاکچری
            </button>
          </div>
        </Paper>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
