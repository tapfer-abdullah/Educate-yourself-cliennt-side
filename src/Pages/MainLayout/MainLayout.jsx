/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import HomeSearchBar from "./HomeSearchBar/HomeSearchBar";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      {/* <HomeSearchBar></HomeSearchBar> */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
