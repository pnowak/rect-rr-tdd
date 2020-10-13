import { editorReducer } from '../src/features/editor/editorReducer';

describe('Editor reducer', () => {

  it('returns a default state for an undefined existing state', () => {
    expect(editorReducer(undefined, {})).toEqual({
      rects: []
    });
  });
})