import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooksPage from './ListBooksPage.js'
import SearchBook from './SearchBook.js'

class BooksApp extends React.Component {
  state = {
    books: [],
  }
  
  /**
  * @description Get all books on the shelves (backend)
  */
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  
  /**
  * @description Handle a book change to other shelf
  * @param {object} book
  * @param {string} shelf
  */
  handleChangeShelf = (book, shelf) => {
   	BooksAPI.update(book, shelf).then(_=>this.getAllBooks())
  }
  
  /**
  * @description Get data from backend to display on main page
  */
  componentDidMount() {
    this.getAllBooks();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={() => (
          	<ListBooksPage 
      			books={this.state.books} 
  				onHandleChangeShelf={this.handleChangeShelf}
  			/>
          )}/>

          <Route path='/search' render={() => (
              <SearchBook 
            		books={this.state.books}
            		onHandleChangeShelf={this.handleChangeShelf}/>
          )}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp