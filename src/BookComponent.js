import React, { Component } from 'react';

class BookComponent extends Component {

    render() {
        let checkThumbnailExists = this.props.listBooks.imageLinks ? this.props.listBooks.imageLinks.thumbnail : '';


        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${checkThumbnailExists}"` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                         onChange = {(e) => this.props.moveToShelf(
                            this.props.listBooks, e.target.value)
                            }

                            value = {this.props.belongsToShelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>

                    </div>
                </div>
                <div className="book-title">{this.props.listBooks.title}</div>
                <div className="book-authors">{this.props.listBooks.authors}</div>
            </div>

        );
    }

}

export default BookComponent;

