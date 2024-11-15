export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
};

export const enum ACTION_TYPE {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
}

type ReducerAction = {
  type: ACTION_TYPE;
  payload: Partial<Todo>;
};


export function reducer(state: TodoState, action: ReducerAction): TodoState {

  let { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {id: Date.now(), title: payload.title as string, completed: false}],
      };
    case ACTION_TYPE.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo=>
          todo.id === payload.id ? { ...todo, title: payload.title as string } : todo
        ),
      };
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id),
      };
    default:
      return state;
  } 
}
