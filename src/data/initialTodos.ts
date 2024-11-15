import { TodoState } from "./reducer";

export let initialState: TodoState = {
  todos: [
    { id: 1, title: 'Test task', completed: false },
    { id: 2, title: 'Crean code', completed: false },   
    { id: 3, title: 'Testing code', completed: true },
  ]
};