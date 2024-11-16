import { Box } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export let CheckBoxIcon = () => {
  return (
    <Box 
      sx={{
        width: '20px', 
        height: '20px',
        padding: '2px 0px 0px 2px', 
        borderRadius: '50%', 
        border: '1px solid #ccc'
      }}
    />
  )
};

export let CheckBoxDoneIcon = () => {
  return (
    <Box 
      sx={{
        width: '20px', 
        height: '20px',
        padding: '2px 0px 0px 2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: '50%', 
        border: '1px solid #949494'
      }}
    >
      <DoneIcon sx={{color: '#52a34b'}}/>
    </Box>
  )
}; 