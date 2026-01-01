import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue
        }       
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    decrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h2", null, this.state.count),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}
export default Counter;