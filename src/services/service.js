import axios from 'axios'

// import { getData } from '../store/reducers/mainReducer'
import apiURL from './api'


export function getData() {
    return axios.get( apiURL )
                .then(res => res.data.BEAAPI.Results.Data)
}

