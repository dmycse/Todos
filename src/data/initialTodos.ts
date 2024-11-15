import { TodosState } from "./reducer";

export let initialState: TodosState = {
  todos: [
    { id: 1, title: 'Test task', completed: false },
    { id: 2, title: 'Create code', completed: false },   
    { id: 3, title: 'Testing code', completed: true },
  ]
};