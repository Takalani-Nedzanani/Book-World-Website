// src/contexts/BookContext.js
import React, { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "RESPONSIVE WEB DESIGN WITH HTML5 & CSS",
      author: "BEN FRAIN",
      price: "$10",
      image: "https://th.bing.com/th/id/OIP.5KiVQfzHH1DHS70nyrR4yAHaJO?rs=1&pid=ImgDetMain",
    },
    // Add initial sample books...
  ]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, { ...book, id: prevBooks.length + 1 }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
