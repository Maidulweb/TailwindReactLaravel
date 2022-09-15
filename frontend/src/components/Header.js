import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import {FcMenu} from 'react-icons/fc';
import { IoMdSearch } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
const Header = () => {
    return (
      <div className="bg-slate-200 px-4">
        <div className="flex justify-between">
          <div className="flex items-center h-16">
            <div className="">
              <FcMenu />
            </div>
            <div className="navbar flex items-center">
              <ul className="">
                {MenuItem.map((menu, index) => {
                  return (
                    <li
                      key={index}
                      className="inline-block ml-5 text-base uppercase font-medium"
                    >
                      <Link to={menu.link}>{menu.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="navbar flex items-center">
            <ul className="">
              <li className="inline-block ml-5 text-base uppercase font-bold">
                <Link to="/">
                  <IoMdSearch />
                </Link>
              </li>
              <li className="inline-block ml-5 text-base uppercase font-bold">
                <Link to="/">
                  <FaRegComment />
                </Link>
              </li>
              <li className="inline-block ml-5 text-base uppercase font-bold">
                <Link to="/">
                  <IoMdNotificationsOutline />
                </Link>
              </li>
              <li className="inline-block ml-5 text-base uppercase font-bold">
                <Link to="/">
                  <HiViewGrid />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;