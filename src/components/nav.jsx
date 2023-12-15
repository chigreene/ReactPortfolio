// brings in links from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/navbar";
import "./navStyles.css";

function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <Navbar
      links={[
        <Link
          key={1}
          className={`nav-link text-light ${
            currentPage === "/" ? "active" : ""
          }`}
          to="/"
        >
          About
        </Link>,
        <Link
          key={2}
          className={`nav-link text-light ${
            currentPage === "/Resume" ? "active" : ""
          }`}
          to="/Resume"
        >
          Resume
        </Link>,
        <Link
          key={3}
          className={`nav-link text-light ${
            currentPage === "/Contact" ? "active" : ""
          }`}
          to="/Contact"
        >
          Contact
        </Link>,
        <Link
          key={4}
          className={`nav-link text-light ${
            currentPage === "/Portfolio" ? "active" : ""
          }`}
          to="/Portfolio"
        >
          Portfolio
        </Link>,
      ]}
    />
  );
}

export default Nav;

{
  /* <li className={`nav-item ${location.pathname === link.to ? "active" : ""}`}>
  {link}
</li>; */
}
