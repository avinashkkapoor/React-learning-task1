import { useState } from 'react';
import './MovieTile.css';

export const MovieTile = ({ 
    movie, 
    imageUrl, 
    movieName, 
    releaseYear, 
    genres, 
    onClick,
    onEdit,
    onDelete
}) => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    
    // Support both object and individual props
    const tileData = movie || {
        imageUrl,
        title: movieName,
        releaseYear,
        genres: genres || []
    };

    const handleMenuToggle = (e) => {
        e.stopPropagation();
        setShowContextMenu(!showContextMenu);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit?.();
        setShowContextMenu(false);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete?.();
        setShowContextMenu(false);
    };

    return (
        <div className="movie-tile" onClick={onClick}>
            {tileData.imageUrl && (
                <img 
                    src={tileData.imageUrl} 
                    alt={tileData.title}
                    className="movie-tile-image"
                />
            )}
            
            <div className="movie-tile-content">
                <h3>{tileData.title}</h3>
                
                {tileData.releaseYear && (
                    <p className="release-year">{tileData.releaseYear}</p>
                )}
                
                {tileData.genres && tileData.genres.length > 0 && (
                    <div className="genres">
                        {tileData.genres.map((genre, idx) => (
                            <span key={idx} className="genre-tag">{genre}</span>
                        ))}
                    </div>
                )}
            </div>

            {(onEdit || onDelete) && (
                <div className="context-menu-container">
                    <button 
                        className="menu-button"
                        onClick={handleMenuToggle}
                        title="More options"
                    >
                        ⋯
                    </button>

                    {showContextMenu && (
                        <div className="context-menu">
                            {onEdit && (
                                <button 
                                    className="context-menu-item"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </button>
                            )}
                            {onDelete && (
                                <button 
                                    className="context-menu-item"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};