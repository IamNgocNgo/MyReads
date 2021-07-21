# MyReads Project

In the MyReads project, I create a bookshelf app that allows user to select and categorize books users have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I use to persist information as I interact with the application. There are 2 pages on the project:

### 1) Main page:

The main page displays a list of "shelves", each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets user select the shelf for that book. When user select a different shelf, the book moves there. The default value for the control are the current shelf the book is in.

The main page also has a link to /search, a search page that allows user to find books to add to user library.

### 2) Search page:

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets user add the book to user's library. 

When a book is on a bookshelf, it should have the same state (shelf state) on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When user navigate back to the main page from the search page, user should instantly see all of the selections user made on the search page in your library.

## Installation and launch instructions:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
