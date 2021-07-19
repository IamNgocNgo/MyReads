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
  
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  
  addShelfProperty() {
    if (this.state.searchBooks){
      //console.log(`Here3 ${this.state.searchBooks.length}`);
      let searchBooks = this.state.searchBooks.map((b) => {
        b.shelf = "none";
        //console.log(`Here4 ${this.props.books[2].id}  `);
        for (const libraryBook of this.props.books){
          if (b.id === libraryBook.id){
            b.shelf = libraryBook.shelf;
          //console.log(`Here5 ${this.props.books.length}  ${b.shelf} `);
          }
        }
           //console.log(`Here6 ${this.state.searchBooks[5].title}  ${b.shelf} `);
          return b;
      });
      this.setState({ searchBooks: searchBooks });
      //console.log(`Here8 ${this.state.searchBooks.length} `);
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query){
      if (!!this.state.query) {
      	BooksAPI.search(this.state.query, 20).then((searchBooks) => {this.setState({searchBooks: searchBooks})});
       // console.log(`Here ${this.state.searchBooks.length} `);
        this.addShelfProperty();
      }
      else 
        this.setState({searchBooks: []})
      
      
      
    }
  }
  
   
  render(){
    /*for (const searchBook of this.state.books){
      for (const libraryBook of this.props.books){
        if(searchBook.title === libraryBook.title){
          this.props.onHandleChangeShelf(searchBook, libraryBook.shelf);
        }
      }
    }*/
   /* this.state.books.map((searchBook, i)=> {
      for (const libraryBook of this.props.books){
        if(searchBook.title === libraryBook.title){
           return(this.setState({books: [...this.state.books.slice(0,i),
                             Object.assign({}, this.state.book[i], "shelf: libraryBook.shelf"),
                            ...this.state.books.slice(i+1)]}))
        }
      };
     
    })*/
    //console.log(`TEST: ${this.state.books[1].title}- ${this.state.books[1].shelf}`);  
    
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
