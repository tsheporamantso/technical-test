import React from 'react';

const NavBar = () => (
  <nav className="">
    <ul className="flex flex-row justify-between">
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="about">About</a>
      </li>
      <li>
        <a href="competition">Competition</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
