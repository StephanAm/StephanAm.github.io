import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from "./components/ShoeList";
import CartSummary from "./components/CartSummary";
import Cart from "./components/Cart";
import Facet from './components/Facet';

import initStore from './store';
const AppName = "React - Shoe Store!";
const AppRootKey = AppName.toLowerCase().replace(/[^(a-z)]/g,"");

class App extends Component {

  constructor(props) {
    super(props);
    this.store = initStore(this);
    this.state = this.store.getState();
    this.storage = null;
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
  }
  getCachedItem(key,defaultVal)
  {
    const cachedItem = localStorage.getItem(AppRootKey+"."+key);
    if(cachedItem)
    {
      return JSON.parse(cachedItem);
    } 
    return defaultVal;
  }
  CacheItem(key,data)
  {
    if(this.storage){
      key=AppRootKey+"."+key;
      localStorage.setItem(key,JSON.stringify(data));
    }
  }
  handleCartAdd(shoe)
  {
    this.store.dispatch({type:"CART_ADD",payload:shoe});
    this.CacheItem("cart",this.getState().cart);
  }
  handleCartRemove(index)
  {
    this.store.dispatch({type:"CART_REMOVE",payload:index});
    this.CacheItem("cart",this.getState().cart);
  }
  initStock(shoes)
  {
    this.store.dispatch({type:"SHOES_SET",payload:shoes})
  }
  componentDidMount() {
    Api.getShoes().then(shoes=>(this.initStock(shoes)));
    this.storage = localStorage;
    this.store.dispatch({type:"CART_SET",payload:this.getCachedItem("cart",[])});  
  }

  handleShoeSelect (shoe) {
    this.handleCartAdd(shoe);
  }

  handleFacetSelect(facet)
  {
    this.store.dispatch({type:"FACET_SELECT",payload:facet});
  }
  render() {
    
    return (
      <div>
        <div className="navbar-fixed">
        <NavBar title={AppName}/>
        </div>
        <div className="row">
          <div className="col s3">
            
              <Facet onFacetSelect={this.handleFacetSelect} items={this.state.shoes}/>
            </div>

          <div className="col s6">
            <ShoeList onShoeSelect={this.handleShoeSelect} shoes={this.state.shoes} facet={this.state.facetSelected}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart}/>
            <Cart onRemoveItem={this.handleCartRemove} items={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
