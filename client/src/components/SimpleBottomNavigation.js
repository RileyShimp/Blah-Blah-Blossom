import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PageControl from './PageControl';


export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState("Home");

  return (
    <div className='navBar'>
      <PageControl pageShowing={value} />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            display: 'flex',
            flexDirection: 'row', 
            position: 'fixed',
            bottom: '0px',
            width: '100%'
            }}>
          <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />} 
          onClick={()=>{setValue("Home")}} />
          <BottomNavigationAction 
          label="Flash Cards" 
          icon={<ShuffleIcon />} 
          onClick={()=>{setValue("FlashCards")}} />
          <BottomNavigationAction 
          label="Play" 
          icon={<SportsEsportsIcon />} 
          onClick={()=>{setValue("Play")}} />
        </BottomNavigation>
    </div>
  );
}