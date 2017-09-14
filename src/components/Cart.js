import React from 'react';

const Cart = (props) => {
  return (
    <div className="Cart">
      <div className="card blue-gray darken-1">
    
      <ul>
        {props.items.map((i,x)=>(
          <li key={x}>
            <div className="chip">
            <a onClick={()=>(props.onRemoveItem(x))}>X</a>
            {i.brand}>{i.name}
            </div>
          </li>))}
      </ul>
      </div>
    </div>
  )
};

Cart.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Cart;