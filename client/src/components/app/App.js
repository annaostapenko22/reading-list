import React from "react";
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "@apollo/react-hooks"
import BookList from "../book-list/BookList";
import AddBook from "../add-book/AddBooks"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
})

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>My Reading List</h1>
      <BookList />
      <AddBook/>
    </ApolloProvider>
  );
}

export default App;
