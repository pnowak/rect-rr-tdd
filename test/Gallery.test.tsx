import React from 'react';
import {
  Element,
  Render,
  createContainer
} from './helpers';
import { Gallery } from '../src/features/gallery/Gallery';

describe('Gallery', () => {
  let element: Element, render: Render, container: HTMLDivElement;

  beforeEach(() => {
    ({ element, render, container } = createContainer());
  });

  it('renders a div with the right id', () => {
    render(<Gallery />);

    expect(element('div#gallery')).not.toBeNull()      
  });

  it('initially nothing to show', () => {
    render(<Gallery />);

    expect(container.textContent).toMatch('');
  });
})