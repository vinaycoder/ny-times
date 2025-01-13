import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Card from './Card';

describe('Card Test', () => {
    it('should render properly', () => {
        const mockRedirectHandled = jest.fn(); // Mock the redirectHandled function
        const articleDetails = { id: 123, title: "Test Article" };
        render(
            <Card
                articleDetails={articleDetails}
                redirectHandled={mockRedirectHandled}
            />)
            ;
        const element = screen.getByTestId("card");
        expect(element).toBeInTheDocument();
    });
});