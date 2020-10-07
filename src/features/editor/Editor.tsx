import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Editor = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [borderRadius, setBorderRadius] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  return (
    <div>
      <form id="editor">
        <label htmlFor="width">Width</label>
        <input
          id="width"
          type="number"
          name="width"
          value={width}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setWidth(Number((e.target as HTMLInputElement).value))
          }
        />
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="number"
          name="height"
          value={height}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setHeight(Number((e.target as HTMLInputElement).value))
          }
        />
        <label htmlFor="borderRadius">BorderRadius</label>
        <input
          id="borderRadius"
          type="range"
          name="borderRadius"
          value={borderRadius}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setBorderRadius(Number((e.target as HTMLInputElement).value))
          }
        />
        <label htmlFor="backgroundColor">BackgroundColor</label>
        <input
          id="backgroundColor"
          type="color"
          name="backgroundColor"
          value={backgroundColor}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setBackgroundColor((e.target as HTMLInputElement).value)
          }
        />
      </form>
      <div id="output"></div>
    </div>
  );
};
