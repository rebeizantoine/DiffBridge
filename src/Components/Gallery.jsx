import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../Styles/gallery.css";
import sculptor from "../Images/sculptorsitting 1.png";
import goldvertical from "../Images/vertical-gold.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Gallery = () => {
  useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    ScrollReveal().reveal(".main-title, .section-title", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".image", {
      delay: 600,
      origin: "bottom",
    });
    ScrollReveal().reveal(".text-box", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".media-icons i", {
      delay: 500,
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(".image-top, .image-bottom", {
      delay: 500,
      origin: "top",
    });
    ScrollReveal().reveal(".info", {
      delay: 500,
      origin: "left",
      interval: 200,
    });
  }, []);

  return (
    <div className="gallery-home">
      <div className="title-gallery-home">
        <div className="top-123">
          <h1 className="main-title">THE ART GALLERY OF SAN FRANCISCO</h1>
          <img src={goldvertical} alt="" className="image" />
        </div>
        <div className="mid-gallery-section">
          <div className="left-gallery-text text-box">
            <p className="gallery1">
              Seas waters us gathered cattle let herb whose whales given
              replenish creepeth, grass herb forth appear appear. Midst face
              female unto to don’t days. Dominion made unto dominion blessed
              above years Earth whose.
            </p>
          </div>
          <div className="text-box">
            <p className="gallery12">
              Man face fruit divided seasons herb from herb moveth whose.
              Dominion gathered winged morning, man won’t had fly beginning.
              Winged have saying behold morning greater void shall created whose
              blessed herb light fruitful open void without itself whales.
            </p>
          </div>
          <div className="image">
            <img src={sculptor} alt="" />
          </div>
        </div>
        <div className="bottom-gallery-section">
          <div className="image image-bottom">
            <img className="bottom-gallery-image" src={sculptor} alt="" />
          </div>
          <div className="info">
            <p className="gallery1234">
              Good every beginning had one two gathered from living place
              seasons them divide fourth them. Can’t let abundantly brought
              without she’d, that bring above brought gathering also itself,
              firmament.
            </p>
          </div>
          <div className="text-box">
            <p className="gallery123">
              Seas waters us gathered cattle let herb whose whales given
              replenish creepeth, grass herb forth appear appear. Midst face
              female unto to don’t days. Dominion made unto dominion blessed
              above years Earth whose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
