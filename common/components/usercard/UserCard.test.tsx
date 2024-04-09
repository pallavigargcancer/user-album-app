import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from './';
import { UserCardProps } from './userCard.type';

describe('UserCard component', () => {
  const testProps: UserCardProps = {
    imgSrc: 'test-avatar-url',
    name: 'Test User',
    userId: 1,
  };

  test('renders avatar, name, and "Show Album" link correctly', () => {
    render(<UserCard {...testProps} />);
    
    const avatarElement = screen.getByAltText(testProps.name) as HTMLImageElement;
    expect(avatarElement.src).toContain(testProps.imgSrc);

    const nameElement = screen.getByText(testProps.name);
    expect(nameElement).toBeInTheDocument();

    const showAlbumLink = screen.getByText('Show Album');
    expect(showAlbumLink).toBeInTheDocument();
    expect(showAlbumLink.getAttribute('href')).toBe(`/${testProps.userId}/album`);
  });
});
