import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import App from "../App";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
