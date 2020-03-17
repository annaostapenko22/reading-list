import React from "react";
import { gql } from "apollo-boost";
import {useQuery} from "@apollo/react-hooks"

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
    const {loading, error, data} = useQuery(getBooksQuery)
    console.log(data)
  return (
    <div id="main">
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
};

export default BookList;
