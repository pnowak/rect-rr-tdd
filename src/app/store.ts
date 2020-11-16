import { applyMiddleware, createStore, compose } from 'redux';
import { editorReducer } from '../features/editor/reducer';
import { save, load } from './localStorage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (storeEnhancers = [], initialState = {rects: []}) => {
  const store = createStore(
    editorReducer,
    initialState,
    compose(...[applyMiddleware(save), ...storeEnhancers]),
  );

  return store;
};

export const configureStoreWithLocalStorage = () =>
  configureStore(undefined, load());
