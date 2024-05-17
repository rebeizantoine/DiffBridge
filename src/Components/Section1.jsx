import React from 'react';
import '../Styles/section1.css'; // Import the CSS file
import imageplaceholder1 from '../Images/image_placeholder1.png';
import imageplaceholder2 from '../Images/image_placeholder2.png';
import imageplaceholder3 from '../Images/image_placeholder3.png';
import imageplaceholder4 from '../Images/image_placeholder4.png';
import { Helmet } from 'react-helmet';

const Section1 = () => {
  return (
    <div className="section-container">
         <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      <h2 className="section-title">Explore Our Artwork</h2>
      <div className="image-container">
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder1} alt="placeholder 1" />
            <p className="image-text">Image 1 Description</p>
          </div>
        </div>
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder2} alt="placeholder 2" />
            <p className="image-text">Image 2 Description</p>
          </div>
        </div>
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder3} alt="placeholder 3" />
            <p className="image-text">Image 3 Description</p>
          </div>
        </div>
        <div className="image-item">
          <div className="image-wrapper">
            <img src={imageplaceholder4} alt="placeholder 4" />
            <p className="image-text">Image 4 Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
