import { Stack, Typography } from "@mui/material";
import { TodoList } from "./todo_list";

export let TodoApp = () => {

  return (
    <Stack
      component={'main'}
      spacing={2} 
      sx={{
        padding: '1rem', 
        width: '100%', 
        height: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        background: '#faf7f7'
    }}>
      <Typography 
        variant="h1" 
        sx={{fontFamily: 'Inter', fontWeight: '100', color: '#753c3c', opacity: '0.2'}}
      >
        todos
      </Typography>
      <Stack sx={{width: '100%', height: '100%', overflow: 'auto' }}>
        <TodoList />
      </Stack>
    </Stack>
  );
};