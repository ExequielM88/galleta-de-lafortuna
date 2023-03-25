

const getRandonPhrase = (array) => {
    const indexRandom = Math.floor(Math.random() * array.length)
    return array[indexRandom]
    


  }


export default  getRandonPhrase