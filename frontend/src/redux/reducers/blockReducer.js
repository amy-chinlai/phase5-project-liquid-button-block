import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

function blockReducer(state = { all: [] }, action) {
    form: formReducer
    switch(action.type) {
        
        case "FETCH_BLOCKS":
            return { ...state, all: action.payload };
        
        default:
            console.log("hit default")
            return state
    }
}

export default blockReducer