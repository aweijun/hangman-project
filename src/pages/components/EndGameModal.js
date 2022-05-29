import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function EndGameModal(props) {
  console.log(props)

  const state = props.isVisible
  const word = props.word
  const count = props.count
  const isSuccess = props.success

  const route = useNavigate()

  const endGameDisplay = () => {
    if (isSuccess) {
      return <ModalContent>
        <ModalHeader>Congratulations</ModalHeader>
        <ModalBody>
          The word was {word}.
          <br/>
          You made {count} mistakes!
        </ModalBody>
      <ModalFooter justifyContent={"space-evenly"}>
        <Button onClick={() => route("../")}>
          New Game
        </Button>
      </ModalFooter>
    </ModalContent>
    } else {
      return <ModalContent>
      <ModalHeader>Too Bad</ModalHeader>
      <ModalBody>
        The word was {word}.
        <br/>
        You made {count} mistakes!
      </ModalBody>
    <ModalFooter justifyContent={"space-evenly"}>
      <Button onClick={() => route("../")}>
        New Game
      </Button>
    </ModalFooter>
    </ModalContent>
    }
  }

  return (
    <Modal isOpen={state} size="md" isCentered>
      <ModalOverlay
        backdropFilter='blur(10px) hue-rotate(90deg)'
      >
        {endGameDisplay()}
      </ModalOverlay>
    </Modal>
  )
}

export default EndGameModal