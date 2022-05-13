import React from 'react'
import { useState } from "react";
import Axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Play() {

  const [words, setWords] = useState([{img:"car", word:"Car"}]);

  const newGame = () => {
    Axios.get("http://localhost:3001/play").then((response) => {
      setWords(response.data);
      console.log(response.data);
    });
  };

  
  return (
//     <div>
//       <button onClick={newGame}>Play</button>
//       <h1>Game Loading...</h1>
//             {words.map((val, key) => {
//         return (
//           <div className="wordDisplayed">
//             <h2> {val.word} </h2>
//             <img alt="word" src={require(`../assets/img/${val.img}.JPG`)} />
//           </div>
//         );
//       })}
//     </div>
//   )
// }
    <div>
    <button onClick={newGame}>Play</button>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {words.map((val,key) => (
        <ImageListItem key={val.word}>
          <img
            src={require(`../assets/img/${val.img}.JPG?w=164&h=164&fit=crop&auto=format`)}
            srcSet={require(`../assets/img/${val.img}.JPG?w=164&h=164&fit=crop&auto=format`)}
            alt={val.word}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}
