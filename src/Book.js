import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import propTypes from 'prop-types'

class Book extends React.Component {
    static propTypes = {
        bookCoverURL: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        author: propTypes.string.isRequired
    }

    render() {

        const { bookCoverURL, title, author } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCoverURL})` }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>)
    }
}

export default Book