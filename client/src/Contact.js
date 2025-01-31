import React, { useRef } from "react";

export default function Contact() {
  const form = useRef();

  return (
    <div id="contact">
      <div className="portC-container">
        <div className="portC-screen">
          <div className="portC-screen-header">
            <div className="portC-screen-header-left">
              <div className="portC-screen-header-button portC-close"></div>
              <div className="portC-screen-header-button portC-maximize"></div>
              <div className="portC-screen-header-button portC-minimize"></div>
            </div>
            <div className="portC-screen-header-right">
              <div className="portC-screen-header-ellipsis"></div>
              <div className="portC-screen-header-ellipsis"></div>
              <div className="portC-screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="portC-screen-body">
            <div className="portC-screen-body-item portC-left">
              <div className="portC-app-title">
                <span>CONTACT</span>
                <span>INFO</span>
              </div>
            </div>
            <div className="portC-screen-body-item">
              <div id="contact-info">
                <img loading="lazy"  id="contact-icon" src="mail-icon.png"></img>
                <p id="contact-details">shreyamasta99@gmail.com</p>
              </div>
              <div id="contact-info">
                <img loading="lazy"  id="contact-icon" src="linkedin-icon.png"></img>
                <a
                  href="https://www.linkedin.com/in/shreya-masta/"
                  id="contact-details"
                >
                  /shreya-masta
                </a>
              </div>
              <div id="contact-info">
                <img loading="lazy"  id="contact-icon" src="github-icon.png"></img>
                <a href="https://github.com/Sherry-m03" id="contact-details">
                  /Sherry-m03
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
