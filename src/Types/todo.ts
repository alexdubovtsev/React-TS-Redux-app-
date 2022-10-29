export interface ITodoState {
  todos: any[],
  loading: boolean,
  error: null | string,
  page: number,
  limit: number,
}

export enum todosActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE" // action для изменения текущей страницы
}


interface IFetchTodosAction {
  type: todosActionTypes.FETCH_TODOS,
}

interface IFetchTodosSuccessAction {
  type: todosActionTypes.FETCH_TODOS_SUCCESS,
  payload: any[],
}

interface IFetchTodosErrorAction {
  type: todosActionTypes.FETCH_TODOS_ERROR,
  payload: string,
}

interface ISetTodosPageAction {
  type: todosActionTypes.SET_TODO_PAGE,
  payload: number,
}

export type ITodosAction = IFetchTodosAction | IFetchTodosSuccessAction | IFetchTodosErrorAction | ISetTodosPageAction;

