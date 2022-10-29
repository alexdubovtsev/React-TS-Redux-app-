// инициализируем стор приложения
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from './Redusers/userReducer';
//import { todoReducer } from './Redusers/todoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  //todo: todoReducer,
})

// Дефолтный useSelector с типами не дружит, поэтому делаем свой хук и получаем тип редюсера
export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk)); // reducer + middleware (в нашем случае 1 middleware для асинхронных экшнов - thunk)

