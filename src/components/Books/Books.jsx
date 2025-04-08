// import s from "./Books.module.css";

const Books = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors}</p>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
            {book.accessInfo.pdf.isAvailable && (
              <a href={book.accessInfo.pdf.acsTokenLink}>Link</a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Books;
