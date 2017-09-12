import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <div>
    Facet
    <ul>
      {countByKey(props.items,'brand').map(i=>(<li onClick={()=>props.onFacetSelect(i)}>{i.brand} ({i.count})</li>))}
    </ul>

  </div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;