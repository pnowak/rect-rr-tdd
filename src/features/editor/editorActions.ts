import { Rect } from '../../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRect = (rect: Rect) => {
  return {
    type: 'CREATE_RECT',
    payload: {
      rect
    },
  };
};