import "./App.css";
import { useState, useEffect } from "react";
import { fetchBooks } from "../services/api.js";
import Books from "./Books/Books.jsx";
import SearchBook from "./SearchBook/SearchBook.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("Квітка");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks(query);
        if (data) {
          console.log(data.items);
          setBooks(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [query]);

  const handleSubmit = (value) => {
    setQuery(value);
  };

  return (
    <>
      <SearchBook onChangeQuery={handleSubmit} />
      <Books books={books} />
    </>
  );
}

export default App;
