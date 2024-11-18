import { createContext, ReactNode, useContext, useReducer } from 'react';
import { reducer, TodosState } from './reducer';
import { initialState } from './initialTodos';

export const TodosContext = createContext<{
    state: TodosState, 
    dispatch: React.Dispatch<any>
  }>({
    state: initialState, 
    dispatch: () => null
  });

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosState = () => useContext(TodosContext);