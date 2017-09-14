import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from "./components/ShoeList";
import CartSummary from "./components/CartSummary";
import Cart from "./components/Cart";
import Facet from './components/Facet';
import {CreateStore} from 'redux';
const AppName = "React - Shoe Store!";
const AppRootKey = AppName.toLowerCase().replace(/[^(a-z)]/g,"");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoes:[],
      displayShoes:[],
      cart:this.getCachedCart(),
      facetSelected:null
    };
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
    localStorage.setItem(AppRootKey+"cart",JSON.stringify(newCart));
    this.setState({cart:newCart});
  }
  handleCartRemove(index)
  {
      var newCart = this.state.cart.slice();
      newCart.splice(index,1);
      localStorage.setItem(AppRootKey+"cart",JSON.stringify(newCart));
      this.setState({cart:newCart});
  }
  initStock(shoes)
  {
    this.setState({
      shoes:shoes,
      displayShoes:shoes
    });
  }
  componentDidMount() {
    Api.getShoes().then(shoes=>(this.initStock(shoes)));
  }

  handleShoeSelect (shoe) {
    this.handleCartAdd(shoe);
  }
  updateDisplayShoes(facetSelected)
  {
    if(facetSelected == null){
      this.setState({displayShoes:this.state.shoes});
    }
    else{
      var displayShoes = this.state.shoes.filter((shoe)=>(shoe.brand==facetSelected.brand));
      this.setState({displayShoes:displayShoes});
      }
  }
  handleFacetSelect(facet)
  {
    var currentFacet = this.state.facetSelected;
    var newFacet;
    if(currentFacet == null){
      newFacet=facet;
    }
    else if (currentFacet.brand == facet.brand){
      newFacet=null;    
    }
    else{
      newFacet = facet;
    }
    this.updateDisplayShoes(newFacet);
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
            <ShoeList onShoeSelect={this.handleShoeSelect} shoes={this.state.displayShoes}/>
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
