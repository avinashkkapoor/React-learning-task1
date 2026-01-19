import {SearchForm} from "./SearchForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe('SearchForm Component', () => {    
    test('renders an input with the value equal to initial value passed in props', () => {
        const initialQuery = "React";
        render(<SearchForm initialQuery={initialQuery} onSearch={() => {}} />);
        const input = screen.getByPlaceholderText("search-text");
        expect(input).toHaveValue(initialQuery);
    });

    test('typing to the input and a click event on the Submit button, the onChange prop is called with proper value', () => {
        const mockOnSearch = jest.fn();
        render(<SearchForm initialQuery="" onSearch={mockOnSearch} />);
        const input = screen.getByPlaceholderText("search-text");
        fireEvent.change(input, { target: { value: "test query" } });
        fireEvent.click(screen.getByText("Search"));
        expect(mockOnSearch).toHaveBeenCalledWith("test query");
    });

    test('typing to the input and pressing Enter key, the onChange prop is called with proper value', () => {
        const mockOnSearch = jest.fn();
        render(<SearchForm initialQuery="" onSearch={mockOnSearch} />);
        const input = screen.getByPlaceholderText("search-text");
        fireEvent.change(input, { target: { value: "another test query" } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        expect(mockOnSearch).toHaveBeenCalledWith("another test query");
    });
});