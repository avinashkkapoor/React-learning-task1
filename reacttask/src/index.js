import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Counter} from "./Counter";
import {SearchForm} from "./SearchForm";
import {GenreSelect} from "./GenreSelect";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const App =() => {
  const [selectedGenre, setSelectedGenre] = React.useState("Action");

  const handleGenreSelect=(genre)=> {
    console.log("Genre selected:", genre);
    setSelectedGenre(genre);
  }

  const handleSearch=(query) => {
    console.log("Search query:", query);
  }

  return(
    <div>
      <Counter />
      <SearchForm initialQuery="React" onSearch={handleSearch} />
      <GenreSelect 
        genres={["Action", "Comedy", "Drama", "Sci-Fi"]} 
        selectedGenre={selectedGenre} 
        onSelect={handleGenreSelect} 
      />
    </div>

  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(<App />);
