import React from "react";
import { belachow, belachowrider } from "../../imports";

const apps = [
    {
        img: belachow,
        desc: "Belachow Food Delivery App"
    },
    {
        img: belachowrider,
        desc: "Belachow Food Delivery App for Riders"
    },
]

const AppSection = () => {
  return (
    <div>
      <p className="portfolio-subtext website-text">Mobile Apps</p>
      <div className="website-sample">
        {apps.map((app, index) => (
          <div className=" flex items-center justify-center" key={index}>
            <a target="_blank" href={app.link}>
              <img className="" src={app.img} alt="" />
              <p>{app.desc}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSection;
