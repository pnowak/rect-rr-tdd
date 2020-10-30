import { createStore, compose } from 'redux';
import { editorReducer } from '../features/editor/reducer'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (storeEnhancers = []) => {
  const store = createStore(
    editorReducer,
    compose(...storeEnhancers)
  );

  return store;
};
