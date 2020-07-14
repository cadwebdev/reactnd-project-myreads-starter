import React from 'react'
import Catgegory from './Category'
import * as BooksAPI from './BooksAPI'

class DashboardShelf extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    updateShelf = (shelf, book) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                const bookIndex = this.state.books.findIndex(bookA => bookA.id === book.id)
                let newBooksArray = [...this.state.books]
                newBooksArray[bookIndex] = { ...newBooksArray[bookIndex], shelf: shelf }
                this.setState({
                    books: newBooksArray
                })
            }
            )
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Catgegory name="Currently Reading" books={this.state.books.filter(book => book.shelf === 'currentlyReading')} onChangeShelf={this.updateShelf} />
                        <Catgegory name="Want to Read" books={this.state.books.filter(book => book.shelf === 'wantToRead')} onChangeShelf={this.updateShelf} />
                        <Catgegory name="Read" books={this.state.books.filter(book => book.shelf === 'read')} onChangeShelf={this.updateShelf} />
                    </div>
                </div>

            </div>
        )
    }
}

export default DashboardShelf