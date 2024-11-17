import { Box, Button, Stack } from "@mui/material";
import { ACTION_TYPE, useTodosState, VIEW_TYPE } from "../data";
import { ButtonSummary } from "../ui/button_summary";

export let TodoSummary = () => {

  let {state, dispatch} = useTodosState();
  
  let totalTodos = state.todos.length;
  let completedTodosCount = state.todos.filter(todo => todo.completed).length;
  let activeTodosCount = totalTodos - completedTodosCount;

  let handleClearCompleted = () => {
    dispatch({type: ACTION_TYPE.CLEAR_COMPLETED});
  };

  return (
    <Stack
      component='footer' 
      direction='row' 
      sx={{
        padding: '10px',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTop: '1px solid #ccc'
      }}>
      <Box component='span' sx={{fontFamily: 'Inter', fontSize: '14px', fontWeight: '100'}}>
        {activeTodosCount} items left
      </Box>
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <ButtonSummary 
          viewType={VIEW_TYPE.VIEW_ALL} 
          actionType={ACTION_TYPE.VIEW_ALL_TODO}
          disabled={totalTodos === 0}
        >
          {VIEW_TYPE.VIEW_ALL}
        </ButtonSummary>
        <ButtonSummary 
          viewType={VIEW_TYPE.VIEW_ACTIVE} 
          actionType={ACTION_TYPE.VIEW_ACTIVE_TODO}
          disabled={totalTodos === 0 || activeTodosCount === 0}
        >
          {VIEW_TYPE.VIEW_ACTIVE}
        </ButtonSummary>
        <ButtonSummary 
          viewType={VIEW_TYPE.VIEW_COMPLETED} 
          actionType={ACTION_TYPE.VIEW_COMPLETED_TODO}
          disabled={totalTodos === 0 || completedTodosCount === 0}
        >
          {VIEW_TYPE.VIEW_COMPLETED}
        </ButtonSummary>
      </Stack>
      <Button 
        variant="text"
        disabled={totalTodos === 0 || completedTodosCount === 0}
        onClick={handleClearCompleted}
        sx={{
          fontFamily: 'Inter', 
          fontSize: '14px', 
          fontWeight: '100',
          color: '#5e5e5e',
          textTransform: 'none',
        }}
      >
        Clear {VIEW_TYPE.VIEW_COMPLETED}
      </Button>
    </Stack>
  );
};