import React from 'react';
import '../style/Header.css'; // Optional: for additional styling

const Header = () => {
  return (
    <header className="header backdrop-blur-md bg-opacity-40 bg-white shadow-lg rounded-lg mx-4 my-4 p-4 transition-all duration-300 transform hover:scale-105">
      <h1 className="text-4xl font-extrabold text-center text-white-800">WOWWWWWW!</h1>
      <nav className="nav">
        <ul className="flex justify-center gap-8 mt-4">
          <li><a href="/" className="text-lg text-gray-800 hover:text-blue-500 transition-all duration-300">Home</a></li>
          <li><a href="/about" className="text-lg text-gray-800 hover:text-blue-500 transition-all duration-300">About</a></li>
          <li><a href="/services" className="text-lg text-gray-800 hover:text-blue-500 transition-all duration-300">Services</a></li>
          <li><a href="/contact" className="text-lg text-gray-800 hover:text-blue-500 transition-all duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
