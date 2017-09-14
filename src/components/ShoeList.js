import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>
    {props.shoes
      .filter(s=>(props.facet?s.brand===props.facet.brand:true))
      .map(s=>(<Shoe key={s.id} onShoeSelect={props.onShoeSelect} {...s}/>))}
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;