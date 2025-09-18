import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const BookCard = ({ book, onAddToCart, onToggleWishlist, isWishlisted }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition relative">
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

      <div className="flex gap-2 mt-2">
        <button
          onClick={onAddToCart}
          className="flex-1 bg-green-500 text-white py-1 rounded hover:bg-green-600 transition"
        >
          <FiShoppingCart className="inline mr-1" />
          Add to Cart
        </button>
        <button
          onClick={onToggleWishlist}
          className={`p-1 rounded border ${
            isWishlisted ? "bg-red-500 text-white" : "bg-white text-red-500"
          } transition`}
        >
          <FiHeart size={20} />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
