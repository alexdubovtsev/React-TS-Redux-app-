// С помощью типа редюсера делаем хук, который будет работать с типизированным useSelector (будет работать с типами)

import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { rootState } from "../Store";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;