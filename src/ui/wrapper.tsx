import { ReactNode } from "react";
import { Container } from "@mui/material";

type CustomContainerProps = {
  children: ReactNode;
};


export let Wrapper = ({ children }: CustomContainerProps) => {

  return (
    <Container 
      maxWidth='sm' 
      sx={{
        margin: '0 auto',
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      {children}
    </Container>
  );
};