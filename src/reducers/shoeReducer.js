const shoeReducer = function(state=[],action){
    if(action.type=="SHOES_SET")
    {
        return action.payload.slice();
    }
    return state;
}

export default shoeReducer;