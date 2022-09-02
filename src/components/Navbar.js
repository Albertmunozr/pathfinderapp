import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <Link className="navbar__logo--link" to="/">
        <span className="navbar__logo">Spells</span>
      </Link>

      {menuClicked ? (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
      )}

      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item) => {
          return (
            <li className="navbar__item" key={item.title}>
              <NavLink
                to={item.url}
                className="navbar__link"
                onClick={menuClicked ? toggleMenuClick : null}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
