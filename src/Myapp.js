import React from "react";
import "./App.css";
import MenuOne from "./MenuOne";
import MenuTwo from "./MenuTwo";
import MenuThree from "./MenuThree";
import MenuFour from "./MenuFour";
import MenuFive from "./MenuFive";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Myapp() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <Router>
            <ul className="ulclass">
              <li className="liclass">
                <Link to="/">MenuOne</Link>
              </li>
              <li className="liclass">
                <Link to="/MenuTwo">MenuTwo</Link>
              </li>
              <li className="liclass">
                <Link to="/menuthree">MenuThree</Link>
              </li>
              <li className="liclass">
                <Link to="/menufour">MenuFour</Link>
              </li>
              <li className="liclass">
                <Link to="/menufive">MenuFive</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<MenuOne />}></Route>
              <Route exact path="/MenuTwo" element={<MenuTwo />}></Route>
              <Route exact path="/menuthree" element={<MenuThree />}></Route>
              <Route exact path="/menufour" element={<MenuFour />}></Route>
              <Route exact path="/menufive" element={<MenuFive />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
