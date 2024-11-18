import { cleanup, render, screen } from "@testing-library/react";
import { TodoItem } from "../components/todo_item";
import { initialState } from "../data";

describe('TodoItem component', () => {

  afterEach(cleanup);

  let store = initialState.todos;
  let state = {...store[0]}

  it('TodoItem should render 3 components', () => {
    render(<TodoItem {...state} />);

    let checkbox = screen.getByRole('checkbox');
    let input = screen.getByRole('textbox');
    let deleteButton = screen.getByRole('button');

    expect(checkbox).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
  
});