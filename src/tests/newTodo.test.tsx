import { cleanup, render, screen } from "@testing-library/react";
import { NewTodo } from "../components/new_todo";

describe('NewTodo component', () => {

  afterEach(cleanup);

  it('NewTodo should render successfully', () => {
    render(<NewTodo />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});