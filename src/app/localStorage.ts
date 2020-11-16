export const save = store => next => (action) => {
  const result = next(action);

  localStorage.setItem(
    'applicationState',
    JSON.stringify(store.getState())
  );

  return result;
};

export const load = () => {
  const serializedState = localStorage.getItem('applicationState');

  if (serializedState && serializedState !== null) {
    return JSON.parse(serializedState);
  }
};

