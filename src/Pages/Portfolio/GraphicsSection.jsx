import React from 'react'
import "../Portfolio/portfolio.css";

import {
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

const GraphicsSection = () => {
  return (
    <div className="">
    <p className="portfolio-subtext website-text grpahicsdesign-text">Graphics Design</p>

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

  )
}

export default GraphicsSection