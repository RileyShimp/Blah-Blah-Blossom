import "./App.css";
import React from 'react';
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import FlashCards from "./pages/FlashCards";

function App(value) {
  return (
    <React.Fragment>
      < FlashCards />
      <SimpleBottomNavigation />
    </React.Fragment>
  );
}

export default App;

