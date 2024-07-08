import React from 'react';
import "./header.scss";
import Sticker from '../sticker';
import Linkedinicon from "../../assets/svgicons/linkedin.svg";
import Instagramicon from "../../assets/svgicons/instagram.svg";
import { Link } from 'react-router-dom';

export default function header() {
  return (
    <div>
      <Sticker />

      <div className="container-header">
        <header>
          <div className="header-logo-and-contant-main">
            <div className="headerlogo-text-main">
              <Link to={"/"}><h1>WORLD OF PRIMUS</h1></Link>
            </div>
            <div className="header-contant-main">
              <p>LERNE UNS KENNEN</p>
              <p>KONTAKT</p>
              <p><span>SHOP</span></p>
            </div>
          </div>
          <div className="header-links-contant-main">
            <div className="linked-in-icon">
              <a href="https://www.linkedin.com/" target="__blank">
                <img src={Linkedinicon} alt="Linkedinicon" />
              </a>
            </div>
            <div className="instagram-icon">
              <a href="https://www.instagram.com/" target="__blank">
                <img src={Instagramicon} alt="Instagramicon" />
              </a>
            </div>
            <div className="Jetzt-icon-text-main">
              <Link to={"/"}><h2>JETZT BEWERBEN</h2></Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
