import React, { useState } from "react";
import "../Portfolio/portfolio.css";
import GraphicsSection from "./GraphicsSection";
import WebSection from "./WebSection";
import AppSection from "./AppSection";

const PortfolioPage = () => {
  const [section, setSection] = useState("web");

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
                backgroundColor: section === "web" ? "#7035EC" : "",
                color: section === "web" ? "#FFF" : "",
              }}
              onClick={() => setSection("web")}
            >
              Websites
            </div>

            <div
              style={{
                backgroundColor: section === "graphics" ? "#7035EC" : "",
                color: section === "graphics" ? "#FFF" : "",
              }}
              onClick={() => setSection("graphics")}
            >
              Graphics Design
            </div>

            <div
              style={{
                backgroundColor: section === "app" ? "#7035EC" : "",
                color: section === "app" ? "#FFF" : "",
              }}
              onClick={() => setSection("app")}
            >
              Apps
            </div>

          </div>
        </div>

        <div className="website-section websection-portpage">
          {section === "web" && <WebSection />}
          {section === "graphics" && <GraphicsSection />}
          {section === "app" && <AppSection />}
        </div>

      </div>
    </div>
  );
};

export default PortfolioPage;