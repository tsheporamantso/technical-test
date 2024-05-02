import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Game from '../pages/Game';
import LearningPortal from '../pages/LearningPortal';
import Event from '../pages/Event';

const Layout = () => (
  <>
    <nav>
      <NavBar />
    </nav>
    <div className="h-screen">
      <Game />
      <LearningPortal />
      <Event />
    </div>
    <footer>
      <Footer />
    </footer>
    <Outlet />
  </>
);

export default Layout;
