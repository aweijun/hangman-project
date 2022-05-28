import { Button, Flex, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IncorrectInput from './components/IncorrectInput'

function StartGameScreen() {
  const [word, setWord] = useState("")
  const [hint, setHint] = useState("")
  const [isErrorVisible, setErrorVisible] = useState(false)

  const regex = /^[A-Z\s]+$/gi;

  let navigate = useNavigate()

  const popupDelay = () => {
    setErrorVisible(true)
    setTimeout(() => setErrorVisible(false), 1000)
  }
  
  const handleInputWord = (e) => {
    setWord(e.target.value)
  }

  const handleInputHint = (e) => (
    setHint(e.target.value)
  )

  const submitWord = () => {
    if (regex.test(word)) {
      console.log(word)
      navigate("/game", {state: {word: word, hint:hint}})
    } else {
      popupDelay()
    }
  }

  return (
    <Flex flexDir={"column"} padding={10} justifyContent={"space-evenly"} h={"100vh"}>
      <div>Hangman The Game</div>
      <Textarea onChange={handleInputWord}>{word}</Textarea>
      <Textarea onChange={handleInputHint}>{hint}</Textarea>
      <Button onClick={() => submitWord()}>Start</Button>
      <IncorrectInput isVisible={isErrorVisible}/>
    </Flex>
  )
}

export default StartGameScreen