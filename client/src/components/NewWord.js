import React from "react";
import { useState } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import { cardActionAreaClasses } from "@mui/material";

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
    <img alt="word" src={require(`../assets/img/${displayImage.img}.JPG`)} />
      {/* {displayImage.map((val, key) => {
        return (
          <div className="wordDisplayed">
            <h2> {val.word} </h2>
            <img alt="word" src={require(`../assets/img/${val.img}.JPG`)} />
          </div>
        );
      })} */}
    </div>
  );
}

export default NewWord;
