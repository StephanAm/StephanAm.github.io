import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>ShoeList
    {props.shoes.map(s=>(<Shoe key={s.id} onShoeSelect={props.onShoeSelect} {...s}/>))}
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;