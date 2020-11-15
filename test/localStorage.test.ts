import { save } from '../src/app/localStorage';
import { Rect } from '../src/features/editor/types';

describe('localStorage', () => {
  const rect: Rect = {
    width: 100,
    height: 100,
    borderRadius: 0,
    backgroundColor: '#000000',
    id: 'abc123'
  };
  const getItemSpy = jest.fn();
  const setItemSpy = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: getItemSpy,
        setItem: setItemSpy
      }
    });
  });

  describe('save middleware', () => {
    const state = {rects: [rect]};
    const action = {type: 'ANYTHING'};
    const store = { getState: () => state};
    let next;

    beforeEach(() => {
      next = jest.fn();
    });

    const callMiddleware = () => save(store)(next)(action);

    it('calls next with the action', () => {
      callMiddleware();

      expect(next).toHaveBeenCalledWith(action);
    });

    it('returns the result of next action', () => {
      next.mockReturnValue({ rects: [rect] });
      expect(callMiddleware()).toEqual({ rects: [rect] });
    });
  })
})