import React from "react";
import "./bewerbensection.scss";
import ractangle from "../../../assets/shapes/Rectangle.png";
import toprightarrow from "../../../assets/icons/arrowdownleft.png"
import Bewerbencelebrationimage from "../../../assets/images/Bewerbencelebrationimage.jpg"

function Bewerbensection() {
    return (
        <div className="Bewerbensectionmain">
            <div className="container-fifth">
                <div className="Bewerbensection">
                    <div className="Bewerbenimagemain">
                        <img src={Bewerbencelebrationimage} alt="Bewerbencelebrationimage" />
                    </div>
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
            </div>
        </div>
    )
}

export default Bewerbensection;
