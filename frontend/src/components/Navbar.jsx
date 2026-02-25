import { Link } from 'react-router-dom' 
import { useState } from 'react'

export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="nav">
      <div className="container nav-content">
        <Link to="/">
          <h2>TravelX</h2>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
              <Link to="/expeditions" onClick={toggleMenu}>Expeditions</Link>
              <Link to="/trekking" onClick={toggleMenu}>Trekking</Link>
              <Link to="/enquire" onClick={toggleMenu}>Enquire</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/signup" className="btn" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  ) 
} 
