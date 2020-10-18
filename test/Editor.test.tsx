import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { expectRedux } from 'expect-redux';
import {
  withEvent,
  Element,
  LabelFor,
  Form,
  createContainerWithStore
} from './helpers';
import { Editor } from '../src/features/editor/Editor';
import { App } from '../src/app/App';
import { Rect } from '../src/features/editor/types';

const rect: Rect = {
  width: 100,
  height: 100,
  borderRadius: 0,
  backgroundColor: '#000000',
  id: 'abc123'
}

describe('Editor', () => {
  let element: Element, labelFor: LabelFor, form: Form, renderWithStore, store;

  beforeEach(() => {
    ({ element, labelFor, form, renderWithStore, store } = createContainerWithStore());
  });

  describe('has a form element which', () => {
    it('renders a form', () => {
      renderWithStore(<Editor />);
      expect(element('form[id="editorForm"]')).not.toBeNull();
    });

    it('has a submit button', () => {
      renderWithStore(<Editor />);
      const button = element('input[type="submit"]');

      expect(button).not.toBeNull();
    });

    it.skip('dispatches CREATE_RECT when submitting data', () => {
      renderWithStore(<App />);
      ReactTestUtils.Simulate.submit(form('editorForm'));

      return expectRedux(store)
        .toDispatchAnAction()
        .matching({
          type: 'CREATE_RECT',
          rect
        });
    });

    describe('has a width filed which', () => {
      it('renders the width filed as a number type', () => {
        renderWithStore(<Editor />);
        const widthFiled = element('form[id="editorForm"]')!.elements.width;

        expect(widthFiled).not.toBeNull();
        expect(widthFiled.tagName).toEqual('INPUT');
        expect(widthFiled.type).toEqual('number');
      });

      it('includes the existing value for the width', () => {
        renderWithStore(<Editor />);
        const widthFiled = element('form[id="editorForm"]')!.elements.width;

        expect(widthFiled.value).toEqual('100');
      });

      it('renders a label for the width field', () => {
        renderWithStore(<Editor />);
        expect(labelFor('width')).not.toBeNull();
        expect(labelFor('width')!.textContent).toEqual('Width');
      });

      it('assign an id that matches the label id to the width field', () => {
        renderWithStore(<Editor />);
        const widthFiled = element('form[id="editorForm"]')!.elements.width;

        expect(widthFiled.id).toEqual('width');
      });

      it('react on change event', () => {
        renderWithStore(<Editor />);
        const widthFiled = element('form[id="editorForm"]')!.elements.width;

        expect(widthFiled.value).toEqual('100');

        ReactTestUtils.Simulate.change(widthFiled, withEvent('width', '200'));

        expect(widthFiled.value).toEqual('200');
      });
    });

    describe('has a height filed which', () => {
      it('renders the height filed as a number type', () => {
        renderWithStore(<Editor />);
        const heightFiled = element('form[id="editorForm"]')!.elements.height;

        expect(heightFiled).not.toBeNull();
        expect(heightFiled.tagName).toEqual('INPUT');
        expect(heightFiled.type).toEqual('number');
      });

      it('includes the existing value for the height', () => {
        renderWithStore(<Editor />);
        const heightFiled = element('form[id="editorForm"]')!.elements.height;

        expect(heightFiled.value).toEqual('100');
      });

      it('renders a label for the height field', () => {
        renderWithStore(<Editor />);
        expect(labelFor('height')).not.toBeNull();
        expect(labelFor('height')!.textContent).toEqual('Height');
      });

      it('assign an id that matches the label id to the height field', () => {
        renderWithStore(<Editor />);
        const heightFiled = element('form[id="editorForm"]')!.elements.height;

        expect(heightFiled.id).toEqual('height');
      });

      it('react on change event', () => {
        renderWithStore(<Editor />);
        const heightFiled = element('form[id="editorForm"]')!.elements.height;

        expect(heightFiled.value).toEqual('100');

        ReactTestUtils.Simulate.change(heightFiled, withEvent('height', '200'));

        expect(heightFiled.value).toEqual('200');
      });
    });

    describe('has a borderRadius filed which', () => {
      it('renders the borderRadius filed as a range type', () => {
        renderWithStore(<Editor />);
        const borderRadiusFiled = element('form[id="editorForm"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled).not.toBeNull();
        expect(borderRadiusFiled.tagName).toEqual('INPUT');
        expect(borderRadiusFiled.type).toEqual('range');
      });

      it('includes the existing value for the borderRadius', () => {
        renderWithStore(<Editor />);
        const borderRadiusFiled = element('form[id="editorForm"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled.value).toEqual('0');
      });

      it('renders a label for the borderRadius field', () => {
        renderWithStore(<Editor />);
        expect(labelFor('borderRadius')).not.toBeNull();
        expect(labelFor('borderRadius')!.textContent).toEqual('BorderRadius');
      });

      it('assign an id that matches the label id to the borderRadius field', () => {
        renderWithStore(<Editor />);
        const borderRadiusFiled = element('form[id="editorForm"]')!.elements
          .borderRadius;

        expect(borderRadiusFiled.id).toEqual('borderRadius');
      });

      it('react on change event', () => {
        renderWithStore(<Editor />);
        const borderRadiusFiled = element('form[id="editorForm"]')!.elements
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
        renderWithStore(<Editor />);
        const backgroundColorFiled = element('form[id="editorForm"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled).not.toBeNull();
        expect(backgroundColorFiled.tagName).toEqual('INPUT');
        expect(backgroundColorFiled.type).toEqual('color');
      });

      it('includes the existing value for the backgroundColor', () => {
        renderWithStore(<Editor />);
        const backgroundColorFiled = element('form[id="editorForm"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled.value).toEqual('#000000');
      });

      it('renders a label for the backgroundColor field', () => {
        renderWithStore(<Editor />);
        expect(labelFor('backgroundColor')).not.toBeNull();
        expect(labelFor('backgroundColor')!.textContent).toEqual(
          'BackgroundColor'
        );
      });

      it('assign an id that matches the label id to the backgroundColor field', () => {
        renderWithStore(<Editor />);
        const backgroundColorFiled = element('form[id="editorForm"]')!.elements
          .backgroundColor;

        expect(backgroundColorFiled.id).toEqual('backgroundColor');
      });

      it('react on change event', () => {
        renderWithStore(<Editor />);
        const backgroundColorFiled = element('form[id="editorForm"]')!.elements
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
      renderWithStore(<Editor />);
      expect(element('div#output')).not.toBeNull();
    });

    it('initially renders a div with default properties', () => {
      renderWithStore(<Editor />);

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

    it('reflects on change width', () => {
      renderWithStore(<Editor />);
      const widthFiled = element('form[id="editorForm"]')!.elements.width;

      ReactTestUtils.Simulate.change(widthFiled, withEvent('width', '200'));

      expect(element('div#output')!.style.width).toMatch('200');
    });

    it('reflects on change height', () => {
      renderWithStore(<Editor />);
      const heightFiled = element('form[id="editorForm"]')!.elements.height;

      ReactTestUtils.Simulate.change(heightFiled, withEvent('height', '200'));

      expect(element('div#output')!.style.height).toMatch('200');
    });

    it('reflects on change borderRadius', () => {
      renderWithStore(<Editor />);
      const borderRadiusFiled = element('form[id="editorForm"]')!.elements
        .borderRadius;

      ReactTestUtils.Simulate.change(
        borderRadiusFiled,
        withEvent('borderRadius', '10')
      );

      expect(element('div#output')!.style.borderRadius).toMatch('10');
    });

    it('reflects on change backgroundColor', () => {
      renderWithStore(<Editor />);
      const backgroundColorFiled = element('form[id="editorForm"]')!.elements
        .backgroundColor;

      ReactTestUtils.Simulate.change(
        backgroundColorFiled,
        withEvent('backgroundColor', '#ff0000')
      );

      expect(element('div#output')!.style.backgroundColor).toMatch(
        'rgb(255, 0, 0)'
      );
    });
  });
});
