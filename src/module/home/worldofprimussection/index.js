import React from 'react';
import "./worldofprimussection.scss";
import capturede from "../../../assets/images/Capturade.png";
import ractangle from "../../../assets/shapes/Rectangle.png";
import toprightarrow from "../../../assets/icons/arrowdownleft.png"
import Planeticon from "../../../assets/svgicons/planeticon.svg";
import Globicon from "../../../assets/svgicons/globicon.svg";

export default function Worldofprimussection() {
    return (
        <div>
            <div className="worlofprimus-section-main">
                <div className="container-third">
                    <div className="worlofprimus-section">
                        <div className="capturedeimage-main">
                            <img src={capturede} alt="capturede" />
                            <div className="capturede-bottom-triangle-shape-main">
                                <div className="bewerben-box-main">
                                    <img src={ractangle} alt="ractangle" />
                                </div>
                                <div className="bewerben-txt-main">
                                    <p>BEWERBEN</p>
                                    <img src={toprightarrow} alt="toprightarrow" />
                                </div>
                            </div>
                        </div>
                        <div className="world-of-primus-div-main">
                            <div className="primus-title-main">
                                <h1>WORLD OF PRIMUS DER ORT DEINER VERÄNDERUNG </h1>
                            </div>

                            <div className="uberuns-deilprofil-main">
                                <div className="uber-uns-div-main">
                                    <div className="uber-uns-title-div">
                                        <img src={Planeticon} alt="Planeticon" />
                                        <h2>ÜBER UNS</h2>
                                    </div>
                                    <p>Wir sind ein dynamisches und innovatives Direktvertriebsteam im Telekommunikationsbereich, spezialisiert auf Door to Door Sales. Unser Ziel ist es, hochwertige Telekommunikationsprodukte direkt zu den Kunden zu bringen und ihnen maßgeschneiderte Lösungen anzubieten.</p>
                                </div>

                                <div className="deil-profil-div-main">
                                    <div className="deil-profil-title-div">
                                        <img src={Globicon} alt="Globicon" />
                                        <h2>DEIN PROFIL</h2>
                                    </div>
                                    <p>Du bist motiviert, kommunikativ und hast Spaß am direkten Kundenkontakt? Dann bist du bei uns genau richtig! Vorerfahrungen im Vertrieb sind von Vorteil, aber nicht zwingend erforderlich.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
