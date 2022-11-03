import React from 'react';
import Image from '../assets/logo.webp';

export const Navbar = () => {
  return (
    <div className="logo">
     <img src={Image} alt="logo" />
     <button>Order Now</button>

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
  )
}
