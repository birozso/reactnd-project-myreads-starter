import React, { Component} from 'react';
import BookComponent from './BookComponent'
import { Link } from 'react-router-dom'


class Mains extends Component {

    render() {

        return(

          /* structure same as the starter one  , some methods added */
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {

                      /* a filter and an embended map method in it , collect the books 
                       *  info that belongs to a specific shelf and  set the parameters of books inside
                       *  BookComponent component by passing the current value from Mains
                       */
                        this.props.listBooks
                        .filter(book => book.shelf === 'currentlyReading' )
                        .map(book => (
                            <li key = {book.id} >
                                <BookComponent
                                listBooks = {book}
                                belongsToShelf = "currentlyReading"
                                moveToShelf = {this.props.moveToShelf}
                                />
                            </li>
                            )
                        )
                    }

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {
                        this.props.listBooks
                        .filter(book => book.shelf === 'wantToRead' )
                        .map(book => (
                            <li key = {book.id} >
                                <BookComponent
                                listBooks = {book}
                                belongsToShelf = "wantToRead"
                                moveToShelf = {this.props.moveToShelf}/>
                            </li>
                            )
                        )
                    }

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {
                        this.props.listBooks
                        .filter(book => book.shelf === 'read' )
                        .map(book => (
                            <li key = {book.id} >
                                <BookComponent
                                listBooks = {book}
                                belongsToShelf = "read"
                                moveToShelf = {this.props.moveToShelf}/>
                            </li>
                            )
                        )
                    }

                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">

            {/* react-router Link function modify  the address line according to "Link to" property  */}
              <Link
              to = "/search" 
              onClick={() => this.setState({ showSearchPage: true })}>Add a book
              </Link>
            </div>
          </div>
        );
    }

}

export default Mains;