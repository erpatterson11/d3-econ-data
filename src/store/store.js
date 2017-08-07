import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'

import MainReducer from './reducers/mainReducer'

// const Combined = combineReducers({mainReducer})

export default createStore( 
    MainReducer,  
    applyMiddleware( reduxPromiseMiddleware() ) 
    )