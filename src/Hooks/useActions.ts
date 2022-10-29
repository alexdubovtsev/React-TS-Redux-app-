import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import ActionsCreators from '../Store/Action-creators'


export const useActions = () => {
  const dispatch = useDispatch();
  // Связываем action-creator с дистпачем (вызовем только экшкреатор и он сам прокинется в дистпатч)
  return bindActionCreators(ActionsCreators, dispatch);
}