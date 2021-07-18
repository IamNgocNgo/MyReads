import React from 'react'
import ListBooks from './ListBooks.js'
import PropTypes from 'prop-types'

class ListShelves extends React.Component {
  
  render(){
    const books = this.props.books;
    
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
      		onHandleChangeShelf={this.props.onHandleChangeShelf}
      /></div>
      )})}

      </div>   	
    )
  }
}
export default ListShelves

ListShelves.propTypes = {
  books: PropTypes.array.isRequired
}
/*
export default function ListShelves(props) {
	const {libraryBooks = []} = props;
  
    const shelfConfigs = [
      {
        title: "Currently Reading",
        shelf: "currentlyReading"
      },
      {
        title: "Want to Read",
        shelf: "wantToRead"
      },
      {
        title: "Read",
        shelf: "read"
      }
    ]
    
    return(	
      <div className="bookshelf">
          {shelfConfigs.map((config, i) => {
      		return <div key={i}>
        		<h2 className="bookshelf-title">{config.title}</h2>
 		 		<ListBooks
      				books={libraryBooks.filter(b => b.shelf === config.shelf)}
    				{...props}
  				/>
  			</div>
			}
        )}
      </div>   	
    )
};*/