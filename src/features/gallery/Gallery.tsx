import React, { BaseSyntheticEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRects } from './types';
import { removeRect } from './actions'
import styled from 'styled-components';

const StyledGallery = styled.div`
  width: 65%;
`;

const StyledList = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const StyledListItem = styled.li`
  padding: 5px;
  margin: 5px;
`;

export const Gallery = (): ReactElement => {
  const rects = useSelector(selectRects);
  const dispatch = useDispatch();

  const handleClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const rectObject = JSON.parse(event.target.dataset.rect);

    dispatch(removeRect(rectObject));
  };

  return (
    <StyledGallery id="gallery">
      <StyledList>
        {rects.map(rect => (
          <StyledListItem key={rect.id}>
            <button type="button" data-rect={JSON.stringify(rect)} onClick={handleClick}>X</button>
            <div style={rect}></div>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledGallery>
  );
};