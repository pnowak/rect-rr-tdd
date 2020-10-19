import { CREATE_RECT, EditorAction, EditorState, Rect } from './types';
import { REMOVE_RECT, GalleryAction } from '../gallery/types';

const initialState: EditorState = {
  rects: []
};

type Action =  EditorAction | GalleryAction;

export const editorReducer = (state = initialState, action: Action): EditorState => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_RECT: {
      return {
        rects: [
          ...state.rects,
          payload.rect
        ]
      };
    }
    case REMOVE_RECT: {
      const filterRects = state.rects.filter((rect: Rect) => {
        return payload.rect.id !== rect.id;
      });

      return {
        rects: filterRects
      }; 
    }
    default: {
      return state;
    }
  }
}