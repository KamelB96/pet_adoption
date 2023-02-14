import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dogs from './components/Dogs';
import Home from './components/Home';
import Adoption from './components/Adoption';
import Edit from './components/Edit'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <header className='topheader'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQP6DsL65NsAI84Tf4bebrP52TcjU5Za4iML8DEZAs8dgcCq0VrKBMJhJaO0eRs7ZzAU&usqp=CAU" alt="Dog paw" height="50px"></img>
          <h1>Pet Adoption</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQP6DsL65NsAI84Tf4bebrP52TcjU5Za4iML8DEZAs8dgcCq0VrKBMJhJaO0eRs7ZzAU&usqp=CAU" alt="Dog paw" height="50px"></img>
        </header>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dogs">Dogs</Link></li>
            <li><Link to="/adoption">Adoption Form</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dogs/:dogid" element={<Edit />} />
          </Routes>
        </div>

      </Router>

    </div>
  );

}

export default App;

