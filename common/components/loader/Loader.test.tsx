import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './';

describe('Loader component', () => {
  test('renders loading spinner and text correctly', () => {
    render(<Loader />);
    
    const spinnerElement = screen.getByTestId('loader-spinner');
    expect(spinnerElement).toBeInTheDocument();

    const textElement = screen.getByText('Loading...');
    expect(textElement).toBeInTheDocument();
  });
});
