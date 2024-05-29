import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/aboutus.css";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition2.jpg";
import image3 from "../Images/exhibition2.jpg";

const AboutUs = () => {
  useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 1000,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".aboutus-main-title, .aboutus-section-title", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".aboutus-sec-01 .aboutus-image, .aboutus-info", {
      delay: 600,
      origin: "bottom",
    });
    ScrollReveal().reveal(".aboutus-text-box", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".aboutus-media-icons i", {
      delay: 500,
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(
      ".aboutus-sec-02 .aboutus-image, .aboutus-sec-03 img",
      {
        delay: 500,
        origin: "top",
      }
    );
    ScrollReveal().reveal(".aboutus-media-info li", {
      delay: 500,
      origin: "left",
      interval: 200,
    });
  }, []);

  return (
    <div className="aboutus-container">
      <section className="aboutus-sec-01">
        <div className="aboutus-inner-container">
          <h2 className="aboutus-main-title">About Us</h2>
          <div className="aboutus-content">
            <div className="aboutus-image">
              <img src={image1} alt="Exhibition" loading="lazy" />
            </div>
            <div className="aboutus-text-box">
              <h3>Welcome to Bridging Bridges</h3>
              <p>
                Bridging Bridges is a unique platform where artists and
                sculptors can showcase their art. Our mission is to create a
                space that bridges the gap between artists and art enthusiasts,
                providing a stage for creativity and expression.
              </p>
            </div>
          </div>
          <div className="aboutus-media-icons">
            <a href="#" className="aboutus-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="aboutus-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="aboutus-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="aboutus-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="aboutus-sec-02">
        <div className="aboutus-inner-container">
          <h3 className="aboutus-section-title">Our Mission</h3>
          <div className="aboutus-content">
            <div className="aboutus-image">
              <img src={image2} alt="Mission" loading="lazy" />
            </div>
            <div className="aboutus-info">
              <h4 className="aboutus-info-title">
                Connecting Artists and Audience
              </h4>
              <p>
                At Bridging Bridges, we aim to foster a vibrant community of
                artists and art lovers. We believe in the power of art to
                inspire, challenge, and bring people together. Our platform
                provides a dynamic space for exhibitions, collaborations, and
                creative growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-sec-03">
        <div className="aboutus-inner-container">
          <h3 className="aboutus-section-title">Follow Us</h3>
          <div className="aboutus-content">
            <div className="aboutus-media-info">
              <ul>
                <li>
                  <a href="#" className="aboutus-icon">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="aboutus-icon">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="aboutus-icon">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="aboutus-icon">
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="aboutus-icon">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="aboutus-image">
              <img src={image3} alt="Community" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
