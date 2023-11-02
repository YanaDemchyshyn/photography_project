import React from "react";
import "./Home.css"
import main from "./images/main-photo.png"
import photo1 from "./images/photo1.png"
import photo2 from "./images/photo2.png"
import photo3 from "./images/photo3.png"
import photo4 from "./images/photo4.png"
import photo5 from "./images/photo5.png"
import photo6 from "./images/photo6.png"
import photo7 from "./images/photo7.png"
import photo8 from "./images/photo8.png"
import photo9 from "./images/photo9.png"
import photo10 from "./images/photo10.png"
import photo11 from "./images/photo11.png"
import photo12 from "./images/photo12.png"

export default function Home() {
    return(
        <div className="home-page">
            <div className="main-part">
                <div className="photo">
                    <img src={main} alt="main" className="homepage-photo img-fluid"></img>
                    <div className="titles">
                        <div className="title-name">SHELLEY WHITE</div>
                        <h1>PHOTOGRAPHY</h1>
                        <div className="about-title">
                            <div className="title-info">Nisl faucibus quis urna nibh ut amet. Diam suscipit </div>
                            <div className="title-info-two"> pretium massa, sollicitudin in risus in. Sagittis.</div>
                        </div>
                        <button type="button" className="btn">GET STARTED</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" first-line">
                    <div className="first-item">
                        <img src={photo1} alt="first" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="first-item">
                        <img src={photo2} alt="second" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="first-item">
                        <img src={photo3} alt="third" className="portfolio img-fluid"></img>
                    </div>
                </div>
                <div className="second-line">    
                    <div className="second-item">
                        <img src={photo4} alt="fourth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="second-item">
                        <img src={photo5} alt="fifth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="second-item">
                        <img src={photo6} alt="sixth" className="portfolio-photo img-fluid"></img>
                    </div>
                </div>
                <div className="third-line">
                    <div className="third-item">
                        <img src={photo7} alt="seventh" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="third-item">
                        <img src={photo8} alt="eighth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="third-item">
                        <img src={photo9} alt="nineth" className="portfolio-photo img-fluid"></img>
                    </div>
                </div>
                <div className="fourth-line">
                    <div className="fourth-item">
                        <img src={photo10} alt="tenth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="fourth-item">
                        <img src={photo11} alt="eleventh" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="fourth-item">
                        <img src={photo12} alt="twelveth" className="portfolio-photo img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}