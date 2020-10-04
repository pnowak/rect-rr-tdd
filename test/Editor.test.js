import React from 'react';
import { createContainer } from './helpers';
import { Editor } from '../src/features/editor/Editor';

describe('Editor', () => {
  let render, element;

  beforeEach(() => {
    ({
      render, element
    } = createContainer());
  });

  it('renders a form', () => {
    render(<Editor />);
    expect(element('form[id="editor"]')).not.toBeNull();
  })
})
