import React from "react";
import "../Styles/realfooter.css";
import verticalwhite from "../Images/vertical-lign-white.png";
import facebook from "../Images/facebook.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";

const RealFooter = () => {
  return (
    <div>
      <div className="all-footer">
        <div className="footer1">
          <div className="location-footer1">
            <div className="location1">
              <h2>London</h2>
              <p>15 Bolton Street London W1J 8BG</p>
            </div>
            <div className="location1">
              <h2>New York</h2>
              <p>74 Leonard Street New York, NY 10013</p>
            </div>
          </div>
          <div className="copyrightbottom">
            <nav>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>@2024 Bridgin Bushes</li>
              <li>Contact</li>
            </nav>
          </div>
        </div>
        <div className="footer2">
          <img src={verticalwhite} alt="" />
        </div>
        <div className="footer3">
          <div className="emojis">
            <nav>
              <li>
                <div className="white-emoji">
                  {" "}
                  <img src={facebook} alt="" />
                </div>{" "}
              </li>
              <li>
                <div className="white-emoji">
                  {" "}
                  <img src={pinterest} alt="" />
                </div>
              </li>
              <li>
                <div className="white-emoji">
                  {" "}
                  <img src={instagram} alt="" />
                </div>
              </li>
              <li>
                <div className="white-emoji">
                  {" "}
                  <img src={youtube} alt="" />
                </div>{" "}
              </li>
            </nav>
          </div>
          <div className="stay-up">
            <p>
              Stay up-to-date on Bridget Brushes artists, exhibitions,and
              events.
            </p>
          </div>
          <div className="subscribe-footer">
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealFooter;
