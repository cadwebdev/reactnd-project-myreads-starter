import React from 'react'
import propTypes from 'prop-types'

class BookShelfChanger extends React.Component {

    static propTypes = {
        book: propTypes.object.isRequired,
        // shelf: propTypes.string.isRequired,
        onChangeShelf: propTypes.func.isRequired
    }

    handleChange = (e) => {
        this.props.onChangeShelf(e.target.value, this.props.book)
    }

    render() {
        return (
            <div className="book-shelf-changer" >
                <select value={this.props.book.shelf} onChange={(e) => this.handleChange(e)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger