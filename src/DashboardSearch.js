import React from 'react'
import * as BooksAPI from './BooksAPI'
import Catgegory from './Category'
import { Link } from 'react-router-dom'

class DashboardSearch extends React.Component {
    state = {
        query: '',
        searchResult: [],
        booksInShelf: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    booksInShelf: books
                }))
            })
    }

    updateQuery = (query) => {
        // const searchTerm = query.trim()
        this.setState(() => ({
            query: query
        }))
        if (query !== '') {
            this.search(query)
        } else {
            this.setState(() => ({
                searchResult: []
            }))
        }
    }

    search = (query) => {
        BooksAPI.search(query)
            .then((books) => {
                if (books.length > 0) {
                    books.forEach(book => book.shelf = 'none')

                    books.find((book) => this.state.booksInShelf.forEach(bookInShelf => {
                        if (book.id === bookInShelf.id) {
                            book.shelf = bookInShelf.shelf
                        }
                    }))
                    this.setState(() => ({
                        searchResult: books
                    }))
                }

            })
    }

    updateShelf = (shelf, book) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                const bookIndex = this.state.booksInShelf.findIndex(bookA => bookA.id === book.id)
                console.log(bookIndex)
                let newBooksArray = [...this.state.booksInShelf]
                if (bookIndex !== -1) {
                    newBooksArray[bookIndex] = { ...newBooksArray[bookIndex], shelf: shelf }
                } else {
                    book.shelf = shelf
                    newBooksArray.push(book)
                }
                console.log(newBooksArray)

                this.setState({
                    booksInShelf: newBooksArray
                })
            }
            )
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                {
                    this.state.searchResult.length > 0
                        ? <div className="search-books-results">
                            <Catgegory name="Search Result" books={this.state.searchResult} onChangeShelf={this.updateShelf} />
                            <ol className="books-grid"></ol>
                        </div>
                        : ''}
            </div>
        )
    }
}

export default DashboardSearch