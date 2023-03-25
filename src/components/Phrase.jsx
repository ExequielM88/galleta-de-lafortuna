

const Phrase = ({phraseRandom})  => {

    
  return (
    <div className="Phrase">
      <div className="Phrase1">
        <i className='bx bxs-quote-alt-left bx-flip-vertical' ></i>
        <p className="Parrafo">{phraseRandom.phrase}</p>
        <i className='bx bxs-quote-alt-right'></i>
      </div>
      <div className="Autor">
        <p>Autor: {phraseRandom.author}</p>
      </div>
    </div >
    
  )
}

export default Phrase