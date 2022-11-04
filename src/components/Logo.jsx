import React from "react";
import Image from "../assets/logo.webp";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo_img">
        <img src={Image} alt="logo" />
      </div>

      <div className="accessories">
        <button className="btn">Order Now</button>
        <p>icon</p>
        <p>icon</p>
        <p>icon</p>
      </div>
    </div>
  );
};
