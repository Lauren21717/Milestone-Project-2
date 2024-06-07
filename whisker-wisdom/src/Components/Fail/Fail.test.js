import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Fail from './Fail';

describe('Fail component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Fail />
      </MemoryRouter>
    );
    expect(screen.getByText('Fur-get About It!')).toBeInTheDocument();
  });

  test('renders expected content', () => {
    render(
      <MemoryRouter>
        <Fail />
      </MemoryRouter>
    );
    expect(screen.getByText('Fur-get About It!')).toBeInTheDocument();
    expect(screen.getByText(/Your marks is/i)).toBeInTheDocument();
    expect(screen.getByText('Take the quiz again')).toBeInTheDocument();
    expect(screen.getByText('Back to home page')).toBeInTheDocument();
  });


});
