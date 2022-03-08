function blockReducer(state = { all: [] }, action) {
    switch(action.type) {
        
        case "FETCH_BLOCKS":
        console.log("fetch blocks: all")    
        console.log(state.all)
        console.log("fetch blocks: action.payload")
        console.log(action.payload)
        console.log("object assign")
        console.log({ ...state, all: action.payload })
        return { ...state, all: action.payload };
        
        default:
            console.log("hit default")
            return state
    }
}

export default blockReducer