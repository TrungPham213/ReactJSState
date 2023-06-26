import React, { Component } from 'react'
import Model from './model'
import Glass from './glass'
export default class Glasses extends Component {
  render() {
    return (
      <div >
       <Model/>
       <div >
        <Glass />
       </div>
       
      </div>
    //   style={{

    //     position: 'absolute',
    //     top: '25rem',
    //     left: '38rem',
    //     width: '100px',
    //     height: '100px',
    //     opacity: 1,
    // }}
    )
  }
}
