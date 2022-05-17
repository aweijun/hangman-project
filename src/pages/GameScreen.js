import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function GameScreen() {
  const [count, setCount] = useState(0)
  const [guesses, setGuesses] = useState([])
  const [word, setWord] = useState(["Hello"])

  let handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>GameScreen
    <Button key={'a'} value={'b'} onClick={handleInput}>
      Hi
    </Button>
    </div>
  )
}

export default GameScreen