// src/pages/SellBook.js
import React, { useState } from 'react';
import { useBooks } from '../contexts/BookContext';
import '../SellBook.css';

const SellBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const { addBook } = useBooks();

  const handleSell = () => {
    if (!title || !author || !price || !image) {
      alert("Please fill all fields.");
      return;
    }
    addBook({ title, author, price, image });
    alert(`Successfully listed "${title}" for sale.`);
    setTitle('');
    setAuthor('');
    setPrice('');
    setImage('');
  };

  return (
    <div className= "body1">
    <div className="sell-book">
      <h2>Sell a Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleSell}>Sell Book</button>
    </div>
    </div>
  );
};

export default SellBook;
