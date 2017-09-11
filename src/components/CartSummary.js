import React from 'react';

const CartSummary = (props) => {
  var ItemCount = props.cart.length;
  var TotalCost = props.cart.map(s=>s.price).reduce((a,b)=>a+b,0);
  return (
    <div className="CartSummary">
      CartSummary <br/>
      Total Items: <span id="ItemCount">{ItemCount}</span><br/>
      Total Cost:  <span id="TotalCost">{TotalCost.toFixed(2)}</span><br/>
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;