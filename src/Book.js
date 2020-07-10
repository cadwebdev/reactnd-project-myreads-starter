import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import propTypes from 'prop-types'

class Book extends React.Component {
    static propTypes = {
        imageLink: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        authors: propTypes.array.isRequired
    }

    render() {

        const { imageLink, title, authors } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLink})` }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>)
    }
}

export default Book