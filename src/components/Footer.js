import React from 'react';
import { FaLinkedinIn, FaGithub, FaAngellist } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <a id="footer__log" href="home">LESEGO</a>
    <div id="footer__socials">
      <a href="facebook" target="blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
      <a href="facebook" target="blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="facebook" target="blank" rel="noreferrer" aria-label="Angellist"><FaAngellist /></a>
    </div>
    <div id="footer__copyright">
      <small>&copy Lesego Putsoa. All rights reserved </small>
    </div>
  </footer>
);

export default Footer;
