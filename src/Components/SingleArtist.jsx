import React from "react";
import "../Styles/single-artist.css"; // Updated CSS file name
import artistImage from "../Images/stock_face1.png"; // Placeholder image path
import backgroundImage from "../Images/image_placeholder1.png"; // Placeholder for background image
import artImage1 from "../Images/image_placeholder1.png"; // Placeholder for artwork image
import artImage2 from "../Images/image_placeholder2.png"; // Placeholder for artwork image

const SingleArtist = () => {
  return (
    <div className="single-artist-page">
      <header className="header">
        <h1 className="artist-name">Artist Name</h1>
      </header>
      <div className="artist-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="artist-content">
          <img src={artistImage} alt="Artist" className="artist-image" />
          <p className="artist-description">
            This is a generic description of the artist. It provides an overview of their work, style, and artistic vision. More details can be added here to give a comprehensive understanding of the artist.
          </p>
        </div>
      </div>
      <div className="artworks-section">
        <div className="artwork">
          <img src={artImage1} alt="Art 1" className="artwork-image" />
          <p className="artwork-description">"Name of the Art 1" - Date Created</p>
        </div>
        <div className="artwork">
          <img src={artImage2} alt="Art 2" className="artwork-image" />
          <p className="artwork-description">"Name of the Art 2" - Date Created</p>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist;
