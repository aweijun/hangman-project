import { Button, Flex, Heading, Input} from '@chakra-ui/react'
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
    <Flex 
    flexDir={"column"} 
    padding={50}
    margin={30} 
    justifyContent={"space-evenly"} 
    alignItems={"center"}
    minW = {"60vw"}
    minH = {"50vh"}
    maxH={"100vh"}>
      <Heading>Hangman the Game</Heading>
      <Input 
        maxWidth={'50vw'}
        minW={'60vw'}
        placeholder='Guess Word' 
        onChange={handleInputWord}/>
      <Input 
        maxWidth={'50vw'}
        minW={'60vw'}
        placeholder='Hint'
        onChange={handleInputWord}/>
      <Button 
        onClick={() => submitWord()}
        minWidth={'30vw'}
        maxWidth={'50vw'}
        alignSelf="center"
        >
        Start
      </Button>
      <IncorrectInput isVisible={isErrorVisible}/>
    </Flex>
  )
}

export default StartGameScreen