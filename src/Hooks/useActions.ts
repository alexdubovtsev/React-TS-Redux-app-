import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as UsersActionsCreators from '../Store/Action-creators/users'


export const useActions = () => {
  const dispatch = useDispatch();
  // Связываем action-creator с дистпачем (вызовем только экшкреатор и он сам прокинется в дистпатч)
  return bindActionCreators(UsersActionsCreators, dispatch);
}