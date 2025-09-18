import React from "react";

const CartPage = ({ cartItems, onRemove }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p>No books in cart.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((book) => (
            <div key={book.key} className="bg-white p-4 rounded shadow">
              <h2 className="font-bold">{book.title}</h2>
              <p className="text-sm">{book.author_name?.join(", ")}</p>
              <p className="font-semibold">${book.price}</p>
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

export default CartPage;
