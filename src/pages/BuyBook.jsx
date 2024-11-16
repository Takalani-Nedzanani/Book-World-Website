// src/pages/Buy.js
import React from 'react';
import { useBooks } from '../contexts/BookContext';
import BookCard from '../components/BookCard';
//import '../Buy.css';

const Buy = () => {
  const { books } = useBooks();

  return (
    <div className="buy-page">
      <h2>Available Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Buy;
