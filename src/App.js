import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
