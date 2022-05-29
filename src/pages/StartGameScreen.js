import { Button, Flex, Grid, GridItem, Heading, Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IncorrectInput from './components/IncorrectInput'
import GenerateWords from '../GenerateWords'

function StartGameScreen() {
  const [word, setWord] = useState("")
  const [hint, setHint] = useState("")
  const [isErrorVisible, setErrorVisible] = useState(false)

  const regex = /^[A-Z]+$/gi;

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
      navigate("/game", {state: {word: word.trim(), hint:hint}})
    } else {
      popupDelay()
    }
  }

  const submitTopic = (arr) => () => {
    navigate("/game", {state: {word: arr.word, hint:arr.hint}})
  }

  return (
    <Flex 
    flexDir={"column"} 
    padding={50}
    margin={30} 
    justifyContent={"space-evenly"} 
    alignItems={"center"}
    minW = {"60vw"}
    minH = {"70vh"}
    maxH={"100vh"}>
      <Heading
        fontSize={'4xl'}
      >Hangman the Game</Heading>
      <Input 
        maxH={'7vh'}
        minH={'5vh'}
        maxWidth={'50vw'}
        minW={'60vw'}
        placeholder='Input your word here' 
        onChange={handleInputWord}/>
      <Input 
        maxH={'7vh'}
        minH={'5vh'}
        maxWidth={'50vw'}
        minW={'60vw'}
        placeholder='Hint'
        onChange={handleInputHint}/>
      <Button 
        onClick={() => submitWord()}
        maxH={'7vh'}
        minH={'5vh'}
        minWidth={'30vw'}
        maxWidth={'50vw'}
        alignSelf="center"
        fontSize={['xl',]}
        >
        Start
      </Button>
      <IncorrectInput isVisible={isErrorVisible}/>
      <Heading>
        Choose a Topic
      </Heading>
      <Grid templateColumns='repeat(2, 1fr)' gap={10}> 
        {GenerateWords.map((item) => 
          <GridItem>
            <Button
              maxH={'5vh'}
              minH={'5vh'}
              minWidth={'30vw'}
              maxWidth={'50vw'}
              onClick={submitTopic(item.Questions[Math.floor((Math.random()*item.Questions.length))])}
              fontSize = {['xs','sm']}
            >
              {item.Subject}
            </Button>
          </GridItem>
        )}
      </Grid>
    </Flex>
  )
}

export default StartGameScreen