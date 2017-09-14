const cartReducer = function(state=[],action){
    switch(action.type)
    {
        case "CART_ADD":
            state = state.slice();
            state.push(action.payload);
            break;
        case "CART_REMOVE":
            state = state.slice();
            state.splice(action.payload,1);
            break;
        case "CART_SET":
            state = action.payload.slice();
    }
    return state;
}

export default cartReducer;