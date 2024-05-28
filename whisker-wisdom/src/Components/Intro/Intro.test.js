import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Intro from "./Intro";
import Quiz from './Quiz';

describe('Intro', () => {
    test('clicking the "Let’s Start!" button navigates to the Quiz page', () => {
        render(
            <MemoryRouter initialEntries={['/Intro']}>
                <Intro />
            </MemoryRouter>
        );

        const startButton = screen.getByText(/let’s start/i);
        fireEvent.click(startButton);

        expect(screen.getByTestId('quiz-component')).toBeInTheDocument();
    });
});