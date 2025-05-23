import axios from "axios";

export const fetchBooks = async (query) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}:ukrainian&langRestrict=uk`
  );
  return response.data;
};
