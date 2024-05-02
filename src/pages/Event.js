import React from 'react';
import EventCards from './EventCards';
import react3 from '../assets/react3.jpg';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.jpg';

const Event = () => (
  <div className="h-screen">
    <header className="flex justify-between p-5 max-md:flex-col max-md:gap-2">
      <logo className="flex flex-col">
        <h1 className="text-blue-500">TECHSPO</h1>
        <h2 className="text-blue-500">JOHANNESBURG 2024</h2>
      </logo>
      <div>
        <button className=" uppercase text-white py-3 px-6 rounded bg-green-700" type="button">Buy tickets</button>
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
      <section className="flex flex-row gap-5 justify-center items-center mt-3 max-md:flex-col">
        <div>
          <EventCards img={react3} date="04 MAY 2024 10:00" title="THE DEVELOPMENT OF REACT JS" venue="Online Zoom" />
          <EventCards img={ruby} date="04 MAY 2024 10:00" title="THE DEVELOPMENT OF RUBY" venue="Online Zoom" />
          <EventCards img={rails} date="04 MAY 2024 10:00" title="THE DEVELOPMENT OF RUBY" venue="Online Zoom" />
        </div>
        <div>
          <EventCards img={react3} date="04 MAY 2024 10:00" title="THE DEVELOPMENT OF REACT JS" venue="Online Zoom" />
          <EventCards img={ruby} date="04 MAY 2024 10:00" title="THE DEVELOPMENT OF RUBY" venue="Online Zoom" />
          <EventCards img={rails} date="04 MAY 2024 10:00" title="THE DEVELOPMENT OF RUBY" venue="Online Zoom" />
        </div>
      </section>
    </main>
  </div>

);

export default Event;
