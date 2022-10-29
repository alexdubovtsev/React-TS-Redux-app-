import * as UsersActionsCreators from './users';
import * as TodosActionsCreators from './todo';

// объединяем все экшны в 1 объект
export default {
  ...TodosActionsCreators,
  ...UsersActionsCreators,
}