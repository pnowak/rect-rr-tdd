import React from 'react';
import { Editor } from '../features/editor/Editor';
import { Gallery } from '../features/gallery/Gallery';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  return (
    <div>
      <Editor />
      <Gallery />
    </div>
  );
};