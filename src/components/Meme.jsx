
import { useState, useEffect } from "react"; 
import memesData from "../memesData"; 

export default function Meme() {
  const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage:"http://i.imgflip.com/1bij.jpg",
  })

const [allMemes, setallMemes] = useState(memesData)
useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data => setallMemes(data.data.memes))
},[])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
    ...prevMeme, randomImage:url
    }));
  }
  function handleChange(event){
const {name,value } = event.target
setMeme(prevMeme => ({
...prevMeme, 
[name]: value
}))
  }

  return (
    <>
      <div className="form">
        <div className="inputs">
          <input 
          className="in1"
          type="text"
          placeholder="Top name" 
          name = "topText"
          value = {meme.topText}
          onChange={handleChange}
            />
          <input
           className="in2"
           type="text" 
           placeholder="Bottom name"
           name = "bottomText"
           value = {meme.bottomText}
           onChange = {handleChange}
            />
        </div>
        <button onClick={getMemeImage} className="button">Get a new Meme</button>
        <div  className="meme">
        <h2 className="meme--text top">{meme.topText}</h2> 
      <img src={meme.randomImage} className="meme--image"/>
      <h2 className="meme--text bottom">{meme.bottomText}</h2> 
      
      </div>
      </div>
      
    </>
  );
}
