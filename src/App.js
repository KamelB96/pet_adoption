import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dogs from './components/Dogs';
import Home from './components/Home';
import Adoption from './components/Adoption';
import Edit from './components/Edit';
import Msg from './components/Msg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
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
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <li>
            <div class="dropdown">
  <a href='#' class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Link1</a>
    <a class="dropdown-item" href="#">Link2</a>
    <a class="dropdown-item" href="#">Link3</a>
  </div>
</div>
            </li> */}
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
            <Route path="/msg" element={<Msg />} />
          </Routes>
        </div>

      </Router>

    </div>
  );

}

export default App;

