import React, {useState, useEffect} from "react";
import { gql } from "apollo-boost";
import {useQuery} from "@apollo/react-hooks"
import BookListItem from "../book-list-item/BookListItem"
import AddBook from "../add-book/AddBooks"

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const [books, setBooks] = useState([])
  const {loading, error, data} = useQuery(getBooksQuery)
  
 useEffect(() => {
  if(!loading) {
    setBooks(data.books)
  }
 }, [loading])

 console.log(books)
  return (
    <div id="main">
      <ul id="book-list">
        {books.length ?(
          books.map(item => <BookListItem key={item.id} {...item}/>)
        ) : <div>Loading...</div>
        }
        
      </ul>
      <AddBook/>
    </div>
  );
};

export default BookList;
