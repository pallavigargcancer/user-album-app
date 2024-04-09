import React from 'react';
import { render, screen } from '@testing-library/react';
import NoDataFound from './';

describe('NoDataFound component', () => {
  test('renders "No Data Found" text', () => {
    render(<NoDataFound />);
    const noDataFoundElement = screen.getByText(/No Data Found/i);
    expect(noDataFoundElement).toBeInTheDocument();
  });
});
