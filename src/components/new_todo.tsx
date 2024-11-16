import { KeyboardEventHandler, MouseEventHandler, useRef } from "react";
import { ACTION_TYPE, useTodosState } from "../data";

import { Box, Button, Input } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export let NewTodo = () => {

  let {state, dispatch} = useTodosState();

  let inputRef = useRef<HTMLInputElement>(null);

  let addNewTodo: MouseEventHandler & KeyboardEventHandler = () => {
    if (inputRef.current!.value !== '') {
      dispatch({type: ACTION_TYPE.ADD_TODO, payload: {title: (inputRef.current?.value as string).trim()}});
      inputRef.current!.value = '';
    } 
    return;
  };


  return (
    <Box
      component='header'
      sx={{
        paddingTop: 1, 
        paddingBottom: 1, 
        flexGrow: 0, 
        display: 'flex', 
        alignItems: 'center'
      }}
    >
      <Button 
        type='button'
        variant="text"
        onClick={addNewTodo}
        sx={{padding: '0px'}}
      >
        <KeyboardArrowDownIcon sx={{width: '40px', height:'40px', color: '#ccc'}} />
      </Button>
      <Input 
        type="text" 
        placeholder="What needs to be done?"
        disableUnderline
        inputProps={{style: {fontFamily: 'Inter', fontSize: '20px', fontWeight: '100', fontStyle: 'italic'}}} 
        sx={{ flexBasis: '50%'}}  
        inputRef={inputRef}
        onKeyDown={e => e.key === 'Enter' && addNewTodo(e)}
      />
    </Box>
  );
};