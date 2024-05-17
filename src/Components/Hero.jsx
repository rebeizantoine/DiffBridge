import React, { useRef, useEffect } from "react";
import video1 from "../Images/file.mp4";
import video2 from "../Images/pidaras.mp4";
import "../Styles/hero.css";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed", error);
      });
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="video-container">
        <video
          ref={videoRef}
          src={video2}
          autoPlay
          muted // Mute the video to comply with browser policies
          controls
          style={{
            height: "400px", // Adjust the height as needed
            width: "50%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: 1,
          }}
        ></video>
      </div>
      <div className="text-container">
        <h1 className="hero-h1">Welcome to My Petite Gallery</h1>
        <h2 className="hero-h2">Art for Humanity</h2>
        <p className="hero-p">
          At My Petite Gallery, we blend the stern resilience of conflict-zone
          artists with our own feminine strength, offering a unique platform
          that diversifies the art scene while giving back to society.
        </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default Hero;
