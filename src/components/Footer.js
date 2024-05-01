import React from 'react';
import { FaLinkedinIn, FaGithub, FaAngellist } from 'react-icons/fa';

const Footer = () => (
  <footer className=" flex flex-col gap-1 py-1 fixed bottom-0 bg-black text-white w-full text-center text-base">
    <a
      className="text-2xl font-medium mb-8 inline-block"
      id="footer__log"
      href="home"
    >
      LESEGO
    </a>
    <div
      id="footer__socials"
      className="flex justify-center items-center gap-4 mb-8"
    >
      <a href="facebook" target="blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="facebook" target="blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="facebook" target="blank" rel="noreferrer" aria-label="Angellist">
        <FaAngellist />
      </a>
    </div>
    <div className="" id="footer__copyright">
      <small>&copy; Lesego Putsoa. All rights reserved </small>
    </div>
  </footer>
);

export default Footer;
