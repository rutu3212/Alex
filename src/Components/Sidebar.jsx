import React, { useState } from "react";
import { FiShoppingCart, FiHeart, FiSettings, FiMenu, FiHome } from "react-icons/fi";

const Sidebar = ({ cartItems = [], wishlistItems = [], onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-500 text-white transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64`}
      >
        {/* Close Button */}
        <button
          className="p-4 focus:outline-none self-end"
          onClick={toggleSidebar}
        >
          ✕
        </button>

        {/* Logo */}
        <div className="text-center font-bold text-xl my-4">MyBookStore</div>

        {/* Sidebar Options */}
        <div className="flex flex-col gap-2 mt-4">
          <button
            className="flex items-center gap-3 p-3 hover:bg-blue-600 transition rounded-md"
            onClick={() => {
              onNavigate("home");
            }}
          >
            <FiHome size={20} /> <span>Home</span>
          </button>

          <button
            className="flex items-center gap-3 p-3 hover:bg-blue-600 transition rounded-md"
            onClick={() => {
              onNavigate("cart");
            }}
          >
            <FiShoppingCart size={20} /> <span>Add to Cart ({cartItems.length})</span>
          </button>

          <button
            className="flex items-center gap-3 p-3 hover:bg-blue-600 transition rounded-md"
            onClick={() => {
              onNavigate("wishlist");
            }}
          >
            <FiHeart size={20} /> <span>Wishlist ({wishlistItems.length})</span>
          </button>

          <button
            className="flex items-center gap-3 p-3 hover:bg-blue-600 transition rounded-md"
            onClick={() => {
              onNavigate("settings");
            }}
          >
            <FiSettings size={20} /> <span>Settings</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
