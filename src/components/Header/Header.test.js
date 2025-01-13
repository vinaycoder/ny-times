import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Test', () => {
    it('should render properly', () => {
    render(<Header  />);
    const element = screen.getByTestId("header");
  expect(element).toBeInTheDocument();
    });
});