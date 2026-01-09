import React from "react";

export const GenreSelect = (props) => {
    // const genres = this.props.genres || [];

    const handleSelect = (genre) => {
        if (typeof props.onSelect === "function") {
            props.onSelect(genre);
        }
    }

    const selectedGenre = props.selectedGenre;
    return (

        <div>
            {props.genres.map((genre) => (
                <button key={genre} onClick={() => handleSelect(genre)}
                    style={{ fontWeight: genre === selectedGenre ? "bold" : "normal", marginRight: "8px" }}>
                    {genre}
                </button>
            ))}
        </div>
    );
}