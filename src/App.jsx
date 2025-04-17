import React from 'react'
import Header from './components/HeaderFile.jsx'; 
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import DogList from './components/DogList.jsx';
import AddDog from './components/AddDog.jsx';
import './App.css'; 



const App = () => {


  
  return (
    <Router>
      <Header />
      <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4 text-blue-600 hover:text-blue-800">Dog List</Link> | 
        <Link to="/add" className="ml-4 text-blue-600 hover:text-blue-800">Add Dog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DogList />} />
        <Route path="/add" element={<AddDog />} />
      </Routes>
    </Router>
  );
};

export default App