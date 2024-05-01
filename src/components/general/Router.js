import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservation from "../pages/reservation/Reservation";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import Navbar from "./Navbar";

export default function Router() {
  const Layout = () => {
    return (
      <>
        <Navbar />
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
          element: <Reservation />,
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
