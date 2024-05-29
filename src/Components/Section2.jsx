import React, { useState, useRef, useEffect } from "react";
import "../Styles/section2.css";
import stockimage1 from "../Images/stock_face1.png";
import stockimage2 from "../Images/stock_face2.png";
import stockimage3 from "../Images/stock_face3.png";
import stockimage4 from "../Images/stock_face4.png";
import stockimage5 from "../Images/stock_face5.png";
import stockimage6 from "../Images/stock_face6.png";
import smallimage1 from "../Images/image_placeholder1.png";
import smallimage4 from "../Images/image_placeholder4.png";
import greenrect from "../Images/green rectangle.png";
import "../Styles/animations.css"; // Import the animations

const Section2 = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-right, .delay-2"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      className={`section2-container ${visible ? "visible" : "fade-in"}`}
      ref={ref}
    >
      {/* <div className="featured-artists">
        <h2 className="section-h21">Featured Paintings</h2>
      </div> */}

      <div className="artist-list animate-on-scroll delay1">
        <div className="left-artist-des">
          <h2>Paolo Hernandez</h2>
          <p>
            Experience the transformative power of fashion and media makeup
            artistry/styling. I am dedicated to enhancing your natural beauty
            and bringing your creative visions to life. From runway-ready looks
            to captivating editorial shoots, I specialize in crafting stunning
            makeup and styling that leave a lasting impression. With a keen eye
            for detail and a passion for the latest trends, we ensure you always
            look and feel your best. Trust me to elevate your fashion and media
            endeavors with our impeccable artistry and styling expertise.
          </p>
          <button class="button-special">
            <p>Read More</p>
          </button>
        </div>
        <div className="right-image-des animate-on-scroll delay-2">
          <img src={smallimage4} alt="" />
        </div>
        <div className="right-rect animate-on-scroll delay-3">
          <img src={greenrect} alt="" />
        </div>
      </div>
      <div className="artist-list animate-on-scroll-right ">
        <div className="right-rect2">
          <img src={greenrect} alt="" />
        </div>
        <div className="right-image-des2">
          <img src={smallimage4} alt="" />
        </div>

        <div className="left-artist-des2">
          <h2>Paolo Hernandez</h2>
          <p>
            Experience the transformative power of fashion and media makeup
            artistry/styling. I am dedicated to enhancing your natural beauty
            and bringing your creative visions to life. From runway-ready looks
            to captivating editorial shoots, I specialize in crafting stunning
            makeup and styling that leave a lasting impression. With a keen eye
            for detail and a passion for the latest trends, we ensure you always
            look and feel your best. Trust me to elevate your fashion and media
            endeavors with our impeccable artistry and styling expertise.
          </p>
          <button class="button-special123">
            <p>Read More</p>
          </button>
        </div>
      </div>
      <div className="artist-list animate-on-scroll delay1">
        <div className="left-artist-des">
          <h2>Paolo Hernandez</h2>
          <p>
            Experience the transformative power of fashion and media makeup
            artistry/styling. I am dedicated to enhancing your natural beauty
            and bringing your creative visions to life. From runway-ready looks
            to captivating editorial shoots, I specialize in crafting stunning
            makeup and styling that leave a lasting impression. With a keen eye
            for detail and a passion for the latest trends, we ensure you always
            look and feel your best. Trust me to elevate your fashion and media
            endeavors with our impeccable artistry and styling expertise.
          </p>
          <button class="button-special">
            <p>Read More</p>
          </button>
        </div>
        <div className="right-image-des animate-on-scroll delay-2">
          <img src={smallimage4} alt="" />
        </div>
        <div className="right-rect animate-on-scroll delay-3">
          <img src={greenrect} alt="" />
        </div>
      </div>
      <div className="artist-list animate-on-scroll delay-1">
        <div className="right-rect2 delay-2">
          <img src={greenrect} alt="" />
        </div>
        <div className="right-image-des2 delay-3">
          <img src={smallimage4} alt="" />
        </div>

        <div className="left-artist-des2">
          <h2>Paolo Hernandez</h2>
          <p>
            Experience the transformative power of fashion and media makeup
            artistry/styling. I am dedicated to enhancing your natural beauty
            and bringing your creative visions to life. From runway-ready looks
            to captivating editorial shoots, I specialize in crafting stunning
            makeup and styling that leave a lasting impression. With a keen eye
            for detail and a passion for the latest trends, we ensure you always
            look and feel your best. Trust me to elevate your fashion and media
            endeavors with our impeccable artistry and styling expertise.
          </p>
          <button class="button-special123">
            <p>Read More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
