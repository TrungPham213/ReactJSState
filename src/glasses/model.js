import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    return (
      <div>
        <img src="./img/model.jpg" alt=""  style={{
          position: 'absolute',
          top: '7rem',
          left: '40rem',
          width: '250px',
          height: '250px',
          opacity: 1,
        }}/>
      </div>
    )
  }
}
