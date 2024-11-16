import { ChangeEvent } from "react";
import { Stack, Checkbox, Input } from "@mui/material";
import { CheckBoxDoneIcon, CheckBoxIcon } from "../ui";
import { ACTION_TYPE, useTodosState } from "../data";

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
          textDecoration: completed ? 'line-through' : 'none'
        }}
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({type: ACTION_TYPE.UPDATE_TODO, payload: {id, title: e.target.value}});
        }}
      />
    </Stack>
  );
};