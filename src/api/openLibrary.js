export const fetchBooks = async (title) => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    );
    const data = await response.json();

    // Return top 20 books for simplicity
    return data.docs.slice(0, 20);
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
