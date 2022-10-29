import axios from "axios"
import { Dispatch } from "redux"
import { ITodosAction, todosActionTypes } from "../../Types/todo"


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch:Dispatch<ITodosAction>) => {
    // передаем в диспатч экшн fetchUsers, который лоадинг сделает тру и появится какая нибудь крутилка или надпись о загрузке
    try {
      dispatch({type: todosActionTypes.FETCH_TODOS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit} 
      });
      setTimeout(() => {
        dispatch({type: todosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
      }, 500);
      
    } catch (e) {
      dispatch({type: todosActionTypes.FETCH_TODOS_ERROR, payload: 'Error!'})
    }
  }
}


// для смены страницы
export function setTodoPage(page: number) : ITodosAction {
  return {type: todosActionTypes.SET_TODO_PAGE, payload: page}
}

