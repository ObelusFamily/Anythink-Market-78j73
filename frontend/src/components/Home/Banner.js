import React from "react";
import logo from "../../imgs/logo.png";
import TitleFilter from "./TitleFilter";
const Banner = ({ titleFilter }) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <TitleFilter />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
