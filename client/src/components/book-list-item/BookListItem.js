import React from 'react'

const BookListItem = ({name, getBookId, id}) => {
return <li onClick={()=> getBookId(id)}>{name}</li>
}
export default BookListItem;