function blockReducer(state = { all: [] }, action) {
    switch(action.type) {
        
        case "FETCH_BLOCKS":
            return { ...state, all: action.payload };

        case "CREATE_BLOCK":
            return {...state, all: state.all.concat(action.payload)}
        
        default:
            console.log("hit default")
            return state
    }
}

export default blockReducer