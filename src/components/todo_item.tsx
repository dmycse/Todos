import { ChangeEvent } from "react";
import { Stack, Checkbox, Input, Button } from "@mui/material";
import { CheckBoxDoneIcon, CheckBoxIcon } from "../ui";
import { ACTION_TYPE, useTodosState } from "../data";
import DeleteIcon from '@mui/icons-material/Delete';

type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
};

export let TodoItem = ({ id, title, completed }: TodoItemProps) => {

  let {state, dispatch} = useTodosState();

  return (
    <Stack 
      direction='row' 
      sx={{
        padding: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: 1, 
        border: '0.5px solid #ccc',
      }}>
      <Checkbox
        checked={completed}
        onChange={() => dispatch({type: ACTION_TYPE.TOGGLE_TODO, payload: {id}})}
        icon={<CheckBoxIcon />}
        checkedIcon={<CheckBoxDoneIcon />}
        inputProps={{ 'aria-label': 'controlled' }}
        data-testid="checkbox"
      />
      <Input 
        type="text"
        fullWidth
        disableUnderline
        disabled={completed}
        sx={{ 
          fontSize: '20px', 
          fontFamily: 'Inter', 
          fontWeight: '200', 
          textDecoration: completed ? 'line-through' : 'none',
        }}
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({type: ACTION_TYPE.UPDATE_TODO, payload: {id, title: e.target.value}});
        }}
      />
      <Button>
        <DeleteIcon
          sx={{color: '#000', opacity: '0.2', '&:hover': {opacity: '0.6'}}} 
          onClick={() => dispatch({type: ACTION_TYPE.REMOVE_TODO, payload: {id}})}/>
      </Button>
    </Stack>
  );
};