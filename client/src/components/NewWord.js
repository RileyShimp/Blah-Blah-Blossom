import React from "react";
import { useState } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';

function NewWord() {
  const [displayImage, setDisplayImage] = useState({img:"car", word:"Car"});

  const newWord = () => {
    Axios.get("http://localhost:3001/words").then((response) => {
      setDisplayImage(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="NewWordContainer">
      <Button variant="contained" onClick={newWord}>New Word</Button>
    <h1>{displayImage.word}</h1>
    <div className="flashCardImage">
      <img alt="word" src={require(`../assets/img/${displayImage.img}.JPG`)}/>
    </div>
    </div>
  );
}

export default NewWord;
