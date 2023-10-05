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
      location.pathname.startsWith("/products")
       ? styles.breadcrumb_active
       : styles.breadcrumb_not_active
     }
    >
     محصولات
    </Link>
   </nav>
  </Container>
 );
}