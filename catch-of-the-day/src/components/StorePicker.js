import React, { Component } from "react";

export default class StorePicker extends Component {
    myInput = React.createRef()
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value
        console.log("Go to Store")
        this.props.history.push(`/store/${storeName}`)
    }
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input type="text" 
          ref = {this.myInput}placeholder="Store Name" />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}
