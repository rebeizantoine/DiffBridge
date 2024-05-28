import React from "react";
import "../Styles/single-exhebition.css"
import exhibitionImage1 from "../Images/exhibition1.jpg";
import bannerImage from "../Images/exhibition1.jpg";

const SingleExhibition = () => {
  return (
    <div className="single-exhibition-page">
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <h1 className="exhibition-title">Exhibition Title</h1>
      <p className="exhibition-description">
        This is a brief description of the exhibition. It provides an overview
        of what the exhibition is about, its theme, and what visitors can expect
        to see. More details can be added here to give a comprehensive
        understanding of the exhibition.
      </p>
      <div className="exhibition-details">
        <div className="detail-item">
          <span className="detail-label">Date:</span> January 1, 2024
        </div>
        <div className="detail-item">
          <span className="detail-label">Type of Art:</span> Modern Art
        </div>
        <div className="detail-item">
          <span className="detail-label">Featured Artists:</span> Artist 1, Artist 2, Artist 3
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <span className="detail-label">Contact:</span> exhibition@example.com
        </div>
        <div className="contact-item">
          <span className="detail-label">Phone:</span> (123) 456-7890
        </div>
        <div className="contact-item">
          <span className="detail-label">Location:</span> 123 Exhibition Road, Art City
        </div>
      </div>
    </div>
  );
};

export default SingleExhibition;