import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingpage';
import RegistrationForm from './pages/Registration/RegistrationForm';
import LoginForm from './pages/Registration/LoginForm';
import './App.css';

import AppBar from './components/AppBar/AppBar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
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
              {/* Add other routes here as needed */}
            </Routes>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
