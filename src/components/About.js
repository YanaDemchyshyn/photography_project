import React from "react";
import "./About.css"
import aboutme from "./images/aboutme.png"
import camera from "./images/camera.png"
import photo1 from "./images/photo1.png"
import photo2 from "./images/photo2.png"
import photo3 from "./images/photo3.png"
import Footer from "./Footer"

export default function About() {
    return(
        <div className="About-me">
            <div className="container about-cont">
                <div className="row">
                    <div className="col-lg">
                        <div className="my-photo">
                            <img src={aboutme} alt="me" className="img-fluid me"></img>
                        </div>
                    </div>
                    <div className="col-lg info-part">
                        <div className="aboutme-title">ABOUT ME</div>
                        <h1>SHELLEY WHITE</h1>
                        <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis 
                            nisl faucibus quis urna nibh ut amet diam suscipit pretium massa, sollicitudin in risus in. Sagittis.</p>
                        <div className="about-social">
                            <a href="https://www.instagram.com/" target="blanc" className="about-social-link">
                                <i class="fa-brands fa-instagram about-link"></i>
                            </a>
                            <a href="https://uk-ua.facebook.com/" target="blanc" className="about-social-link">
                                <i class="fa-brands fa-square-facebook about-link"></i>
                            </a>
                            <a href="https://www.linkedin.com/" target="blanc" className="about-social-link">
                                <i class="fa-brands fa-linkedin about-link"></i>
                            </a>
                        </div>
                        <div className="second-title">MY CAMERA</div>
                        <div className="camera-info">
                            <img src={camera} alt="camera" className="img-fluid camera-pic"></img>
                            <span> Olympus PEN-F Kamera Mirrorlees</span>
                        </div>
                        <button type="button" className="btn">CONTACT ME</button>
                    </div>
                </div>
                <div className="my-photo">
                <div className=" about-photo">
                    <div className="about-items">
                        <img src={photo1} alt="first" className="about-portfolio-photo img-fluid"></img>
                    </div>
                    <div className="about-items">
                        <img src={photo2} alt="second" className="about-portfolio-photo img-fluid"></img>
                    </div>
                    <div className="about-items">
                        <img src={photo3} alt="third" className="about-portfolio img-fluid"></img>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}