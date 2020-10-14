import { createStore } from 'redux';
import { editorReducer } from '../features/editor/reducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (storeEnhancers = []) => {
  const store = createStore(
    editorReducer,
    ...storeEnhancers
  );

  return store;
};
