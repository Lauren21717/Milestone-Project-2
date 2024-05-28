import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Intro from "../Intro/Intro";

describe('LandingPage', () => {
    
    test('clicking the "Let’s Start!" button navigates to the Intro page', () => {
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );

        const startButton = screen.getByText(/let’s start/i);
        fireEvent.click(startButton);

        expect(screen.getByTestId('intro-component')).toBeInTheDocument();
    });

});