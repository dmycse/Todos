import { cleanup, render, screen } from "@testing-library/react";
import { TodoList } from "../components/todo_list";
import { initialState } from "../data";

describe('TodoList component', () => {

  afterEach(cleanup);

  it('TodoList should render successfully', () => {
    const { baseElement } = render(<TodoList />);
    expect(baseElement).toBeTruthy();
  });
 
  it('TodoList should render initial array of 3 TodoItem', () => {
    render(<TodoList />);

    initialState.todos.forEach(todo => {
      expect(screen.getByDisplayValue(todo.title)).toBeInTheDocument();
    });
  });

  it('TodoList snapshot', () => {
    const { baseElement } = render(<TodoList />);
    expect(baseElement).toMatchSnapshot();
  });

});