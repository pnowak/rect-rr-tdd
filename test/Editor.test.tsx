import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { createContainer, withEvent, Element, LabelFor, Render } from './helpers';
import { Editor } from '../src/features/editor/Editor';

describe('Editor', () => {
  let render: Render, element: Element, labelFor: LabelFor;

  beforeEach(() => {
    ({ render, element, labelFor } = createContainer());
  });

  describe('has a form element which', () => {
    it('renders a form', () => {
      render(<Editor />);
      expect(element('form[id="editor"]')).not.toBeNull();
    });

    describe('has a width filed which', () => {
      it('renders the width filed as a number type', () => {
        render(<Editor />);
        const widthFiled = element('form[id="editor"]')!.elements.width;

        expect(widthFiled).not.toBeNull();
        expect(widthFiled.tagName).toEqual('INPUT');
        expect(widthFiled.type).toEqual('number');
      });

      it('includes the existing value for the width', () => {
        render(<Editor />);
        const widthFiled = element('form[id="editor"]')!.elements.width;

        expect(widthFiled.value).toEqual('100');
      });

      it('renders a label for the width field', () => {
        render(<Editor />);
        expect(labelFor('width')).not.toBeNull();
        expect(labelFor('width')!.textContent).toEqual('Width');
      });

      it('assign an id that matches the label id to the width field', () => {
        render(<Editor />);
        const widthFiled = element('form[id="editor"]')!.elements.width;

        expect(widthFiled.id).toEqual('width');
      });

      it('react on change event', () => {
        render(<Editor />);
        const widthFiled = element('form[id="editor"]')!.elements.width;

        expect(widthFiled.value).toEqual('100');

        ReactTestUtils.Simulate.change(widthFiled, withEvent('width', '200'));

        expect(widthFiled.value).toEqual('200');
      });
    });

    describe('has a height filed which', () => {
      it('renders the height filed as a number type', () => {
        render(<Editor />);
        const heightFiled = element('form[id="editor"]')!.elements.height;

        expect(heightFiled).not.toBeNull();
        expect(heightFiled.tagName).toEqual('INPUT');
        expect(heightFiled.type).toEqual('number');
      });

      it('includes the existing value for the height', () => {
        render(<Editor />);
        const heightFiled = element('form[id="editor"]')!.elements.height;

        expect(heightFiled.value).toEqual('100');
      });

      it('renders a label for the height field', () => {
        render(<Editor />);
        expect(labelFor('height')).not.toBeNull();
        expect(labelFor('height')!.textContent).toEqual('Height');
      });

      it('assign an id that matches the label id to the height field', () => {
        render(<Editor />);
        const heightFiled = element('form[id="editor"]')!.elements.height;

        expect(heightFiled.id).toEqual('height');
      });

      it('react on change event', () => {
        render(<Editor />);
        const heightFiled = element('form[id="editor"]')!.elements.height;

        expect(heightFiled.value).toEqual('100');

        ReactTestUtils.Simulate.change(heightFiled, withEvent('height', '200'));

        expect(heightFiled.value).toEqual('200');
      });
    });

    describe('has a borderRadius filed which', () => {
      it('renders the borderRadius filed as a range type', () => {
        render(<Editor />);
        const borderRadiusFiled = element('form[id="editor"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled).not.toBeNull();
        expect(borderRadiusFiled.tagName).toEqual('INPUT');
        expect(borderRadiusFiled.type).toEqual('range');
      });

      it('includes the existing value for the borderRadius', () => {
        render(<Editor />);
        const borderRadiusFiled = element('form[id="editor"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled.value).toEqual('0');
      });

      it('renders a label for the borderRadius field', () => {
        render(<Editor />);
        expect(labelFor('borderRadius')).not.toBeNull();
        expect(labelFor('borderRadius')!.textContent).toEqual('BorderRadius');
      });

      it('assign an id that matches the label id to the borderRadius field', () => {
        render(<Editor />);
        const borderRadiusFiled = element('form[id="editor"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled.id).toEqual('borderRadius');
      });

      it('react on change event', () => {
        render(<Editor />);
        const borderRadiusFiled = element('form[id="editor"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled.value).toEqual('0');

        ReactTestUtils.Simulate.change(
          borderRadiusFiled,
          withEvent('borderRadius', '10')
        );

        expect(borderRadiusFiled.value).toEqual('10');
      });
    });

    describe('has a backgroundColor filed which', () => {
      it('renders the backgroundColor filed as a range type', () => {
        render(<Editor />);
        const backgroundColorFiled = element('form[id="editor"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled).not.toBeNull();
        expect(backgroundColorFiled.tagName).toEqual('INPUT');
        expect(backgroundColorFiled.type).toEqual('color');
      });

      it('includes the existing value for the backgroundColor', () => {
        render(<Editor />);
        const backgroundColorFiled = element('form[id="editor"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled.value).toEqual('#000000');
      });

      it('renders a label for the backgroundColor field', () => {
        render(<Editor />);
        expect(labelFor('backgroundColor')).not.toBeNull();
        expect(labelFor('backgroundColor')!.textContent).toEqual(
          'BackgroundColor'
        );
      });

      it('assign an id that matches the label id to the backgroundColor field', () => {
        render(<Editor />);
        const backgroundColorFiled = element('form[id="editor"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled.id).toEqual('backgroundColor');
      });

      it('react on change event', () => {
        render(<Editor />);
        const backgroundColorFiled = element('form[id="editor"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled.value).toEqual('#000000');

        ReactTestUtils.Simulate.change(
          backgroundColorFiled,
          withEvent('backgroundColor', '#ffffff')
        );

        expect(backgroundColorFiled.value).toEqual('#ffffff');
      });
    });
  });

  describe('has an output element which', () => {
    it('renders a div with the right id', () => {
      render(<Editor />);
      expect(element('div#output')).not.toBeNull();
    });

    it('initially renders a div with default properties', () => {
      render(<Editor />);

      const defaultDivStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '0',
        backgroundColor: 'rgb(0, 0, 0)',
      };

      expect(element('div#output')!.style.width).toMatch(defaultDivStyle.width);
      expect(element('div#output')!.style.height).toMatch(
        defaultDivStyle.height
      );
      expect(element('div#output')!.style.borderRadius).toMatch(
        defaultDivStyle.borderRadius
      );
      expect(element('div#output')!.style.backgroundColor).toMatch(
        defaultDivStyle.backgroundColor
      );
    });
  });
});
