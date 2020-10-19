
import { REMOVE_RECT, GalleryAction } from './types';
import { Rect } from '../editor/types';

export const removeRect = (rect: Rect): GalleryAction => {
  return {
    type: REMOVE_RECT,
    payload: {
      rect
    },
  };
};
