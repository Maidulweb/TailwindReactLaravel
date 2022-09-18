import React from 'react';
import { Link } from "react-router-dom";
import { SidebarItem } from "../components/SidebarItem";
import '../assets/css/Sidebar.css';
import Logo from '../assets/images/logo.png';
import Admin from '../assets/images/admin.png';


const Sidebar = () => {
    return (
      <div>
        <div className="logo h-16">
          <img className="min-h-full" src={Logo} alt="" />
        </div>
        <div className="p-4 flex">
          <div className="profile-img w-1/3">
            <img className="rounded-full" src={Admin} alt="" />
          </div>
          <div className="profile-name flex items-center pl-2">
            <h2 className='text-lg font-medium'>Administration</h2>
          </div>
        </div>
        <hr />
        <div className="sidebar-body pl-10 pt-4">
          {SidebarItem.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex">
                  <div className='mt-1.5'>{item.icon}</div>
                  <p className="text-lg font-medium pl-2">{item.title}</p>
                </div>

                <ul className="sidebar-body-subitem pt-1 pb-5 pl-12">
                  {item.subSidebar.map((itemSub, indexSub) => {
                    return (
                      <li key={indexSub} className="text-base">
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