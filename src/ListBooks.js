import React from 'react'
import Book from './Book.js'

class ListBooks extends React.Component {
  render() {
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Array.isArray(this.props.books)? 
      		this.props.books.map(book=> {
      		  return <li key={book.id}>
  						<Book aBook={book}
    					{...this.props}/> 
					 </li>
          	})
      		: <p>No books found</p>}
		</ol>
	  </div>
    )
  }
}
export default ListBooks