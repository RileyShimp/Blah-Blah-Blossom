import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DashBoard from '../components/DashBoard';

export default function FlashCards() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <div className="App">
          <DashBoard />
        </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
