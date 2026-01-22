import {GenreSelect} from "./GenreSelect";
import {render, screen, fireEvent} from "@testing-library/react";

describe('GenreSelect Component', () => {
    const genres = ["Action", "Comedy", "Drama", "Sci-Fi"];

    test('renders all genres passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre={null} onSelect={() => {}} />);
        genres.forEach((genre) => {
            const button = screen.getByText(genre);
            expect(button).toBeInTheDocument();
        });
    });

    test('component highlights a selected genre passed in props',() => {
        const selectedGenre = "Drama";
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={() => {}} />);
        const selectedButton = screen.getByText(selectedGenre);
        expect(selectedButton).toHaveStyle("font-weight: bold");
    });

    test('clicking a genre button calls onSelect callback with correct genre', () => {
        const mockOnSelect = jest.fn();
        render(<GenreSelect genres={genres} selectedGenre={null} onSelect={mockOnSelect} />);   
        const genreToSelect = "Comedy";
        const button = screen.getByText(genreToSelect);
        fireEvent.click(button);
        expect(mockOnSelect).toHaveBeenCalledWith(genreToSelect);
    });
});

