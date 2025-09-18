import React from "react";

const AddToCart = ({ cartItems = [], onRemove, onClose }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="mb-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        X Close
      </button>

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((book) => (
            <div
              key={book.key}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded mb-2"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded mb-2">
                  No Image
                </div>
              )}
              <h2 className="font-bold text-lg">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author_name?.join(", ")}</p>
              <p className="mt-1 font-semibold">${book.price}</p>
              <button
                onClick={() => onRemove(book.key)}
                className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
