import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import BookingForm from "../pages/Reservation/BookingForm";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Router() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/reservation",
          element: <BookingForm />,
        },
        {
          path: "/order-online",
          element: <OrderOnline />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}
