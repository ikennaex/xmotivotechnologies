import React from "react";
import "../Homepage/portfolio.css";
import {
  educationalweb,
  cardtrade,
  efdtarise,
  gpt3,
  cruzzy,
  canadastudyandwork,
  canadaworkvisa,
  cheapestFlights,
  Creativityconnected,
  creativitywhite,
  cruzzycover2,
  Striveprogress,
  vocationalstudybanner,
  cheapestflightsblue,
} from "../../imports";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-div">
      <div className="">
        <div>
          <h3 className="portfolio-text">Portfolio</h3>
          <p className="portfolio-subtext">Delve Into Our Portfolio</p>

          <div className="website-section">
          <p className="portfolio-subtext website-text">Websites</p>

          <div>
            <div className="website-sample">
              <div>
              <img src= {educationalweb} alt="" />
              <p>Mark IV Educational Website</p>
              </div>

              <div>
              <img src= {cardtrade} alt="" />
              <p>Card Trade Website</p>
              </div>

              <div>
              <img src= {efdtarise} alt="" />
              <p>EFDT Arise Website</p>
              </div>

              <div>
              <img src= {gpt3} alt="" />
              <p>GPT-3 Website UI</p>
              </div>

              <div>
              <img src= {cruzzy} alt="" />
              <p>Cruzzy Vibee website</p>
              </div>
            </div>
          </div>
          </div>

          <div className="graphicsdesign-section">
            <p className="portfolio-subtext website-text">Graphics Design</p>

            <div className="graphicsdesign-div">
              <img src={canadastudyandwork} alt="" />
              <img src={canadaworkvisa} alt="" />
              <img src={Creativityconnected} alt="" />
              <img src={cheapestFlights} alt="" />
              <img src={creativitywhite} alt="" />
              <img src={cruzzycover2} alt="" />
              <img src={Striveprogress} alt="" />
              <img src={vocationalstudybanner} alt="" />
              <img src={cheapestflightsblue} alt="" /> 
            </div>
          </div>

          <button className="button-portfolio">view more</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
