import rootReducer from '../reducers';
import {createStore} from 'redux';
const initStore =(container) => {
    var store = createStore(rootReducer);
    store.subscribe(()=>{
        container.setState(store.getState());
    });
    return store;
}
export default initStore