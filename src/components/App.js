import React, { Component } from 'react'
import { connect } from 'react-redux'

import DataList from './DataList/DataList'
import './App.css' 

class App extends Component {
  render() {
    return (
      <div className="App">
        Testy test
        <DataList />
      </div>
    )
  }
}

export default App
