export const save = store => next => (action) => {
  const result = next(action);

  localStorage.setItem(
    'applicationState',
    JSON.stringify(store.getState())
  );

  return result;
}