import { Button } from "@mui/material";
import { ACTION_TYPE, VIEW_TYPE, useTodosState } from "../data";

type ButtonSummaryProps = {
  viewType: VIEW_TYPE;
  actionType: ACTION_TYPE;
  disabled?: boolean;
  children: React.ReactNode;
};

export let ButtonSummary = ({viewType, actionType, disabled, children}: ButtonSummaryProps) => {

  let {state, dispatch} = useTodosState();

  return (
    <Button 
      variant="text"
      disabled={disabled}
      sx={{
        fontFamily: 'Inter', 
        fontSize: '14px', 
        fontWeight: '100',
        color: '#5e5e5e',
        textTransform: 'none',
        border: state.view === viewType ? '1px solid #ccc' : '1px solid transparent',
      }}
      onClick={() => dispatch({type: actionType})}
    >
        {children}
    </Button>
  );
};