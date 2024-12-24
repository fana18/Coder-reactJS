import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          PowerTechnology
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/auriculares">
                Auriculares
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/parlantes">
                Parlantes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/notebooks">
                Notebooks
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;
