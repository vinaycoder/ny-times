import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Header Test', () => {
    it('should render properly', () => {
    render(<Footer  />);
    const element = screen.getByTestId("footer");
  expect(element).toBeInTheDocument();
    });
});