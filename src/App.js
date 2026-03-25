import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Intro from "./ComponentsJsx/Intro.jsx";
import Header from "./ComponentsJsx/Header.jsx";
import Menu from "./ComponentsJsx/Menu.jsx";
import FinalScreen from "./ComponentsJsx/FinalScreen.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="App">
      <Header className="header-fixed" />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/final" element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
