import React from "react";
import "./MenuTwo.css";

export default function MenuOne() {
  return (
    <>
      <div className="section">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Brand Name
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myid"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end "
              id="myid"
            >
              <ul className="navbar-nav  ">
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
