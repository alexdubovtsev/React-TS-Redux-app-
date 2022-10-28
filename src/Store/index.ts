// инициализируем стор приложения
import {createStore} from 'redux';
import {thunk} from 'redux-thunk';


export const store = ({}, applyMiddleware(thunk)); // reducer + middleware (в нашем случае 1 middleware для асинхронных экшнов - thunk)

