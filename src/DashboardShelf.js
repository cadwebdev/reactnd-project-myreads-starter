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

    render() {
        console.log(this.state.books)

        // const books = [
        //     { author: "Harper Lee", title: "To Kill a Mockingbird", bookCoverURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" },
        //     { author: "Orson Scott Card", title: "Ender's Game", bookCoverURL: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" }]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Catgegory name="Currently Reading" books={this.state.books.filter(book => book.shelf === 'currentlyReading')} />
                        <Catgegory name="Want to Read" books={this.state.books.filter(book => book.shelf === 'wantToRead')} />
                        <Catgegory name="Read" books={this.state.books.filter(book => book.shelf === 'read')} />
                    </div>
                </div>

            </div>
        )
    }
}

export default DashboardShelf