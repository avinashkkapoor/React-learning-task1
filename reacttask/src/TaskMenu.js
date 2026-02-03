import React, { useState } from "react";
import "./TaskMenu.css";
import { Counter } from "./Counter";
import { SearchForm } from "./SearchForm";
import { GenreSelect } from "./GenreSelect";
import { MovieTile } from "./task3/MovieTile";
import { MovieDetails } from "./task3/MovieDetails";
import moviesData from "./mocks/movis.json";

export const TaskMenu = () => {
    const [activeTask, setActiveTask] = useState("task1");

    const tasks = [
        {
            id: "task1",
            label: "Task 1",
            description: "Counter, Search & Genres",
            component: <Task1Component />
        },
        {
            id: "task3",
            label: "Task 3",
            description: "Movie Details",
            component: <Task3Component />
        }
    ];

    return (
        <div className="task-menu-container">
            <nav className="task-menu">
                <div className="menu-title">Assignments</div>
                {tasks.map((task) => (
                    <button
                        key={task.id}
                        className={`menu-item ${activeTask === task.id ? "active" : ""}`}
                        onClick={() => setActiveTask(task.id)}
                        title={task.description}
                    >
                        <span className="menu-label">{task.label}</span>
                        <span className="menu-description">{task.description}</span>
                    </button>
                ))}
            </nav>

            <main className="task-content">
                {tasks.find((task) => task.id === activeTask)?.component}
            </main>
        </div>
    );
};

const Task1Component = () => {
    const [selectedGenre, setSelectedGenre] = React.useState("");
    const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];

    return (
        <div className="task-content-wrapper">
            <h1 className="task-title">Task 1: Counter, Search & Genre Selection</h1>
            
            <div className="task-section">
                <h2>Counter Component</h2>
                <Counter />
            </div>

            <div className="task-section">
                <h2>Search Form</h2>
                <SearchForm
                    initialQuery=""
                    onSearch={(query) => console.log("Search:", query)}
                />
            </div>

            <div className="task-section">
                <h2>Genre Selection</h2>
                <GenreSelect
                    genres={genres}
                    selectedGenre={selectedGenre}
                    onSelect={(genre) => setSelectedGenre(genre)}
                />
                {selectedGenre && (
                    <p className="selected-info">Selected Genre: <strong>{selectedGenre}</strong></p>
                )}
            </div>
        </div>
    );
};

const Task3Component = () => {
    const [movies, setMovies] = React.useState(moviesData);

    const [sortBy, setSortBy] = React.useState("releaseYear");
    const [selectedMovie, setSelectedMovie] = React.useState(null);

    const handleMovieClick = (movieId) => {
        const movie = movies.find(m => m.id === movieId);
        setSelectedMovie(movie);
    };

    const handleEdit = (movieId) => {
        alert(`Edit movie with ID: ${movieId}`);
    };

    const handleDelete = (movieId) => {
        setMovies(movies.filter(movie => movie.id !== movieId));
        alert(`Deleted movie with ID: ${movieId}`);
    };

    // Sort movies based on selection
    const getSortedMovies = () => {
        const moviesCopy = [...movies];
        
        if (sortBy === "releaseYear") {
            return moviesCopy.sort((a, b) => a.releaseYear - b.releaseYear);
        } else if (sortBy === "title") {
            return moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
        }
        return moviesCopy;
    };

    const sortedMovies = getSortedMovies();

    return (
        <div className="task-content-wrapper">
            <h1 className="task-title">Movies Details</h1>
            
            <div className="task-section">
                <div className="section-header">
                    <h2>Movies</h2>
                    <div className="sort-container">
                        <label htmlFor="sortMovie">SORT BY : </label>
                        <select 
                            name="sortMovie" 
                            id="sortMovie"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="releaseYear">Release Year (Oldest First)</option>
                            <option value="title">Title (A-Z)</option>
                        </select>
                    </div>
                </div>
        
                <div className="movies-grid">
                    {sortedMovies.map((movie) => (
                        <MovieTile
                            key={movie.id}
                            movie={movie}
                            onClick={() => handleMovieClick(movie.id)}
                            onEdit={() => handleEdit(movie.id)}
                            onDelete={() => handleDelete(movie.id)}
                        />
                    ))}
                </div>
                {sortedMovies.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>
                        No movies available. They have been deleted!
                    </p>
                )}
            </div>

            {selectedMovie && (
                <MovieDetails 
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
};
