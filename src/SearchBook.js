//import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks.js'
//import Book from './Book.js'

class SearchBook extends React.Component {
  state = {
    query: '',
    searchBooks:[]
  }
  
  /**
  * @description Update input string on Search bar
  * @param {string} query
  */
  updateQuery = (query) => {
    this.setState({ query: query })
  }
  
  /**
  * @description Add shelf attribute to all the books we found when searching, 
  * if books are already on our shelves, make sure they have same shelf with main page.
  * @param {array of object} books -  searchBooks that don't have shelf attribute
  * @returns {array of object} books -  searchBooks  that have correct shelf attribute
  */  
  addShelfProperty(books) {
    if(books){
      for (const b of books){
        b.shelf = "none";
        for (const libraryBook of this.props.books){
          if (b.id === libraryBook.id){
            b.shelf = libraryBook.shelf;
          }
        }
      }
      
    }
    return books;
  }
  
  /**
  * @description Get search books when user does searching by inserting query into search bar.
  * Call addShelfProperty() function to add shelf attribute to make sure 
  * books on main and search page have same shelf state.
  * @param {state} prevState - previous state
  */
  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query){
      if (!!this.state.query) {
      	const promise = BooksAPI.search(this.state.query, 20).then((searchBooks) => {
          //BooksAPI.search() function which is an asynchronous operation.
          //Also, when the results are fetched, the searchBooks state is updated. 
          //=> This is also an asynchronous operation.
          // if we call this.addShelfProperty() outside of BooksAPI.search(), 
          // it won't wait for the results to be fetched and the state to be updated.
          // Then, addShelfProperty function would add the shelf attribute to old search results.
          searchBooks = this.addShelfProperty(searchBooks); 
          this.setState({searchBooks: searchBooks})
        });
        
        //If an invalid search query is entered, the `BooksAPI.search` returns `error` property.
        promise.catch(error => console.log(`Caught by .catch ${error}`));
        
      }
      else 
        this.setState({searchBooks: []})   
    }
  }
  
   
  render(){
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className='close-search'
              >Close</Link>
      
              <div className="search-books-input-wrapper">       
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}
				/>
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid"></ol>
				<ListBooks books={this.state.searchBooks}
							onHandleChangeShelf={this.props.onHandleChangeShelf}/>
            </div>
            
      </div>
    )
  }
}
export default SearchBook
/*

export default function SearchBook(props) {
  
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);

	const handleQueryInputChange = (evt) => {
    	let query = evt.target.value;
    	query.trim();
    	setQuery(query);
	};
  
	useEffect(() => {
      if (!!query) {
        BooksAPI.search(query, 20)
		.then(res => {
			setBooks(Array.isArray(res) ? res : [])
        });
      }
	}, [query]);
  

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          
    
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={handleQueryInputChange}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {!!books.length ? 
              books.map(_ =>(
                <li key={_.id}>
                    <Book book={_} {...props}/>
                </li>
              )) : (<p>No books found</p>)}
		</ol>
        
      </div>
    </div>
  );
}*/
