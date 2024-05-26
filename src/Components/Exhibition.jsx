
import React from "react";
import "../Styles/exhibition.css"; // Updated CSS file name
import exhibitionImage1 from "../Images/exhibition1.jpg";
import exhibitionImage2 from "../Images/exhibition1.jpg";

const Exhibition = () => {
  return (
    <div className="exhibitions-page">
      <header className="header">
        <h1 className="title">Exhibitions</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search exhibitions..." />
      </div>
      <div className="exhibitions-section">
        <button
          className="exhibition-button"
          style={{ backgroundImage: `url(${exhibitionImage1})` }}
        >
          Exhibition 1
        </button>
        <button
          className="exhibition-button"
          style={{ backgroundImage: `url(${exhibitionImage2})` }}
        >
          Exhibition 2
        </button>
      </div>
    </div>
  );
};

export default Exhibition;
