import React, { useState } from "react";
import { motivo } from "./imports";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={motivo} alt="Motivo Logo" className="w-10 lg:w-12" />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden focus:outline-none"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-purple-600 transition">
            Home
          </a>
          <a href="#whatwedo" className="hover:text-purple-600 transition">
            What we do
          </a>
          <a href="#portfolio" className="hover:text-purple-600 transition">
            Portfolio
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-700 font-medium">
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#whatwedo"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              What we do
            </a>
            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              Portfolio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
