import React from "react";
import { FiUser, FiShield, FiHelpCircle, FiLogOut, FiBell, FiClock, FiShoppingBag, FiTag, FiCreditCard } from "react-icons/fi";

const SettingsPage = () => {
  const mainOptions = [
    { icon: <FiUser size={24} />, label: "Edit Profile" },
    { icon: <FiShield size={24} />, label: "Privacy Center" },
    { icon: <FiHelpCircle size={24} />, label: "Help Center" },
    { icon: <FiLogOut size={24} />, label: "Logout" },
  ];

  const additionalOptions = [
    { icon: <FiBell size={20} />, label: "Notification Settings" },
    { icon: <FiCreditCard size={20} />, label: "Saved Credit/Debit Card" }, // New point added
    { icon: <FiClock size={20} />, label: "Recently Viewed" },
    { icon: <FiShoppingBag size={20} />, label: "Store" },
    { icon: <FiTag size={20} />, label: "Coupon" },
    { icon: <FiUser size={20} />, label: "Points" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Grid section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {mainOptions.map((option, index) => (
          <button
            key={index}
            className="flex items-center gap-3 p-4 border border-gray-300 rounded 
                       hover:bg-gray-100 hover:border-blue-500 hover:scale-105 
                       transition transform duration-200"
          >
            {option.icon}
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>

      {/* Line-by-line section */}
      <div className="flex flex-col gap-3">
        {additionalOptions.map((option, index) => (
          <button
            key={index}
            className="flex items-center gap-3 p-3 border border-gray-300 rounded 
                       hover:bg-gray-100 hover:border-blue-500 hover:scale-105 
                       transition transform duration-200"
          >
            {option.icon}
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
