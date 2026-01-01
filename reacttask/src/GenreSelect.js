import React from "react";

class GenreSelect extends React.Component {

    constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(genre) {
    if (typeof this.props.onSelect === "function") {
      this.props.onSelect(genre);
    }
  }

    render() {
         const genres = this.props.genres || [];
    const selectedGenre = this.props.selectedGenre;

    return React.createElement(
      "div",
      null,
      genres.map((genre) =>
        React.createElement(
          "button",
          {
            key: genre,
            onClick: () => this.handleSelect(genre),
            style: {
              fontWeight: genre === selectedGenre ? "bold" : "normal",
              marginRight: "8px"
            }
          },
          genre
        )
      )
    );
    }
}
export default GenreSelect;