import React from 'react';
import { Link } from "react-router-dom";
import { SidebarItem } from "../components/SidebarItem";
import '../assets/css/Sidebar.css';
import Logo from '../assets/images/logo.png';

const Sidebar = () => {
    return (
      <div>
        <div className="logo h-16">
          <img className="min-h-full" src={Logo} alt="" />
        </div>
        <h2 className="text-center text-lg font-semiboald">Sidebar</h2>
        <div className="sidebar-body pt-10">
          {SidebarItem.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-lg font-medium">{item.title}</p>
                <ul className="sidebar-body-subitem pt-2 pb-5">
                  {item.subSidebar.map((itemSub, indexSub) => {
                    return (
                      <li key={indexSub}>
                        <Link to={itemSub.link}>{itemSub.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Sidebar;