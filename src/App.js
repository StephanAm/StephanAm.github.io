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
    this.store = initStore();
    this.state = this.store.getState();
/*    this.state = {
      shoes:[],
      displayShoes:[],
      cart:[],
      facetSelected:null
    };*/
    this.storage = null;
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
  }
  getCachedCart()
  {
    const cachedCart = localStorage.getItem(AppRootKey+"cart");
    if(cachedCart)
    {
      return JSON.parse(cachedCart);
    }
    return [];
  }
  handleCartAdd(shoe)
  {
    var newCart = this.state.cart.slice();
    newCart.push(shoe);
    if(this.storage){
      this.storage.setItem(AppRootKey+"cart",JSON.stringify(newCart));
    }
    this.setState({cart:newCart});
  }
  handleCartRemove(index)
  {
      var newCart = this.state.cart.slice();
      newCart.splice(index,1);
      if(this.storage){
        this.storage.setItem(AppRootKey+"cart",JSON.stringify(newCart));
      }
      this.setState({cart:newCart});
  }
  initStock(shoes)
  {
    
    this.store.dispatch({type:"SHOES_SET",payload:shoes})
    this.setState(this.store.getState());
  }
  componentDidMount() {
    Api.getShoes().then(shoes=>(this.initStock(shoes)));
    this.setState({cart:this.getCachedCart()});
    this.storage = localStorage;
  }

  handleShoeSelect (shoe) {
    this.handleCartAdd(shoe);
  }

  handleFacetSelect(facet)
  {
    this.store.dispatch({type:"FACET_SELECT",payload:facet});
    var newFacet = this.store.getState().facetSelected;
    this.setState({facetSelected:newFacet});
  }
  render() {
    
    return (
      <div>
        <div className="navbar-fixed">
        <NavBar title={AppName}/>
        </div>
        <div className="row">
          <div className="col s3">
            <div className="sidebar">
              <Facet onFacetSelect={this.handleFacetSelect} items={this.state.shoes}/>
            </div>
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
