export type Rect = {
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string,
    id: string
};

export type EditorState = {
    rects: Rect[]
};

export const CREATE_RECT = 'CREATE_RECT';

export type EditorAction = { type: typeof CREATE_RECT; payload: {rect: Rect} };