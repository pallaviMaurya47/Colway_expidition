
// This is the Navbar component for the TravelX website, providing navigation links to different pages. Connected to src/App.jsx for routing, and src/style.css for styling.
import { Link } from 'react-router-dom' // Imports Link component from react-router-dom for navigation without page reload. Connected to src/main.jsx for BrowserRouter setup.
import { useState } from 'react' // Import useState for hamburger menu toggle.

export default function Navbar() { // Defines and exports the Navbar function component, which renders the navigation bar. Connected to src/App.jsx for inclusion in app layout.
  const [isOpen, setIsOpen] = useState(false); // State to toggle hamburger menu.

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Function to toggle menu state.
  };

  return ( // Returns the JSX structure for the navbar.
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
          {/* <div className="dropdown">
            <span className="dropdown-toggle">Services</span>
            <div className="dropdown-menu"> */}
              <Link to="/expeditions" onClick={toggleMenu}>Expeditions</Link>
              <Link to="/trekking" onClick={toggleMenu}>Trekking</Link>
              <Link to="/enquire" onClick={toggleMenu}>Enquire</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            {/* </div>
          </div> */}
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/signup" className="btn" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  ) // Closes return statement.
} // Closes Navbar function.
