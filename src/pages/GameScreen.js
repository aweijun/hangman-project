import { Button, color, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import UserInput from './components/UserInput'
import WordDisplay from './components/WordDisplay'

function GameScreen() {
  
  useEffect(() => endGame())
  
  const [count, setCount] = useState(0) //This is the number of tries
  const [guesses, setGuesses] = useState([]) //This is the list of the given keyboard
  const [word, setWord] = useState("HELLO")
  const correctLetters = word.split("")

  const LETTERS = "abcdefghjklmnopqrstuvwxyz".toUpperCase()

  const handleInput = (e) => {
    const letter = e.target.value
    console.log(letter)
    console.log(guesses)

    if (guesses.includes(letter)) {
      console.log("This is already included")
      return 
    }

    if (!correctLetters.includes(letter)) {
      console.log("s")
      setCount(count + 1)
    }
    setGuesses([...guesses, letter])
    endGame()
  }

  const setButtonColor = (letter) => {
    if (!guesses.includes(letter)) {
      return "grey"
    } else {
      if (correctLetters.includes(letter)) {
        return "green"
      } else {
        return "red"
      }

    }
  }

  const displayWord = () => word.split("").map(letter => (guesses.includes(letter) ? letter : " _ "))

  const endGame = () => {
    console.log(displayWord().join(""))
    console.log(word)
    if (count > 6) {
      console.log("You dead")
    } else {
      if (displayWord().join("") == word) {
        console.log("You win")
      }
    }
  }
  return (
    <VStack>
    <Heading>
      GameScreen
    </Heading>
    <Text>
      "Number of tries left " + {count}  
    </Text>
    <Heading>
      {displayWord()}
    </Heading>
    <Flex flexWrap={'wrap'} padding={5}>
      {LETTERS.split("").map(letter => (
        <Button value = {letter.toUpperCase()} margin={'2px'} onClick={handleInput} color={setButtonColor(letter)}>
          {letter}
        </Button>
      ))}
    </Flex>
    </VStack>
  )
}

export default GameScreen