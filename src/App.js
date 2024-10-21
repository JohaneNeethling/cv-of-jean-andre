// Import React and necessary components from react-router-dom for routing
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Import custom components for navigation and different sections of the app
import Navigation from "./components/Navbar";
import "./App.css"; // Import CSS for the App component
import GetToKnow from "./components/GetToKnow";
import History from "./components/History";
import Experience from "./components/WorkExperience";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Define the main App component
function App() {
  return (
    <div className="app">
      {" "}
      {/* Main application container */}
      <div className="navbar-container">
        {" "}
        {/* Container for the navigation bar */}
        <Navigation /> {/* Render the navigation bar */}
      </div>
      <div className="content">
        {" "}
        {/* Container for the main content */}
        <Routes>
          {" "}
          {/* Define the routes for the application */}
          <Route path="/" element={<Navigate to="/home" />} />{" "}
          {/* Redirect from root to /home */}
          <Route
            path="/home" // Route for the home page
            element={
              <>
                {/* Render multiple components on the home page */}
                <GetToKnow />
                <History />
                <Experience />
                <Qualifications />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route
            path="/get-to-know" // Route for the Get to Know section
            element={
              <>
                <GetToKnow /> {/* Render Get to Know component */}
                <History /> {/* Render History component */}
                <Contact />
              </>
            }
          />
          <Route path="/experience" element={<Experience />} />{" "}
          {/* Route for the Experience section */}
          <Route
            path="/qualifications" // Route for Qualifications section
            element={
              <>
                <Qualifications /> {/* Render Qualifications component */}
                <Skills /> {/* Render Skills component */}
                <Contact />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Route for Contact section */}
        </Routes>
        <Footer /> {/* Render footer at the bottom of the content */}
      </div>
    </div>
  );
}

// Export the App component for use in the main entry file
export default App;
