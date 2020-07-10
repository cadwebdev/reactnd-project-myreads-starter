import React from 'react'
import Book from './Book'
import propTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

class Catgegory extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,
        books: propTypes.array.isRequired
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
                                    imageLink={book.imageLinks.thumbnail}
                                    title={book.title}
                                    authors={book.authors}
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