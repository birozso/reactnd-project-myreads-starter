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

  getAllFromApi() {
    // put fethced books into state.allBooks
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
    })

  }

  componentDidMount() {
    this.getAllFromApi();

  }

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.getAllFromApi();

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