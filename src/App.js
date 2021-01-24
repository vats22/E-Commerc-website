import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Detalis from './Components/Detalis';
import Cart from './Components/Cart';
import Default from './Components/Default';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/detalis" component={Detalis }/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;

