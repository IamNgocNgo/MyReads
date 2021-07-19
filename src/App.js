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
  
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  
  handleChangeShelf = (book, shelf) => {
   	BooksAPI.update(book, shelf).then(_=>this.getAllBooks())
  }
  
  componentDidMount() {
    this.getAllBooks();
  }
  

  render() {
    //const {getAllBooks} = this;
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

/* class BooksApp extends React.Component {
  state = {
    libraryBooks: [],
  }
  
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ libraryBooks: books })
    })
  }
  
  handleBookSelectShelfChange = (book, shelf) => {
  	BooksAPI.update(book, shelf)
    .then(_ => this.getAllBooks())
  }
  
  componentDidMount() {
    this.getAllBooks();
  }
  

  render() {
    //const {getAllBooks} = this;
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={() => (
          	<ListBooksPage 
      			libraryBooks={this.state.libraryBooks} 
  				onBookSelectShelfChange={this.handleBookSelectShelfChange}
  			/>
          )}/>

          <Route path='/search' render={() => (
              <SearchBook onBookSelectShelfChange={this.handleBookSelectShelfChange}/>
          )}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp*/
