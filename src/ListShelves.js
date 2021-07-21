import React from 'react'
import ListBooks from './ListBooks.js'
import PropTypes from 'prop-types'

function ListShelves(props) {  
  const books = props.books;
    
  let shelves = [
    { title: "Currently Reading",
      value: "currentlyReading",
      books: []
    },
    { title: "Want to Read",
      value: "wantToRead",
      books: []
    },
    { title: "Read",
      value: "read",
      books: []
    },
  ];
    
  for (const book of books){
    for (const shelf of shelves){
      if(shelf.value === book.shelf){
        shelf.books.push(book);
        break;
      }
    }
  }
    
  return(	
    <div className="bookshelf">
      {shelves.map((shelf,i) => {return(
      	<div key={i}><h2 className="bookshelf-title">{shelf.title}</h2>
          <ListBooks
    		books={shelf.books}
      		onHandleChangeShelf={props.onHandleChangeShelf}
          />
        </div>
      )})}
    </div>   	
  )
}
export default ListShelves

ListShelves.propTypes = {
  books: PropTypes.array.isRequired
}