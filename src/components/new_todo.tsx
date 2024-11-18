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
      component='div'
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
        sx={{
          padding: '0px',
          '& :hover': {color: '#753c3c'}
        }}
      >
        <KeyboardArrowDownIcon sx={{width: '40px', height:'40px', color: '#ccc'}} />
      </Button>
      <Input 
        type="text" 
        placeholder="What needs to be done?"
        disableUnderline
        inputProps={{style: {fontFamily: 'Inter', fontSize: '20px', fontWeight: '100', fontStyle: 'italic'}}} 
        sx={{ flexBasis: '100%'}}  
        inputRef={inputRef}
        onKeyDown={e => e.key === 'Enter' && addNewTodo(e)}
        onFocus={() => dispatch({type: ACTION_TYPE.VIEW_ALL_TODO})}
        data-testid="input"
      />
    </Box>
  );
};