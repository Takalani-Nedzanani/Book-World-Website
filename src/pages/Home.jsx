// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const latestBooks = [
  { id: 1, title: 'C PROGRAMMING LANGUAGE', author: 'DARREL L. GRAHAM', image: 'https://th.bing.com/th/id/R.cf9a38660f0c7e02167795a3b19424f5?rik=AHWo3NYE8gGDUQ&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f2940153395524_p0_v1_s1200x630.jpg&ehk=TTqClRjSsPINTdfILWjjb7XRcPaJWe648WhYLFu5bV8%3d&risl=&pid=ImgRaw&r=0' },
  { id: 2, title: 'REACT', author: 'LIONEL LOPEZ', image: 'https://th.bing.com/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?rs=1&pid=ImgDetMain' },
  { id: 3, title: 'ANGULAR', author: 'LAKSHMI KAMALA THOTA', image: 'https://danielk.tech/user/pages/01.home/best-angular-books/learn%20angular%20in%2024%20hours.jpeg' },
  { id: 4, title: 'FLUTTER', author: 'MARCO L. NAPOLI', image: 'https://flutterawesome.com/content/images/2019/04/Beginning-Flutter.jpg' },
  { id: 4, title: 'WINDOWS SERVER AUTOMATION WITH POWERSHELL', author: 'THOMAS LEE', image: 'https://m.media-amazon.com/images/I/5123y5fxRYL.jpg' },
];

const Home = () => {
  return (
    <div className="homes">
      <h2>Welcome to Book World</h2>
      <p>Your market place for buying and selling books.</p>
      <div className="home-buttonss">
        <Link to="/books" className="btn">Browse Books</Link>
        <Link to="/sell" className="btn">Sell a Book</Link>
      </div>

      <h3>Latest Books</h3>
      <div className="latest-bookss">
        {latestBooks.map((book) => (
          <div key={book.id} className="book-cards">
            <img src={book.image} alt={book.title} className="book-images" />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
