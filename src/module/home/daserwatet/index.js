import React from "react";
import "./daserwatet.scss";
import Motivatation from "../../../assets/shapes/motivationinidicationgroup.png";
import Tearmarbeit from "../../../assets/shapes/termarbeitindicationgroup.png";
import Curvearrow from "../../../assets/arrow/curvearrow.png";
import Hearticon from "../../../assets/svgicons/hearticon";
import Rightarrow from "../../../assets/arrow/rightarrow.png";
import Pencileicon from "../../../assets/svgicons/pencileicon";
import Bulbicon from "../../../assets/svgicons/bulbicon";
import Lattericon from "../../../assets/svgicons/lattericon";
import Papericon from "../../../assets/svgicons/papericon";

export default function Daserwatet() {
    return (
        <div>
            <div className="Daserwatet-section-main">
                <div className="container-fourth">
                    <h1>DAS ERWATET DICH!</h1>



                    <div className="jetzt-and-erfolg-main">
                        <div className="jetzt-and-erfolg-peragraph-main">
                            <div>
                                <p>Wir legen großen Wert auf die Aus- und Weiterbildung unserer Teammitglieder.</p>
                                <p>Durch umfangreiche Schulungsprogramme wirst du bestens auf deine Aufgaben vorbereitet.</p>
                            </div>
                        </div>
                        <div className="jetzt-erfolg-div">
                            <h2>JETZT</h2>
                            <div className="motivation-and-tearmarbeit-flx-main">
                                <div className="motivate-image-div">
                                    <img src={Motivatation} alt="Motivatation" />
                                    <div className="motivation-text-dibv-main">
                                        <div className="motivate-schulung-txt-main">
                                            <span>Motivation</span>
                                            <span>Schulung</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tearmarbeit-image-div">
                                    <img src={Tearmarbeit} alt="Tearmarbeit" />
                                    <div className="tearmarbeit-text-dibv-main">
                                        <div className="tearmarbeit-Diziplin-txt-main">
                                            <span>Teamarbeit</span>
                                            <span>Diziplin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>ERFOLG</h3>
                        </div>

                        <div className="curve-arrow-div-main">
                            <img src={Curvearrow} alt="Curvearrow" />
                        </div>



                        <div className="primus-five-resources-main">
                            <div className="primus-five-resources-box">
                                <div className="primus-five-resources-box-top">
                                    <div className="primus-resources-top-box">
                                        <Hearticon />
                                    </div>
                                    <div className="rightarrowmain">
                                        <img src={Rightarrow} alt="Rightarrow" />
                                    </div>
                                </div>
                                <div className="primus-resources-box-body">
                                    <h4>INTERESSE</h4>
                                    <p>Wir suchen motivierte und kommunikative Menschen, die Spaß am direkten Kundenkontakt haben und Herausforderungen lieben.</p>
                                </div>
                            </div>

                            <div className="primus-five-resources-box">
                                <div className="primus-five-resources-box-top">
                                    <div className="primus-resources-top-box">
                                        <Pencileicon />
                                    </div>
                                    <div className="rightarrowmain">
                                        <img src={Rightarrow} alt="Rightarrow" />
                                    </div>
                                </div>
                                <div className="primus-resources-box-body">
                                    <h4>BEWERBUNG</h4>
                                    <p>Du bist ehrgeizig und hast klare Ziele vor Augen.</p>
                                </div>
                            </div>

                            <div className="primus-five-resources-box">
                                <div className="primus-five-resources-box-top">
                                    <div className="primus-resources-top-box">
                                        <Bulbicon />
                                    </div>
                                    <div className="rightarrowmain">
                                        <img src={Rightarrow} alt="Rightarrow" />
                                    </div>
                                </div>
                                <div className="primus-resources-box-body">
                                    <h4>FORTBILDUNG</h4>
                                    <p>Wir fördern deine berufliche und persönliche Entwicklung durch regelmäßige Trainings und Coachings.</p>
                                </div>
                            </div>

                            <div className="primus-five-resources-box">
                                <div className="primus-five-resources-box-top">
                                    <div className="primus-resources-top-box">
                                        <Lattericon />
                                    </div>
                                    <div className="rightarrowmain">
                                        <img src={Rightarrow} alt="Rightarrow" />
                                    </div>
                                </div>
                                <div className="primus-resources-box-body">
                                    <h4>ARBEIT</h4>
                                    <p>Bei uns arbeitest du mit modernsten Tools und Technologien, um deinen Arbeitsalltag effizient und erfolgreich zu gestalten.</p>
                                </div>
                            </div>

                            <div className="primus-five-resources-box">
                                <div className="primus-five-resources-box-top">
                                    <div className="primus-resources-top-box">
                                        <Papericon />
                                    </div>
                                </div>
                                <div className="primus-resources-box-body">
                                    <h4>ERFOLGE</h4>
                                    <p>Bei uns wird Teamarbeit großgeschrieben. Wir unterstützen uns gegenseitig und feiern gemeinsam Erfolge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
