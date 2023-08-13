import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/PricingPage";
import Checkout from "./pages/CheckoutPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css"; // Import the font for font-weight: 300
import "@fontsource/roboto/400.css"; // Import the font for font-weight: 400
import "@fontsource/roboto/500.css"; // Import the font for font-weight: 500
import "@fontsource/roboto/700.css"; // Import the font for font-weight: 700
import { ThemeContextProvider } from "./utils/ThemeContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "edit-profile",
    element: <EditProfilePage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <ThemeContextProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
