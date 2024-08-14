import React from "react";
import "../Homepage/portfolio.css";
import {
  educationalweb,
  cardtrade,
  efdtarise,
  crowncrest,
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
  astrowave,
  xpark,
} from "../../imports";
import { Link } from "react-router-dom";
import { websites } from "../Portfolio/PortfolioPage";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-div">
      <div className="maxwidth-section">
        <div>
          <h3 className="portfolio-text">Portfolio</h3>
          <p className="portfolio-subtext">Delve Into Our Portfolio</p>

          <div className="website-section">
          <p className="portfolio-subtext website-text">Websites</p>

          <div className="website-sample">
            <div className="website-sample">

              <div className="websitepreview-div">
                <a target="_blank" href="https://crown-crest-investments.com/">

              <img className="websitepreview-img" src= {crowncrest} alt="" />
              <p>Real Estate Website</p>
                </a>
              </div>

              <div className="websitepreview-div">
                <a target="_blank" href="https://gmatgretoeflnigeria.com/">

              <img className="websitepreview-img" src= {educationalweb} alt="" />
              <p>Mark IV Educational Website</p>
                </a>
              </div>

              <div className="websitepreview-div">
                <a target="_blank" href="https://astrowavedxd.com.ng/">

              <img className="websitepreview-img" src= {astrowave} alt="" />
              <p>Clothing Brand Website</p>
                </a>
              </div>

              <div className="websitepreview-div">
                <a target="_blank" href="https://xparklingtouch.com/">

              <img className="websitepreview-img" src= {xpark} alt="" />
              <p>Salon Website</p>
                </a>
              </div>

              <div className="websitepreview-div">
                <a target="_blank" href="https://gpt3-app.vercel.app/">

              <img className="websitepreview-img" src= {gpt3} alt="" />
              <p>GPT-3 Website UI</p>
                </a>
              </div>

              <div className="websitepreview-div">
                <a target="_blank" href="https://cruzzyvibee.com/">

              <img className="websitepreview-img" src= {cruzzy} alt="" />
              <p>Cruzzy Vibee website</p>
                </a>
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

          <Link to="/viewportfolio">
          <button className="button-portfolio">view more</button>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
