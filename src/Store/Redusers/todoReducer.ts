import { ITodosAction, ITodoState, todosActionTypes } from "../../Types/todo";

const defaultState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const FETCH_TODO = "FETCH_TODO";

export const todoReducer = (
  state = defaultState,
  action: ITodosAction
): ITodoState => {
  switch (action.type) {
    case todosActionTypes.FETCH_TODOS:
      return {...state, loading: true};

    case todosActionTypes.FETCH_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload};

    case todosActionTypes.FETCH_TODOS_ERROR:
      return {...state, loading: false, error: action.payload};

    case todosActionTypes.SET_TODO_PAGE:
      return {...state, page :action.payload};

    default:
      return state;
  }
};
