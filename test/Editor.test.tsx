import React from 'react';
import { createContainer, Element, LabelFor, Render } from "./helpers";
import { Editor } from '../src/features/editor/Editor';

describe('Editor', () => {
  let render: Render, element: Element, labelFor: LabelFor;

  beforeEach(() => {
    ({ render, element, labelFor } = createContainer());
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
  });

  it('renders a label for the width field', () => {
    render(<Editor width={100} />);
    expect(labelFor('width')).not.toBeNull();
    expect(labelFor('width')!.textContent).toEqual('Width');
  });
})
