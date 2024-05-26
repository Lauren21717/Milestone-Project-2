import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Quiz from "./Quiz";
import { data } from '../../assets/JS/data';

describe('Quiz Component', () => {
    test('renders the first question and options', () => {
        render(<Quiz />);

        const questionElement = screen.getByText(data[0].question);
        expect(questionElement).toBeInTheDocument();

        const option1 = screen.getByText(data[0].option1);
        expect(option1).toBeInTheDocument();

        const option2 = screen.getByText(data[0].option2);
        expect(option2).toBeInTheDocument();

        const option3 = screen.getByText(data[0].option3);
        expect(option3).toBeInTheDocument();

        const option4 = screen.getByText(data[0].option4);
        expect(option4).toBeInTheDocument();
    });

    test('checks if selecting the correct option applies correct class', () => {
        render(<Quiz />);

        const correctOptionIndex = data[0].ans - 1;

        const option1 = screen.getByText(data[0].option1);
        fireEvent.click(option1);

        if (0 === correctOptionIndex) {
            expect(option1).toHaveClass('bg-success');
        } else {
            expect(option1).toHaveClass('bg-danger');
        }
    });

    test('checks if selecting an incorrect option applies the wrong class', () => {
        render(<Quiz />);
    
        const incorrectOptionIndex = data[0].ans === 1 ? 2 : 1; // Choose an incorrect option index
        const incorrectOptionText = data[0][`option${incorrectOptionIndex}`];
        const incorrectOption = screen.getByText(incorrectOptionText);
    
        fireEvent.click(incorrectOption);
    
        expect(incorrectOption).toHaveClass('bg-danger');
        const correctOptionText = data[0][`option${data[0].ans}`];
        const correctOption = screen.getByText(correctOptionText);
        expect(correctOption).toHaveClass('bg-success');
    });
    
});