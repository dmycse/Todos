import { useTodosState } from "../data";

import { TodoItem } from "./todo_item";
import { TodoSummary } from "./todo_summary";
import { NewTodo } from "./new_todo";
import { SheetsStack } from "../ui";
import { Paper, Stack, Typography } from "@mui/material";


export let TodoList = () => {

  let {state} = useTodosState();

  let todosList = {
    'All': state.todos,
    'Active': state.todos.filter(todo => !todo.completed),
    'Completed': state.todos.filter(todo => todo.completed)
   };


  if (state.todos.length === 0) {
    return (
      <>
        <Paper 
          elevation={10} 
          sx={{
            paddingTop: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column', 
            border: '1px solid #ccc', 
            textAlign: 'center',
            boxShadow: '0 1px 1px rgba(0,0,0,0.15) ',
          }}
        >
          <NewTodo />
          <Typography variant="h6" 
            sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              flexGrow: 1,
              fontFamily: 'Inter', 
              fontSize: '24px', 
              fontWeight: '100',
              borderTop: '1px solid #ccc'
              }}
            >
              No todos. Add a new todo to get started.
          </Typography>
          <TodoSummary />
        </Paper>
        <SheetsStack />
      </>
    );
  };

  return (
    <>
      <Paper 
        elevation={3} 
        sx={{ 
          flexGrow: 1, 
          border: '1px solid #ccc',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto'  
        }}
      >
        <NewTodo />
        <Stack sx={{ flexGrow: 1, overflow: 'auto', borderTop: '1px solid #ccc'}}>
          {todosList[state.view]?.length === 0 && (
            <Typography 
              variant="h6" 
              sx={{
                padding: '1rem', 
                fontFamily: 'Inter', 
                fontSize: '24px', 
                fontWeight: '100',
                textAlign: 'center'
              }}
            >
              {`No ${state.view} todos`}
            </Typography>
          )}
          {todosList[state.view]?.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </Stack>
        <TodoSummary />
      </Paper>
      <SheetsStack />
    </>
  );
};