import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Graphics from "../components/Graphics";
import Photography from "../components/Photography";

import "../assets/styles/index.css";

const AboutScreen = () => {
  return (
    <div className="gallery__contain">
      <div className="gallery__center">
        <h1>Choose Gallery:</h1>
        <ul className="gallery__links">
          <li>
            <Link to="graphics" className="link_gal">
              Graphics
            </Link>
          </li>
          <li>
            <Link to="photo" className="link_gal">
              Photography
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
      <Routes>
        <Route path="graphics" element={<Graphics />} />
        <Route path="photo" element={<Photography />} />
      </Routes>
    </div>
  );
};

export default AboutScreen;
