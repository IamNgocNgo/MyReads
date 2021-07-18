import React from 'react'
import Book from './Book.js'
//import PropTypes from 'prop-types'

class ListBooks extends React.Component {
  render() {
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Array.isArray(this.props.books)? this.props.books.map(book=> {
           return <li key={book.id}>
  						<Book aBook={book}
    					{...this.props}/> 
					</li>
          }) : <p>No books found</p>}
		</ol>
	</div>
    )
  }
}
export default ListBooks 

/*
export default function ListBooks(props) {
  const {books} = props;
  
    return(	
      <div className="bookshelf-books">
        <ol className="books-grid">
          {!!books.length ? 
              books.map(_ =>(
                <li key={_.id}>
                    <Book book={_} {...props}/>
                </li>
              )) : (<p>No books found</p>)}
		</ol>
	</div>
    );
}*/
