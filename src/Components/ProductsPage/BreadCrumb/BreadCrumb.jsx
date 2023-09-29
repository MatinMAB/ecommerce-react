//React
import React from "react";

//Material Ui Components
import Container from "@mui/material/Container";

//React-Router-DOM
import { Link, useLocation, useSearchParams } from "react-router-dom";

//CSS Styles
import styles from "./BreadCrumb.module.css";

export default function BreadCrumb() {
 const location = useLocation();
 const [searchParams] = useSearchParams();
 const params = [];

 for (let entry of searchParams.entries()) {
  params.push(entry);
 }

 return (
  <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
   <nav>
    <Link
     to="/"
     className={
      location.pathname === "/"
       ? styles.breadcrumb_active
       : styles.breadcrumb_not_active
     }
    >
     خانه
    </Link>
    <span className={styles.breadcrumb_arrow}>&gt;</span>
    <Link
     to="/products"
     className={
      location.pathname.startsWith("/products") &&
      !location.search.startsWith("?category")
       ? styles.breadcrumb_active
       : styles.breadcrumb_not_active
     }
    >
     محصولات
    </Link>
    {params.map(
     (param) =>
      param[0] === "category" && (
       <>
        <span className={styles.breadcrumb_arrow}>&gt;</span>
        <Link
         to={`/products?category=${param[1]}`}
         className={
          location.pathname.startsWith("/products") &&
          location.search.startsWith("?category")
           ? styles.breadcrumb_active
           : styles.breadcrumb_not_active
         }
        >
         {param[1] === "jewelery" && "جواهرات"}
         {param[1] === "men's clothing" && "لباس مردانه"}
         {param[1] === "women's clothing" && "لباس زنانه"}
         {param[1] === "electronics" && "لوازم دیجیتال"}
         {param[1] === "" && "همه"}
        </Link>
       </>
      )
    )}
   </nav>
  </Container>
 );
}
