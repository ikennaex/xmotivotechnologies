import React, { useState } from "react";
import "../Portfolio/portfolio.css";
import GraphicsSection from "./GraphicsSection";
import WebSection from "./WebSection";

const PortfolioPage = () => {
  const [toggle, setToggle] = useState(true);

  function hideWebsite() {
    setToggle(true);
  }

  function hideGraphics() {
    setToggle(false);
  }

  return (
    <div className="portfolio-main">
      <div className="maxwidth-section">
      <div className="porfoliotexts-main">
        <div className="portfoliotext-div">
          <h3 className="portfolio-text portfoliopage-text">Portfolio</h3>
          <p className="portfolio-subtext portfoliopage-subtext">
            Delve Into Our Portfolio
          </p>
        </div>

        <div className="portfoliotype-divs">
          <div
            style={{
              backgroundColor: toggle && "#7035EC",
              color: toggle && "#FFFF",
            }}
            onClick={hideWebsite}
          >
            Websites
          </div>

          <div
            style={{
              backgroundColor: !toggle && "#7035EC",
              color: !toggle && "#FFFF",
            }}
            onClick={hideGraphics}
          >
            Graphics design
          </div>
        </div>
      </div>

      <div className="website-section websection-portpage">
        {toggle ? <WebSection /> : <GraphicsSection />}
      </div>

      </div>
    </div>
  );
};

export default PortfolioPage;
