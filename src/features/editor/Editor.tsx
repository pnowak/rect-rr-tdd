import React, { BaseSyntheticEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import { createRect } from './actions';
import styled from 'styled-components';

const StyledEditor = styled.div`
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  width: 35%;
`;

const StyledInput = styled.input`
  padding: 1px;
  margin: 0 0 1rem .5rem;
`;

export const Editor = (): ReactElement => {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [borderRadius, setBorderRadius] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const setToDefaultStyle = () => {
    setWidth(100);
    setHeight(100);
    setBorderRadius(0);
    setBackgroundColor('#000000');
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    dispatch(createRect({width, height, borderRadius, backgroundColor, id: nanoid()}));
    setToDefaultStyle();
  };

  return (
    <StyledEditor>
      <form id="editorForm" onSubmit={handleSubmit}>
        <label htmlFor="width">Width</label>
        <StyledInput
          id="width"
          type="number"
          name="width"
          value={width}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setWidth(Number((e.target as HTMLInputElement).value))
          }
        />
        <label htmlFor="height">Height</label>
        <StyledInput
          id="height"
          type="number"
          name="height"
          value={height}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setHeight(Number((e.target as HTMLInputElement).value))
          }
        />
        <label htmlFor="borderRadius">BorderRadius</label>
        <StyledInput
          id="borderRadius"
          type="range"
          name="borderRadius"
          value={borderRadius}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setBorderRadius(Number((e.target as HTMLInputElement).value))
          }
        />
        <label htmlFor="backgroundColor">BackgroundColor</label>
        <StyledInput
          id="backgroundColor"
          type="color"
          name="backgroundColor"
          value={backgroundColor}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            setBackgroundColor((e.target as HTMLInputElement).value)
          }
        />
        <StyledInput type="submit" value="Create rect" />
      </form>
      <div id="output" style={{height, width, borderRadius, backgroundColor}}></div>
    </StyledEditor>
  );
};
