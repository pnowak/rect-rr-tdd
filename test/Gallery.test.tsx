import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {
  Element,
  Elements,
  Form,
  createContainerWithStore
} from './helpers';
import { Gallery } from '../src/features/gallery/Gallery';
import { App } from '../src/app/App';

describe('Gallery', () => {
  let element: Element, elements: Elements, container: HTMLDivElement, form: Form, renderWithStore;

  beforeEach(() => {
    ({ element, elements, renderWithStore, form, container } = createContainerWithStore());
  });

  it('renders a div with the right id', () => {
    renderWithStore(<Gallery />);

    expect(element('div#gallery')).not.toBeNull()      
  });

  it('initially nothing to show', () => {
    renderWithStore(<Gallery />);

    expect(container.textContent).toMatch('');
  });

  it('renders multiple rects in an ol element', async () => {
    renderWithStore(<App />);
    ReactTestUtils.Simulate.submit(form('editorForm'));
    ReactTestUtils.Simulate.submit(form('editorForm'));

    expect(element('ol')).not.toBeNull();
    expect(element('ol').children).toHaveLength(2);
  });

  it('renders each rect in an li', () => {
    renderWithStore(<App />);
    ReactTestUtils.Simulate.submit(form('editorForm'));
    ReactTestUtils.Simulate.submit(form('editorForm'));

    expect(elements('li')).toHaveLength(2);
  });
})