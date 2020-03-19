import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../../queries/queries";

const AddBooks = () => {
  const [authors, setAuthors] = useState([]);
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  console.log("data", data);
  useEffect(() => {
    if (!loading) {
      setAuthors(data.authors);
      console.log(data);
    }
  }, [loading]);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "bookName":
        return setBookName(value);
      case "genre":
        return setGenre(value);
      case "authorId":
        return setAuthorId(value);
      default:
        return null;
    }
  };

  const displayAuthors = () => {
    if (!authors.length) {
      return <option>Loading authors...</option>;
    } else {
      return authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (bookName && genre && authorId) {
      console.log("here=>", bookName, genre, authorId);
      await addBook({
        variables: { name: bookName, genre, authorId: authorId },
        refetchQueries: [{query: getBooksQuery}]
      });
      setBookName("");
      setGenre("");
      setAuthorId("");
    }
  };
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={bookName}
          name="bookName"
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" value={genre} name="genre" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={handleChange} name="authorId" value={authorId}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBooks;
