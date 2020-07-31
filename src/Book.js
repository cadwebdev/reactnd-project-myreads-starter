import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import propTypes from 'prop-types'

class Book extends React.Component {
    static propTypes = {
        book: propTypes.object.isRequired,
        onChangeShelf: propTypes.func.isRequired
    }

    render() {
        const book = this.props.book
        return (
            <div className="book">
                <div className="book-top">
                    {book.hasOwnProperty('imageLinks')
                        ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        : <div className="book-cover" style={{ width: 128, height: 193 }}></div>
                    }
                    <BookShelfChanger book={book} onChangeShelf={this.props.onChangeShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>)
    }
}

export default Book