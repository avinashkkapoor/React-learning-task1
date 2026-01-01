import React from "react";

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             query: props.initialQuery || ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({ query: event.target.value });
    }

    handleKeyDown(event) {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  }

  handleSearch() {
    if (typeof this.props.onSearch === "function") {
      this.props.onSearch(this.state.query);
    }
  }
    render() {
        return React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "text",
        value: this.state.query,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown
      }),
      React.createElement(
        "button",
        { onClick: this.handleSearch },
        "Search"
      )
    );
    }
}
export default SearchForm;