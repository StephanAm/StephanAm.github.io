import React from 'react';

const Cart = (props) => {
  return (
    <div className="card blue-grey">
    <div className="Cart">
    
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