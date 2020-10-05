import React from 'react';
import { createContainer, Element, Render } from './helpers';
import { Editor } from '../src/features/editor/Editor';

describe('Editor', () => {
  let render: Render, element: Element;

  beforeEach(() => {
    ({
      render, element
    } = createContainer());
  });

  it('renders a form', () => {
    render(<Editor width={100} />);
    expect(element('form[id="editor"]')).not.toBeNull();
  });

  it('renders the width filed as a number type', () => {
    render(<Editor width={100} />);
    const widthFiled = element('form[id="editor"]')!.elements.width;

    expect(widthFiled).not.toBeNull();
    expect(widthFiled.tagName).toEqual('INPUT');
    expect(widthFiled.type).toEqual('number');
  });

  it('includes the existing value for the width', () => {
    render(<Editor width={100} />);
    const widthFiled = element('form[id="editor"]')!.elements.width;

    expect(widthFiled.value).toEqual('100');
  })
})
