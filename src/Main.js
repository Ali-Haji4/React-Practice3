import React from "react";
import memesData from "./memes.Data";

export default function Main() {

    let [url, newUrl] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        let chosenMeme = memesArray[randomNumber].url;
        newUrl(chosenMeme);
   
    }


    return (<div className="MainContainer">

        <div className="input"> 
            <input className="textBox" type="text"></input>
            <input className="textBox" type="text"></input>
        </div>

        <div className="displayMeme">
            <button onClick={getMemeImage} className="memeButton">Get a New Meme Image </button>
        </div>

        <div className="memeContainer">
            <img className="memePicture" src={url}></img>
        </div>

    </div>)
}