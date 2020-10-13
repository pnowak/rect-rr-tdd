import { ReducerAction, State } from '../../types';

const initialState: State = {
  rects: []
};

export const editorReducer = (state = initialState, action: ReducerAction): State => {
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