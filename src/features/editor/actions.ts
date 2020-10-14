import { CREATE_RECT, Rect, EditorAction } from './types';

export const createRect = (rect: Rect): EditorAction => {
  return {
    type: CREATE_RECT,
    payload: {
      rect
    },
  };
};