import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <h1>Communion</h1>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/">About</Link>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2025 Communion App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;