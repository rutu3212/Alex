import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import BookCard from "../Components/BookCard";
import Sidebar from "../Components/Sidebar";
import AddToCart from "../Components/addToCart";
import WishlistPage from "../Components/wishlist";
import SettingsPage from "./SettingPage";
import { fetchBooks } from "../api/openLibrary";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [page, setPage] = useState("home"); // home / cart / wishlist / settings
  const [sidebarOpen, setSidebarOpen] = useState(false); // track sidebar

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
    handleSearch("React"); // default books
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");

    const updatedHistory = [query, ...history.filter((h) => h !== query)].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

    try {
      const results = await fetchBooks(query);
      const booksWithPrice = results.map((book) => ({
        ...book,
        price: (Math.random() * 50 + 5).toFixed(2),
      }));

      if (booksWithPrice.length === 0) setError("No books found.");
      setBooks(booksWithPrice);
    } catch {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (book) => setCartItems((prev) => [...prev, book]);
  const handleRemoveFromCart = (bookKey) =>
    setCartItems((prev) => prev.filter((b) => b.key !== bookKey));

  const handleAddToWishlist = (book) => {
    if (!wishlistItems.find((b) => b.key === book.key)) {
      setWishlistItems((prev) => [...prev, book]);
    }
  };
  const handleRemoveFromWishlist = (bookKey) =>
    setWishlistItems((prev) => prev.filter((b) => b.key !== bookKey));

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onNavigate={setPage}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header history={history} setHistory={setHistory} />

        {page === "home" && (
          <main className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col items-center my-10">
              <h1 className="text-4xl font-bold mb-6 text-center animate-bounce">
                Search Your Favorite Books
              </h1>
              <SearchBar onSearch={handleSearch} />
            </div>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <BookCard
                  key={book.key}
                  book={book}
                  onAddToCart={() => handleAddToCart(book)}
                  onToggleWishlist={() => handleAddToWishlist(book)}
                  isWishlisted={wishlistItems.some((b) => b.key === book.key)}
                  navigateToWishlist={() => setPage("wishlist")}
                />
              ))}
            </div>
          </main>
        )}

        {page === "cart" && (
          <AddToCart
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onClose={() => setPage("home")}
          />
        )}

        {page === "wishlist" && (
          <WishlistPage
            wishlistItems={wishlistItems}
            onRemove={handleRemoveFromWishlist}
            onClose={() => setPage("home")}
          />
        )}

        {page === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};

export default Home;
