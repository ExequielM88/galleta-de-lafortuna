import Phrase1 from "../utils/phrase.json";
import getRandonPhrase from "../utils/getRandonPhrase";




const button = ({setPhraseRandom,setimgRandom}) => {

    const handleChnagePhrase = () => {
        setPhraseRandom(getRandonPhrase(Phrase1))
        setimgRandom(getRandonPhrase([1,2,3,4]))
    }
    
    return (
       <div>
           <button onClick={handleChnagePhrase} className = "Bgit utton">Probar mi suerte!!</button>
       </div>
    )
   

}

export default button