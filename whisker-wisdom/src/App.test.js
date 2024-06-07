import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';

test('renders LandingPage by default', () => {
  render(<App />);
  expect(screen.getByText('Whisker Wisdom')).toBeInTheDocument(); 
});

