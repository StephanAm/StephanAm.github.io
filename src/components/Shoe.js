import React from 'react';

const Shoe = (props) => (
  <div>
    <h4>Shoe</h4><br/>
    Name: {props.name} <br/>
    Brand: {props.brand} <br/>
    Price: R{props.price.toFixed(2)} <br /> 
    <a href="#" onClick={()=>props.onShoeSelect(props)}>Add to basket</a>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;