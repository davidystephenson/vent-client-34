import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getRooms } from './actions'

class App extends Component {
  componentDidMount () {
    this.props.getRooms()
  }
  render () {
    return <div>Hello</div>
  }
}

const mapDispatchToProps = {
  getRooms
}

export default connect(null, mapDispatchToProps)(App)