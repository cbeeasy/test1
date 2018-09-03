import React, { Component } from "react";
import "../css/styles.css";

class Header extends Component {
  state = {
    active: false
  };

  inputChangeHandler = event => {
    const value = event.target.value !== "";

    this.setState({
      active: value
    });
  };

  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
