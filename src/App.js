import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navbar";
import "./App.css";
import GetToKnow from "./components/GetToKnow";
import History from "./components/History";
import Experience from "./components/WorkExperience";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="navbar-container">
        <Navigation />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <>
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
            path="/get-to-know"
            element={
              <>
                <GetToKnow />
                <History />
              </>
            }
          />
          <Route path="/experience" element={<Experience />} />
          <Route
            path="/qualifications"
            element={
              <>
                <Qualifications />
                <Skills />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
