import { Button, color, Flex, Grid, GridItem, Heading, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AlertDuplicate from './components/AlertDuplicate'
import EndGameModal from './components/EndGameModal'
import HangManDisplay from './components/HangManDisplay'


function GameScreen() {
  
  useEffect(() => endGame())

  const location = useLocation();
  console.log(location.state)
  const word = location.state["word"].toUpperCase();
  const hint = location.state["hint"].toUpperCase();

  const [count, setCount] = useState(0) //This is the number of tries
  const [guesses, setGuesses] = useState([]) //This is the list of the given keyboard
  const correctLetters = word.split("")

  const {isOpen: isOpenDuplicateError, onOpen: onOpenDuplicatedError, onClose: onCloseDuplicatedError} = useDisclosure()
  const [isOpenEndGameModal, setEndGameModal] = useState(false)


  const LETTERS = "abcdefghijklmnopqrstuvwxyz".toUpperCase()

  const popupDelay = () => {
    onOpenDuplicatedError()
    setTimeout(() => onCloseDuplicatedError(), 1000)
  }
  
  const handleInput = (e) => {
    const letter = e.target.value
    console.log(letter)
    console.log(guesses)

    if (guesses.includes(letter)) {
      console.log("This is already included")
      popupDelay()
      return 
    }

    if (!correctLetters.includes(letter)) {
      console.log("s")
      setCount(count + 1)
    }
    setGuesses([...guesses, letter])
  }

  const setButtonColor = (letter) => {
    if (!guesses.includes(letter)) {
      return 'whiteAlpha'
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
      setEndGameModal(true)
    } else {
      if (displayWord().join("") == word) {
        console.log("You win")
        setEndGameModal(true)
      }
    }
  }

  return (
    <VStack
    >
      <Heading>
        HangMan
      </Heading>
    <Text>
      Number of tries left : {count}  
    </Text>
    <HangManDisplay count = {count}/>
    <Heading>
      {displayWord()}
    </Heading>
    <Text>
      {hint}
    </Text>
    <Grid templateColumns='repeat(6, 1fr)' gap={2}>
      {LETTERS.split("").map(letter => (
        <GridItem>
          <Button 
            maxW={"6vh"}
            minW={"5vh"}
            maxH={"6vh"}
            minH={"5vh"}
            value = {letter.toUpperCase()} 
            onClick={handleInput} 
            color = {"whiteAlpha"}
            colorScheme={setButtonColor(letter)}>
            {letter}
          </Button>
        </GridItem>
      ))}
    </Grid>
        <AlertDuplicate isVisible={isOpenDuplicateError}/>
        <EndGameModal isVisible={isOpenEndGameModal} closeModal = {setEndGameModal} word={word} count = {count} success = {count < 7}/>
    </VStack>
  )

}

export default GameScreen