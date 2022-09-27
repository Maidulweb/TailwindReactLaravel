import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../context/ContextProvider';
import '../assets/css/Header.css';
import {FcMenu} from 'react-icons/fc';
import { HiViewGrid } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
const Header = () => {
  const {activeSidebar, setActiveSidebar} = useStateContext();
  const navigate = useNavigate();
  const admin_auth = localStorage.getItem('admin_login_token');
  const admin_username = localStorage.getItem('admin_username_token');

  const logout = () => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post('/api/logout')
           .then(res=>{
            if(res.data.status === 201){
              localStorage.clear();
              navigate('/access_error');
            }
           })
    });
  }
    return (
      <div className="bg-slate-200 px-4">
        <div className="flex justify-between">
          <div className="flex items-center h-16">
            <button
              type="button"
              onClick={() => setActiveSidebar((prev) => !prev)}
            >
              <FiSettings />
            </button>

            <div className="navbar flex items-center">
              <div className="responsive-icon lg:hidden pl-4">
                <FcMenu />
              </div>
          
            </div>
          </div>
          <div className="flex items-center w-2/5 header-search">
            <form className='w-full' action="">
              <input className="rounded pl-2 pt-1 pb-1" type="text" placeholder="Search" />
            </form>
          </div>
          <div className="navbar flex items-center">
            <ul className="">
              <li className="inline-block ml-5 text-base uppercase font-bold">
                {admin_auth ? (
                  <button className="capitalize">{admin_username}</button>
                ) : (
                  <Link to="/">
                    <HiViewGrid />
                  </Link>
                )}
              </li>
              <li className="inline-block ml-5 text-base uppercase font-bold">
                {admin_auth ? (
                  <button type="button" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/">
                    <HiViewGrid />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;