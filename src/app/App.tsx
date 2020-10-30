import React, { ReactElement } from 'react';
import { Editor } from '../features/editor/Editor';
import { Gallery } from '../features/gallery/Gallery';
import styled from 'styled-components';

const StyledMainDiv = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
`;

export const App = (): ReactElement => {
  return (
    <StyledMainDiv>
      <Editor />
      <Gallery />
    </StyledMainDiv>
  );
};