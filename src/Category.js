import React from 'react'
import Book from './Book'
import propTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

class Catgegory extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,
        books: propTypes.array.isRequired,
        onChangeShelf: propTypes.func.isRequired
    }

    render() {
        const { name, books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={uuidv4()}>
                                <Book
                                    book={book}
                                    // imageLink={book.imageLinks.thumbnail}
                                    // title={book.title}
                                    // authors={book.authors}
                                    // shelf={book.shelf}
                                    onChangeShelf={this.props.onChangeShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Catgegory