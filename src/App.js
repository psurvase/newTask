import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {token? <Logout setToken={setToken} /> : ''}
    </div>
  );
}

export default App;