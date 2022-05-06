import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import ShuffleIcon from '@mui/icons-material/Shuffle';


export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);

  return (
    <div class='navBar'>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Flash Cards" icon={<ShuffleIcon />} />
          <BottomNavigationAction label="Play" icon={<SportsEsportsIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}