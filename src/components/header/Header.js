import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../../assets/images/logo.png'
import "./Header.css";
import $ from "jquery";
// import { FaBeer } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { DiscFull, Facebook, Instagram, Twitter } from "@mui/icons-material";
export const Header = () => {
  const hideMenuHandler = () => {
    $(".bar-1").removeClass("bar-1-animation");
    $(".bar-2").removeClass("bar-2-animation");
    $(".bar-3").removeClass("bar-3-animation");
    $(".nav-menu").removeClass("show-menu");
  };

  const showMenuHandler = () => {
    $(".bar-1").toggleClass("bar-1-animation");
    $(".bar-2").toggleClass("bar-2-animation");
    $(".bar-3").toggleClass("bar-3-animation");
    $(".nav-menu").toggleClass("show-menu");
  };

  return (
    <div className="header">
      <div className="social-wrapper">
        <ul>
          {/* <li>
            <a href="" target="_blank">
              <BsFacebook />
            </a>
          </li> */}
          <li>
            <a href="https://twitter.com/" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/" target="_blank">
              <FaDiscord />
            </a>
          </li>
        </ul>
        {/* <Link to="/"><img src={Logo} alt="" width="346px"/></Link> */}
      </div>
      <div className="nav-button" onClick={showMenuHandler}>
        <span className="bar-1"></span>
        <span className="bar-2"></span>
        <span className="bar-3"></span>
      </div>
      <div className="nav-menu">
        <ul>
          {/* <li>
            <a href="#about" onClick={hideMenuHandler}>
              About
            </a>
          </li> */}
          {/* <li><a href="#features">Features</a></li> */}
          <li>
            <a href="#utility" onClick={hideMenuHandler}>
              Utility
            </a>
          </li>
          <li>
            <a href="#roadmap" onClick={hideMenuHandler}>
              Roadmap
            </a>
          </li>
          {/* <li><a href="#prizes">Prizes</a></li> */}
          <li>
            <a href="#team" onClick={hideMenuHandler}>
              Team
            </a>
          </li>
          {/* <li>
            <a href="#faq" onClick={hideMenuHandler}>
              Faq
            </a>
          </li> */}
          {/* <li><Link to="/freebies">Freebies</Link></li> */}
        </ul>
        {/* <a href="#whitepaper" className='whitepaper'>Whitepaper</a> */}
      </div>
    </div>
  );
};
