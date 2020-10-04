import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

export const createContainer = () => {
  const container = document.createElement('div');

  const element = selector => container.querySelector(selector);
  const elements = selector => container.querySelectorAll(selector);

  return {
    render: component =>
      act(() => {
        ReactDOM.render(component, container);
      }),
    container,
    element,
    elements,
  };
};