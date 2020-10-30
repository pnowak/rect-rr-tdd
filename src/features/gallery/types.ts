import { EditorState, Rect } from '../editor/types';

export const selectRects = (state: EditorState): Rect[] => state.rects

export const REMOVE_RECT = 'REMOVE_RECT';

export type GalleryAction = { type: typeof REMOVE_RECT; payload: {rect: Rect} };