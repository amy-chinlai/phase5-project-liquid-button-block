function blockReducer(state = { all: [] }, action) {
    switch(action.type) {
        
        case "FETCH_BLOCKS":
            return { ...state, all: action.payload };
        
        default:
            console.log("hit default")
            return state
    }
}

export default blockReducer