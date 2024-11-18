export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const enum VIEW_TYPE {
  VIEW_ALL = 'All',
  VIEW_ACTIVE = 'Active',
  VIEW_COMPLETED = 'Completed'
};

export type TodosState = {
  todos: Todo[];
  view: `${VIEW_TYPE}`;
};

export const enum ACTION_TYPE {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CLEAR_COMPLETED,
  VIEW_ALL_TODO,
  VIEW_ACTIVE_TODO,
  VIEW_COMPLETED_TODO
};

type ReducerAction = {
  type: ACTION_TYPE;
  payload?: Partial<Todo>;
};


export function reducer(state: TodosState, { type, payload }: ReducerAction): TodosState {

  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {id: Date.now(), title: payload?.title as string, completed: false}],
      };
    case ACTION_TYPE.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo=>
          todo.id === payload?.id ? { ...todo, title: payload.title as string } : todo
        ),
      };
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload?.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload?.id),
      };
    case ACTION_TYPE.CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
        view: VIEW_TYPE.VIEW_ALL,
      };
      case ACTION_TYPE.VIEW_ALL_TODO:
      return {
        ...state,
        view: VIEW_TYPE.VIEW_ALL,
      };
      case ACTION_TYPE.VIEW_ACTIVE_TODO:
      return {
        ...state,
        view: VIEW_TYPE.VIEW_ACTIVE,
      };
      case ACTION_TYPE.VIEW_COMPLETED_TODO:
      return {
        ...state,
        view: VIEW_TYPE.VIEW_COMPLETED,
      };
    default:
      return state;
  } 
}
