import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "../components/SidebarItem";
import "../assets/css/Sidebar.css";
import Logo from "../assets/images/logo.png";
import Admin from "../assets/images/admin.png";
import SidebarSub from "./SidebarSub";

const Sidebar = () => {
  return (
    <div className="sidebar bg-slate-300 h-screen w-2/4 lg:w-1/6">
      <div className="logo h-16">
        <img className="min-h-full" src={Logo} alt="" />
      </div>
      <div className="p-4 flex">
        <div className="profile-img w-1/3">
          <img className="rounded-full" src={Admin} alt="" />
        </div>
        <div className="profile-name flex items-center pl-2">
          <h2 className="text-lg font-medium">Administration</h2>
        </div>
      </div>
      <hr />
      <div className="sidebar-body pl-10 pt-4">
        {SidebarItem.map((item, index) => {
          return <SidebarSub item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
