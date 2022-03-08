function blockReducer(state = {all: []}, action) {
    switch(action.type) {
        
        case "FETCH_BLOCKS":
            return { ...state, blocks: action.payload }
        
        default:
            return state
    }
}

export default blockReducer