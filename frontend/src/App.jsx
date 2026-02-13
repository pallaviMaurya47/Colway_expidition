
// This is the main App component that defines the overall structure and routing for the TravelX website. It includes the navbar and routes to different pages. Connected to src/main.jsx for rendering, and to all component files for navigation and content.
import { Routes, Route } from 'react-router-dom' // Imports routing components from react-router-dom for defining app routes. Connected to src/main.jsx for BrowserRouter setup.
import Navbar from './components/Navbar' // Imports the Navbar component for site navigation. Connected to src/components/Navbar.jsx.
import Home from './components/Home' // Imports the Home component for the main page content. Connected to src/components/Home.jsx.
import Login from './components/Login' // Imports the Login component for user authentication. Connected to src/components/Login.jsx.
import Signup from './components/Signup' // Imports the Signup component for user registration. Connected to src/components/Signup.jsx.
import UserDataForm from './components/UserDataForm' // Imports the UserDataForm component for collecting user data. Connected to src/components/UserDataForm.jsx.
import Contact from './components/Contact' // Imports the Contact component for contact information. Connected to src/components/Contact.jsx.
import Trekking from './components/Trekking' // Imports the Trekking component for trekking information. Connected to src/components/Trekking.jsx.
import Expeditions from './components/Expeditions' // Imports the Expeditions component for expeditions information. Connected to src/components/Expeditions.jsx.

export default function App() { // Defines and exports the main App function component, which is the root of the React app.
  return ( // Returns the JSX structure for the app layout.
    <> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enquire" element={<UserDataForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/expeditions" element={<Expeditions />} />
      </Routes>
    </> // Closes the React fragment.
  ) // Closes the return statement.
} // Closes the App function.
