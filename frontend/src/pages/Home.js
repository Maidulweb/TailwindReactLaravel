import React from 'react';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
      <div>
        <div className="sidebar-main flex">
          <div className="sidebar bg-slate-300 h-screen w-1/6">
            <Sidebar />
          </div>
          <div className="header w-5/6">
            <Header />
          </div>
        </div>
      </div>
    );
};

export default Home;