import React from "react";
import "./Gallery.css"
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
import Footer from "./Footer"

export default function Gellery() {
    return(
        <div className="Gallery">
            <div className="gallery-title">
                <h1>GALLERY</h1>
            </div>
            <div className="container">
                <div className="gallery-first-line">
                    <div className="gallery-first-item">
                        <img src={photo1} alt="gallery-first" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-first-item">
                        <img src={photo2} alt="gallery-second" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-first-item">
                        <img src={photo3} alt="gallery-third" className="portfolio img-fluid"></img>
                    </div>
                </div>
                <div className="gallery-second-line">    
                    <div className="gallery-second-item">
                        <img src={photo4} alt="fourth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-second-item">
                        <img src={photo5} alt="fifth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-second-item">
                        <img src={photo6} alt="sixth" className="portfolio-photo img-fluid"></img>
                    </div>
                </div>
                <div className="gallery-third-line">
                    <div className="gallery-third-item">
                        <img src={photo7} alt="seventh" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-third-item">
                        <img src={photo8} alt="eighth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-third-item">
                        <img src={photo9} alt="nineth" className="portfolio-photo img-fluid"></img>
                    </div>
                </div>
                <div className="gallery-fourth-line">
                    <div className="gallery-fourth-item">
                        <img src={photo10} alt="tenth" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-fourth-item">
                        <img src={photo11} alt="eleventh" className="portfolio-photo img-fluid"></img>
                    </div>
                    <div className="gallery-fourth-item">
                        <img src={photo12} alt="twelveth" className="portfolio-photo img-fluid"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}