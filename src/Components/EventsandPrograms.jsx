import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";
import { useNavigate } from "react-router-dom";
import "../Styles/eventsandprograms.css";
import imageevents from "../Images/exhibition-cow.png";
import goldline from "../Images/exhitbition-line.png";

const EventsandPrograms = () => {
  const [exhibition1, setExhibition1] = useState(null);
  const [exhibition2, setExhibition2] = useState(null);
  const [exhibition3, setExhibition3] = useState(null);

  const fetchExhibition1 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/exhibitions"
      );
      const exhibitions = response.data;
      if (exhibitions[0]) {
        setExhibition1(exhibitions[0]);
      }
    } catch (error) {
      console.error("Error fetching exhibition 1:", error);
    }
  };

  const fetchExhibition2 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/exhibitions"
      );
      const exhibitions = response.data;
      if (exhibitions[1]) {
        setExhibition2(exhibitions[1]);
      }
    } catch (error) {
      console.error("Error fetching exhibition 2:", error);
    }
  };

  const fetchExhibition3 = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/exhibitions"
      );
      const exhibitions = response.data;
      if (exhibitions[2]) {
        setExhibition3(exhibitions[2]);
      }
    } catch (error) {
      console.error("Error fetching exhibition 3:", error);
    }
  };

  useEffect(() => {
    fetchExhibition1();
    fetchExhibition2();
    fetchExhibition3();
  }, []);

  // useEffect(() => {
  //   ScrollReveal({
  //     distance: "20px",
  //     duration: 300, // Decrease the duration to make the reveal faster
  //     delay: 50, // Decrease the delay for faster reveal
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".events-on-top h1", {
  //     delay: 50, // Adjust delay for faster reveal
  //     origin: "left",
  //   });
  //   ScrollReveal().reveal(".events-123, .events-1234", {
  //     delay: 100, // Adjust delay for faster reveal
  //     origin: "bottom",
  //   });
  //   ScrollReveal().reveal(".right-exhibition, .right-exhibition4", {
  //     delay: 150, // Adjust delay for faster reveal
  //     origin: "right",
  //   });
  //   ScrollReveal().reveal(".cow-image, .cow-image4", {
  //     delay: 200, // Adjust delay for faster reveal
  //     origin: "left",
  //   });
  //   ScrollReveal().reveal(".exhibiii-button", {
  //     delay: 250, // Adjust delay for faster reveal
  //     origin: "bottom",
  //   });
  // }, []);

  const navigate = useNavigate();

  return (
    <div className="single-exhibition-page">
      <div className="events-and-programs">
        <div className="events-on-top">
          <h1>Events & Programs</h1>
        </div>
        <div className="all-events-123">
          {exhibition1 && (
            <div className="events-123">
              <img
                className="cow-image"
                src={exhibition1.exhibition_featured1image || imageevents}
                alt=""
              />
              <div className="right-exhibition">
                <div className="top-exheb">
                  <h2>
                    {exhibition1.exhibition_month} {exhibition1.exhibition_day}
                  </h2>
                  <div className="top-top-top">
                    <h2 className="top-top-top-h2">
                      {exhibition1.exhibition_opening_hours}-
                      {exhibition1.exhibition_closing_hours}
                    </h2>
                    <img src={goldline} alt="" />
                  </div>
                </div>
                <div className="bottom-exheb">
                  <h2>{exhibition1.exhibition_name}</h2>
                  <p>{exhibition1.exhibition_description}</p>
                </div>
              </div>
            </div>
          )}
          {exhibition2 && (
            <div className="events-1234">
              <div className="right-exhibition4">
                <div className="top-exheb4">
                  <h2>
                    {exhibition2.exhibition_month} {exhibition2.exhibition_day}
                  </h2>
                  <div className="top-top-top">
                    <h2 className="top-top-top-h2">
                      {exhibition2.exhibition_opening_hours}-
                      {exhibition2.exhibition_closing_hours}
                    </h2>
                    <img src={goldline} alt="" />
                  </div>
                </div>
                <div className="bottom-exheb4">
                  <h2>{exhibition2.exhibition_name}</h2>
                  <p>{exhibition2.exhibition_description}</p>
                </div>
              </div>
              <img
                className="cow-image4"
                src={exhibition2.exhibition_featured2image || imageevents}
                alt=""
              />
            </div>
          )}
          {exhibition3 && (
            <div className="events-123">
              <img
                className="cow-image"
                src={exhibition3.exhibition_featured3image || imageevents}
                alt=""
              />
              <div className="right-exhibition">
                <div className="top-exheb">
                  <h2>
                    {exhibition3.exhibition_month} {exhibition3.exhibition_day}
                  </h2>
                  <div className="top-top-top">
                    <h2 className="top-top-top-h2">
                      {exhibition3.exhibition_opening_hours}-
                      {exhibition3.exhibition_closing_hours}
                    </h2>
                    <img src={goldline} alt="" />
                  </div>
                </div>
                <div className="bottom-exheb">
                  <h2>{exhibition3.exhibition_name}</h2>
                  <p>{exhibition3.exhibition_description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="exhibiii">
          <button className="exhibiii-button">
            <p onClick={() => navigate("/exhibitions")}>VIEW ALL EXHIBITIONS</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsandPrograms;
