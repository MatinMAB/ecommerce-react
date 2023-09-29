//React
import React from "react";

export default function FooterServices({ title, url }) {
 return (
  <div
   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
   }}
  >
   <img src={url} alt={title} />
   <p style={{ fontSize: "11px" }}>{title}</p>
  </div>
 );
}
