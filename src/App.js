import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {loggedIn ? <Route path="/layout" element={<Layout />} /> : null}
        <Route path="footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
