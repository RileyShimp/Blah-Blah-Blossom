import "./App.css";
import React from 'react';
import NewWord from "./components/NewWord.js";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <div className="App">
          <NewWord />
          <SimpleBottomNavigation />
        </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;

