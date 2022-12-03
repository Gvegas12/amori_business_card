import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../sections/Header";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;