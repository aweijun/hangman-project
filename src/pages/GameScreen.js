import { Button, color, Flex, Grid, GridItem, Heading, Input, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AlertDuplicate from './components/AlertDuplicate'
import EndGameModal from './components/EndGameModal'
import HangManDisplay from './components/HangManDisplay'


function GameScreen() {
  
  
  
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
  

  
  useEffect(() => endGame(), [count])


  const popupDelay = () => {
    onOpenDuplicatedError()
    setTimeout(() => onCloseDuplicatedError(), 1000)
  }
  
  const handleInput = (e) => {
    const letter = e.target.value
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


  const displayLetter = (e) => {
    if (guesses.includes(e)) {
      return e
    } else {
      if (e == ' ') {
        return " - "
      } else {
        return " _ "
      }
    }
  }

  const displayWord = () => word.split("").map(letter => displayLetter(letter))

  const endGame = () => {
    console.log("end" + displayWord())
    console.log("endjoin" + displayWord().join(""))
    if (count > 5) {
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
      Number of Mistakes : {count}  
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
            colorScheme={setButtonColor(letter)}j>
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