import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../../queries/queries";
import BookListItem from "../book-list-item/BookListItem";
import AddBook from "../add-book/AddBooks";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { loading, error, data } = useQuery(getBooksQuery);

  useEffect(() => {
    if (!loading) {
      setBooks(data.books);
    }
  }, [loading, data]);

  console.log(books);
  return (
    <div id="main">
      <ul id="book-list">
        {books.length ? (
          books.map(item => <BookListItem key={item.id} {...item} />)
        ) : (
          <div>Loading...</div>
        )}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
