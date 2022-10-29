import { ITodoState } from "../../Types/todo";


const defaultState: ITodoState = {
  todos: [],
};

export const FETCH_TODO = "FETCH_TODO";

// export const todoReducer = (state = defaultState, action: IUsersAction): ITodoState => { 
//   switch (action.type) {
//     case FETCH_TODO: 
//     return { todos: [] }; // return { ...state, todos: state.todos + action.payload };

//     default:
//       return state;
//   }
// };