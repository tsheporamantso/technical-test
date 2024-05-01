import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => (
  <div>
    <NavBar />
    <Footer />
    <Outlet />
  </div>
);

export default Layout;
