import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";

const Links = ({ link, setToggleMenu }) => {
  return (
    <>
      <li className="nav-item" onClick={() => setToggleMenu(false)}>
        <a href="#12" className="nav-link">
          {link}
        </a>
      </li>
    </>
  );
};

const links = [
  "Home",
  "Mathmatics",
  "Reasoning",
  "Aptitude",
  "Verbal Aptitude",
  "more",
];
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <header className="navbar-container">
      <nav className={`navbar ${color ? "color-mobile-nav-menu" : ""}`}>
        {color ? (
          <a href="#" className="nav-logo">
            Tutor.
          </a>
        ) : (
          <a href="#" className="nav-logo">
            Tu<span>tor.</span>
          </a>
        )}

        <ul
          className={`nav-menu ${toggleMenu ? "active" : ""}  ${
            color && toggleMenu ? "color-mobile-nav-menu" : ""
          }`}
        >
          {links.map((link) => (
            <Links link={link} key={link} setToggleMenu={setToggleMenu} />
          ))}
        </ul>
        <button
          className={`hamburger ${toggleMenu ? "active" : ""}`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
