import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import CartModel from './components/cartmodel';
import Footer from './components/footer';
import Header from './components/header';
import './grid.scss'
import HomePage from './pages/home';
import OrderOnline from './pages/order';


function App() {
  const [isActive,setIsActive] = useState(false);
  const handleClickCart = (data) => {
    setIsActive(data);
  }

  const handleCartButton = (data) => {
    setIsActive(data);
  }

  return (
    <div className="App">
      <Header handleClickCart={handleCartButton}/>
      <CartModel handleClick={handleClickCart} isActive={isActive}/>
      <Switch >
      <Redirect from='/home' to='/' exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/order" component={OrderOnline} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
