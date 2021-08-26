import React, { useState } from 'react';
import './style.scss'
import { IconContext } from "react-icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemCountSelector } from '../../pages/cart/selectors';

function Header({handleClickCart}) {
  const cartItemCount = useSelector(cartItemCountSelector);

  return (
    <nav>
      <div class="menu-wrap">
        <Link to='/home'>
          <div class="logo">
            Freshfood
          </div>
        </Link>
        <div class="menu h-xs">
          <a href="#home">
            <div class="menu-item active">
              Home
            </div>
          </a>
          <a href="#about">
            <div class="menu-item">
              About
            </div>
          </a>
          <Link to='/order'>
            <div class="menu-item">
              Menu
            </div>
          </Link>
          <a href="#testimonial">
            <div class="menu-item">
              Testimonials
            </div>
          </a>
        </div>
        <div class="right-menu" onClick={() => handleClickCart(true)}>
          <IconContext.Provider value={{className: "cart-btn" }}>
            <div>
              <HiOutlineShoppingCart />
            </div>
          </IconContext.Provider>
          <p className="quantity">{cartItemCount}</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;