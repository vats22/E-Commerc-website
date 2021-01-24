import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Detalis from './Components/Detalis';
import Cart from './Components/Cart';
import Default from './Components/Default';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <ProductList/>
      <Detalis/> 
      <Cart/>
      <Default/>
    </React.Fragment>
  );
}

export default App;
