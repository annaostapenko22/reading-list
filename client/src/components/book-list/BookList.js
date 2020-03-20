import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../../queries/queries";
import BookListItem from "../book-list-item/BookListItem";
import BookDetaild from "../book-details/BookDetails";
import BookDetails from "../book-details/BookDetails";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedId, setSeletedId] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  useEffect(() => {
    if (!loading) {
      setBooks(data.books);
    }
  }, [loading]);

  const getSelectedBookId = id => {
    setSeletedId(id);
  };



  return (
    <div id="main">
      <ul id="book-list">
        {books.length ? (
          books.map(item => (
            <BookListItem
              key={item.id}
              {...item}
              getBookId={getSelectedBookId}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
      <BookDetails bookId={selectedId}/>
    </div>
  );
};

export default BookList;
