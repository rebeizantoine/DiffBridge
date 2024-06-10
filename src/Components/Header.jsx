import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/header.css";
import { Helmet } from "react-helmet";
import BrushLogo from "../Images/HighRez@3x.jpg";
import BrushLogopng from "../Images/HR_White.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header-box">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="header-all">
          <div className="header-title" onClick={() => navigate(`/`)}>
            <img
              src={BrushLogopng}
              className="steel-city"
              alt=""
              onClick={() => navigate(`/`)}
            />
          </div>
          <div className="header-center">
            <div className="header-1">
              <nav>
                <ul className="header-ul">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/artists">Artists</a>
                  </li>
                  <li>
                    <a className="weird-blue" href="/exhibitions">
                      Exhibitions
                    </a>
                  </li>
                  <li>
                    <a className="weird-blue" href="/aboutus">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contactus">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-2">
            <div className="image-circle">
              <img className="phone-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
