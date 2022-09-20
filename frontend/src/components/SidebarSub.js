import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Sidebar.css";

const SidebarSub = ({item}) => {
    const [SubState, setSubState] = useState(true)
    const handleToggle = () => setSubState(!SubState)
    return (
      <div>
        <div
          className="flex justify-between sidebar-item mt-5"
          onClick={item.subSidebar && handleToggle}
        >
          <div className="flex">
            <p className="text-lg font-medium pl-3">{item.title}</p>
          </div>
          <div className="mt-1.5 pr-2">{item.sidbaricon}</div>
        </div>
        {SubState && (
          <ul className="sidebar-body-subitem pt-1 pb-5 pl-16">
            {item.subSidebar.map((itemSub, indexSub) => {
              return (
                <li key={indexSub} item={itemSub} className="text-base">
                  <Link to={itemSub.link}>{itemSub.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
};

export default SidebarSub;