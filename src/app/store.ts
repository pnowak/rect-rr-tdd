import { applyMiddleware, createStore, compose } from 'redux';
import { editorReducer } from '../features/editor/reducer';
import { save } from './localStorage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (storeEnhancers = []) => {
  const store = createStore(
    editorReducer,
    compose(...[applyMiddleware(save), ...storeEnhancers])
  );

  return store;
};
