import Phrase1 from "./utils/phrase.json";
import Button from "./components/Button"
import Phrase from "./components/Phrase"
import getRandonPhrase from "./utils/getRandonPhrase"
import { useState } from "react";
import './App.css'

const imgs = [1,2,3,4]

function App() {
  
  const [phraseRandom, setPhraseRandom] = useState(getRandonPhrase(Phrase1))

  const [imgRandom, setimgRandom] = useState(getRandonPhrase(imgs))
  
  const appStyle = {
      backgroundImage: `url("/background/fondo${imgRandom}.jpg")`

  }
  
  return (
    <div style = {appStyle} className="App">
      <div className="Container">
          <h2>GALLETAS DE LA FORTUNA</h2>
          < Phrase phraseRandom= {phraseRandom}/>
          < Button  
            setPhraseRandom = {setPhraseRandom} 
            setimgRandom = {setimgRandom}
          />
      </div>
    </div>
  )
}

export default App
