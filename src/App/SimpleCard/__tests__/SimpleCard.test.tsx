import React from "react";
import SimpleCard from '../SimpleCard';
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";

describe('SimpleCard', () => {
  it('renders a title passed in from props', () => {
    const item = {
      imageUrl: '',
      title: 'Hello World',
      description: ''
    };
    render(<SimpleCard item={item} />);

    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toHaveTextContent(item.title);
  });

  it('renders a description passed in from props', () => {
    const item = {
      imageUrl: '',
      title: '',
      description: 'Lorem ipsum'
    };
    render(<SimpleCard item={item} />);

    const descriptionElement = screen.getByText(item.description);
    expect(descriptionElement).toHaveTextContent('Lorem ipsum');
  });

  it('renders an image passed in from props', () => {
    const item = {
      imageUrl: '/assets/react.svg',
      title: 'React logo',
      description: ''
    };
    render(<SimpleCard item={item} />);

    const imageElement = screen.getByAltText('Image of React logo');
    expect(imageElement).toBeInTheDocument();
  });
});