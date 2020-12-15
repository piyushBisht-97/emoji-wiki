import React,{useState} from 'react';
import "./styles.css";


var emojiDictionary ={
  
  "🍑":"Peach",
  "🍎":"Apple",
  "🥭":"Mango",
  "🍉":"Watermelon",
  "🍍":"Pineapple",
  "🍇":"Grapes",
  "🥝":"Kiwi",
  "🍌":"Banana"

}
const emojis = Object.keys(emojiDictionary)
function App() {
const [name ,setName] = useState("......LOADING")


function inputChangeHandler(e){
 const userInput = e.target.value
 var name = emojiDictionary[userInput]

 if(name===undefined){
  name = "No word in the dictionary"
}
 setName(name)
 
}
function whichEmoji(emoji){
var name = emojiDictionary[emoji]
setName(name)

}


  return (
    <div className="App">
      
     <h2>Emoji Detector</h2>
    
    
     <input onChange={inputChangeHandler}  placeholder={"Lets check which fruit you like the most"}
        style={{
          padding: "1em",
          minWidth: "80%"}}   />
     <h3>{name}</h3>
    
     {emojis.map((emoji)=>{
       return <span onClick={()=>whichEmoji(emoji)} style ={{fontSize:"2rem",cursor:"pointer",padding:"0.5rem"}} key={emoji}>{emoji}</span>
     })}
  
    
    </div>
  );
}

export default App;
