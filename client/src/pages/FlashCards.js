import React from 'react';
import NewWord from "../components/NewWord.js";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FlashCards() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <div className="App">
          <NewWord />
        </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}