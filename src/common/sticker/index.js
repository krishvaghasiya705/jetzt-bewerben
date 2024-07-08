import React from 'react';
import "./sticker.scss";
import Stickerimage from "../../assets/icons/savesticker.png";
import Unionlogo from "../../assets/svgicons/Unionlogo.svg";
import { Link } from 'react-router-dom';

function Sticker() {
    return (
        <div>
            <div className="sticker-section-main">
                <div className="sticker-cls-main">
                    <p>DIREKTVERTRIEB - jetzt <span>bewerben</span> und <span>durchstarten</span></p>
                    <Link to={"/"}>
                        <div className="sticker-image-main">
                            <div className="sticker-ab-iner-main">
                                <img src={Stickerimage} alt="Stickerimage" />
                                <div className="Sticker-image-inner-text">
                                    <p>JETZT BEWERBEN</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="wolf-logo-main">
                    <Link to={"/"}><img src={Unionlogo} alt="Unionlogo" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Sticker;
