import { useState } from 'react'
import { v4 } from 'uuid'

import booksStub from '../../data/books-data'
import BookCart from '../book-cart/book-cart'
import TotalCost from '../total-cost/total-cost'

const Basket = () => {
  const [books, setBooks] = useState(booksStub())

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const setQuatinty = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  return (
    <div>
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {books.map((book, index) => (
            <BookCart
              book={book}
              i={index}
              key={v4()}
              setQuatinty={setQuatinty}
              deleteBook={deleteBook}
            />
          ))}
          <TotalCost books={books} />
        </tbody>
      </table>
    </div>
  )
}

export default Basket
