import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdGpsFixed } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './style.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../pages/cart/cartSlice';
ListFood.propTypes = {

};

function ListFood({ listFood,handlePageChange,pagination }) {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const pageCount = Math.ceil(pagination._totalRows / pagination._limit);

  const handleAddToCart = (id,index) => {
    const listFoodIndex = listFood[index];
    const action = addToCart({
      id,
      listFoodIndex,
      quantity:1,
    });
    dispatch(action);
    // console.log(listFoodIndex);
  }

  return (
    <div className="order-list">
      <div className="food-list">
        {
          listFood && listFood?.map((food,index) => {
            return (
              <div className="food-item" key={food.id}>
                <Link to={`${match.url}/${food.id}`} >
                  <img src={food.img} alt="foodimage" />
                </Link>
                <IconContext.Provider value={{ className: "food-heart" }}>
                  <div>
                    <AiOutlineHeart />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "food-cart" }} >
                  <div onClick={() => handleAddToCart(food.id,index)}>
                    <AiOutlineShoppingCart />
                  </div>
                </IconContext.Provider>

                <div className="food-content">
                  <div className="food-top">
                    <Link to={`${match.url}/${food.id}`} >
                      <span className="food-title">{food.name}</span>
                      <span className="food-desc">{food.dsc}</span>
                    </Link>
                  </div>
                  <div className="food-bottom">
                    <div className="food-place">
                      <IconContext.Provider value={{ className: "cart-btn" }}>
                        <div>
                          <MdGpsFixed />
                        </div>
                      </IconContext.Provider>
                      <span>{food.country}</span>
                    </div>
                    <span className="food-price">{food.price}$</span>
                  </div>
                </div>
              </div>

            )
          })}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default ListFood;