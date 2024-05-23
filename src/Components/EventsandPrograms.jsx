import React from "react";
import "../Styles/eventsandprograms.css";
import imageevents from "../Images/exhibition-cow.png";
import goldline from "../Images/exhitbition-line.png";

const EventsandPrograms = () => {
  return (
    <div>
      <div className="events-and-programs">
        <div className="events-on-top">
          <h1>Events & Programs</h1>
        </div>
        <div className="all-events-123">
          <div className="events-123">
            <img className="cow-image" src={imageevents} alt="" />
            <div className="right-exhibition">
              <div className="top-exheb">
                <h2>August 18</h2>
                <img src={goldline} alt="" />
              </div>
              <div className="bottom-exheb">
                <h2>Peasant Scenes And Landscapes</h2>
                <p>
                  The exhibition is made possible by the Laura & C. Arnold
                  Douglas Foundation.
                </p>
              </div>
            </div>
          </div>
          <div className="events-1234">
            <div className="right-exhibition4">
              <div className="top-exheb4">
                <h2>August 18</h2>
                <img src={goldline} alt="" />
              </div>
              <div className="bottom-exheb4">
                <h2>Peasant Scenes And Landscapes</h2>
                <p>
                  The exhibition is made possible by the Laura & C. Arnold
                  Douglas Foundation.
                </p>
              </div>
            </div>
            <img className="cow-image4" src={imageevents} alt="" />
          </div>
          <div className="events-123">
            <img className="cow-image" src={imageevents} alt="" />
            <div className="right-exhibition">
              <div className="top-exheb">
                <h2>August 18</h2>
                <img src={goldline} alt="" />
              </div>
              <div className="bottom-exheb">
                <h2>Peasant Scenes And Landscapes</h2>
                <p>
                  The exhibition is made possible by the Laura & C. Arnold
                  Douglas Foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="exhibiii">
          <button className="exhibiii-button">VIEW ALL EXHIBITIONS</button>
        </div>
      </div>
    </div>
  );
};

export default EventsandPrograms;
