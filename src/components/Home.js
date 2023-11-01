import React from "react";
import "./Home.css"
import main from "./images/main-photo.png"

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
        </div>
    )
}