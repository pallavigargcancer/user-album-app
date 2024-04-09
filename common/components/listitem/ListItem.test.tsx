import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './';
import { ListItemProps } from './listItemProps.type';

describe('ListItem component', () => {
  const testProps: ListItemProps = {
    title: 'Test Item',
    id: 2,
    userId: 1,
  };

  test('renders title and link correctly', () => {
    render(<ListItem {...testProps} />);
    
    const titleElement = screen.getByText(testProps.title);
    expect(titleElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(`/${testProps.userId}/album/${testProps.id}/photo`);
  });
});
