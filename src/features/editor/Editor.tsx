import React, { BaseSyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import { createRect } from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Editor = () => {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [borderRadius, setBorderRadius] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    dispatch(createRect({width, height, borderRadius, backgroundColor, id: nanoid()}));
  }

  return (
    <div>
      <form id="editorForm" onSubmit={handleSubmit}>
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
        <input type="button" value="Create rect" />
      </form>
      <div id="output" style={{height, width, borderRadius, backgroundColor}}></div>
    </div>
  );
};
