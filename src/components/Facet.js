import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <div>
    <div className="card">
    <ul>
      {countByKey(props.items,'brand').map(i=>(<li onClick={()=>props.onFacetSelect(i)}>{i.brand} ({i.count})</li>))}
    </ul>
    </div>
  </div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;