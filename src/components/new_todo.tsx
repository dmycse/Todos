import { KeyboardEventHandler, MouseEventHandler, useRef } from "react";
import { ACTION_TYPE, useTodosState } from "../data";

import { Box, Button, Input } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export let NewTodo = () => {

  let {state, dispatch} = useTodosState();

  let inputRef = useRef<HTMLInputElement>(null);

  let addNewTodo: MouseEventHandler & KeyboardEventHandler = () => {
    if (inputRef.current!.value !== '') {
      dispatch({type: ACTION_TYPE.ADD_TODO, payload: {title: (inputRef.current?.value as string).trim()}});
      inputRef.current!.value = "";
    } 
    return;
  };

  console.log('state NewTodo', state);

  return (
    <Box
      sx={{padding: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1}}
    >

      <Input 
        type="text" 
        placeholder="Add todo" 
        sx={{flexBasis: '50%', fornFamily: 'Inter', fontSize: '18px'}}  
        inputRef={inputRef}
        onKeyDown={e => e.key === 'Enter' && addNewTodo(e)}
      />

      <Button 
        type='button'
        variant="contained"
        onClick={addNewTodo}
      >
        <AddIcon sx={{width: '20px', height:'20px'}} />
      </Button>

    </Box>
  );
};