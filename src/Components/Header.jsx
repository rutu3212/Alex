import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileModal from "../Pages/ProfileModel";
import HistoryModal from "../Pages/HistoryModel";

const Header = ({ history, setHistory }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const name = "Alex";

  // Variants for each letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Header Bar */}
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white shadow-md relative z-20">
        {/* Animated Heading */}
        <motion.div
          className="flex space-x-1 text-2xl font-bold bg-clip-text text-transparent relative z-10 ml-12" // Added ml-12 to move logo right
          style={{
            backgroundImage:
              "linear-gradient(270deg, #facc15, #f97316, #ec4899)", // yellow → orange → pink
            backgroundSize: "600% 600%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Profile Button */}
          <button
            onClick={() => setIsProfileOpen(true)}
            className="px-3 py-1 rounded transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:bg-blue-600 relative group"
          >
            Profile
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </button>

          {/* Language Selector */}
          <select className="bg-blue-500 px-2 py-1 rounded border border-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg relative group">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>

          {/* History Button */}
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="px-3 py-1 rounded transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:bg-blue-600 relative group"
          >
            History
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </button>
        </div>
      </header>

      {/* Profile Modal */}
      {isProfileOpen && (
        <ProfileModal onClose={() => setIsProfileOpen(false)} />
      )}

      {/* History Modal */}
      {isHistoryOpen && (
        <HistoryModal
          onClose={() => setIsHistoryOpen(false)}
          history={history}
          setHistory={setHistory}
        />
      )}
    </>
  );
};

export default Header;
