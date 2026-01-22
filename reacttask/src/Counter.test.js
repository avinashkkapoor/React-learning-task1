import {Counter} from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe('Counter Component', () => {

 
    test('renders with initial count of 0', () => {
        const counter = render(<Counter />);
        const countValue = counter.getByText("0");
        expect(countValue).toBeInTheDocument();
    });

    test('increments count when + button is clicked', () => {
        const counter = render(<Counter />);
        const incrementButton = counter.getByTestId("increment-button");
        fireEvent.click(incrementButton);
        
         const countValue = counter.getByText("1");
         expect(countValue).toBeInTheDocument();
    });

    test('decrements count when - button is clicked', () => {
        const counter = render(<Counter />);
        const incrementButton = counter.getByTestId("increment-button");
        const decrementButton = counter.getByTestId("decrement-button"); 
        fireEvent.click(incrementButton); // Increment to 1 first
        fireEvent.click(decrementButton); // Then decrement back to 0

        const countValue = counter.getByText("0");
        expect(countValue).toBeInTheDocument();
    });

    test('does not decrement below 0', () => {
        const counter = render(<Counter />);
        const decrementButton = counter.getByTestId("decrement-button"); 
        fireEvent.click(decrementButton); // Try to decrement at 0
        const countValue = counter.getByText("0");
        expect(countValue).toBeInTheDocument();
    });

});