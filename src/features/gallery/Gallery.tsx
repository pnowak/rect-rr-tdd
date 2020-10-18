import React from 'react';
import { useSelector } from 'react-redux';
import { selectRects } from './types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Gallery = () => {
  const rects = useSelector(selectRects);

  return (
    <div id="gallery">
      <ol>
        {rects.map(rect => (
          <li key={rect.id}>
            <div style={rect}></div>
          </li>
        ))}
      </ol>
    </div>
  );
};