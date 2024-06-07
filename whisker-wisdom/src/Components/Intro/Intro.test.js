import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Intro from './Intro';

describe('Intro component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome to Whisker Wisdom!')).toBeInTheDocument();
  });

  test('renders expected content', () => {
    render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome to Whisker Wisdom!')).toBeInTheDocument();
    expect(screen.getByText(/Think you know everything about cats\? Prove it!/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Let’s Start!')).toBeInTheDocument();
  });

  test('redirects to correct route when button is clicked', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Intro />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Let’s Start!'));
    expect(container.innerHTML).toMatch('/Quiz');
  });
});
