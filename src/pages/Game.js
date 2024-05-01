import React from 'react';
import pslogo from '../assets/pslogo.png';
// import PS5 from '../assets/PS5.jpg';

const Game = () => (
  <div
    className="bg-cover bg-center bg-no-repeat h-screen"
    id="game__container"
  >
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-1">
        <img
          className="w-12 h-12 rounded-full"
          src={pslogo}
          alt="playstation logo"
        />
        <h2 className="text-base text-gray-500 font-semibold">
          PlayStation.Plus
        </h2>
      </div>
      <button
        className=" text-white py-2 px-10 border-2 bg-red-600 border-red-500 rounded-full"
        type="submit"
      >
        Join Now
      </button>
    </div>
    <div className="flex items-center justify-items-center gap-4">
      <div className="flex flex-col p-3 m-3">
        <p className="text-gray-500 text-xl">PlayStation Plus Season of Play</p>
        <h2 className="text-4xl text-slate-700">
          {' '}
          Win a PS5 console and 12-
          <br />
          months PlayStation Plus Delux subscribtion
        </h2>
        <small className="mt-4 text-xs text-black">
          Vertical stand and other accessories sold separately.
        </small>
      </div>
      {/* <img className="w- h-45" src={PS5} alt="playstation console" /> */}
    </div>
  </div>
);

export default Game;
