import React from 'react';
import "./herobanner.scss";
import unserimage from "../../../assets/images/unserteamimage.png";
import primusimage from "../../../assets/images/worldofprimusimage.png";
import jetztmenimage from "../../../assets/images/jetztmenimage.png";
import Downarrow from '../../../assets/svgicons/downarrow';
import Mail from '../../../assets/svgicons/mail';

export default function Herobanner() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="herobanner-main">
                        <div className="herobanner-box-one">
                            <div className="herrobanner-box-one-inner-box-one">
                                <h2>MAKE DIREKTVERTRIEB GREAT AGAIN</h2>
                                <div>
                                    <h3>Bei uns erwarten dich vielfältige Karrieremöglichkeiten in einem wachsenden Markt. </h3>
                                    <p>Schreibe deine eigene Legende, wir helfen dir!</p>
                                </div>
                            </div>
                            <div className="herrobanner-box-one-inner-box-two">
                                <div className="herobanner-unser-box-main">
                                    <img src={unserimage} alt="unserimage" />
                                    <div className="unser-box-inner">
                                        <h4>UNSER TEAM</h4>
                                    </div>
                                </div>
                                <div className="herobanner-worlofprimus-box-main">
                                    <img src={primusimage} alt="primusimage" />
                                    <div className="primus-box-inner">
                                        <h4>#WORLDOFPRIMUS</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="herobanner-box-two">
                            <div className="jetzt-herobanner-side-section-main">
                                <img src={jetztmenimage} alt="jetztmenimage" />
                                <div className="jetzt-herobanner-side-section-inner-main-ab">
                                    <div className="jetzt-herobanner-side-section-inner-main-rl">
                                        <div className="jetztbewerben-circle-main">
                                            <div className="jetztbewerben-circle">
                                                <p>JETZT BEWERBEN</p>
                                            </div>
                                        </div>
                                        <div className="uberuns-and-kontakt-button-main">
                                            <button>
                                                <p>ÜBER UNS</p>
                                                <Downarrow />
                                            </button>
                                            <button>
                                                <p>KONTAKT</p>
                                                <Mail />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
