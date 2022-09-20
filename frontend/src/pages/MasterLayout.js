import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";

const MasterLayout = () => {
  const {activeSidebar, setActiveSidebar} = useStateContext();
  return (
    <div>
      <div className="flex">
        {activeSidebar && (
            <Sidebar />
        )}
        <div className={activeSidebar ? `w-5/6`: `w-full`}>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
