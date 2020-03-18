import React, {useState, useEffect} from 'react'
import { gql } from "apollo-boost";
import {useQuery} from "@apollo/react-hooks"


const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

 const AddBooks = () =>{
    const [authors, setAuthors] = useState([])
    const {loading, error, data} = useQuery(getAuthorsQuery)
    
   useEffect(() => {
    if(!loading) {
        setAuthors(data.authors)
        console.log(data)
    }
   }, [loading])
     return(
         <form>hi</form>
     )
 }
 
 export default AddBooks;