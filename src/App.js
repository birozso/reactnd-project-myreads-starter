import React from 'react'

import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComponent from './SearchComponent'
import Mains from './Mains'

class BooksApp extends React.Component {
  state = {
    allBooks: []

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // put fethced books into state.allBooks
      this.setState({ allBooks: books })

    })

  }

  render() {
    return (
      <div className="app">
        <Mains
          ListBooks = {this.state.allBooks}
        />
      </div>

    )

  }
}

export default BooksApp
