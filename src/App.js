import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from "./components/ShoeList";
import CartSummary from "./components/CartSummary";
import Facet from './components/Facet';
class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = {
      shoes:[],
      displayShoes:[],
      cart:[],
      facetSelected:null
    };
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
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
      console.log("HandleSelect");
      var newCart = this.state.cart.slice();
      newCart.push(shoe);
      this.setState({cart:newCart});
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
    const onFacetSelect = (facet) => {
      this.handleFacetSelect(facet);
    }
    const onShoeSelect= (shoe) =>{
        this.handleShoeSelect(shoe);
    };
    return (
      <div>

        <NavBar title="Hello World"/>

        <div className="row">

          <div className="col s3">
            <Facet onFacetSelect={onFacetSelect} items={this.state.shoes}/>
          </div>

          <div className="col s6">
            <ShoeList onShoeSelect={onShoeSelect} shoes={this.state.displayShoes}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
