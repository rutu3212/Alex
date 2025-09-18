import React from "react";

const HistoryModal = ({ onClose, history, setHistory }) => {
  // Delete a single history item
  const handleDeleteItem = (item) => {
    const updatedHistory = history.filter((h) => h !== item);
    setHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Search History</h2>

        {history.length === 0 ? (
          <p className="text-center text-gray-600">No search history yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {history.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 border rounded hover:bg-gray-100"
              >
                <span>{item}</span>
                <button
                  onClick={() => handleDeleteItem(item)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoryModal;
