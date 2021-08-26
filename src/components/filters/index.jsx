import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { GiDrinkMe, GiHamburger, GiPizzaSlice, GiSandwich, GiSlicedBread } from "react-icons/gi";
import './style.scss';
import { useState } from 'react';

Filters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function Filters({ categoryChange, onChange }) {
  const handleChangCategory = (newCategoryId) => {
    categoryChange && categoryChange(newCategoryId);
  }

  const handleChangePrice = (e) => {
    const { value } = e.target;
    switch (value) {
      case 'under100':
        let newFilter = {
          price_lte: 100,
        }
        return onChange(newFilter);
      case '50-100':
        let newFilter1 = {
          price_gte: 50,
          price_lte: 100,
        }
        return onChange(newFilter1);
      case 'under50':
        let newFilter2 = {
          price_lte: 50,
        }
        return onChange(newFilter2);
      case 'than100':
        let newFilter3 = {
          price_gte: 100,
        }
        return onChange(newFilter3);

      default:
        return;
    }
  }

  return (
    <div className="order-filters">
      <h2 className="order-filters-title" >Popular</h2>
      <ul className="order-filters-list">
        <li className="order-filters-item" onClick={() => handleChangCategory('burgers')}>
          <IconContext.Provider value={{ className: "order-icon" }}>
            <div>
              <GiHamburger />
            </div>
          </IconContext.Provider>
          <span>Burgers</span>
        </li>
        <li className="order-filters-item" onClick={() => handleChangCategory('pizzas')}>
          <IconContext.Provider value={{ className: "order-icon" }}>
            <div>
              <GiPizzaSlice />
            </div>
          </IconContext.Provider>
          <span>Pizzas</span>
        </li>
        <li className="order-filters-item" onClick={() => handleChangCategory('breads')}>
          <IconContext.Provider value={{ className: "order-icon" }}>
            <div>
              <GiSlicedBread />
            </div>
          </IconContext.Provider>
          <span>Breads</span>
        </li>
        <li className="order-filters-item" onClick={() => handleChangCategory('sandwiches')}>
          <IconContext.Provider value={{ className: "order-icon" }}>
            <div>
              <GiSandwich />
            </div>
          </IconContext.Provider>
          <span>Sandwiches</span>
        </li>
        <li className="order-filters-item" onClick={() => handleChangCategory('drinks')}>
          <IconContext.Provider value={{ className: "order-icon" }}>
            <div>
              <GiDrinkMe />
            </div>
          </IconContext.Provider>
          <span>Drinks</span>
        </li>
      </ul>

      <h2 className="order-filters-title" >Price</h2>
      <form className="order-filter-checkbox" action="/action_page.php">
        <div className="order-filters-form">
          <label class="checkbox">
            <input type="radio" name="checkbox" className="checkbox__input" value="under100" onChange={handleChangePrice} />
            <span class="checkmark"></span>
            Under 100$
          </label>
        </div>
        <div className="order-filters-form">
          <label class="checkbox">
            <input type="radio" name="checkbox" className="checkbox__input" value="50-100" onChange={handleChangePrice} />
            <span class="checkmark"></span>
            $50 to $100
          </label>
        </div>
        <div className="order-filters-form">
          <label class="checkbox">
            <input type="radio" name="checkbox" className="checkbox__input" value="under50" onChange={handleChangePrice} />
            <span class="checkmark"></span>
            Under $50
          </label>
        </div>
        <div className="order-filters-form">
          <label class="checkbox">
            <input type="radio" name="checkbox" className="checkbox__input" value="than100" onChange={handleChangePrice} />
            <span class="checkmark"></span>
            Above $100
          </label>
        </div>
      </form>

    </div>

  );
}

export default Filters;