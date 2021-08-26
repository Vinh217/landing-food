import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from "react-hook-form";
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import * as yup from "yup";
import './style.scss';

function Search({onSubmit}) {
  const schema = yup.object().shape({
    search: yup.string(),
  });

  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {search: ''},
    resolver: yupResolver(schema)
  });

  const { onChange, ...rest } = register("search");

  return (
    <div className="order-search">
      <form onSubmit={handleSubmit(onSubmit)} className="order-search-form">
        <input onChange={(e) => {
          onChange(e);}}
          {...rest} 
          placeholder="Search your food"
          />
         {errors.search && <p>{errors.search.message}</p>}
        <button className="order-btn-search" >
          <IconContext.Provider value={{ className: "order-icon" }}>
            <div>
              <BiSearchAlt2 />
            </div>
          </IconContext.Provider>
        </button>
      </form>

      <div className="custom-select">
        <select>
          <option value="0">Price: Low to High</option>
          <option value="1">Price: High to Low</option>
          <option value="2">Title: A to Z</option>
          <option value="3">Title: Z to A</option>
        </select>
      </div>
      <div className="order-display-types">
        <svg class="MuiSvgIcon-root shop-handle__display-type active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg>
        <svg class="MuiSvgIcon-root shop-handle__display-type false" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></svg>
      </div>
    </div>
  );
}

export default Search;