const facetSelectedReducer = function(state=null,action){
    switch(action.type){
        case "FACET_SELECT":
            if (action.payload === null){return null;}
            else if (state === null) {return action.payload;}
            else if (state.brand === action.payload.brand){return null;}
            else {return action.payload;}
        default:break;
    }
    return state;
}

export default facetSelectedReducer;