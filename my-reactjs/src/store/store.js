import {createStore} from 'redux'
import initialState from './initialState'

function reducer(state, action) {
        switch (action.type) {
            case 'SET USER': return {...state.user = action.value};
            case  'SET_PASSWORD': return {...state.password = action.value};
        default: return state
}
}

const store = createStore(reducer, initialState);

export default store