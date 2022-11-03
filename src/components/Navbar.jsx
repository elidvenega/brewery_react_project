import React from "react";
import Image from "../assets/logo.webp";

export const Navbar = () => {
  return (
    <div className="logo">
      <div className="logo_img">
        <img src={Image} alt="logo" />
        {/* <span
         className="accesories">
          <button>Order Now</button>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </span> */}
      </div>

      <ul className="nav_links">
        <li>HOME</li>
        <li>ORDER ONLINE</li>
        <li>GIFT CARD</li>
        <li>ALE AND ELIXIR</li>
        <li>CONTACT US</li>
        <li>LORE</li>
        <li>COOKBOOK</li>
      </ul>
    </div>
  );
};
