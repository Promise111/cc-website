import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/Error/Error.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import RootLayout from "./Pages/Root/Root";
import RootLayoutTwo from "./Pages/RootTwo/RootTwo";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Market from "./Pages/Market/Market";
import Deposit from "./Pages/Deposit/Deposit";
import Withdrawal from "./Pages/Withdrawal/Withdrawal";
import Transfer from "./Pages/Transfer/Transfer";
import Crypto from "./Pages/Crypto/Crypto";
import Indicies from "./Pages/Indicies/Indicies";
import Forex from "./Pages/Forex/Forex";
import Energies from "./Pages/Energies/Energies";
import Shares from "./Pages/Shares/Shares";
import ETFS from "./Pages/ETFS/ETFS";
import Option from "./Pages/Option/Option";
import Faqs from "./Pages/Faqs/Faqs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import History from "./Pages/History/History";
import Packages from "./Pages/Packages/Packages";
import Signal from "./Pages/Signal/Signal";
// import Logout from "./Pages/Logout/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "crypto",
        element: <Crypto />,
      },
      { path: "indicies", element: <Indicies /> },
      { path: "forex", element: <Forex /> },
      { path: "energies", element: <Energies /> },
      { path: "shares", element: <Shares /> },
      { path: "option", element: <Option /> },
      { path: "etfs", element: <ETFS /> },
      { path: "faqs", element: <Faqs /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "contactus", element: <Contact /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
  { path: "/signup", element: <Signup />, errorElement: <ErrorPage /> },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <RootLayoutTwo />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      { path: "market", element: <Market /> },
      { path: "deposit", element: <Deposit /> },
      { path: "withdraw", element: <Withdrawal /> },
      { path: "transfer", element: <Transfer /> },
      { path: "history", element: <History /> },
      { path: "packages", element: <Packages /> },
      { path: "signal", element: <Signal /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
