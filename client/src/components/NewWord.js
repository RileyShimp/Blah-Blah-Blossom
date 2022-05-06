import React from "react";
import { useState } from "react";
import Axios from "axios";

function NewWord() {
  const [displayImage, setDisplayImage] = useState([]);

  const newWord = () => {
    Axios.get("http://localhost:3001/words").then((response) => {
      setDisplayImage(response.data);
    });
  };

  return (
    <div className="NewWordContainer" onClick={newWord}>
      <button onClick={newWord}>New Words</button>
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
