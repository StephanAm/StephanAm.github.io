import React from 'react';

const Shoe = (props) => (
  <div className="card blue-grey darken-1 Shoe">
    <span className="card-title">{props.brand}>{props.name}</span>
    <p>
    Name: {props.name} <br/>
    Brand: {props.brand} <br/>
    Price: R{props.price.toFixed(2)} <br />
    </p>
    <div className="card-action">
      <a onClick={()=>props.onShoeSelect(props)}>Add to basket</a>
    </div>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;