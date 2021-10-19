import React, { Component } from "react";
import UpdatedComponent from '../HOC/withCounter'

class ClickCounter extends Component {
  render() {

    const { count , ClickHandler } = this.props

    return (
      <div>
        <button className = "buttonClick" type="button" onClick={ClickHandler}>
         {this.props.name} Click {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
