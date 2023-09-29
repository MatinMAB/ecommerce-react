//React
import React from "react";

//React-Router-dom
import { createBrowserRouter } from "react-router-dom";

//Components
import HomePage from "./Pages/HomePage";

//routes
export const router = createBrowserRouter([
 { path: "/", element: <HomePage /> },
]);
