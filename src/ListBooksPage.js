import React from 'react'
import ListShelves from './ListShelves.js'
import { Link } from 'react-router-dom'

function ListBooksPage(props) {  
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
         <ListShelves {...props}/>
        </div>
      </div>

      <div className="open-search">
        <Link
        	to='/search'
            className='open-search'
        >Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooksPage