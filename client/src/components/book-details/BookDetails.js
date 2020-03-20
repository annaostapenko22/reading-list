import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../../queries/queries";

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });

  useEffect(() => {
    if (!loading) {
      setBook(data.book);
    }
  }, [loading]);

  const displayBookDetails = () => {
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  console.log("HERE DATA", book);
  return <div id="book-details">{displayBookDetails()}</div>;
};
export default BookDetails;
