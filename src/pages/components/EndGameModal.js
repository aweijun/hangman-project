import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function EndGameModal(props) {
  console.log(props)

  const state = props.isVisible
  const word = props.word
  const count = props.count

  const route = useNavigate()

  return (
    <Modal isOpen={state} size="md" isCentered>
      <ModalOverlay
        backdropFilter='blur(10px) hue-rotate(90deg)'
      >
        <ModalContent>
          <ModalHeader>Congrats</ModalHeader>
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
      </ModalOverlay>
    </Modal>
  )
}

export default EndGameModal