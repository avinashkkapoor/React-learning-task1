import './MovieDetails.css';

export const MovieDetails = ({ 
    movie, 
    imageUrl, 
    movieName, 
    releaseYear, 
    rating,
    duration,
    description,
    onClose 
}) => {
    const detailsData = movie || {
        imageUrl,
        title: movieName,
        releaseYear,
        rating,
        duration,
        description
    };

    return (
        <div className="movie-details-overlay" onClick={onClose}>
            <div className="movie-details-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✕</button>
                
                <div className="movie-details-content">
                    <div className="details-image-section">
                        {detailsData.imageUrl && (
                            <img 
                                src={detailsData.imageUrl} 
                                alt={detailsData.title}
                                className="details-image"
                            />
                        )}
                    </div>
                    <div className="details-info-section">
                        <h1 className="details-title">{detailsData.title}</h1>
                        
                        <div className="details-meta">
                            {detailsData.releaseYear && (
                                <div className="meta-item">
                                    <span className="meta-label">Release Year:</span>
                                    <span className="meta-value">{detailsData.releaseYear}</span>
                                </div>
                            )}
                            
                            {detailsData.rating && (
                                <div className="meta-item">
                                    <span className="meta-label">Rating:</span>
                                    <span className="meta-value rating">
                                        <span className="star">★</span> {detailsData.rating}
                                    </span>
                                </div>
                            )}
                            
                            {detailsData.duration && (
                                <div className="meta-item">
                                    <span className="meta-label">Duration:</span>
                                    <span className="meta-value">{detailsData.duration}</span>
                                </div>
                            )}
                        </div>

                        {detailsData.description && (
                            <div className="details-description">
                                <h3>Synopsis</h3>
                                <p>{detailsData.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
