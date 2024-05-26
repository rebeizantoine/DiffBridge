import React from "react";
import "../Styles/artists.css";
import topimageartist from "../Images/stock_face3.png";
import lastestwork from "../Images/image_placeholder2.png";
const Artists = () => {
  // scroll-animations.js
  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    function handleScroll() {
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const threshold = 200; // Adjust this value as needed (e.g., 200px or 300px)

        if (rect.top <= windowHeight - threshold) {
          element.classList.add("animated");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on page load in case elements are already in view
  });

  return (
    <div>
      <div className="ui-input-container">
        <input
          required=""
          placeholder="Type something..."
          className="ui-input"
          type="text"
        />
        <div className="ui-input-underline"></div>
        <div className="ui-input-highlight"></div>
        <div className="ui-input-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="artists-container">
        <div className="box-artist">
          <div className="top-side">
            <div className="left-image">
              {" "}
              <img src={topimageartist} alt="" />
            </div>
            <div className="right-description">
              {/* <h2>Brief Artist Description</h2> */}
              <nav>
                <ul>
                  <li>Gio Giovanni</li>
                  <li>Italy,Florence</li>
                  <li>Sculptor</li>
                  <li>Modern</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="medium-side">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. "
            </p>
          </div>
          <div className="bottom-side">
            <h2>Latest Work</h2>
            <div className="flex-latest-work">
              <img src={lastestwork} alt="" />
              <img src={lastestwork} alt="" />
            </div>
          </div>
        </div>

        <div className="box-artist">
          <div className="top-side">
            <div className="left-image">
              {" "}
              <img src={topimageartist} alt="" />
            </div>
            <div className="right-description">
              {/* <h2>Brief Artist Description</h2> */}
              <nav>
                <ul>
                  <li>Gio Giovanni</li>
                  <li>Italy,Florence</li>
                  <li>Sculptor</li>
                  <li>Modern</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="medium-side">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. "
            </p>
          </div>
          <div className="bottom-side">
            <h2>Latest Work</h2>
            <div className="flex-latest-work">
              <img src={lastestwork} alt="" />
              <img src={lastestwork} alt="" />
            </div>
          </div>
        </div>
        <div className="box-artist">
          <div className="top-side">
            <div className="left-image">
              {" "}
              <img src={topimageartist} alt="" />
            </div>
            <div className="right-description">
              {/* <h2>Brief Artist Description</h2> */}
              <nav>
                <ul>
                  <li>Gio Giovanni</li>
                  <li>Italy,Florence</li>
                  <li>Sculptor</li>
                  <li>Modern</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="medium-side">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. "
            </p>
          </div>
          <div className="bottom-side">
            <h2>Latest Work</h2>
            <div className="flex-latest-work">
              <img src={lastestwork} alt="" />
              <img src={lastestwork} alt="" />
            </div>
          </div>
        </div>
        <div className="box-artist">
          <div className="top-side">
            <div className="left-image">
              {" "}
              <img src={topimageartist} alt="" />
            </div>
            <div className="right-description">
              {/* <h2>Brief Artist Description</h2> */}
              <nav>
                <ul>
                  <li>Gio Giovanni</li>
                  <li>Italy,Florence</li>
                  <li>Sculptor</li>
                  <li>Modern</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="medium-side">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. "
            </p>
          </div>
          <div className="bottom-side">
            <h2>Latest Work</h2>
            <div className="flex-latest-work">
              <img src={lastestwork} alt="" />
              <img src={lastestwork} alt="" />
            </div>
          </div>
        </div>
        <div className="box-artist">
          <div className="top-side">
            <div className="left-image">
              {" "}
              <img src={topimageartist} alt="" />
            </div>
            <div className="right-description">
              {/* <h2>Brief Artist Description</h2> */}
              <nav>
                <ul>
                  <li>Gio Giovanni</li>
                  <li>Italy,Florence</li>
                  <li>Sculptor</li>
                  <li>Modern</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="medium-side">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. "
            </p>
          </div>
          <div className="bottom-side">
            <h2>Latest Work</h2>
            <div className="flex-latest-work">
              <img src={lastestwork} alt="" />
              <img src={lastestwork} alt="" />
            </div>
          </div>
        </div>
        <div className="box-artist">
          <div className="top-side">
            <div className="left-image">
              {" "}
              <img src={topimageartist} alt="" />
            </div>
            <div className="right-description">
              {/* <h2>Brief Artist Description</h2> */}
              <nav>
                <ul>
                  <li>Gio Giovanni</li>
                  <li>Italy,Florence</li>
                  <li>Sculptor</li>
                  <li>Modern</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="medium-side">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. "
            </p>
          </div>
          <div className="bottom-side">
            <h2>Latest Work</h2>
            <div className="flex-latest-work">
              <img src={lastestwork} alt="" />
              <img src={lastestwork} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
