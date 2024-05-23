import React from "react";
import "../Styles/gallery.css";
import sculptor from "../Images/sculptorsitting 1.png";
import goldvertical from "../Images/vertical-gold.png";

const Gallery = () => {
  return (
    <div>
      <div className="gallery-home">
        <div className="title-gallery-home">
          <div className="top-123">
            <h1>THE ART GALLERY OF SAN FRANCISCO</h1>
            <img src={goldvertical} alt="" />
          </div>

          <div className="mid-gallery-section">
            <div className="left-gallery-text">
              <p className="gallery1">
                Seas waters us gathered cattle let herb whose whales given
                replenish creepeth, grass herb forth appear appear. Midst face
                female unto to don’t days. Dominion made unto dominion blessed
                above years Earth whose.
              </p>
            </div>
            <div>
              <p className="gallery12">
                Man face fruit divided seasons herb from herb moveth whose.
                Dominion gathered winged morning, man won’t had fly beginning.
                Winged have saying behold morning greater void shall created
                whose blessed herb light fruitful open void without itself
                whales.
              </p>
            </div>
            <div>
              <img src={sculptor} alt="" />
            </div>
          </div>
          <div className="bottom-gallery-section">
            <div>
              <img className="bottom-gallery-image" src={sculptor} alt="" />
            </div>
            <div>
              <p className="gallery1234">
                Good every beginning had one two gathered from living place
                seasons them divide fourth them. Can’t let abundantly brought
                without she’d, that bring above brought gathering also itself,
                firmament.
              </p>
            </div>
            <div>
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
    </div>
  );
};

export default Gallery;
