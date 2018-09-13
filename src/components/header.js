import React, { Component } from 'react'
import classes from '../css/styles.css'

class Header extends Component {
  state = {}

  inputChangeHandler = (event) => {}

  render () {
    return (
      <header>
        <div className={classes.logo}>Logo</div>
        <input type='text' onChange={this.inputChangeHandler} />
      </header>
    )
  }
}

export default Header
