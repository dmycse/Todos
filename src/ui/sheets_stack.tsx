import { Box } from "@mui/material";

/**
 * A visual representation of a stack of sheets of paper.
 * 
 * Consists of two white boxes with a slight shadow and a light gray border at the bottom.
 * The first box is slightly larger and has a 5px margin on the left.
 * The second box is slightly smaller and has a 10px margin on the left.
 * 
 * This component is used to visually separate different pages of todos list.
 */
export let SheetsStack = () => {

  return (
    <>
      <Box
        sx={{
          marginLeft: '5px',
          boxShadow: 1,
          width: '98%',
          height: '5px',
          bgcolor: '#fff',
          borderBottom: '1px solid #ccc'  
        }}
      />
      <Box
        sx={{
          marginLeft: '10px',
          boxShadow: 1,
          width: '96%',
          height: '5px',
          bgcolor: '#fff',
          borderBottom: '1px solid #ccc'  
        }}
      />
    </>
  );
};