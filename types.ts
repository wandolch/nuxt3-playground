
const enum TodoViewStyle {
    LIST = 'LIST',
    COLUMN = 'COLUMN',
}

type ITodoSettings = {
    view: TodoViewStyle
}

type ILazyInfo = {
    info: string
}

type ITodoItem = {
    id: number,
    text: string,
    color: string,
    marked: boolean,
}

export type { ITodoItem, ITodoSettings, ILazyInfo };