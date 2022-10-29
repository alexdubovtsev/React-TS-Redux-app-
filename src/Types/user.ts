export interface IUserState {
  users: any[], // массив любого типа
  loading: boolean,
  error: null | string,
}

// тк в action.payload может находиться любой тип, для каждого action создадим интрефейс
export enum usersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: usersActionTypes.FETCH_USERS,
}
interface IFetchUsersSuccessAction {
  type: usersActionTypes.FETCH_USERS_SUCCESS,
  payload: any[], // users array
}
interface IFetchUsersErrorAction {
  type: usersActionTypes.FETCH_USERS_ERROR,
  payload: string, // error message
}

// объединяем все action в 1 тип. В зависимости от кейса будет отрабатывать тот или иной action + будут учитываться типы
export type IUsersAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;

