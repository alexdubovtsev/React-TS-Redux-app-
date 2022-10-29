import axios from "axios"
import { Dispatch } from "redux"
import { IUsersAction, usersActionTypes } from "../../Types/user"

export const fetchUsers = () => {
  return async (dispatch:Dispatch<IUsersAction>) => {
    // передаем в диспатч экшн fetchUsers, который лоадинг сделает тру и появится какая нибудь крутилка или надпись о загрузке
    try {
      dispatch({type: usersActionTypes.FETCH_USERS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {
        dispatch({type: usersActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
      }, 500);
      
    } catch (e) {
      dispatch({type: usersActionTypes.FETCH_USERS_ERROR, payload: 'Error!'})
    }
  }
}



