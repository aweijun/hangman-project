import { Button, Flex, Heading, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function GameScreen() {
  const [count, setCount] = useState(0) //This is the number of tries
  const [guesses, setGuesses] = useState([]) //This is the list of the given keyboard
  const [word, setWord] = useState(["Hello"])

  const LETTERS = "abcdefghjklmnopqrstuvwxyz"

  let handleInput = (e) => {
    console.log(e.target.value)
    setCount(count + 1)
  }

  return (
    <VStack>
    <Heading>
      GameScreen
    </Heading>
    //Display
    <Flex>
    {LETTERS.split("").map(letter => (
      <Button value={letter} onClick={handleInput}>
        {letter}
      </Button>
    ))}
    </Flex>
    </VStack>
  )
}

export default GameScreen