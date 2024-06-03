import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../Styles/gallery.css";
import goldvertical from "../Images/vertical-gold.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import gallery1 from "../Images/GALLERY1.jpg";
import gallery2 from "../Images/GALLERY2.jpg";
import gallery3 from "../Images/GALLERY3.jpg";

const Gallery = () => {
  // useEffect(() => {
  //   ScrollReveal({
  //     distance: "20px",
  //     duration: 800,
  //     delay: 100,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".main-title, .section-title", {
  //     delay: 200,
  //     origin: "left",
  //   });
  //   ScrollReveal().reveal(".image", {
  //     delay: 300,
  //     origin: "bottom",
  //   });
  //   ScrollReveal().reveal(".text-box", {
  //     delay: 400,
  //     origin: "right",
  //   });
  //   ScrollReveal().reveal(".media-icons i", {
  //     delay: 200,
  //     origin: "bottom",
  //     interval: 100,
  //   });
  //   ScrollReveal().reveal(".image-top, .image-bottom", {
  //     delay: 200,
  //     origin: "top",
  //   });
  //   ScrollReveal().reveal(".info", {
  //     delay: 200,
  //     origin: "left",
  //     interval: 100,
  //   });
  // }, []);

  return (
    <div className="gallery-home">
      <div className="title-gallery-home">
        <div className="top-123">
          <h1 className="main-title">Featured Galleries</h1>
        </div>

        <div className="gallery-section">
          <div className="text-box">
            <h2 className="gallery-title">Peasant Scenes And Landscapes</h2>
            <p className="date-time">Date: August 18, 2024</p>
            <p className="location">City: San Francisco, Country: USA</p>
            <p className="host">Host: San Francisco Art Museum</p>
            <p className="description">
              The exhibition is made possible by the Laura & C. Arnold Douglas
              Foundation.
            </p>
            <p className="featured-artists">
              Featured Artists: John Doe, Jane Smith, Albert Johnson
            </p>
          </div>
          <div className="image-gallery1">
            <img src={gallery3} alt="" />
          </div>
        </div>

        <div className="gallery-section reverse">
          <div className="image-gallery2">
            <img src={gallery1} alt="" />
          </div>
          <div className="text-box">
            <h2 className="gallery-title">Urban Landscapes</h2>
            <p className="date-time">Date: August 20, 2024</p>
            <p className="location">City: Los Angeles, Country: USA</p>
            <p className="host">Host: Los Angeles Art Museum</p>
            <p className="description">
              This exhibition is supported by the Arts & Culture Foundation.
            </p>
            <p className="featured-artists">
              Featured Artists: Emily Brown, Michael Green, Rachel Adams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
