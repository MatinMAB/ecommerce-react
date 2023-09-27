//React
import React from "react";

//Material UI Components
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";

//Import CSS styles
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
 return (
  <div className={styles.cardBox}>
   <img
    src={product.image}
    alt={product.title}
    className={styles.cardBox__img}
   />
   <div className={styles.cardBox__price}>
    <p className={styles.cardBox__price_title}>
     {`${`${Math.trunc(product.price)}0000`
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, "/")}`}
     <span className={styles.cardBox__price_toman}>تومان</span>
    </p>
    <span className={styles.cardBox__FavoriteIcon}>
     {product.title.includes("m") ? (
      <FavoriteBorderOutlinedIcon
       sx={{
        fontSize: "20px",
        color: "#EF7889",
       }}
      />
     ) : (
      <FavoriteIcon
       sx={{
        fontSize: "20px",
        color: "#EF7889",
       }}
      />
     )}
    </span>
   </div>
   <div>
    <span className={styles.cardBox__inventory}>
     <InventoryIcon
      sx={{
       fontSize: "16px",
       color: "#71008E",
      }}
     />

     <span>
      موجودی انبار :{" "}
      <span className={styles.cardBox__inventory_count}>
       {product.rating.count}
      </span>{" "}
      عدد
     </span>
    </span>
   </div>
   <button className={styles.cardBox__addToCartBtn}>اضافه به سبد خرید</button>
  </div>
 );
}
