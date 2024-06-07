import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pass from './Pass';

describe('Pass component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Pass />
      </MemoryRouter>
    );
    expect(screen.getByText('Good Job!')).toBeInTheDocument();
  });

  test('renders expected content', () => {
    render(
      <MemoryRouter>
        <Pass />
      </MemoryRouter>
    );
    expect(screen.getByText('Good Job!')).toBeInTheDocument();
    expect(screen.getByText(/Your marks is/i)).toBeInTheDocument();
    expect(screen.getByText('Take the quiz again')).toBeInTheDocument();
    expect(screen.getByText('Back to home page')).toBeInTheDocument();
  });


});
