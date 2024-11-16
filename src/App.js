// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './contexts/BookContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import BuyBook from './pages/BuyBook';
import SellBook from './pages/SellBook';
import BookDetails from './pages/BookDetails';
import './App.css';

function App() {
  return (
    <BookProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/buy/:id" element={<BuyBook />} />
          <Route path="/sell" element={<SellBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </BookProvider>
  );
}

export default App;
