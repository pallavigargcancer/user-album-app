import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoCard from './';
import { PhotoCardProps } from './photoCardProps.type';

describe('PhotoCard component', () => {
  const testProps: PhotoCardProps = {
    image: 'test-image-url',
    text: 'Test text',
  };

  test('renders image and text correctly', () => {
    render(<PhotoCard {...testProps} />);
    
    const imageElement = screen.getByAltText(testProps.text) as HTMLImageElement;
    expect(imageElement.src).toContain(testProps.image);

    const textElement = screen.getByText(testProps.text);
    expect(textElement).toBeInTheDocument();
  });
});
