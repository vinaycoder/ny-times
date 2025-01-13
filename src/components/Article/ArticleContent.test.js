import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleContent from './ArticleContent';

describe('Article Content Test', () => {
    it('should render properly', () => {
        render(<ArticleContent content="test" />);
        const element = screen.getByText("test");
        expect(element).toBeInTheDocument();
    });
});