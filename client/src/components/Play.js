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
      setWords(response.data);
      console.log(response.data);
    });
  };
  
  return (
    <div>
      <Button variant="contained" onClick={newGame}>Play</Button>
      <h3>Can you find the banana? </h3>
      <ImageList sx={{ width: 396, height: 365 }} cols={2} rowHeight={164}>
          <ImageListItem>
            <img
              src={require(`../assets/img/${words[1].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[1].word}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require(`../assets/img/${words[2].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[2].word}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require(`../assets/img/${words[3].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[3].word}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require(`../assets/img/${words[4].img}.JPG?w=164&h=164&fit=crop&auto=format`)}
              alt={words[4].word}
              loading="lazy"
            />
          </ImageListItem>
      </ImageList>
    </div>
  );
}
