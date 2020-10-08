import React, { Component } from 'react'
import {setScreenOrientation} from './components/ScreenParameters/orientation'

import Routes from './components/Routes/Routes'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await setScreenOrientation("PU")
  }

  render() {
    return (
      <Routes/>
    );
  }
}
