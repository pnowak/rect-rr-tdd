import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Editor = () => {
  const [width, setWidth] = useState(100);

  return (
    <form id="editor">
      <label htmlFor="width">Width</label>
      <input id="width" type="number" name="width" value={width} onChange={e => setWidth(Number(e.target.value))} />
    </form>
  );
};
