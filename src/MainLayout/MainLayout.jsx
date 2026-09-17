import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <div className="py-3">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
