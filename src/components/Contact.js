import React from "react";
import "./Contact.css"
import Footer from "./Footer"

export default function Contact() {
    return(
        <div className="Contact">
          <div className="contact-title">
            <h1>GET IN TOUCH!</h1>
          </div>
          <div className="contact-info">
              <div className="name">ADDRESS</div>
              <div className="contact-type">
                  <i class="fa-solid fa-location-dot contact-icon"></i>
                  <span>  021 Hollywood Boulevard, Los Angeles</span>
              </div>
              <div className="name">E-MAIL</div>
              <div className="contact-type">
                    <i class="fa-solid fa-envelope contact-icon"></i>
                    <span>  my.email@gmail.com</span>
              </div>
              <div className="name">PHONE</div>
              <div className="contact-type">
                      <i class="fa-solid fa-phone contact-icon"></i>
                      <span>  021 3456 789</span>
              </div>
            </div>
          <Footer />  
        </div>
    )
}