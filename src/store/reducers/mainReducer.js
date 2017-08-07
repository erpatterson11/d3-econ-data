import * as dataServ from '../../services/service'

// initial state
const initialState = {
    test: 'test',
    loading: false,
    data: []
}


// action types
const UPDATE_TEST = 'UPDATE_TEST'
const GET_DATA = 'GET_DATA'
const GET_DATA_PENDING = 'GET_DATA_PENDING'
const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED'




// reducer 
export default function mainReducer( state = initialState, action) {

    switch(action.type) {

        case UPDATE_TEST:
            return Object.assign({}, state, {test: action.payload})

        case GET_DATA_PENDING:
            return Object.assign({}, state, {loading: true, data: [...state.data, action.payload]})

        case GET_DATA_FULFILLED: 
            return Object.assign({},state,{
                    loading: false,
                    data: action.payload
                }
            )

        default: return state
    }

}


// action creators


export function updateTest( newTest ) {
    return {
        type: UPDATE_TEST,
        payload: newTest
    }
}

export function getData( ) {
    return {
        type: GET_DATA,
        payload: dataServ.getData()
    }
}
