import { editorReducer } from '../src/features/editor/reducer';
import { createRect } from '../src/features/editor/actions';
import { Rect, EditorState } from '../src/features/editor/types';

describe('Editor reducer', () => {
  const rect: Rect = {
    width: 100,
    height: 100,
    borderRadius: 0,
    backgroundColor: 'rgb(0, 0, 0)',
    id: 'abc123'
  };

  it('returns a default state for an undefined existing state', () => {
    expect(editorReducer(undefined, {})).toEqual({
      rects: []
    });
  });

  describe('CREATE_RECT action', () => {
    const action = createRect(rect);

    it('adds rect to the store', () => {
      expect(editorReducer(undefined, action)).toMatchObject<EditorState>({
        rects: [rect]
      });
    });
  });
})