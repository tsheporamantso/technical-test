import React from 'react';

const NavBar = () => (
  <nav className="bg-black">
    <div className="flex justify-between text-white items-center p-4 text-base">
      <p className="text-white">Login/Register</p>
      <ul className="flex gap-3">
        <li className="">
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="competition">Competition</a>
        </li>
      </ul>
    </div>

  </nav>
);

export default NavBar;
