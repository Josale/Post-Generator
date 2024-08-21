import React, { Component } from 'react'
import Canvas from '../Canvas/Canvas'
import './App.scss'

export default class App extends Component {

  render(): React.ReactNode {
    return (
      <div className='App'>
       <Canvas />
      </div>
    );
  }
}
