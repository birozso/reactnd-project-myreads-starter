import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import BookComponent from './BookComponent';
import { Link } from 'react-router-dom'

class SearchComponent extends Component {

state = {
    query: '',
    results:[]
}

updateQuery = (q) => {
   // this.setState({query: q})
    // blocking the first space in the search field
        let trimmedQuery = q.replace(/^\s+/, '')
        this.setState({
          query: trimmedQuery
        
    }) 
    this.fetchSearchResult(this.state.query);
}

fetchSearchResult = (q) => {
    if (this.state.query){
        BooksAPI.search(q).then((searchResult) => {
            if (searchResult.error) {
                this.setState({results: []});
            }
            else {
                this.setState({results: searchResult});
            }            
        }).catch((error) => {
            console.log(error);
            this.setState({results: []})

        })
    }
    else {
        this.setState({results: []})
    }

}


render() {

        return (
            <div className="search-books">

                <div className="search-books-bar">
                    <Link
                    to = "/" 
                    className="close-search" 
                    >Close</Link>

                    <div className="search-books-input-wrapper">

                       <input 
                       type="text" 
                       placeholder="Search by title or author"
                       value = {this.state.query}
                       onChange = {(e) => this.updateQuery(e.target.value)}
                       />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">

                    { 
                        this.state.results.map(result => {
                            let initShelf = "none";
                            this.props.listBooks.map(book => (
                                book.id === result.id ? initShelf = book.shelf : "none")
                            )

                            return (

                            <li key = {result.id}>
                                <BookComponent
                                    listBooks = {result} 
                                    belongsToShelf = {initShelf}
                                    moveToShelf = {this.props.moveToShelf}
                                />
                            </li>);
                        })
                    }

                    </ol>
                </div>
            </div>

        );

    }

}

export default SearchComponent;
