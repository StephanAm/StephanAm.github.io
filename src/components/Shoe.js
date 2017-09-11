import React from 'react';

const Shoe = (props) => (
  <div>
    <a href="#" onClick={()=>props.onShoeSelect(props)}>Add to basket</a>
  
    Shoe <br/>
    Name: {props.name} <br/>
    Brand: {props.brand} <br/>
    Price: R{props.price.toFixed(2)} <br /> 
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;