import React from "react";
import "./MenuOne.css";

import { ReactDOM } from "react";

export default function MenuOne() {
  return (
    <>
      <nav className="navbar navbar-expand-sm  navbar-light">
        <div className="container">
          <h4>Brand Name</h4>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mymenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="mymenu"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
