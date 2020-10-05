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
  });

  it('renders the width filed as a number type', () => {
    render(<Editor />);
    const widthFiled = element('form[id="editor"]').elements.width;
    expect(widthFiled).not.toBeNull();
    expect(widthFiled.tagName).toEqual('INPUT');
    expect(widthFiled.type).toEqual('number');
  })
})
