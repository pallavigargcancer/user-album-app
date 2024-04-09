import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from './';
import { BreadcrumbProps } from './breadcrumbProps.type';

describe('Breadcrumb component', () => {
  const testProps: BreadcrumbProps = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' },
    ],
  };

  test('renders breadcrumb items correctly', () => {
    render(<Breadcrumb {...testProps} />);
    
    const breadcrumbList = screen.getByRole('navigation');
    expect(breadcrumbList).toBeInTheDocument();

    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(testProps.items.length);

    testProps.items.forEach((item, index) => {
      const breadcrumbItem = breadcrumbItems[index];

      const separator = index > 0 ? '/' : null;
      if (separator) {
        expect(breadcrumbItem).toHaveTextContent(separator);
      }

      const labelElement = screen.getByText(item.label);
      expect(labelElement).toBeInTheDocument();

      const linkElement = screen.getByText(item.label).closest('a');
      if (index !== testProps.items.length - 1) {
        expect(linkElement).toHaveAttribute('href', item.link);
        expect(linkElement).toHaveClass('text-blue-500');
        expect(linkElement).toHaveClass('cursor-pointer');
      } else {
        expect(linkElement).not.toBeInTheDocument();
        expect(labelElement).toHaveClass('text-gray-700');
      }
    });
  });
});
