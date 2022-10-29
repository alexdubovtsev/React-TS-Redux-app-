// взаимодействие со списком пользователей
import { IUserState, IUsersAction, usersActionTypes } from "../../Types/user";


const defaultState: IUserState = {
  users: [], // список пользователей
  loading: false, // флаг - идет загрузка или нет
  error: null // поле, которое будет содержать сообщение об ошибке (null если нет ошибки)
};

export const userReducer = (state = defaultState, action: IUsersAction): IUserState => { // тк редюсер всегда должен возвращать состояние, укажем IUserState
  switch (action.type) {
    case usersActionTypes.FETCH_USERS: // будем вызывать экшн с данным типом, когда будем подгружать пользователей с сервера
    return { loading: true, error: null, users: [] };
    
    case usersActionTypes.FETCH_USERS_SUCCESS: // будем вызывать экшн с данным типом, когда успешно подгурзили пользователей с сервера
    return { loading: false, error: null, users: action.payload };

    case usersActionTypes.FETCH_USERS_ERROR: // будем вызывать экшн с данным типом, когда при подгрузке пользователей с сервера - ошибка
    return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};


