import React, { BaseSyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRects } from './types';
import { removeRect } from './actions'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Gallery = () => {
  const rects = useSelector(selectRects);
  const dispatch = useDispatch();

  const handleClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const rectObject = JSON.parse(event.target.dataset.rect);

    dispatch(removeRect(rectObject));
  }

  return (
    <div id="gallery">
      <ol>
        {rects.map(rect => (
          <li key={rect.id}>
            <button type="button" data-rect={JSON.stringify(rect)} onClick={handleClick}>X</button>
            <div style={rect}></div>
          </li>
        ))}
      </ol>
    </div>
  );
};