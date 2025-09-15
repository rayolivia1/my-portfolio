import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Background.css';
import './Projects.css';

import { NavLink } from 'react-router-dom';
import './Nav.css';

import Home from './Home';
import Projects from './Projects';
import Exhibits from './Exhibits';
import About from './About';

function App() {
  return (
    <Router>
      {/* <header className = "my-header"> */}
      <main className = "app-wrapper">
        <nav className = "nav-bar">
          <NavLink to = "/" className = "nav-link">Home</NavLink>
          <NavLink to = "/projects" className = "nav-link">Projects</NavLink>
          <NavLink to = "/exhibits" className = "nav-link">Exhibits</NavLink>
          <NavLink to = "/about" className = "nav-link">About Me</NavLink>
        </nav>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/exhibits" element = {<Exhibits />} />
        <Route path = "/about" element = {<About/>} />
      </Routes>
      </main>
      {/* </header> */}
    </Router>
  )
}

export default App;