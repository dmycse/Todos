import { ReactNode } from 'react';
import { render, renderHook } from '@testing-library/react';
import { initialState, TodosContext, TodosProvider, useTodosState } from '../data';

let state = initialState

let dispatch = jest.fn();

let wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

describe('Context function tests', () => {
  
  it('context should render successfully', () => {
    let { baseElement } = render(
      wrapper({
        children: <div>Test</div>
      })
    );
    expect(baseElement).toBeTruthy();
  });

  it('useTodosState should return state and dispatch', () => {
    render(
      wrapper({
        children: <div>Test</div>
      })
    );
    const { result } = renderHook(() => useTodosState());
    expect(result.current).toBeTruthy();
  });

  it('context should the state and dispatch function', () => {
    render(
      <TodosProvider>
        <div>Test</div>
      </TodosProvider>);
    const { result } = renderHook(() => useTodosState(), { wrapper });

    expect(result.current.state.todos.length).toBe(3);
    expect(result.current).toEqual({ state, dispatch });
  });
});