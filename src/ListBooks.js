import React from 'react'
import Book from './Book.js'

function ListBooks(props) {
  return(
    <div className="bookshelf-books">
      <ol className="books-grid">
        {Array.isArray(props.books)? 
      	  props.books.map(book=> {
      		return <li key={book.id}>
  					   <Book aBook={book}
    				   {...props}/> 
				   </li>
          })
      	  : <p>No books found</p>
		}
	  </ol>
	</div>
  )
}
export default ListBooks