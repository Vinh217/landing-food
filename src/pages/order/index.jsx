import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import foodApi from '../../api/foodApi';
import Filters from '../../components/filters';
import ListFood from '../../components/listfood';
import Search from '../../components/search';
import './style.scss';
import DetailFood from '../detailFood';
import Skeleton from '../../components/Skeleton';

function OrderOnline(props) {
  const match = useRouteMatch();
  const queryParams = {
    _page: 1,
    _limit:16
  }
  const [isloading,setIsLoading] = useState(true);
  const [listFood,setListFood] = useState([]);
  const [filters,setFilters] = useState(queryParams);
  const [category,setCategory] = useState('best-foods');
  const [paginate,setPaginate] = useState({ 
    _page: 1,
    _limit:2,
    _totalRows: 1,
  });

  const handlePageChange = (page) => {
    const newFilters = { 
      ...filters,
      _page: page.selected +1
    }

    setFilters(newFilters);
  }

  const handleFiltersChange = (newFilters) => {
    setFilters(prevFilters =>({
      _page:1,
      _limt:16,
      ...newFilters
    }) )
  }

  const handleChangeCategory = (data) => {
    setCategory(data);

  }

  const onSubmit = (data) => {
    console.log(data);
    setCategory('our-foods');
    setFilters((prevFilters) => ({
      ...prevFilters,
      name_like: data.search,
    }));
  };

  useEffect(() => {
    (async () => {
      const {pagination,data} = await foodApi.getAll(category,filters);
      setListFood(data);
      setPaginate(pagination);
      setIsLoading(false);
    })();
  },[category,filters]);
  
  return (
    <section className="shop" >
      <div className="banner align-items-center">
        <h2 className="banner-title">FreshFood</h2>
        <div className="banner-paths">
          <div className="banner-path">Home</div>
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"></path></svg>
          <div className="banner-path">Order</div>
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"></path></svg>
          <div className="banner-path active">FreshFood</div>
        </div>
      </div>

      <section className="container list-order">
        <Filters onChange={handleFiltersChange} categoryChange={handleChangeCategory} />
        <Search onSubmit={onSubmit}/>
        {isloading && <Skeleton /> }      
        <Switch >
          <Route path={match.url} exact >
            <ListFood listFood={listFood} handlePageChange={handlePageChange} pagination={paginate}/>
          </Route>
          <Route path={`${match.url}/:foodId`} component={ DetailFood } />
        </Switch>
        
      </section>
    </section>
  );
}

export default OrderOnline;