// src/components/BookCard.js
import React from 'react';
//import '../BookCard.css';

const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <img src={book.image} alt={book.title} className="book-image" />
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <p>Price: {book.price}</p>
    </div>
  );
};

export default BookCard;
