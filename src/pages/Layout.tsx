import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import App from "../App";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
