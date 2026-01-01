import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./Counter";
import SearchForm from "./SearchForm";
import GenreSelect from "./GenreSelect";

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: "Action"
    };

    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleGenreSelect(genre) {
    console.log("Genre selected:", genre);
    this.setState({ selectedGenre: genre });
  }

  handleSearch(query) {
    console.log("Search query:", query);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Counter, { initialValue: 5 }),
      React.createElement(SearchForm, {
        initialQuery: "React",
        onSearch: this.handleSearch
      }),
      React.createElement(GenreSelect, {
        genres: ["Action", "Comedy", "Drama", "Sci-Fi"],
        selectedGenre: this.state.selectedGenre,
        onSelect: this.handleGenreSelect
      })
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(React.createElement(App));
