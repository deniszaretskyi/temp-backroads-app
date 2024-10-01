import React from "react";
import { pageLinks, navIcons } from "../data/data";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <a href={url} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {navIcons.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <a href={url} target="_blank" className="footer-icon">
                  <i className={text}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
