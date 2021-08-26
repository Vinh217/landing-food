import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import store from '../../app/store';
import { cartItemTotalSelector } from '../../pages/cart/selectors';
import './style.scss';

CartModel.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
};

function CartModel({ isActive, handleClick }) {
  const cartToTal = useSelector(cartItemTotalSelector);
  const initialFood = store.getState();
  const listFood = initialFood.cart['cartItems'];

  return (
    <div className={isActive ? "cart active" : "cart"}>
      <div className="cart-overlay" onClick={() => handleClick(false)}></div>
      <div className="cart-food">
        <div className="cart-food-heading" onClick={() => handleClick(false)}>
          <h2 className="cart-title">Fresh Food</h2>
          <IconContext.Provider value={{ className: "item-close" }} >
            <div>
              <AiOutlineClose />
            </div>
          </IconContext.Provider>
        </div>
        {listFood && listFood?.map((item) => {return (
          <div className="cart-food-item" key={item.id}>
            <img src={item.listFoodIndex.img} alt="" />
            <div className="cart-item">
              <div className="cart-item-name">{item.listFoodIndex.name}</div>
              <div className="cart-item-price">{item.listFoodIndex.price}</div>
              <div className="cart-item-handle">
                <button>+</button>
                <span>{item.quantity}</span>
                <button>-</button>
              </div>
            </div>
            <button className="cart-item-delete">
              <AiOutlineDelete />
            </button>
          </div>)
        })}
        <div className="cart-food-handle">
          <div className="cart-total">
            <span>Total</span>
            <span>{cartToTal}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModel;