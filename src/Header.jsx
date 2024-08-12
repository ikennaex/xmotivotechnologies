import React, { useState } from "react";
import "./header.css";
import { motivo } from "./imports";
import { Link } from "react-router-dom";
// this is the nav bar
const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div className="menuandlogo">
        <Link to="/">
          <img className="logo" src={motivo} alt="" />
        </Link>

        <span onClick={toggleMenu} className="menu-icon">
          <ion-icon
            className="menu-icon"
            name={open ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </span>
        </div >
      

        <div>
        <div className= {!open ? "navbar-mobile" : "navbar-mobile2"}>
          <div className= "navbarmobile-links">
            <a href="/">
              <p>Home</p>
            </a>
            <a href="#whatwedo">
              <p>What we do</p>
            </a>

            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-div">
        <div className="navbar">
          <a href="/">
            <img className="logo" src={motivo} alt="" />
          </a>
          <div className="menu-div">
            <a href="/">
              <p>Home</p>
            </a>
            <a href="#whatwedo">
              <p>What we do</p>
            </a>

            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
