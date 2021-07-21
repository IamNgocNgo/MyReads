import React from 'react'
import PropTypes from 'prop-types'


class Book extends React.Component { 
  /**
  * @description Handle a book change to other shelf 
  * when user click on choosing shelf option or add book to shelf
  */  
  handleChangeShelf = (event) => {
    event.preventDefault()
    let shelf = event.target.value;
    this.props.onHandleChangeShelf(this.props.aBook,shelf);
  }
  
  render(){
   const aBook = this.props.aBook;
    
   // Some books doesn't have imageLinks, then when we access .smallThumbnail of undefined, 
   // we will get error, so we need to check if imageLinks existed
   const placeholder = '../img/placeholder.png'; 
   const thumbnail = aBook.imageLinks ? aBook.imageLinks.thumbnail : placeholder;
   return(
     <div className="book">
      <div className="book-top">
     	<div className="book-cover" 
     	  style={{ 
     			width: 128, 
     			height: 193, 
     			backgroundImage: `url(${thumbnail})` 
          }}>
        </div>
         
        <div className="book-shelf-changer">
          <select value={aBook.shelf} onChange={this.handleChangeShelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      
      <div className="book-title">{aBook.title}</div>
      <div className="book-authors">{aBook.authors}</div>
     </div>
    )
  }
}

Book.propTypes = {
    aBook: PropTypes.object.isRequired,
    onHandleChangeShelf: PropTypes.func.isRequired
  }

export default Book