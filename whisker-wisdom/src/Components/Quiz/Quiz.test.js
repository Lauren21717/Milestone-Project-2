import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Quiz from './Quiz';
import { data } from '../../assets/JS/data';

describe('Quiz component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );
    expect(screen.getByText('Question 1')).toBeInTheDocument();
  });

  test('displays the current question', () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );
    expect(screen.getByText(data[0].question)).toBeInTheDocument();
  });

  test('allows user to select answers and navigate to the next question', () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(data[0].option1));
    fireEvent.click(screen.getByText('Next Question'));
    expect(screen.getByText(data[1].question)).toBeInTheDocument();
  });

  
});
