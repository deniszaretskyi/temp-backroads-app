import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, navIcons } from "../data/data";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url} className="nav-link">
                    {" "}
                    {item.text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {navIcons.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={text}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
