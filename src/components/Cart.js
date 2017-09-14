import React from 'react';

const Cart = (props) => {
  var ItemCount = props.items.length;
  var TotalCost = props.items.map(s=>s.price).reduce((a,b)=>a+b,0);
  return (
    <div className="card">
      <div className="Cart">
      <ul>
        {props.items.map((i,x)=>(
          <li>
            {i.brand}>{i.name}
            <a onClick={()=>(props.onRemoveItem(x))}>X</a>
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