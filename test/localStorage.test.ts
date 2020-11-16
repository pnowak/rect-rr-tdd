import { save, load } from '../src/app/localStorage';
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

    it('saves the current state of the store in localStorage', () => {
      callMiddleware();
      expect(setItemSpy).toHaveBeenCalledWith(
        'applicationState',
        JSON.stringify(store.getState())
      );
    });
  });

  describe('load', () => {
    describe('with saved data', () => {
      beforeEach(() => {
        getItemSpy.mockReturnValueOnce(
          JSON.stringify({ rects: [rect] })
        );
      });

      it('retrieves state from localStorage', () => {
        load();
        expect(getItemSpy).toHaveBeenCalledWith('applicationState');
      });
    });

    it('returns undefined if there is no state saved', () => {
      getItemSpy.mockReturnValue(null);
      expect(load()).not.toBeDefined();
    });
  });
})