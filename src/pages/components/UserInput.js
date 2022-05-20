import { Button } from '@chakra-ui/react'
import React from 'react'

function UserInput(props) {

  const letter = props.letter
  const word = props.word.split("")
  
  const guesses = props.guesses
  const setGuesses = props.setGuesses

  const handleInput = () => {
    console.log(word)
    if (word.includes(letter)) {
      console.log("correct")
      setGuesses(guesses.push(letter))
    }
  }

  return (
    <Button value = {letter.toUpperCase()} margin={'2px'} onClick={handleInput}>
      {letter}
    </Button>
  )
}

export default UserInput