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
    <div className="NewWordContainer">
      <button onClick={newWord}>New Words</button>
      {displayImage.map((val, key) => {
        return (
          <div className="wordDisplayed">
            <div>
              <h4> Word: {val.img} </h4>
              <img alt="word" src={require(`../assets/img/${val.img}.JPG`)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewWord;
