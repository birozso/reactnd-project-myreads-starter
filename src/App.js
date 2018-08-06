import React from 'react'

import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComponent from './SearchComponent'
import Mains from './Mains'
import { Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    allBooks: []

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // put fethced books into state.allBooks
      this.setState({ allBooks: books })

    })

  }

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })

    })
  
  }

  render() {
    return (
      <div className="app">

      <Route exact path = "/" render = {() => (
          <Mains
              listBooks = {this.state.allBooks}
              moveToShelf = {this.moveToShelf}
          />
        )} 
      />

      <Route path = "/search" render = {() => (
          <SearchComponent 
             moveToShelf = {this.moveToShelf}
             listBooks = {this.state.allBooks}
          />
        )} 
      />
        
      </div>

    )

  }
}

export default App
