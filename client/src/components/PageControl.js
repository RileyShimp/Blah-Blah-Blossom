import React from 'react';
import NewWord from "./NewWord";
import Home from "./Home"
import Play from "./Play"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function PageControl(props) {
  let display;
  if (props.pageShowing === "FlashCards"){
    display = <NewWord/>
  } else if (props.pageShowing === "Play"){
    display = <Play/>
  } else {
    display = <Home/>
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <div className="App">
          {display}
        </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}