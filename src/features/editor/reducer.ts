import { EditorAction, EditorState } from './types';

const initialState: EditorState = {
  rects: []
};

export const editorReducer = (state = initialState, action: EditorAction): EditorState => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_RECT': {
      return {
        rects: [
          ...state.rects,
          payload.rect
        ]
      };
    }
    default: {
      return state;
    }
  }
}