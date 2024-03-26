import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AboutScreen = () => {
  // const location = useLocation();

  // const shouldHideText = location.pathname !== "/gallery";

  return (
    <div>
      <h1>Choose Gallery:</h1>
      <div className="gallery__nav">
        <NavLink className="gallery__link" to="/gallery/graphic">
          Graphic and Web Design
        </NavLink>
        <NavLink className="gallery__link" to="/gallery/photo">
          Photography
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutScreen;
