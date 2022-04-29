import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {

  const [displayImage, setDisplayImage] = useState([]);

  const newWord = () =>{
    Axios.get('http://localhost:3001/words').then((response)=>{
      setDisplayImage(response.data)
    })
  };

  return (
    <div className="App">
            <button onClick={newWord}>New Word</button>
            {displayImage.map((val,key) => {
        return <div className='wordDisplayed'>
          <div>
            <h3>Word: {val.word}</h3>
          </div>
          </div>
      })}
    </div>
  );
}

export default App;
