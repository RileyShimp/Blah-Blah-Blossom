import React from 'react'
import { useState } from "react";
import Axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

export default function Play() {

  const [words, setWords] = useState([
    {
      "id": 4,
      "img": "dog",
      "audio": null,
      "word": "Dog"
    },
    {
      "id": 3,
      "img": "car",
      "audio": null,
      "word": "Car"
    },
    {
      "id": 2,
      "img": "banana",
      "audio": null,
      "word": "Banana"
    },
    {
      "id": 1,
      "img": "apple",
      "audio": null,
      "word": "Apple"
    },
    {
      "id": 5,
      "img": "bottle",
      "audio": null,
      "word": "Bottle"
    }
]);

  const newGame = () => {
    Axios.get("http://localhost:3001/play").then((response) => {
      setWords([response.data[0],response.data[1],response.data[2],response.data[3]]);
      // setWords([...response.data.slice(0,4)])
    });
  };

  const isMatching = (word) =>{
    randomWord === word ? alert("Correct!") : alert('Wrong!')
  }

  const randomWord = words[Math.floor(Math.random() * 4)].word;

  return (
    <div className='game'>
      <Button variant="contained" onClick={newGame}>Play</Button>
      <h3>Can you find the {randomWord}? </h3>
      <ImageList sx={{ width: 580, height: 550 }} cols={2} rowHeight={164}>
          <ImageListItem>
            <img
              onClick={() => isMatching(`${words[0].word}`)}
              src={require(`../assets/img/${words[0].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[0].word}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              onClick={() => isMatching(`${words[1].word}`)}
              src={require(`../assets/img/${words[1].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[1].word}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              onClick={() => isMatching(`${words[2].word}`)}
              src={require(`../assets/img/${words[2].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[2].word}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              onClick={() => isMatching(`${words[3].word}`)}
              src={require(`../assets/img/${words[3].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[3].word}
              loading="lazy"
            />
          </ImageListItem>
      </ImageList>
    </div>
  );
}
