import React from "react";
import logo from "../assets/avatar.png";
import search from "../assets/search.svg";
import home from "../assets/home.svg";
import revenue from "../assets/revenue.svg";
import notifications from "../assets/notifications.svg";
import analytics from "../assets/analytics.svg";
import inventory from "../assets/inventory.svg";
import logout from "../assets/logout.svg";
import settings from "../assets/settings.svg";
import profile from "../assets/profile.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className=" fixed h-screen w-72 z-50">
      <div className="flex flex-col h-[100vh] p-5 shadow-md rounded-xl bg-white overflow-y-auto">
        <div className="flex items-center space-x-5">
          <img src={logo} alt="" />
          <div>
            <h3>Skillgorithm</h3>
            <p>hathacons@gmail.com</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex search bg-[#d6d5d5] p-2 rounded-md">
            <img src={search} alt="" />
            <input
              type="text"
              className="bg-transparent outline-none text-lg"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="mt-16 space-y-4">
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={home} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Dashboard</p>
          </div>
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={revenue} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Revenue</p>
          </div>
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={notifications} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Notifications</p>
          </div>
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={analytics} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Analytics</p>
          </div>
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={inventory} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Inventory</p>
          </div>
        </div>
        <div className="mt-24 space-y-4">
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={profile} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Profile</p>
          </div>
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={settings} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Settings</p>
          </div>
          <div className="component flex items-center space-x-5 p-4 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={logout} alt="" className="w-8 h-8" />
            <p className="text-lg font-semibold">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
