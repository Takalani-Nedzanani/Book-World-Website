// src/pages/Books.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import '../Books.css';

const sampleBooks = [
    {
      id: 1,
      title: "RESPONSIVE WEB DESIGN WITH HTML5 & CSS",
      author: "BEN FRAIN",
      price: "$10",
      image: "https://th.bing.com/th/id/OIP.5KiVQfzHH1DHS70nyrR4yAHaJO?rs=1&pid=ImgDetMain",
      explanation: "A comprehensive guide to building modern, responsive web designs using the latest HTML5 and CSS techniques. Ideal for developers looking to improve their design skills."
    },
    {
      id: 2,
      title: "OBJECT ORIENTED PROGRAMMING WITH C++",
      author: "VINOD CHANDRA SS",
      price: "$12",
      image: "https://www.madrasshoppe.com/208330-large_default/object-oriented-programming-with-c-chandra-vinod-ss.jpg",
      explanation: "Learn the principles of object-oriented programming with practical examples in C++. This book is perfect for beginners and advanced learners looking to strengthen their programming foundations."
    },
    {
      id: 3,
      title: "UNREAL ENGINE 4.X BY EXAMPLE",
      author: "BENJAMIN CARNAL",
      price: "$15",
      image: "https://imgv2-2-f.scribdassets.com/img/word_document/365186351/original/b36c946a58/1626965952?v=1",
      explanation: "Dive into game development with Unreal Engine 4.x. This book offers hands-on examples to help you create stunning games with cutting-edge technology."
    },
    {
      id: 4,
      title: "THE ULTIMATE MARKETING PLAN",
      author: "DAN S. KENNEDY",
      price: "$20",
      image: "https://th.bing.com/th/id/OIP.feRaRjOjiT1qM2yNiyLcpAHaLZ?rs=1&pid=ImgDetMain",
      explanation: "A step-by-step guide to crafting effective marketing strategies to grow your business. Packed with real-world examples and actionable advice."
    },
    {
      id: 5,
      title: "LEARN TO TEACH",
      author: "M VAN WYK",
      price: "$18",
      image: "https://th.bing.com/th/id/R.5659cb522a144071963f6fe1c0dfb3b7?rik=iMN0oj9MDvHhGA&pid=ImgRaw&r=0",
      explanation: "Designed for aspiring educators, this book provides insights into effective teaching strategies and classroom management."
    },
    {
      id: 6,
      title: "WARREN BUFFETT ACCOUNTING",
      author: "STING BRODERSEN",
      price: "$80",
      image: "https://www.porchlightbooks.com/globalassets/book-covers/9781939370150.jpg?w=1000&scale=both&mode=crop&u=637399854042130000",
      explanation: "An easy-to-follow guide to Warren Buffett's accounting principles, helping readers understand financial statements and make smarter investment decisions."
    },
    {
      id: 7,
      title: "WILLI'S ELEMENTS OF QUANTITY SURVEYING",
      author: "SANDRA LEE",
      price: "$30",
      image: "https://th.bing.com/th/id/R.2e0e18ec68e9e97e7eecf869be80efd1?rik=PX9CQzlQ0Kx%2bRA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_Gl66RNB9jLw%2fTIzzzxxfzjI%2fAAAAAAAAAWk%2faBVG-C46nDg%2fs1600%2fQuantity%2bSurveying%2bbooks.jpg&ehk=J5xes90zt%2brG650X%2ft90%2f%2ba2N5QtDF4%2f65qV4O5fG0Y%3d&risl=&pid=ImgRaw&r=0",
      explanation: "An essential resource for quantity surveying students and professionals, offering insights into estimating, cost control, and project management."
    },
    {
      id: 8,
      title: "ELECTRICAL ENGINEERS",
      author: "SURYA SANTOSO",
      price: "$15",
      image: "https://m.media-amazon.com/images/I/51ExFlYfROL.jpg",
      explanation: "A detailed guide to electrical engineering concepts, including circuit design, power systems, and advanced engineering techniques."
    },
    {
      id: 9,
      title: "CONSTRUCTION MATERIALS FOR CIVIL ENGINEERING",
      author: "ERROL VAN AMSTERDAM",
      price: "$57",
      image: "https://1.bp.blogspot.com/-uX4ZuWC8kv0/X4RePLcGoQI/AAAAAAAAADM/HHFaWXq2Re8fs1LzkJA_0X3vmOibpXpVQCLcBGAsYHQ/s841/Construction_for_Civil_Eng_2.jpg",
      explanation: "Explore the properties, applications, and testing of materials used in civil engineering construction, with a focus on practical use cases."
    },
    {
      id: 10,
      title: "HOTEL, RESTAURANT, AND TRAVEL LAW",
      author: "KAREN L. MORRIS",
      price: "$44",
      image: "https://th.bing.com/th/id/OIP.Fx61T1eQDLmekfBGtwdf9gHaJa?rs=1&pid=ImgDetMain",
      explanation: "A must-read for hospitality professionals, covering legal issues in the hotel, restaurant, and travel industries with real-world examples."
    },
  ];
  

const Books = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const filteredBooks = sampleBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleBookClick = (book) => {
      navigate(`/book/${book.id}`, { state: { book } });
    };
  
    return (
      <div className="books">
        <h2>Available Books</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => handleBookClick(book)} />
            ))
          ) : (
            <p className="no-results">No books found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Books;