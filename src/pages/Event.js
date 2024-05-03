import React from 'react';
import react3 from '../assets/react3.jpg';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.jpg';
// import pslogo from '../assets/pslogo.png';
import java from '../assets/java.jpg';
import js from '../assets/js.jpg';

const cards = [
  {
    id: 1,
    img: react3,
    date: '04 MAY 2024 10:00',
    title: 'THE DEVELOPMENT OF REACT JS',
    venue: 'Online Zoom',
  },
  {
    id: 2,
    img: java,
    date: '04 MAY 2024 10:00',
    title: 'THE DEVELOPMENT OF RUBY',
    venue: 'Online Zoom',
  },
  {
    id: 3,
    img: rails,
    date: '04 MAY 2024 10:00',
    title: 'THE DEVELOPMENT OF RAILS',
    venue: 'Online Zoom',
  },
  // {
  //   id: 4,
  //   img: pslogo,
  //   date: '04 MAY 2024 10:00',
  //   title: 'THE DEVELOPMENT OF REACT PS5',
  //   venue: 'Mandela Square',
  // },
  {
    id: 5,
    img: ruby,
    date: '04 MAY 2024 10:00',
    title: 'THE DEVELOPMENT OF RUBY',
    venue: 'Online Zoom',
  },
  {
    id: 6,
    img: js,
    date: '04 MAY 2024 10:00',
    title: 'THE DEVELOPMENT OF JAVASCRIPT',
    venue: 'Online Zoom',
  },
];

const Event = () => (
  <div className="h-screen">
    <header className="flex justify-between p-5 max-md:flex-col max-md:gap-2 max-md:place-items-center">
      <div className="flex flex-col">
        <h1 className="text-blue-500">TECHSPO</h1>
        <h2 className="text-blue-500">JOHANNESBURG 2024</h2>
      </div>
      <div>
        <button
          className="hover:bg-blue-500 uppercase text-white py-3 px-6 rounded bg-green-700"
          type="button"
        >
          Buy tickets
        </button>
      </div>
    </header>
    <main>
      <section className="bg-blue-800 mx-5 p-5 flex text-white justify-between max-md:hidden">
        <h1 className="">GAUTENG TECH EVENTS</h1>
        <ul className="flex gap-5">
          <li>
            <a href="home">EVENTS</a>
          </li>
          <li>
            <a href="home">TOURISM & ACTIVITIES</a>
          </li>
          <li>
            <a href="home">RACE ENTRIES</a>
          </li>
          <li>
            <a href="home">VOUCHERS</a>
          </li>
          <li>
            <a href="home">LIST YOUR EVENTS</a>
          </li>
        </ul>
      </section>
      <section className="flex flex-row max-md:flex-col max-md:place-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col border-2 rounded-xl p-1 m-10 w-1/2 h-1/2"
          >
            <img src={card.img} alt="" />
            <small className="text-slate-400 font-thin">{card.date}</small>
            <h2 className="font-medium">{card.title}</h2>
            <p className="text-slate-600 text-sm font-extralight">
              {card.venue}
            </p>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export default Event;
