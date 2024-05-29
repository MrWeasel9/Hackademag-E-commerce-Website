import React, { FC, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import logo from "../Assets/logo.png";
import "./Nav.css";

interface NavProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  cartItems: string[]; // List of product names added to the cart
  cartCounter: number; // Number of items in the cart
  clearCart: () => void; // Function to clear the cart
}

const Nav: FC<NavProps> = ({ handleInputChange, query, cartItems, cartCounter, clearCart }) => {
  const [isCartHovered, setIsCartHovered] = useState(false);

  const handleCartMouseEnter = () => {
    setIsCartHovered(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartHovered(false);
  };

  return (
    <nav className="myNav">
      <span className="nav-logo">
        <a href=""><img src={logo} alt="Hackademag Logo" /></a>
        <a href=""><p>Hackademag</p></a>
      </span>
      <div className="nav-container">
        <input  
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your searched shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <div className="cart-counter">{cartCounter}</div>
        <div
          className="cart-icon-container"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
        >
          <AiOutlineShoppingCart className="nav-icons" />
          {isCartHovered && (
            <div className="cart-tooltip">
              {cartItems.length === 0 ? (
                <div className="empty-cart">Empty Cart</div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index}>{item}</div>
                ))
              )}
              
            </div>
          )}
          
          
        </div>
        <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
