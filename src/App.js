import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingpage';
import RegistrationForm from './pages/Registration/RegistrationForm';

import LoginForm from './pages/Registration/LoginForm';
import ServicesPage from './pages/Registration/ServicesPage';  // New ServicesPage component
import './App.css';

import AppBar from './components/AppBar/AppBar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userFullName, setUserFullName] = useState(null);  // Track the full name

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Retrieve user's full name from localStorage if available
    const name = localStorage.getItem('fullName');
    if (name) {
      setUserFullName(name);
    }
  }, []);

  return (
    <Router> {/* Only one Router should wrap the entire app */}
      <div className="app">
        {/* AppBar with a button to toggle the sidebar */}
        <AppBar toggleSidebar={toggleSidebar} />

        <div className="main-content">
          {/* Sidebar that opens/closes based on state */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <div className="content-area">
            {/* Routes for different pages */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/services" element={<ServicesPage />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
