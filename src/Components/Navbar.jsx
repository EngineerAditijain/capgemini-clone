import React, { useState } from "react";
import "./Navbar/css/navbar.css";

import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import LanguageIcon from "@mui/icons-material/Language";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(false);
  return (
    <header id="header_main">
      <div className="navbar ">
        <div className="headertop">
          <NavLink to="/" className="underline-one">
            Investors
          </NavLink>
          <NavLink to="/" className="underline-one">
            Contact us
          </NavLink>
          <NavLink to="/" className="underline-one">
            Global | EN <LanguageIcon className="lang"></LanguageIcon>{" "}
          </NavLink>
        </div>

        <div className="headerbottom container">
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className=""></FaTimes>
            ) : (
              <FaBars className=""></FaBars>
            )}
          </div>
          {open && (
            <div className="hidden-nav-container">
              <ul className={`${open ? "open-nav" : "close-nav"}`}>
                <NavLink to="/insights" className="underlines">
                  insights
                </NavLink>
                <NavLink to="industries" className="underlines">
                  Industries
                </NavLink>
                <NavLink to="/services" className="underlines">
                  services
                </NavLink>
                <NavLink to="/career" className="underlines">
                  career
                </NavLink>
                <NavLink to="/news" className="underlines">
                  news
                </NavLink>
                <NavLink to="/about" className="underlines">
                  about us
                </NavLink>
                <NavLink to="/investors" className="underlines">
                  Investors
                </NavLink>
                <NavLink to="/Contactus" className="underlines">
                  Contact us
                </NavLink>
                <NavLink to="/language" className="underlines">
                  Global | EN{" "}
                </NavLink>
              </ul>
            </div>
          )}
          <div>
            <a role="link" className="logo" tabIndex="-1">
              <img
                src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                alt="Capgemini"
                data-blue-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                data-white-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"
              ></img>
            </a>
          </div>
          <ul className="dropdown" id="navbar_items">
            <NavLink to="/insights" className="underline-one">
              insights
            </NavLink>
            <NavLink to="industries" className="underline-one">
              Industries
            </NavLink>
            <NavLink to="/services" className="underline-one">
              services
            </NavLink>
            <NavLink to="/career" className="underline-one">
              career
            </NavLink>
            <NavLink to="/news" className="underline-one">
              news
            </NavLink>
            <NavLink to="/about" className="underline-one">
              about us
            </NavLink>
          </ul>
          <div className="search-container">
            {bar && (
              <input
                type="search"
                placeholder="search "
                name=""
                id="search-box"
              ></input>
            )}
            <i
              className="fa fa-search"
              onClick={() => {
                if (!bar) setBar(true);
                else setBar(false)
              }}
            ></i>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
