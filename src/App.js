import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        {loggedIn ? (
          <Route path="/layout" element={<Layout />} />
        ) : null}
      </Routes>
    </Router>
  );
};

export default App;
