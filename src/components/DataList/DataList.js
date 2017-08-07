import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getData, updateTest } from '../../store/reducers/mainReducer'


class DataList extends Component {
    constructor() {
        super()

        // this.state = {
        //     test: 'this is a test',
        //     data: {},
        //     loading: false
        // }

        // this.updateTest = this.updateTest.bind(this)
    }


    componentDidMount() {
        this.props.getData()
    }


    // updateTest = function(val) {
    //     console.log(val)
    //     this.setState({test: val})
    // }

    render() {

        const displayData = () => this.props.store.data.map( (data, i) => ( <li key={data.Code + i}>{data.GeoName}: ${data.DataValue} - {data.TimePeriod}</li> ))

       return ( <div>
                    <p>This is my data list component</p>
                    <p>{this.props.store.test}</p>
                    <input type='text' onChange={ e => this.props.updateTest(e.target.value) } />
                    <div>
                        <button onClick={this.props.getData}>Get dat data</button>
                        <ul>
                            { this.props.store.loading ? "getting data" : displayData() }
                        </ul>
                    </div>
                </div>
         )
    }
}

function mapStateToProps(state) {
    console.log(state.data)
    return {store: state}
}


// adding {getData} object to connect binds action creators to dispatch (Redux)
// this lets us use the getData function on "this.props" and will automatically
// connect it to the store
export default connect(mapStateToProps, {getData, updateTest})(DataList)