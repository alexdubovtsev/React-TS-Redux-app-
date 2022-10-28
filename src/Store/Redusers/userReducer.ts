// взаимодействие со списком пользователей
import { IUserState } from "../../Types/user";

const defaultState: IUserState = {
  users: [], // список пользователей
  loading: false, // флаг - идет загрузка или нет
  error: null // поле, которое будет содержать сообщение об ошибке (null если нет ошибки)
};

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// тк в action.payload может находиться любой тип, для каждого action создадим интрефейс
enum usersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: usersActionTypes.FETCH_USERS,
}
interface IFetchUsersSuccessAction {
  type: usersActionTypes.FETCH_USERS_SUCCESS,
  payload?: any[], // users array
}
interface IFetchUsersErrorAction {
  type: usersActionTypes.FETCH_USERS_ERROR,
  payload?: string, // error message
}

// объединяем все action в 1 тип. В зависимости от кейса будет отрабатывать тот или иной action + будут учитываться типы
type IUsersAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;

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


