import React from "react";
import ApolloClient from "apollo-boost"


import BookList from "../src/components/book-list/BookList";

function App() {
  return (
    <>
      <h1>My Reading List</h1>
      <BookList />
    </>
  );
}

export default App;
