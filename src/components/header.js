import React, { Component } from 'react'
import '../css/styles.css'

class Header extends Component {
  state = {}

  inputChangeHandler = (event) => {}

  render () {
    return (
      <header>
        <div className='logo'>Logo</div>
        <input type='text' onChange={this.inputChangeHandler} />
      </header>
    )
  }
}

export default Header
