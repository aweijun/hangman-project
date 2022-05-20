import React, { useEffect } from 'react'

function WordDisplay(props) {
  const guesses = Object.keys(props.guesses)
  const word = props.word

  function displayLetter(letter) {
    console.log(typeof(guesses))
    console.log(guesses)
    if (guesses.includes(letter)) {
      return letter
    } else {
      return "_"
    }
  }
  
  return (
    <div>
      {word.split("").map(x => (displayLetter(x)))}
    </div>
  )
}


export default WordDisplay