import React from 'react';
import { MdOutlineScience } from 'react-icons/md';
import { TbMathFunction, TbMath1Divide2 } from 'react-icons/tb';
import { PiMathOperationsBold } from 'react-icons/pi';
import { FaComputer } from 'react-icons/fa6';

const LearningPortal = () => (
  <div className="mt-5 h-screen flex flex-col">
    <h1 className="m-5 border-2 border-slate-300 p-10 font-semibold text-4xl">LSG eLearning</h1>
    <div className="m-5 border-2 p-9 border-slate-300 flex gap-3 max-md:flex-col">
      <div className="w-10/12 max-md:w-full">
        <ul className="bg-blue-400 text-white p-9">
          <li>
            <h1 className="font-semibold text-3xl">Quality Education</h1>
          </li>
          <li>
            <h2 className="text-xl">for every child</h2>
          </li>
          <li>
            <h2 className="text-xl">for every classroom</h2>
          </li>
          <li>
            <h2 className="text-xl">for every school</h2>
          </li>
          <li>
            <h2 className="text-xl">in the province</h2>
          </li>
          <div>
            <ul className="text-5xl text-blue-300 flex gap-1 max-md:flex-col">
              <li className="border-2 border-blue-300 rounded-full p-1 bg-white max-md:rounded">
                <MdOutlineScience />
              </li>
              <li className="border-2 border-blue-300 rounded-full p-1 bg-white max-md:rounded">
                <TbMathFunction />
              </li>
              <li className="border-2 border-blue-300 rounded-full p-1 bg-white max-md:rounded">
                <PiMathOperationsBold />
              </li>
              <li className="border-2 border-blue-300 rounded-full p-1 bg-white max-md:rounded">
                <TbMath1Divide2 />
              </li>
              <li className="border-2 border-blue-300 rounded-full p-1 bg-white max-md:rounded">
                <FaComputer />
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="border-2 border-slate-300 p-10 w-1/5 max-md:w-full">
        <p className="text-blue-600 text-2xl">Welcome to our 24/7 365 flexible, anytime, any place learning space.</p>
      </div>

    </div>
  </div>
);

export default LearningPortal;
