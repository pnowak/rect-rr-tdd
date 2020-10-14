import { Rect, EditorAction } from './types';

export const createRect = (rect: Rect): EditorAction => {
  return {
    type: 'CREATE_RECT',
    payload: {
      rect
    },
  };
};