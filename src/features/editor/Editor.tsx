import React from "react";

type EditorProps = {
  width: number
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Editor = ({ width }: EditorProps) => (
  <form id="editor">
    <label htmlFor="width">Width</label>
    <input id="width" type="number" name="width" value={width} readOnly />
  </form>
);
