import React from 'react';

const Cart = (props) => {
  var ItemCount = props.items.length;
  var TotalCost = props.items.map(s=>s.price).reduce((a,b)=>a+b,0);
  return (
    <div className="Cart">
      <ul>
        {props.items.map((i,x)=>(
          <li onClick={()=>(props.onRemoveItem(x))}>
            {i.brand}>{i.name}
            <a>X</a>
          </li>))}
      </ul>
    </div>
  )
};

Cart.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Cart;