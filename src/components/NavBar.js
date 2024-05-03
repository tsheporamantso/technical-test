import React from 'react';

const NavBar = () => (
  <nav className="bg-black">
    <div className="flex justify-between text-white items-center p-4 text-base">
      <h1 className="text-cyan-500 uppercase">Lesego</h1>
      <div className="lg:hidden md:hidden cursor-pointer">
        <span id="bar" />
        <span id="bar" />
        <span id="bar" />
      </div>
      <ul className="flex gap-3 max-md:hidden">
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
