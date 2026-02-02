import React, { useState } from "react";
import "./TaskMenu.css";
import { Counter } from "./Counter";
import { SearchForm } from "./SearchForm";
import { GenreSelect } from "./GenreSelect";
import { MovieTile } from "./task3/MovieTile";

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
            component: <MovieTile />
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
