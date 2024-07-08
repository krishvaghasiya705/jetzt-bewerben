import React from "react";
import "./Footer.scss";
import Unionlog from "../../assets/svgicons/Unionlog";
import Linkedin from "../../assets/svgicons/linkedin";
import Instagram from "../../assets/svgicons/instagram";
import Sendicon from "../../assets/svgicons/sendicon";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-main-flx">
          <div className="footer-contant-one">
            <h1>WORLD OF PRIMUS</h1>
            <p>MAKE DIREKTVERTRIEB GREAT AGAIN</p>
            <Unionlog />
          </div>

          <div className="footer-contant-two">
            <h2>DAS TEAM</h2>
            <p>Über uns
              <span>Neuer Wall 80 20354 Hamburg</span>
            </p>
          </div>

          <div className="footer-contant-three">
            <h2>KONTAKT</h2>

            <div className="social-links-main">
              <a href="https://www.linkedin.com/" target="__blank">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/" target="__blank">
                <Instagram />
              </a>
            </div>
            <a href="mailto:@worldofprimus"><span>@worldofprimus</span></a>
            <a href="mailto:info@worldofprimus.de"><span>info@worldofprimus.de</span></a>
          </div>

          <div className="footer-contant-four">
            <h2>JETZT BEWERBEN!</h2>
            <button>BEWERBEN<Sendicon /></button>
          </div>

        </div>
      </footer>
    </div>
  )
}
