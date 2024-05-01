import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Game from '../pages/Game';

const Layout = () => (
  <div>
    <NavBar />
    <Footer />
    <Game />
    <Outlet />
  </div>
);

export default Layout;
