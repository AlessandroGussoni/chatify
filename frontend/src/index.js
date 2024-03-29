import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Login from './views/loginform/login';
import Signup from './views/loginform/signup';
import Home from './views/home';
import NotFound from './views/not-found';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
