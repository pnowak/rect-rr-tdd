export type Rect = {
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string,
    id: string
};

export type State = {
    rects: Rect[]
}

export type ReducerAction = { type: 'CREATE_RECT'; payload: {rect: Rect} };