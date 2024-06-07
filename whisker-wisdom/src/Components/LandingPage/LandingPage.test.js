import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Whisker Wisdom')).toBeInTheDocument();
  });

  test('renders expected content', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Whisker Wisdom')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Let’s Start!')).toBeInTheDocument();
  });

  test('redirects to correct route when button is clicked', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <LandingPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Let’s Start!'));
    expect(container.innerHTML).toMatch('/Intro');
  });
});
