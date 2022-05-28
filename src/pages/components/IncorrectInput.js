import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React from 'react'

function IncorrectInput(props) {

  const isVisible = props.isVisible
  
  return isVisible? (
    <Alert status='error'>
      <AlertIcon/>
      <Box>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Word should only contain alphabets and whitespaces.
        </AlertDescription>
      </Box>
    </Alert>
  ) : (<></>)
}

export default IncorrectInput