import { ACTION_TYPE, initialState, reducer } from "../data";

describe('Reducer function tests', () => {
  
  it('should toggle the props complete of todo when TOGGLE_TODO action is dispatched', () => {
    let action = {
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: { id: 1 }
    };

    let updatedState = reducer(initialState, action);

    expect(updatedState).toEqual({
        todos: initialState.todos.map(todo =>
          todo.id === action.payload?.id ? { ...todo, completed: !todo.completed } : todo
        ),
        view: initialState.view,
      });

    });

    it('should remove todo when REMOVE_TODO action is dispatched', () => {
      let action = {
        type: ACTION_TYPE.REMOVE_TODO,
        payload: { id: 1 }
      };
  
      let updatedState = reducer(initialState, action);
  
      expect(updatedState).toEqual({
          todos: initialState.todos.filter(todo => todo.id !== action.payload?.id),
          view: initialState.view,
        });
      });

  });