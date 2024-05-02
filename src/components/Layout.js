import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Game from '../pages/Game';
import LearningPortal from '../pages/LearningPortal';

const Layout = () => (
  <div className="flex flex-col h-full">
    <NavBar />
    <Game />
    <LearningPortal />
    <Footer />
    <Outlet />
  </div>
);

export default Layout;
