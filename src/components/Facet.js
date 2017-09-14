import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <div>
    <div className="card blue-grey">
    <ul>
      {countByKey(props.items,'brand').map((i,ix)=>(
        <li key={ix} onClick={()=>props.onFacetSelect(i)}>
          <div className="chip">
          {i.brand} ({i.count})
          </div>
        </li>
          ))}
    </ul>
    </div>
  </div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;